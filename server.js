require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());
app.use(cors());

// Supabase Initialization (Lazy initialization to catch missing envs dynamically on Vercel)
function getSupabase() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;

    if (!supabaseUrl || !supabaseKey || supabaseUrl.includes("COLAR_AQUI") || supabaseUrl.includes("fake-url")) {
        throw new Error("Vercel_Env_Missing: As variáveis SUPABASE_URL e SUPABASE_KEY não foram configuradas corretamente na Vercel.");
    }

    return createClient(supabaseUrl, supabaseKey);
}

// 1. API - Receiving Tracks (Envia para o Supabase)
app.post('/api/track-quiz', async (req, res) => {
    // Melhoria 1E: desestrutura novos campos de UTM e device
    const {
        step, session_id, timestamp, is_bot,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        referrer, device_type, screen_width
    } = req.body;

    // Bot Detection Shield
    const userAgent = req.headers['user-agent'] || '';
    const botPatterns = /bot|crawl|spider|slurp|facebookexternalhit|snippet|headlesschrome|puppeteer/i;
    const isServerSideBot = botPatterns.test(userAgent);

    if (is_bot === true || isServerSideBot) {
        console.log(`🤖 Bot bloqueado no Passo ${step}. User-Agent: ${userAgent}`);
        return res.json({ success: true, inserted: false, reason: "Bot detected" });
    }

    const ts = timestamp || new Date().toISOString();

    const vercelCountry = req.headers['x-vercel-ip-country'] || 'Desconhecido';
    const final_session_id = session_id.includes('__') ? session_id : session_id + '__' + vercelCountry;

    try {
        const supabase = getSupabase();

        // Verifica duplicidade (lógica existente — não alterada)
        const { data: existingRow, error: selectErr } = await supabase
            .from('quiz_tracking')
            .select('id')
            .eq('session_id', final_session_id)
            .eq('step', step);

        if (selectErr) throw selectErr;

        if (!existingRow || existingRow.length === 0) {
            // Melhoria 1E: insere com todos os campos novos
            const { error: insertErr } = await supabase
                .from('quiz_tracking')
                .insert([{
                    session_id:   final_session_id,
                    step,
                    created_at:   ts,
                    utm_source:   utm_source   || null,
                    utm_medium:   utm_medium   || null,
                    utm_campaign: utm_campaign || null,
                    utm_content:  utm_content  || null,
                    utm_term:     utm_term     || null,
                    referrer:     referrer     || null,
                    device_type:  device_type  || null,
                    screen_width: screen_width || null,
                }]);

            if (insertErr) throw insertErr;
            res.json({ success: true, inserted: true });
        } else {
            // Already tracked
            res.json({ success: true, inserted: false, reason: "Already tracked" });
        }
    } catch (err) {
        console.error("Erro na Inserção Supabase:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
});

// 2. API - Get Dashboard Stats do Supabase
// Melhoria 3A: filtragem por device e campanha + breakdown no response
app.get('/api/stats', async (req, res) => {
    const filter       = req.query.filter       || 'all'; // '24h', '7d', '30d', 'all'
    const filterDevice = req.query.device       || 'all'; // 'mobile' | 'desktop' | 'tablet' | 'all'
    const filterUtm    = req.query.utm_campaign || 'all';

    let dateLimit = new Date();
    if (filter === '24h') dateLimit.setDate(dateLimit.getDate() - 1);
    else if (filter === '7d') dateLimit.setDate(dateLimit.getDate() - 7);
    else if (filter === '30d') dateLimit.setDate(dateLimit.getDate() - 30);

    try {
        const supabase = getSupabase();

        // Seleciona campos novos além dos existentes
        let query = supabase
            .from('quiz_tracking')
            .select('session_id, step, created_at, device_type, utm_campaign, utm_source');

        if (filter !== 'all') {
            query = query.gte('created_at', dateLimit.toISOString());
        }
        if (filterDevice !== 'all') {
            query = query.eq('device_type', filterDevice);
        }
        if (filterUtm !== 'all') {
            query = query.eq('utm_campaign', filterUtm);
        }

        const { data, error } = await query;
        if (error) throw error;

        let sessionsData = {};
        let countryCounts = {};

        // Melhoria 3A: breakdown por device e campanha
        const deviceBreakdown = { mobile: 0, desktop: 0, tablet: 0, unknown: 0 };
        const campaignBreakdown = {};

        data.forEach(row => {
            if (!sessionsData[row.session_id]) {
                sessionsData[row.session_id] = {};

                // Extrai o país se existir o sufixo __PAIS inserido no track-quiz
                if (row.session_id.includes('__')) {
                    const country = row.session_id.split('__')[1];
                    if (country && country !== 'Desconhecido') {
                        countryCounts[country] = (countryCounts[country] || 0) + 1;
                    }
                }
            }
            if (!sessionsData[row.session_id][row.step]) {
                sessionsData[row.session_id][row.step] = new Date(row.created_at).getTime();
            }

            // Contagem de devices
            const d = row.device_type || 'unknown';
            if (deviceBreakdown[d] !== undefined) deviceBreakdown[d]++;
            else deviceBreakdown['unknown']++;

            // Contagem por campanha
            if (row.utm_campaign) {
                campaignBreakdown[row.utm_campaign] = (campaignBreakdown[row.utm_campaign] || 0) + 1;
            }
        });

        let topCountry = "-";
        let maxCount = 0;
        for (const [country, count] of Object.entries(countryCounts)) {
            if (count > maxCount) {
                maxCount = count;
                topCountry = country;
            }
        }

        let stepStats = {};

        Object.keys(sessionsData).forEach(sid => {
            const userSteps = Object.keys(sessionsData[sid]).map(Number).sort((a, b) => a - b);

            for (let i = 0; i < userSteps.length; i++) {
                const step = userSteps[i];
                if (!stepStats[step]) stepStats[step] = { count: 0, totalTime: 0, timeSamples: 0 };

                stepStats[step].count++;

                if (i < userSteps.length - 1) {
                    const nextStep = userSteps[i + 1];
                    const timeDiff = (sessionsData[sid][nextStep] - sessionsData[sid][step]) / 1000;

                    if (timeDiff > 0 && timeDiff < 3600) { // Limit to 1 hour max
                        stepStats[step].totalTime += timeDiff;
                        stepStats[step].timeSamples++;
                    }
                }
            }
        });

        const rows = Object.keys(stepStats).map(step => ({
            step: parseInt(step),
            total_acessos: stepStats[step].count,
            avg_time_sec: stepStats[step].timeSamples > 0 ? (stepStats[step].totalTime / stepStats[step].timeSamples) : 0
        })).sort((a, b) => a.step - b.step);

        // Melhoria 5D: busca total de completions no mesmo período
        let completionsQuery = supabase
            .from('quiz_completions')
            .select('session_id, utm_campaign, device_type', { count: 'exact' });

        if (filter !== 'all') {
            completionsQuery = completionsQuery.gte('completed_at', dateLimit.toISOString());
        }
        if (filterDevice !== 'all') completionsQuery = completionsQuery.eq('device_type', filterDevice);
        if (filterUtm !== 'all')    completionsQuery = completionsQuery.eq('utm_campaign', filterUtm);

        const { count: totalCompletions } = await completionsQuery;

        const totalSessions = Object.keys(sessionsData).length;
        const conversionRate = totalSessions > 0
            ? ((totalCompletions / totalSessions) * 100).toFixed(1)
            : '0.0';

        res.json({
            success:            true,
            data:               rows,
            top_country:        topCountry,
            device_breakdown:   deviceBreakdown,
            campaign_breakdown: campaignBreakdown,
            total_sessions:     totalSessions,
            total_completions:  totalCompletions || 0,
            conversion_rate:    conversionRate,
        });
    } catch (err) {
        console.error("Erro na Leitura Supabase:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
});

// 3. API - Clear All Stats
app.delete('/api/clear-stats', async (req, res) => {
    // Requer autenticação — só pode ser chamado pelo dashboard admin
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ success: false, error: 'Não autorizado' });
    }

    const [, credentials] = authHeader.split(' ');
    const decoded = Buffer.from(credentials, 'base64').toString().split(':');
    if (decoded[0] !== process.env.ADMIN_USER || decoded[1] !== process.env.ADMIN_PASS) {
        return res.status(401).json({ success: false, error: 'Credenciais inválidas' });
    }

    try {
        const supabase = getSupabase();

        // Limpa quiz_tracking
        const { error: err1 } = await supabase
            .from('quiz_tracking')
            .delete()
            .neq('session_id', '___impossible___');

        if (err1) throw err1;

        // Limpa quiz_completions (criada nas melhorias de analytics)
        const { error: err2 } = await supabase
            .from('quiz_completions')
            .delete()
            .neq('session_id', '___impossible___');

        // Não lança erro se quiz_completions ainda não existir
        if (err2 && !err2.message.includes('does not exist')) throw err2;

        res.json({
            success: true,
            message: 'Dados limpos com sucesso.',
            cleared_at: new Date().toISOString()
        });

    } catch (err) {
        console.error('Erro na limpeza:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// 4. API - Melhoria 3B: Lista campanhas únicas para filtros no dashboard
app.get('/api/campaigns', async (req, res) => {
    try {
        const supabase = getSupabase();
        const { data, error } = await supabase
            .from('quiz_tracking')
            .select('utm_campaign')
            .not('utm_campaign', 'is', null);

        if (error) throw error;

        const campaigns = [...new Set(data.map(r => r.utm_campaign).filter(Boolean))];
        res.json({ success: true, campaigns });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 5. API - Melhoria 5C: Registra sessão que completou o quiz (chegou ao checkout)
app.post('/api/complete-quiz', async (req, res) => {
    const { session_id, utm_source, utm_campaign, device_type } = req.body;
    if (!session_id) return res.status(400).json({ success: false });

    const vercelCountry = req.headers['x-vercel-ip-country'] || 'Desconhecido';
    const final_session_id = session_id.includes('__')
        ? session_id
        : session_id + '__' + vercelCountry;

    try {
        const supabase = getSupabase();
        // upsert — se já existe, não duplica
        const { error } = await supabase
            .from('quiz_completions')
            .upsert(
                [{ session_id: final_session_id, utm_source, utm_campaign, device_type }],
                { onConflict: 'session_id' }
            );

        if (error) throw error;
        res.json({ success: true });
    } catch (err) {
        console.error("Erro ao registrar completion:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// 6. Admin Security basic
const basicAuth = (req, res, next) => {
    const originalHeaders = req.headers.authorization;
    if (!originalHeaders) {
        res.setHeader('WWW-Authenticate', 'Basic realm="Mounjaro Admin"');
        return res.status(401).send('Acesso Negado');
    }
    const [type, credentials] = originalHeaders.split(' ');
    // username: LeoniosuzaM | password: Golf2007++
    const decoded = Buffer.from(credentials, 'base64').toString().split(':');
    if (decoded[0] === 'LeonisouzaM' && decoded[1] === 'Golf2007++') {
        next();
    } else {
        res.setHeader('WWW-Authenticate', 'Basic realm="Mounjaro Admin"');
        return res.status(401).send('Acesso Negado');
    }
};

// 7. Endpoints serving
app.get('/statisticas', basicAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'internal_admin', 'dashboard.html'));
});

// Avoid explicit static serving of internal_admin directory
// Serve frontend normally
app.use(express.static(__dirname, {
    index: ['index.html']
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Sistema ativo! Acesse: http://localhost:${PORT}/`);
    console.log(`📊 Dashboard de Estatísticas: http://localhost:${PORT}/statisticas`);
});

module.exports = app;
