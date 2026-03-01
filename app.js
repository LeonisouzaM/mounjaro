const stepsData = [
    {
        id: "start",
        type: "welcome",
        hideProgress: true,
        image: "assets/bowl.png",
        title: "Você está lutando contra <span class='text-purple'>Barriga Estufada</span> e <span class='text-purple'>Gordura Localizada</span>?",
        subtitle: "Descubra como ativar seu metabolismo e perder até 12kg em 30 dias com a Gelatina Mounjaro!",
        buttonText: "Quero saber se funciona para mim! 🔥",
        footerText: "✓ 127.000+ mulheres • ✓ 100% Natural",
        nextStep: "intro"
    },
    {
        id: "intro",
        type: "intro",
        progress: 10,
        title: "Vamos começar sua jornada! 🚀",
        subtitle: "Responda algumas perguntas rápidas para personalizar seu plano.",
        buttonText: "Vamos lá! 💪",
        nextStep: "idade"
    },
    {
        id: "idade",
        type: "radio",
        progress: 20,
        title: "Qual a sua idade?",
        subtitle: "Selecione sua faixa etária.",
        options: [
            { id: "18-27", label: "18 - 27 anos", icon: "🌸" },
            { id: "28-39", label: "28 - 39 anos", icon: "💐" },
            { id: "40-54", label: "40 - 54 anos", icon: "🌺" },
            { id: "54+", label: "54+ anos", icon: "🌷" }
        ],
        nextStep: "areas",
        autoAdvance: true
    },
    {
        id: "areas",
        type: "checkbox",
        progress: 30,
        title: "Quais as áreas que você mais quer perder gordura?",
        subtitle: "Selecione todas que se aplicam.",
        options: [
            { id: "culotes", label: "Culotes", icon: "🦵" },
            { id: "bracos", label: "Braços", icon: "💪" },
            { id: "barriga", label: "Barriga", icon: "🎯" },
            { id: "coxas", label: "Coxas", icon: "🦵" },
            { id: "gluteos", label: "Glúteos", icon: "🍑" },
            { id: "corpo-todo", label: "Corpo Todo", icon: "✨" }
        ],
        buttonText: "Continuar",
        nextStep: "corpo"
    },
    {
        id: "corpo",
        type: "image-grid",
        progress: 40,
        title: "Como você classifica <span class='text-purple'>o seu corpo?</span>",
        subtitle: "Selecione a opção que melhor te descreve",
        options: [
            { id: "medio", label: "Médio", image: "assets/corpo_medio.png" },
            { id: "plus-size", label: "Plus Size", image: "assets/corpo_plussize.png" },
            { id: "acima-peso", label: "Acima do peso", image: "assets/corpo_acimadopeso.png" },
            { id: "sobrepeso", label: "Sobrepeso", image: "assets/corpo_sobrepeso.png" }
        ],
        nextStep: "afeta-vida",
        autoAdvance: true
    },
    {
        id: "afeta-vida",
        type: "radio",
        progress: 50,
        title: "Você, como o peso afeta sua vida?",
        subtitle: "Entender isso nos ajuda a criar seu protocolo ideal",
        options: [
            { id: "autoestima", label: "Afeta minha autoestima", description: "Me sinto insegura com meu corpo", icon: "💔" },
            { id: "saude", label: "Afeta minha saúde", description: "Sinto cansaço, dores e falta de energia", icon: "🏥" },
            { id: "relacionamentos", label: "Afeta meus relacionamentos", description: "Evito encontros e situações sociais", icon: "👥" },
            { id: "rotina", label: "Afeta minha rotina", description: "Dificuldade em fazer tarefas simples", icon: "🗓️" }
        ],
        nextStep: "nome",
        autoAdvance: true
    },
    {
        id: "nome",
        type: "text",
        progress: 60,
        title: "Qual é o seu nome?",
        subtitle: "Para personalizarmos sua experiência.",
        placeholder: "Seu primeiro nome",
        buttonText: "Continuar",
        nextStep: "explicacao"
    },
    {
        id: "explicacao",
        type: "explanation",
        progress: 65,
        title: "Ótimo, {nome}! 🎉",
        subtitle: "Sem esforço ou dietas chatas: a Gelatina Mounjaro faz o trabalho pesado por você, ativando a queima de gordura com ingredientes caseiros que você prepara em minutos.",
        image: "assets/bowl.png",
        buttonText: "Entendi! Continuar 🚀",
        nextStep: "feliz-aparencia"
    },
    {
        id: "feliz-aparencia",
        type: "radio",
        progress: 70,
        title: "Você está feliz com sua aparência atual?",
        subtitle: "Seja sincera consigo mesma",
        options: [
            { id: "nao-feliz", label: "Não estou feliz", icon: "😔" },
            { id: "poderia-melhor", label: "Poderia ser melhor", icon: "😐" },
            { id: "trabalhando", label: "Estou trabalhando nisso", icon: "💪" }
        ],
        nextStep: "impede-emagrecer",
        autoAdvance: true
    },
    {
        id: "impede-emagrecer",
        type: "checkbox-list",
        progress: 80,
        title: "O que te impede de emagrecer?",
        subtitle: "Selecione todas as barreiras que você enfrenta",
        options: [
            { id: "tempo", label: "Falta de tempo", icon: "⏰" },
            { id: "autocontrole", label: "Falta de autocontrole", icon: "🍫" },
            { id: "financeiro", label: "Questões financeiras", icon: "💰" },
            { id: "constancia", label: "Falta de constância", icon: "📉" }
        ],
        buttonText: "Continuar",
        nextStep: "objetivos"
    },
    {
        id: "objetivos",
        type: "checkbox",
        progress: 90,
        title: "O que você quer conquistar?",
        subtitle: "Selecione seus maiores objetivos",
        options: [
            { id: "energia", label: "Ter mais energia", icon: "⚡" },
            { id: "roupas", label: "Usar roupas que amo", icon: "👗" },
            { id: "autoestima", label: "Melhorar autoestima", icon: "💖" },
            { id: "saude", label: "Ter mais saúde", icon: "💪" },
            { id: "leve", label: "Me sentir mais leve", icon: "🦋" },
            { id: "elogios", label: "Receber elogios", icon: "🌟" }
        ],
        buttonText: "Continuar",
        nextStep: "peso-atual"
    },
    {
        id: "peso-atual",
        type: "number-picker",
        progress: 92,
        title: "Qual é seu peso atual?",
        subtitle: "Seja sincera para um resultado preciso",
        buttonText: "Continuar",
        unit: "kg",
        min: 45,
        max: 150,
        initial: 75,
        labels: { min: "45 kg", max: "150 kg" },
        nextStep: "altura"
    },
    {
        id: "altura",
        type: "number-picker",
        progress: 94,
        title: "Qual é sua altura?",
        subtitle: "Precisamos disso para calcular seu IMC",
        buttonText: "Continuar",
        unit: "cm",
        min: 140,
        max: 200,
        initial: 165,
        labels: { min: "140 cm", max: "200 cm" },
        nextStep: "rotina"
    },
    {
        id: "rotina",
        type: "radio",
        progress: 96,
        title: "Como é sua rotina diária?",
        subtitle: "Selecione a que mais se encaixa.",
        options: [
            { id: "trabalho-fora", label: "Trabalho fora de casa", icon: "🏢" },
            { id: "home-office", label: "Trabalho em home office", icon: "🏠" },
            { id: "casa-familia", label: "Cuido da casa/família", icon: "👨‍👩‍👧‍👦" },
            { id: "estudo", label: "Estudo", icon: "📚" }
        ],
        nextStep: "peso-desejado",
        autoAdvance: true
    },
    {
        id: "peso-desejado",
        type: "number-picker",
        progress: 98,
        title: "Qual é seu peso desejado?",
        subtitle: "Qual o peso que você sonha alcançar?",
        buttonText: "Continuar",
        unit: "kg",
        min: 40,
        max: 200,
        initial: 65,
        labels: { min: "40 kg", max: "74 kg" },
        isGoal: true,
        nextStep: "agua"
    },
    {
        id: "agua",
        type: "radio",
        progress: 99,
        title: "Quanta água você bebe por dia?",
        subtitle: "A hidratação acelera resultados.",
        options: [
            { id: "quase-nada", label: "Quase nada", icon: "🌵" },
            { id: "menos-1l", label: "Menos de 1 litro", icon: "💧" },
            { id: "1-2l", label: "1 a 2 litros", icon: "💦" },
            { id: "mais-2l", label: "Mais de 2 litros", icon: "🌊" }
        ],
        nextStep: "como-usar",
        autoAdvance: true
    },
    {
        id: "como-usar",
        type: "info-steps",
        progress: 100,
        title: "Como usar a <span class='text-purple'>Gelatina Mounjaro</span>",
        subtitle: "Simples, prático e eficaz",
        buttonText: "Sim, eu me comprometo!",
        nextStep: "resultado-analise"
    },
    {
        id: "resultado-analise",
        type: "analysis",
        progress: 100,
        title: "Resultado da sua análise, você",
        buttonText: "Continuar",
        nextStep: "corpo-sonhos"
    },
    {
        id: "corpo-sonhos",
        type: "radio",
        progress: 100,
        title: "Qual o corpo dos seus sonhos?",
        subtitle: "Escolha sua meta.",
        options: [
            { id: "forma-definida", label: "Em forma e definida", icon: "🏋️‍♀️" },
            { id: "natural-saudavel", label: "Natural e saudável", icon: "🌿" }
        ],
        nextStep: "promessa-perda",
        autoAdvance: true
    },
    {
        id: "promessa-perda",
        type: "dynamic-promise",
        progress: 100,
        buttonText: "SIM! Quero essa transformação! 🔥",
        nextStep: "historias-transformacao"
    },
    {
        id: "historias-transformacao",
        type: "historias",
        progress: 100,
        buttonText: "Ver meu protocolo personalizado",
        nextStep: "loading"
    },
    {
        id: "loading",
        type: "loading-screen",
        progress: 100,
        nextStep: "plano-gerado"
    },
    {
        id: "plano-gerado",
        type: "checkout",
        hideProgress: true
    }
];

