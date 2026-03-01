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
    const { step, session_id, timestamp } = req.body;
    const ts = timestamp || new Date().toISOString();

    try {
        const supabase = getSupabase();

        // Verifica duplicidade
        const { data: existingRow, error: selectErr } = await supabase
            .from('quiz_tracking')
            .select('id')
            .eq('session_id', session_id)
            .eq('step', step);

        if (selectErr) throw selectErr;

        if (!existingRow || existingRow.length === 0) {
            // Insere no Supabase
            const { error: insertErr } = await supabase
                .from('quiz_tracking')
                .insert([
                    { session_id, step, created_at: ts }
                ]);

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
app.get('/api/stats', async (req, res) => {
    const filter = req.query.filter || 'all'; // '24h', '7d', '30d', 'all'

    let dateLimit = new Date();
    if (filter === '24h') dateLimit.setDate(dateLimit.getDate() - 1);
    else if (filter === '7d') dateLimit.setDate(dateLimit.getDate() - 7);
    else if (filter === '30d') dateLimit.setDate(dateLimit.getDate() - 30);

    try {
        const supabase = getSupabase();
        let query = supabase.from('quiz_tracking').select('session_id, step, created_at');

        if (filter !== 'all') {
            query = query.gte('created_at', dateLimit.toISOString());
        }

        const { data, error } = await query;
        if (error) throw error;

        let sessionsData = {};

        data.forEach(row => {
            if (!sessionsData[row.session_id]) sessionsData[row.session_id] = {};
            if (!sessionsData[row.session_id][row.step]) {
                sessionsData[row.session_id][row.step] = new Date(row.created_at).getTime();
            }
        });

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

        res.json({ success: true, data: rows });
    } catch (err) {
        console.error("Erro na Leitura Supabase:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
});

// 3. API - Clear All Stats
app.delete('/api/clear-stats', async (req, res) => {
    try {
        const supabase = getSupabase();
        const { error } = await supabase
            .from('quiz_tracking')
            .delete()
            .neq('session_id', 'impossible_pattern_for_deletion'); // Supabase requires filter for delete

        if (error) throw error;
        res.json({ success: true, message: "Gênio, histórico deletado com sucesso!" });
    } catch (err) {
        console.error("Erro na limpeza:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
});

// 4. Admin Security basic
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

// 4. Endpoints serving
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