let currentStepId = "start";
let userAnswers = {};

function getSessionId() {
    // Usando sessionStorage para que cada nova aba seja um funil zerado no teste
    let sid = sessionStorage.getItem('quiz_session_id');
    if (!sid) {
        sid = 'sess_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
        sessionStorage.setItem('quiz_session_id', sid);
    }
    return sid;
}

function trackStep(stepId) {
    const stepIndex = stepsData.findIndex(s => s.id === stepId) + 1;
    if (stepIndex <= 0) return;

    // Usando sessionStorage para não bloquear testes após limpar o painel
    let tracked = JSON.parse(sessionStorage.getItem('tracked_steps') || '[]');
    if (tracked.includes(stepIndex)) return;

    tracked.push(stepIndex);
    sessionStorage.setItem('tracked_steps', JSON.stringify(tracked));

    const sid = getSessionId();

    // Resolve problema caso você esteja abrindo o app por 2 cliques no index.html (file://)
    const apiUrl = window.location.protocol === 'file:' ? 'http://localhost:3000/api/track-quiz' : '/api/track-quiz';

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            step: stepIndex,
            session_id: sid
        })
    }).catch(e => console.error("Tracking Error:", e));
}

function initApp() {
    renderStep(currentStepId);
}

function renderStep(stepId) {
    const step = stepsData.find(s => s.id === stepId);
    if (!step) return;

    trackStep(stepId);

    const container = document.getElementById("step-container");
    container.innerHTML = "";

    // Handle Progress Bar
    const progressWrapper = document.getElementById("progress-container");
    const progressBar = document.getElementById("progress-bar");
    if (step.hideProgress) {
        progressWrapper.style.display = "none";
    } else {
        progressWrapper.style.display = "flex";
        progressBar.style.width = (step.progress || 0) + "%";
    }

    // Render Content based on type
    let contentHTML = "";

    if (step.type === "welcome") {
        contentHTML = `
            <div class="welcome-container text-center">
                <div class="bowl-card mb-4 mx-auto">
                    <img src="${step.image}" alt="Gelatina Bowl" class="bowl-image">
                </div>
                <h2 class="title mt-2" style="font-size: 1.4rem; padding: 0 0.5rem;">${step.title}</h2>
                <p class="subtitle mt-3">${step.subtitle}</p>
                <button class="btn primary-btn mt-5 w-auto" onclick="goToStep('${step.nextStep}')">${step.buttonText}</button>
                <p class="footer-text mt-4">${step.footerText}</p>
            </div>
        `;
    }
    else if (step.type === "intro") {
        contentHTML = `
            <div class="content-wrapper centered-padding">
                <h2 class="title text-center text-xl sm-text-2xl">${step.title}</h2>
                <p class="subtitle text-center mt-3">${step.subtitle}</p>
                <button class="btn primary-btn mt-5" onclick="goToStep('${step.nextStep}')">${step.buttonText}</button>
            </div>
        `;
    }
    else if (step.type === "radio") {
        contentHTML = `
            <h2 class="title text-center">${step.title}</h2>
            <p class="subtitle text-center mt-2 mb-4">${step.subtitle}</p>
            <div class="options-list">
                ${step.options.map(opt => `
                    <label class="option-row" onclick="handleRadioSelect('${step.id}', '${opt.id}', '${step.nextStep}', ${step.autoAdvance})">
                        <div class="flex-center">
                            <span class="icon">${opt.icon}</span>
                            <div class="label-wrapper">
                                <span class="label">${opt.label}</span>
                                ${opt.description ? `<span class="description">${opt.description}</span>` : ''}
                            </div>
                        </div>
                        <input type="radio" name="${step.id}" value="${opt.id}" class="radio-input">
                        <span class="custom-radio"></span>
                    </label>
                `).join('')}
            </div>
        `;
    }
    else if (step.type === "text") {
        contentHTML = `
            <h2 class="title text-center">${step.title}</h2>
            <p class="subtitle text-center mt-2 mb-4">${step.subtitle}</p>
            <div class="input-container">
                <input type="text" id="${step.id}-input" class="text-input" placeholder="${step.placeholder}">
            </div>
            <button class="btn primary-btn mt-5 w-full" onclick="handleTextSubmit('${step.id}', '${step.nextStep}')">${step.buttonText}</button>
        `;
    }
    else if (step.type === "checkbox") {
        contentHTML = `
            <h2 class="title text-center">${step.title}</h2>
            <p class="subtitle text-center mt-2 mb-4">${step.subtitle}</p>
            <div class="grid-options half">
                ${step.options.map(opt => `
                    <label class="grid-option">
                        <div class="checkbox-container">
                             <input type="checkbox" value="${opt.id}" data-step="${step.id}" class="checkbox-input" onchange="toggleCheckbox(this)">
                             <span class="custom-checkbox"></span>
                        </div>
                        <div class="icon-label-wrapper">
                             <span class="icon-top">${opt.icon}</span>
                             <span class="label-bottom">${opt.label}</span>
                        </div>
                    </label>
                `).join('')}
            </div>
            <button class="btn primary-btn mt-5 w-full" onclick="handleCheckboxSubmit('${step.id}', '${step.nextStep}')">${step.buttonText}</button>
        `;
    }
    else if (step.type === "checkbox-list") {
        contentHTML = `
            <h2 class="title text-center">${step.title}</h2>
            <p class="subtitle text-center mt-2 mb-4">${step.subtitle}</p>
            <div class="options-list">
                ${step.options.map(opt => `
                    <label class="option-row">
                        <div class="flex-center">
                            <span class="icon">${opt.icon}</span>
                            <div class="label-wrapper">
                                <span class="label">${opt.label}</span>
                                ${opt.description ? `<span class="description">${opt.description}</span>` : ''}
                            </div>
                        </div>
                        <input type="checkbox" value="${opt.id}" data-step="${step.id}" class="checkbox-input" style="display: none;">
                        <span class="custom-checkbox"></span>
                    </label>
                `).join('')}
            </div>
            <button class="btn primary-btn mt-5 w-full" onclick="handleCheckboxSubmit('${step.id}', '${step.nextStep}')">${step.buttonText}</button>
        `;
    }
    else if (step.type === "number-picker") {
        let currentVal = step.initial;
        let minLabel = step.labels ? step.labels.min : `${step.min} ${step.unit}`;
        let maxLabel = step.labels ? step.labels.max : `${step.max} ${step.unit}`;

        if (step.isGoal && userAnswers["peso-atual"]) {
            let pAtual = parseInt(userAnswers["peso-atual"]);
            maxLabel = `${pAtual - 1} kg`;
            currentVal = pAtual - 10;
            if (currentVal < step.min) currentVal = step.min;
        }

        contentHTML = `
            <h2 class="title text-center">${step.title}</h2>
            <p class="subtitle text-center mt-2 mb-4">${step.subtitle}</p>
            
            <div class="picker-container">
                <div class="picker-display">
                    <span id="picker-value" class="picker-number">${currentVal}</span>
                    <span class="picker-unit">${step.unit}</span>
                </div>
                
                <div class="picker-controls">
                    <button class="picker-btn" onclick="updatePicker(-5, ${step.min}, ${step.max}, ${step.isGoal})">-5</button>
                    <button class="picker-btn" onclick="updatePicker(-1, ${step.min}, ${step.max}, ${step.isGoal})">-</button>
                    <button class="picker-btn" onclick="updatePicker(1, ${step.min}, ${step.max}, ${step.isGoal})">+</button>
                    <button class="picker-btn" onclick="updatePicker(5, ${step.min}, ${step.max}, ${step.isGoal})">+5</button>
                </div>
                
                <div class="picker-labels">
                    <span class="picker-label-min">${minLabel}</span>
                    <span class="picker-label-max">${maxLabel}</span>
                </div>
            </div>

            ${step.isGoal ? `<div id="goal-feedback" class="goal-feedback">Meta: perder <span id="goal-diff">${parseInt(userAnswers["peso-atual"]) - currentVal}</span> kg 🎯</div>` : ''}

            <button class="btn primary-btn mt-5 w-full" onclick="handlePickerSubmit('${step.id}', '${step.nextStep}')">${step.buttonText}</button>
        `;

        window.currentPickerValue = currentVal;
    }
    else if (step.type === "image-grid") {
        contentHTML = `
            <h2 class="title text-center">${step.title}</h2>
            <p class="subtitle text-center mt-2 mb-4">${step.subtitle}</p>
            <div class="grid-options half image-only">
                ${step.options.map(opt => `
                    <div class="image-option" onclick="handleRadioSelect('${step.id}', '${opt.id}', '${step.nextStep}', ${step.autoAdvance})">
                        <img src="${opt.image}" alt="${opt.label}" class="option-bg-img">
                        <div class="overlay"></div>
                        <span class="image-label">${opt.label}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    else if (step.type === "info-steps") {
        contentHTML = `
            <h2 class="title text-center">${step.title}</h2>
            <p class="subtitle text-center mt-2 mb-4">${step.subtitle}</p>
            <div class="steps-card-list">
                <div class="step-card">
                    <div class="step-icon bg-orange">✨</div>
                    <div class="step-text">
                        <span class="step-label">Passo 1</span>
                        <span class="step-action">Prepare a gelatina</span>
                        <span class="step-desc">Siga a receita simples do app</span>
                    </div>
                </div>
                <div class="step-card">
                    <div class="step-icon bg-purple">🕒</div>
                    <div class="step-text">
                        <span class="step-label">Passo 2</span>
                        <span class="step-action">Consuma 2x ao dia</span>
                        <span class="step-desc">Uma de manhã e uma antes de dormir</span>
                    </div>
                </div>
                <div class="step-card">
                    <div class="step-icon bg-green">📅</div>
                    <div class="step-text">
                        <span class="step-label">Passo 3</span>
                        <span class="step-action">Siga por 30 dias</span>
                        <span class="step-desc">O protocolo completo para resultados</span>
                    </div>
                </div>
            </div>
            
            <div class="timeline-widget">
                <div class="timeline-item">
                    <span class="icon">☀️</span>
                    <span class="time">Manhã</span>
                    <span class="desc">Em jejum</span>
                </div>
                <div class="timeline-line"></div>
                <div class="timeline-item">
                    <span class="icon">✨</span>
                    <span class="time">Dia</span>
                    <span class="desc">Sem fome</span>
                </div>
                <div class="timeline-line"></div>
                <div class="timeline-item">
                    <span class="icon">🌙</span>
                    <span class="time">Noite</span>
                    <span class="desc">Antes de dormir</span>
                </div>
            </div>

            <button class="btn green-btn mt-5 w-full" onclick="goToStep('${step.nextStep}')">☑️ ${step.buttonText}</button>
        `;
    }
    else if (step.type === "analysis") {
        let pAtual = parseInt(userAnswers["peso-atual"]) || 75;
        let alt = parseInt(userAnswers["altura"]) || 165;
        let imcVal = (pAtual / ((alt / 100) * (alt / 100))).toFixed(1);
        let statusIMC = "Sobrepeso";
        if (imcVal < 18.5) statusIMC = "Abaixo do peso";
        else if (imcVal < 25) statusIMC = "Peso normal";
        else if (imcVal >= 30) statusIMC = "Obesidade";

        contentHTML = `
            <h2 class="title text-center">${step.title}</h2>
            <div class="imc-card mt-3">
                <div class="imc-value">${imcVal}</div>
                <div class="imc-status">Seu IMC: <span class="text-pink">${statusIMC}</span></div>
                <div class="alert-box">
                    <div class="alert-title">⚠️ Sinais de alerta identificados:</div>
                    <ul class="alert-list">
                        <li>• Metabolismo desacelerado</li>
                        <li>• Risco de acúmulo de gordura visceral</li>
                        <li>• Hormônios de saciedade desregulados</li>
                    </ul>
                </div>
            </div>
            <div class="highlight-promo">
                <span class="text-purple semi-bold">O segredo para secar:</span> não é comer menos, é ativar o GLP-1. A <span class="text-purple semi-bold">Gelatina Mounjaro</span> atua como um "interruptor" hormonal natural!
            </div>
            <div class="testimonial-card">
                <img src="assets/antes_depois.png" class="testimonial-img" alt="Antes e Depois">
                <div class="testimonial-footer">
                    <div class="testimonial-title">"Perdi 12kg em 5 semanas!"</div>
                    <div class="testimonial-author">Maria, 32 anos - São Paulo</div>
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                </div>
            </div>
            <button class="btn gradient-btn mt-5 w-full" onclick="goToStep('${step.nextStep}')">${step.buttonText}</button>
        `;
    }
    else if (step.type === "dynamic-promise") {
        let pAtual = parseInt(userAnswers["peso-atual"]) || 75;
        let pDesej = parseInt(userAnswers["peso-desejado"]) || 65;
        let diff = pAtual - pDesej;
        if (diff < 3) diff = 10;
        let minLoss = diff - 2;
        let maxLoss = diff + 1;

        let nomeUsuario = userAnswers["nome"] || "você";
        // capitalise
        nomeUsuario = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1).toLowerCase();

        contentHTML = `
            <div class="promise-container centered-padding">
                <div class="target-icon">🎯</div>
                <h2 class="title text-center text-2xl mt-4">
                    ${nomeUsuario}, você gostaria de perder entre <span class="text-pink">${minLoss} e ${maxLoss} kilos</span> em poucas semanas?
                </h2>
                <p class="subtitle text-center mt-3">
                    Baseado no seu perfil, esse resultado é totalmente alcançável com a Gelatina Mounjaro!
                </p>
                <button class="btn green-btn mt-5 w-full" onclick="goToStep('${step.nextStep}')">${step.buttonText}</button>
            </div>
        `;
    }
    else if (step.type === "historias") {
        contentHTML = `
            <div class="content-wrapper">
                <h2 class="title text-center text-xl">Histórias de Transformação</h2>
                <p class="subtitle text-center mt-2 mb-4">Veja quem já transformou o corpo com a Gelatina Mounjaro</p>
                
                <div class="historia-cards-list">
                    <div class="historia-card">
                        <img src="assets/transf_1.png" alt="Antes e Depois Giovanna" class="historia-img">
                        <div class="historia-footer">
                            <p class="historia-quote">"Bizarro... Perdi 7kg em 3 semanas!"</p>
                            <p class="historia-author">Giovanna, 34 - São Paulo</p>
                        </div>
                    </div>
                    
                    <div class="historia-card">
                        <img src="assets/transf_2.jpg" alt="Antes e Depois Sandra" class="historia-img">
                        <div class="historia-footer">
                            <p class="historia-quote">"Minha barriga sumiu! Não acredito!"</p>
                            <p class="historia-author">Sandra, 39 - Rio de Janeiro</p>
                        </div>
                    </div>
                    
                    <div class="historia-card">
                        <img src="assets/transf_3.png" alt="Antes e Depois Cláudia" class="historia-img">
                        <div class="historia-footer">
                            <p class="historia-quote">"Voltei a usar minhas roupas antigas!"</p>
                            <p class="historia-author">Cláudia, 35 - Belo Horizonte</p>
                        </div>
                    </div>
                    
                    <div class="historia-card">
                        <img src="assets/transf_4.jpg" alt="Antes e Depois Patrícia" class="historia-img">
                        <div class="historia-footer">
                            <p class="historia-quote">"Quem usa tem resultado 🥰 🙌"</p>
                            <p class="historia-author">Patrícia, 31 - Curitiba</p>
                        </div>
                    </div>
                </div>

                <div class="sticky-footer-btn mt-5">
                    <button class="btn gradient-btn w-full btn-historias" onclick="goToStep('${step.nextStep}')">${step.buttonText}</button>
                </div>
            </div>
        `;
    }
    else if (step.type === "explanation") {
        let nomeUsuario = userAnswers["nome"] || "Você";
        nomeUsuario = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1).toLowerCase();

        let dynamicTitle = step.title.replace('{nome}', nomeUsuario);

        contentHTML = `
            <div class="content-wrapper centered-padding">
                <h2 class="title text-center text-xl sm-text-2xl">${dynamicTitle}</h2>
                <p class="subtitle text-center mt-3 mb-4">${step.subtitle}</p>
                
                <div class="explanation-card mx-auto mt-4">
                    <img src="${step.image}" alt="Gelatina" class="explanation-img">
                    <div class="explanation-flow mt-3">
                        <div class="flow-item">
                            <span class="flow-icon">👤</span>
                            <span class="flow-label">${nomeUsuario}</span>
                        </div>
                        <span class="flow-arrow">→</span>
                        <div class="flow-item">
                            <span class="flow-icon">🥮</span>
                            <span class="flow-label text-purple font-bold">Gelatina</span>
                        </div>
                        <span class="flow-arrow">→</span>
                        <div class="flow-item">
                            <span class="flow-icon">✨</span>
                            <span class="flow-label">Seu objetivo</span>
                        </div>
                    </div>
                </div>

                <div class="info-box-yellow mt-4">
                    <p><span class="text-purple font-bold">Como funciona:</span> A receita caseira ativa o GLP-1, o mesmo hormônio que faz o efeito do Mounjaro, mas de forma 100% natural!</p>
                </div>

                <button class="btn gradient-btn mt-5 w-full" onclick="goToStep('${step.nextStep}')">${step.buttonText}</button>
            </div>
        `;
    }
    else if (step.type === "loading-screen") {
        contentHTML = `
            <div class="loading-container centered-padding">
                <div class="spinner-container">
                    <div class="spinner"></div>
                    <div class="spinner-icon">🔬</div>
                </div>
                <h3 id="loading-text" class="loading-title mt-4">Analisando seu metabolismo...</h3>
                <div class="loading-progress-bar-bg mt-3">
                    <div id="loading-bar-fill" class="loading-progress-bar-fill"></div>
                </div>
                <div id="loading-percentage" class="loading-percentage mt-2 text-muted">0% concluído</div>
                <p class="subtitle text-center mt-4">Aguarde enquanto preparamos tudo para você...</p>
            </div>
        `;

        let progress = 0;
        let pId = setInterval(() => {
            progress += Math.floor(Math.random() * 8) + 2;
            if (progress >= 100) {
                progress = 100;
                clearInterval(pId);
                setTimeout(() => goToStep(step.nextStep), 300);
            }

            const fill = document.getElementById("loading-bar-fill");
            const pctText = document.getElementById("loading-percentage");
            const txt = document.getElementById("loading-text");

            if (fill) fill.style.width = progress + "%";
            if (pctText) pctText.innerText = progress + "% concluído";

            if (progress > 45 && txt) txt.innerText = "Selecionando bônus exclusivos...";
            else if (progress > 85 && txt) txt.innerText = "Finalizando protocolo...";

        }, 200);
    }
    else if (step.type === "checkout") {
        let nomeUsuario = userAnswers["nome"] || "você";
        nomeUsuario = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1).toLowerCase();

        // Simulating the loss prediction
        let pAtual = parseInt(userAnswers["peso-atual"]) || 75;
        let meta1 = Math.round(pAtual * 0.04);
        let meta2 = Math.round(pAtual * 0.08);
        let meta3 = Math.round(pAtual * 0.12);

        contentHTML = `
            <div class="checkout-container fade-in">
                <div class="checkout-header">
                    <div class="success-icon">✓</div>
                    <h2 class="title text-pink mt-3">${nomeUsuario}, seu plano foi gerado!</h2>
                    <p class="subtitle text-center mt-2" style="font-size: 0.8rem">Ele é exclusivo e gerado só uma vez, não saia dessa página para não perdê-lo</p>
                </div>

                <div class="checkout-card mt-4">
                    <div class="card-header bg-pink text-white">
                        <b>Seu Plano: 1 MÊS DE TRATAMENTO</b>
                    </div>
                    <div class="card-body">
                        <p class="text-center text-sm mb-4">${nomeUsuario}, de acordo com seu perfil, você alcançará seu corpo ideal em <span class="text-purple semi-bold">1 Mês</span> com a Gelatina Mounjaro.</p>
                        
                        <div class="timeline-vertical">
                            <div class="t-row">
                                <div class="t-icon">✨</div>
                                <div class="t-content">
                                    <div class="t-title text-purple">Semana 1</div>
                                    <div class="t-desc">Primeiros resultados</div>
                                </div>
                            </div>
                            <div class="t-row">
                                <div class="t-icon" style="opacity:0.8">📉</div>
                                <div class="t-content">
                                    <div class="t-title text-purple">Semana 2</div>
                                    <div class="t-desc">Perda de até ${Math.max(2, meta1)} kg</div>
                                </div>
                            </div>
                            <div class="t-row">
                                <div class="t-icon" style="opacity:0.6">⚡</div>
                                <div class="t-content">
                                    <div class="t-title text-purple">Semana 3</div>
                                    <div class="t-desc">Perda de ${Math.max(4, meta1)} a ${Math.max(6, meta2)} kg</div>
                                </div>
                            </div>
                            <div class="t-row">
                                <div class="t-icon" style="opacity:0.4">🔥</div>
                                <div class="t-content">
                                    <div class="t-title text-purple">Semana 4</div>
                                    <div class="t-desc">Perda de ${Math.max(7, meta2)} a ${Math.max(9, meta3)} kg</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="checkout-card mt-4 border-purple">
                    <div class="card-header bg-purple text-white uppercase text-center" style="line-height:1.2;">
                        <b style="font-size:1.05rem">Gelatina Mounjaro + APP Protocolo Completo</b><br>
                        <span style="font-size:0.75rem; opacity:0.9;">ACESSO VITALÍCIO</span>
                    </div>
                    <div class="card-body">
                        <div class="text-center py-2">
                             <img src="https://i.postimg.cc/QtxK3nky/gelatina-rosa.png" style="width: 100px; max-width:100%;" alt="Gelatina">
                        </div>
                        <ul class="check-list mt-3">
                            <li><span class="chk-icon">✓</span> Receita completa da Gelatina Mounjaro</li>
                            <li><span class="chk-icon">✓</span> Protocolo de 30 dias passo a passo</li>
                            <li><span class="chk-icon">✓</span> Acesso ao Aplicativo Exclusivo</li>
                            <li><span class="chk-icon">✓</span> Lista completa dos ingredientes</li>
                            <li><span class="chk-icon">✓</span> Dicas para acelerar resultados</li>
                            <li><span class="chk-icon">✓</span> Acesso vitalício ao app</li>
                        </ul>
                        
                        <div class="bonus-box mt-4">
                            <div class="bonus-item">🎁 BÔNUS: Dietas completas</div>
                            <div class="bonus-item">🎁 BÔNUS: Receitas doces saudáveis</div>
                            <div class="bonus-item">🎁 BÔNUS: Aulas em vídeo de pilates na parede</div>
                        </div>

                        <div class="price-section mt-4 text-center">
                            <div class="crossed-price text-muted text-sm" style="text-decoration: line-through;">TUDO ISSO DE R$ 149,00</div>
                            <div class="text-sm mt-1 uppercase" style="color: #6b7280; font-weight:600; font-size: 0.75rem;">POR APENAS</div>
                            <div class="main-price text-green" style="font-size: 3rem; font-weight: 800; line-height:1; margin-top:0.25rem;">R$ 27</div>
                            <div class="installments text-muted mt-1" style="font-size:0.85rem;">Ou 6x de R$ 5,32</div>
                        </div>
                        
                        <button class="btn green-cta mt-4 w-full">QUERO MINHA GELATINA AGORA!</button>
                    </div>
                </div>

                <div class="timer-box mt-4 text-center">
                    <span class="text-xs">⏰ Seu plano expira em:</span>
                    <div id="countdown-timer" class="countdown-text text-purple font-bold">14:51</div>
                </div>

                <div class="guarantee-card mt-4 text-center p-4">
                    <img src="https://i.postimg.cc/gJ0z6FjV/selo-garantia.png" alt="Selo Garantia 30 Dias" class="guarantee-seal mx-auto mb-2" style="width: 80px;">
                    <div class="font-bold mb-2">Garantia de Reembolso</div>
                    <p class="text-xs text-muted mb-2">Todo produto é obrigado a dar no mínimo 7 dias de garantia, porém confiamos tanto na fórmula que oferecemos 30 dias corridos.</p>
                    <p class="text-xs text-muted">Ou seja, se você não gostar ou não funcionar pra você, nós reembolsaremos cada centavo que você pagou, sem questionar.</p>
                </div>

                <button class="btn green-cta mt-4 w-full">QUERO MINHA GELATINA AGORA!</button>

                <div class="author-card mt-4 text-center p-4" style="background:white; border: 1px solid var(--border-color); border-radius:var(--border-radius);">
                    <img src="https://i.postimg.cc/Y9D9jVb5/acima-peso.jpg" alt="Nutri Luciana Britto" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; margin:0 auto 0.5rem;" >
                    <p class="text-xs text-muted mb-1">Plano gerado por:</p>
                    <p class="font-bold text-sm">Nutri Luciana Britto</p>
                    <p class="text-xs text-muted">Nutricionista • CRN-PR 08-7734</p>
                </div>
                
                <button class="btn green-cta mt-4 w-full mb-2">QUERO MINHA GELATINA AGORA!</button>
                <div class="text-center text-xs text-muted mb-5">
                    🔒 Compra 100% segura • Garantia de 30 dias
                </div>
            </div>
        `;

        // Start Timer
        let timeRemaining = 14 * 60 + 51;
        let cId = setInterval(() => {
            timeRemaining--;
            if (timeRemaining < 0) timeRemaining = 0;
            let m = Math.floor(timeRemaining / 60);
            let s = timeRemaining % 60;
            const tEl = document.getElementById("countdown-timer");
            if (tEl) tEl.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            if (timeRemaining === 0) clearInterval(cId);
        }, 1000);
    }

    container.innerHTML = `<div class="fade-in">${contentHTML}</div>`;

    // Auto-focus input if text type
    if (step.type === "text") {
        setTimeout(() => {
            const el = document.getElementById(`${step.id}-input`);
            if (el) el.focus();
        }, 100);
    }

    currentStepId = stepId;
}

function goToStep(nextStepId) {
    if (nextStepId) {
        renderStep(nextStepId);
    }
}

function handleRadioSelect(stepId, value, nextStepId, autoAdvance) {
    userAnswers[stepId] = value;

    // Select the radio visually inside the label correctly 
    setTimeout(() => {
        if (autoAdvance) goToStep(nextStepId);
    }, 300); // small delay for user to see the selection check
}

function toggleCheckbox(element) {
    const parent = element.closest('.grid-option') || element.closest('.option-row');
    if (element.checked) {
        parent.classList.add('selected');
    } else {
        parent.classList.remove('selected');
    }
}

// Add event listener for checkbox-list changing class like radio
document.addEventListener('change', function (e) {
    if (e.target && e.target.type === 'checkbox' && e.target.closest('.option-row')) {
        toggleCheckbox(e.target);
    }
});

function handleCheckboxSubmit(stepId, nextStepId) {
    const checkedBoxes = document.querySelectorAll(`input[data-step="${stepId}"]:checked`);
    const values = Array.from(checkedBoxes).map(cb => cb.value);

    // Optional required check
    // if (values.length === 0) { alert('Selecione pelo menos uma opção.'); return; }

    userAnswers[stepId] = values;
    goToStep(nextStepId);
}

function handleTextSubmit(stepId, nextStepId) {
    const input = document.getElementById(`${stepId}-input`);
    const value = input.value.trim();
    if (!value) {
        input.focus();
        return;
    }
    userAnswers[stepId] = value;
    goToStep(nextStepId);
}

function updatePicker(delta, min, max, isGoal) {
    let newVal = window.currentPickerValue + delta;

    if (isGoal && userAnswers["peso-atual"]) {
        let pAtual = parseInt(userAnswers["peso-atual"]);
        if (newVal >= pAtual) {
            newVal = pAtual - 1;
        }
    }

    if (newVal < min) newVal = min;
    if (!isGoal && newVal > max) newVal = max;
    // Not explicitly strictly capping max on goal, but keeping it below what is reasonable based on above logic

    window.currentPickerValue = newVal;
    document.getElementById('picker-value').innerText = newVal;

    if (isGoal) {
        let pAtual = parseInt(userAnswers["peso-atual"]);
        let diff = pAtual - newVal;
        if (diff < 0) diff = 0; // fallback safety
        document.getElementById('goal-diff').innerText = diff;
    }
}

function handlePickerSubmit(stepId, nextStepId) {
    userAnswers[stepId] = window.currentPickerValue;
    goToStep(nextStepId);
}

// Start app
document.addEventListener("DOMContentLoaded", initApp);
