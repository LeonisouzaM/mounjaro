const stepsData = [
    {
        id: "start",
        type: "welcome",
        hideProgress: true,
        image: "assets/bowl.png",
        title: "¿Estás luchando contra el <span class='text-purple'>Vientre Hinchado</span> y la <span class='text-purple'>Grasa Localizada</span>?",
        subtitle: "¡Descubre cómo activar tu metabolismo y perder hasta 12kg en 30 días con la Gelatina Mounjaro!",
        buttonText: "¡Quiero saber si funciona para mí! 🔥",
        footerText: "✓ Más de 127.000 mujeres • ✓ 100% Natural",
        nextStep: "intro"
    },
    {
        id: "intro",
        type: "intro",
        progress: 10,
        title: "¡Comencemos tu viaje! 🚀",
        subtitle: "Responde algunas preguntas rápidas para personalizar tu plan.",
        buttonText: "¡Vamos! 💪",
        nextStep: "idade"
    },
    {
        id: "idade",
        type: "radio",
        progress: 20,
        title: "¿Cuál es tu edad?",
        subtitle: "Selecciona tu rango de edad.",
        options: [
            { id: "18-27", label: "18 - 27 años", icon: "🌸" },
            { id: "28-39", label: "28 - 39 años", icon: "💐" },
            { id: "40-54", label: "40 - 54 años", icon: "🌺" },
            { id: "54+", label: "54+ años", icon: "🌷" }
        ],
        nextStep: "areas",
        autoAdvance: true
    },
    {
        id: "areas",
        type: "checkbox",
        progress: 30,
        title: "¿En qué áreas quieres perder más grasa?",
        subtitle: "Selecciona todas las que apliquen.",
        options: [
            { id: "culotes", label: "Caderas", icon: "🦵" },
            { id: "bracos", label: "Brazos", icon: "💪" },
            { id: "barriga", label: "Abdomen", icon: "🎯" },
            { id: "coxas", label: "Muslos", icon: "🦵" },
            { id: "gluteos", label: "Glúteos", icon: "🍑" },
            { id: "corpo-todo", label: "Todo el Cuerpo", icon: "✨" }
        ],
        buttonText: "Continuar",
        nextStep: "corpo"
    },
    {
        id: "corpo",
        type: "image-grid",
        progress: 40,
        title: "¿Cómo clasificas <span class='text-purple'>tu cuerpo?</span>",
        subtitle: "Selecciona la opción que mejor te describa",
        options: [
            { id: "medio", label: "Medio", image: "assets/corpo_medio.png" },
            { id: "plus-size", label: "Plus Size", image: "assets/corpo_plussize.png" },
            { id: "acima-peso", label: "Con sobrepeso", image: "assets/corpo_acimadopeso.png" },
            { id: "sobrepeso", label: "Sobrepeso alto", image: "assets/corpo_sobrepeso.png" }
        ],
        nextStep: "afeta-vida",
        autoAdvance: true
    },
    {
        id: "afeta-vida",
        type: "radio",
        progress: 50,
        title: "¿Cómo afecta el peso a tu vida?",
        subtitle: "Entender esto nos ayuda a crear tu protocolo ideal",
        options: [
            { id: "autoestima", label: "Afecta mi autoestima", description: "Me siento insegura con mi cuerpo", icon: "💔" },
            { id: "saude", label: "Afecta mi salud", description: "Siento cansancio, dolores y falta de energía", icon: "🏥" },
            { id: "relacionamentos", label: "Afecta mis relaciones", description: "Evito citas y situaciones sociales", icon: "👥" },
            { id: "rotina", label: "Afecta mi rutina", description: "Dificultad para hacer tareas simples", icon: "🗓️" }
        ],
        nextStep: "nome",
        autoAdvance: true
    },
    {
        id: "nome",
        type: "text",
        progress: 60,
        title: "¿Cuál es tu nombre?",
        subtitle: "Para personalizar tu experiencia.",
        placeholder: "Tu primer nombre",
        buttonText: "Continuar",
        nextStep: "explicacao"
    },
    {
        id: "explicacao",
        type: "explanation",
        progress: 65,
        title: "¡Excelente, {nome}! 🎉",
        subtitle: "Sin esfuerzo ni dietas aburridas: la Gelatina Mounjaro hace el trabajo pesado por ti, activando la quema de grasa con ingredientes caseros que preparas en minutos.",
        image: "assets/bowl.png",
        buttonText: "¡Entendido! Continuar 🚀",
        nextStep: "feliz-aparencia"
    },
    {
        id: "feliz-aparencia",
        type: "radio",
        progress: 70,
        title: "¿Estás feliz con tu apariencia actual?",
        subtitle: "Sé sincera contigo misma",
        options: [
            { id: "nao-feliz", label: "No estoy feliz", icon: "😔" },
            { id: "poderia-melhor", label: "Podría ser mejor", icon: "😐" },
            { id: "trabalhando", label: "Estoy trabajando en ello", icon: "💪" }
        ],
        nextStep: "impede-emagrecer",
        autoAdvance: true
    },
    {
        id: "impede-emagrecer",
        type: "checkbox-list",
        progress: 80,
        title: "¿Qué te impide adelgazar?",
        subtitle: "Selecciona todas las barreras que enfrentas",
        options: [
            { id: "tempo", label: "Falta de tiempo", icon: "⏰" },
            { id: "autocontrole", label: "Falta de autocontrol", icon: "🍫" },
            { id: "financeiro", label: "Problemas financieros", icon: "💰" },
            { id: "constancia", label: "Falta de constancia", icon: "📉" }
        ],
        buttonText: "Continuar",
        nextStep: "objetivos"
    },
    {
        id: "objetivos",
        type: "checkbox",
        progress: 90,
        title: "¿Qué quieres lograr?",
        subtitle: "Selecciona tus mayores objetivos",
        options: [
            { id: "energia", label: "Tener más energía", icon: "⚡" },
            { id: "roupas", label: "Usar la ropa que amo", icon: "👗" },
            { id: "autoestima", label: "Mejorar la autoestima", icon: "💖" },
            { id: "saude", label: "Tener más salud", icon: "💪" },
            { id: "leve", label: "Sentirme más ligera", icon: "🦋" },
            { id: "elogios", label: "Recibir elogios", icon: "🌟" }
        ],
        buttonText: "Continuar",
        nextStep: "peso-atual"
    },
    {
        id: "peso-atual",
        type: "number-picker",
        progress: 92,
        title: "¿Cuál es tu peso actual?",
        subtitle: "Sé sincera para un resultado preciso",
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
        title: "¿Cuál es tu estatura?",
        subtitle: "Necesitamos esto para calcular tu IMC",
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
        title: "¿Cómo es tu rutina diaria?",
        subtitle: "Selecciona la que más encaje.",
        options: [
            { id: "trabalho-fora", label: "Trabajo fuera de casa", icon: "🏢" },
            { id: "home-office", label: "Trabajo desde casa", icon: "🏠" },
            { id: "casa-familia", label: "Cuido la casa/familia", icon: "👨‍👩‍👧‍👦" },
            { id: "estudo", label: "Estudio", icon: "📚" }
        ],
        nextStep: "peso-desejado",
        autoAdvance: true
    },
    {
        id: "peso-desejado",
        type: "number-picker",
        progress: 98,
        title: "¿Cuál es tu peso deseado?",
        subtitle: "¿Qué peso sueñas alcanzar?",
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
        title: "¿Cuánta agua bebes al día?",
        subtitle: "La hidratación acelera los resultados.",
        options: [
            { id: "quase-nada", label: "Casi nada", icon: "🌵" },
            { id: "menos-1l", label: "Menos de 1 litro", icon: "💧" },
            { id: "1-2l", label: "1 a 2 litros", icon: "💦" },
            { id: "mais-2l", label: "Más de 2 litros", icon: "🌊" }
        ],
        nextStep: "como-usar",
        autoAdvance: true
    },
    {
        id: "como-usar",
        type: "info-steps",
        progress: 100,
        title: "Cómo usar la <span class='text-purple'>Gelatina Mounjaro</span>",
        subtitle: "Simple, práctico y eficaz",
        buttonText: "¡Sí, me comprometo!",
        nextStep: "resultado-analise"
    },
    {
        id: "resultado-analise",
        type: "analysis",
        progress: 100,
        title: "Resultado de tu análisis, tú",
        buttonText: "Continuar",
        nextStep: "corpo-sonhos"
    },
    {
        id: "corpo-sonhos",
        type: "radio",
        progress: 100,
        title: "¿Cuál es el cuerpo de tus sueños?",
        subtitle: "Elige tu meta.",
        options: [
            { id: "forma-definida", label: "En forma y definida", icon: "🏋️‍♀️" },
            { id: "natural-saudavel", label: "Natural y saludable", icon: "🌿" }
        ],
        nextStep: "promessa-perda",
        autoAdvance: true
    },
    {
        id: "promessa-perda",
        type: "dynamic-promise",
        progress: 100,
        buttonText: "¡SÍ! ¡Quiero esta transformación! 🔥",
        nextStep: "historias-transformacao"
    },
    {
        id: "historias-transformacao",
        type: "historias",
        progress: 100,
        buttonText: "Ver mi protocolo personalizado",
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

    // Trigger Meta Pixel dynamically for professional funnel tracking
    if (typeof fbq !== 'undefined') {
        fbq('trackCustom', 'AcessoQuiz', { step: stepIndex, step_name: stepId });

        // Critical funnel standard events mappings:
        if (stepId === 'nome') {
            fbq('track', 'Contact'); // Or Lead, when they start typing info
        } else if (stepId === 'plano-gerado' || stepId === 'carregando-oferta') {
            fbq('track', 'InitiateCheckout');
        } else if (stepId === 'start') {
            fbq('track', 'ViewContent');
        }
    }

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
                        <span class="step-label">Paso 1</span>
                        <span class="step-action">Prepara la gelatina</span>
                        <span class="step-desc">Sigue la receta simple de la aplicación</span>
                    </div>
                </div>
                <div class="step-card">
                    <div class="step-icon bg-purple">🕒</div>
                    <div class="step-text">
                        <span class="step-label">Paso 2</span>
                        <span class="step-action">Consume 2x al día</span>
                        <span class="step-desc">Una por la mañana y una antes de dormir</span>
                    </div>
                </div>
                <div class="step-card">
                    <div class="step-icon bg-green">📅</div>
                    <div class="step-text">
                        <span class="step-label">Paso 3</span>
                        <span class="step-action">Síguelo por 30 días</span>
                        <span class="step-desc">El protocolo completo para resultados</span>
                    </div>
                </div>
            </div>
            
            <div class="timeline-widget">
                <div class="timeline-item">
                    <span class="icon">☀️</span>
                    <span class="time">Mañana</span>
                    <span class="desc">En ayunas</span>
                </div>
                <div class="timeline-line"></div>
                <div class="timeline-item">
                    <span class="icon">✨</span>
                    <span class="time">Día</span>
                    <span class="desc">Sin hambre</span>
                </div>
                <div class="timeline-line"></div>
                <div class="timeline-item">
                    <span class="icon">🌙</span>
                    <span class="time">Noche</span>
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
        if (imcVal < 18.5) statusIMC = "Bajo peso";
        else if (imcVal < 25) statusIMC = "Peso normal";
        else if (imcVal >= 30) statusIMC = "Obesidad";

        contentHTML = `
            <h2 class="title text-center">${step.title}</h2>
            <div class="imc-card mt-3">
                <div class="imc-value">${imcVal}</div>
                <div class="imc-status">Tu IMC: <span class="text-pink">${statusIMC}</span></div>
                <div class="alert-box">
                    <div class="alert-title">⚠️ Signos de alerta identificados:</div>
                    <ul class="alert-list">
                        <li>• Metabolismo desacelerado</li>
                        <li>• Riesgo de acumulación de grasa visceral</li>
                        <li>• Hormonas de saciedad desreguladas</li>
                    </ul>
                </div>
            </div>
            <div class="highlight-promo">
                <span class="text-purple semi-bold">El secreto para adelgazar:</span> no es comer menos, es activar el GLP-1. ¡La <span class="text-purple semi-bold">Gelatina Mounjaro</span> actúa como un "interruptor" hormonal natural!
            </div>
            <div class="testimonial-card">
                <img src="assets/antes_depois.png" class="testimonial-img" alt="Antes y Después">
                <div class="testimonial-footer">
                    <div class="testimonial-title">"¡Perdí 12kg en 5 semanas!"</div>
                    <div class="testimonial-author">María, 32 años</div>
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

        let nomeUsuario = userAnswers["nome"] || "tú";
        // capitalise
        nomeUsuario = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1).toLowerCase();

        contentHTML = `
            <div class="promise-container centered-padding">
                <div class="target-icon">🎯</div>
                <h2 class="title text-center text-2xl mt-4">
                    ${nomeUsuario}, ¿te gustaría perder entre <span class="text-pink">${minLoss} y ${maxLoss} kilos</span> en pocas semanas?
                </h2>
                <p class="subtitle text-center mt-3">
                    Basado en tu perfil, ¡este resultado es totalmente alcanzable con la Gelatina Mounjaro!
                </p>
                <button class="btn green-btn mt-5 w-full" onclick="goToStep('${step.nextStep}')">${step.buttonText}</button>
            </div>
        `;
    }
    else if (step.type === "historias") {
        contentHTML = `
            <div class="content-wrapper">
                <h2 class="title text-center text-xl">Historias de Transformación</h2>
                <p class="subtitle text-center mt-2 mb-4">Mira quién ya transformó su cuerpo con la Gelatina Mounjaro</p>
                
                <div class="historia-cards-list">
                    <div class="historia-card">
                        <img src="assets/transf_1.png" alt="Antes y Después Giovanna" class="historia-img">
                        <div class="historia-footer">
                            <p class="historia-quote">"Increíble... ¡Perdí 7kg en 3 semanas!"</p>
                            <p class="historia-author">Giovanna, 34</p>
                        </div>
                    </div>
                    
                    <div class="historia-card">
                        <img src="assets/transf_2.jpg" alt="Antes y Después Sandra" class="historia-img">
                        <div class="historia-footer">
                            <p class="historia-quote">"¡Mi barriga desapareció! ¡No lo creo!"</p>
                            <p class="historia-author">Sandra, 39</p>
                        </div>
                    </div>
                    
                    <div class="historia-card">
                        <img src="assets/transf_3.png" alt="Antes y Después Cláudia" class="historia-img">
                        <div class="historia-footer">
                            <p class="historia-quote">"¡Volví a usar mi ropa antigua!"</p>
                            <p class="historia-author">Cláudia, 35</p>
                        </div>
                    </div>
                    
                    <div class="historia-card">
                        <img src="assets/transf_4.jpg" alt="Antes y Después Patrícia" class="historia-img">
                        <div class="historia-footer">
                            <p class="historia-quote">"Quien lo usa tiene resultados 🥰 🙌"</p>
                            <p class="historia-author">Patrícia, 31</p>
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
        let nomeUsuario = userAnswers["nome"] || "Tú";
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
                            <span class="flow-label">Tu objetivo</span>
                        </div>
                    </div>
                </div>

                <div class="info-box-yellow mt-4">
                    <p><span class="text-purple font-bold">Cómo funciona:</span> La receta casera activa el GLP-1, la misma hormona que causa el efecto del Mounjaro, ¡pero de forma 100% natural!</p>
                </div>

                <button class="btn gradient-btn mt-5 w-full" onclick="goToStep('${step.nextStep}')">${step.buttonText}</button>
            </div>
        `;
    }
    else if (step.type === "loading-screen") {
        let nomeUsuario = userAnswers["nome"] || "tú";
        nomeUsuario = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1).toLowerCase();
        let pesoAlvo = userAnswers["peso-desejado"] ? userAnswers["peso-desejado"] + "kg" : "tu peso ideal";
        let tempoDesejado = userAnswers["tempo-perda"] || "rápida";

        contentHTML = `
            <div class="loading-container centered-padding">
                <div class="spinner-container">
                    <div class="spinner"></div>
                    <div class="spinner-icon">🔬</div>
                </div>
                <h3 id="loading-text" class="loading-title mt-4">Analizando el metabolismo de ${nomeUsuario}...</h3>
                <div class="loading-progress-bar-bg mt-3">
                    <div id="loading-bar-fill" class="loading-progress-bar-fill"></div>
                </div>
                <div id="loading-percentage" class="loading-percentage mt-2 text-muted">0% completado</div>
                <p class="subtitle text-center mt-4">Espera mientras preparamos tu plan personalizado...</p>
            </div>
        `;

        let progress = 0;
        let pId = setInterval(() => {
            // Slower progress to increase loading duration (around 8-10 seconds)
            progress += Math.floor(Math.random() * 3) + 1;
            if (progress >= 100) {
                progress = 100;
                clearInterval(pId);
                setTimeout(() => goToStep(step.nextStep), 300);
            }

            const fill = document.getElementById("loading-bar-fill");
            const pctText = document.getElementById("loading-percentage");
            const txt = document.getElementById("loading-text");

            if (fill) fill.style.width = progress + "%";
            if (pctText) pctText.innerText = progress + "% completado";

            if (txt) {
                if (progress > 90) txt.innerText = "¡Protocolo finalizado con éxito!";
                else if (progress > 75) txt.innerText = "Reservando tu cupo oficial con la Nutri Luciana...";
                else if (progress > 55) txt.innerText = `Ajustando la dosis de Gelatina Mounjaro para alcanzar la marca de ${pesoAlvo}...`;
                else if (progress > 35) txt.innerText = "Buscando las comidas y menús enfocados en tu biotipo...";
                else if (progress > 15) txt.innerText = `Cruzando tu perfil metabólico para actuar de forma ${tempoDesejado}...`;
            }

        }, 220);
    }
    else if (step.type === "checkout") {
        let nomeUsuario = userAnswers["nome"] || "tú";
        nomeUsuario = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1).toLowerCase();

        // Simulating the loss prediction
        let pAtual = parseInt(userAnswers["peso-atual"]) || 75;
        let meta1 = Math.round(pAtual * 0.04);
        let meta2 = Math.round(pAtual * 0.08);
        let meta3 = Math.round(pAtual * 0.12);

        contentHTML = `
            <div class="checkout-container fade-in">
                <div class="checkout-header" style="text-align: center;">
                    <div class="success-icon" style="width: 48px; height: 48px; border-radius: 50%; border: 3px solid #22c55e; display: flex; align-items: center; justify-content: center; margin: 0 auto; background: #f0fdf4; box-shadow: 0 0 15px rgba(34,197,94,0.1);">
                        <svg style="width: 24px; height: 24px; color: #22c55e;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 class="title mt-4" style="font-size: 1.25rem; font-weight:800; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 0.35rem;">
                        <span style="color: #c084fc;">${nomeUsuario},</span>
                        <span style="background: #dcfce7; color: #16a34a; padding: 4px 12px; border-radius: 8px; font-size:1.05rem;">¡tu plan ha sido generado!</span>
                    </h2>
                    <p class="subtitle text-center mt-3" style="font-size: 0.75rem; color: #64748b; line-height: 1.4;">Es exclusivo y generado solo una vez, no salgas de esta página para no perderlo.</p>
                </div>

                <div class="checkout-card mt-5" style="border-radius: 12px; overflow: hidden; box-shadow: var(--card-shadow); border: 1px solid var(--border-color); background: white;">
                    <div class="card-header bg-pink text-white" style="padding: 12px; text-align: center;">
                        <b style="font-size: 0.95rem;">Tu Plan: 1 MES DE TRATAMIENTO</b>
                    </div>
                    <div class="card-body" style="padding: 1rem;">
                        <p class="text-center text-sm mb-4" style="color: #64748b; font-size: 0.8rem;">${nomeUsuario}, según tu perfil, alcanzarás tu cuerpo ideal en <span class="text-purple" style="font-weight: 700;">1 mes</span> con la Gelatina Mounjaro.</p>
                        
                        <div class="timeline-vertical">
                            <div class="t-row" style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 12px;">
                                <div class="t-icon" style="font-size: 1.2rem; background: #faf5ff; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">✨</div>
                                <div class="t-content" style="flex: 1;">
                                    <div class="t-title text-purple" style="font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Semana 1</div>
                                    <div class="t-desc" style="font-size: 0.85rem; color: #1e293b; font-weight: 600;">Primeros resultados</div>
                                </div>
                            </div>
                            <div class="t-row" style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 12px;">
                                <div class="t-icon" style="font-size: 1.2rem; background: #faf5ff; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; opacity:0.8;">📉</div>
                                <div class="t-content" style="flex: 1;">
                                    <div class="t-title text-purple" style="font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Semana 2</div>
                                    <div class="t-desc" style="font-size: 0.85rem; color: #1e293b; font-weight: 600;">Pérdida de hasta ${Math.max(2, meta1)} kg</div>
                                </div>
                            </div>
                            <div class="t-row" style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 12px;">
                                <div class="t-icon" style="font-size: 1.2rem; background: #faf5ff; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; opacity:0.6;">⚡</div>
                                <div class="t-content" style="flex: 1;">
                                    <div class="t-title text-purple" style="font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Semana 3</div>
                                    <div class="t-desc" style="font-size: 0.85rem; color: #1e293b; font-weight: 600;">Pérdida de ${Math.max(4, meta1)} a ${Math.max(6, meta2)} kg</div>
                                </div>
                            </div>
                            <div class="t-row" style="padding: 10px 0; display: flex; align-items: center; gap: 12px;">
                                <div class="t-icon" style="font-size: 1.2rem; background: #faf5ff; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; opacity:0.5;">🔥</div>
                                <div class="t-content" style="flex: 1;">
                                    <div class="t-title text-purple" style="font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Semana 4</div>
                                    <div class="t-desc" style="font-size: 0.85rem; color: #1e293b; font-weight: 600;">Pérdida de ${Math.max(7, meta2)} a ${Math.max(9, meta3)} kg</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="checkout-card mt-4" style="border-radius: 12px; overflow: hidden; box-shadow: var(--card-shadow); border: 1px solid var(--border-color); background: white;">
                    <div class="card-header bg-purple text-white text-center" style="padding: 16px 12px; line-height:1.3;">
                        <b style="font-size:1.05rem">Gelatina Mounjaro + APP Protocolo Completo</b><br>
                        <span style="font-size:0.75rem; opacity:0.9; text-transform: uppercase;">ACCESO VITALICIO</span>
                    </div>
                    <div class="card-body" style="padding: 1.5rem 1.25rem;">
                        <div class="text-center py-2" style="display: flex; justify-content: center;">
                             <img src="assets/bowl-gelatina-novo.jpg" style="width: 150px; max-width:100%;" alt="Gelatina Mounjaro">
                        </div>
                        <ul class="check-list mt-3" style="list-style: none; padding: 0;">
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.85rem; color: #1e293b; margin-bottom: 10px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Receta completa de la Gelatina Mounjaro
                            </li>
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.85rem; color: #1e293b; margin-bottom: 10px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Protocolo de 30 días paso a paso
                            </li>
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.85rem; color: #1e293b; margin-bottom: 10px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Acceso a la Aplicación Exclusiva
                            </li>
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.85rem; color: #1e293b; margin-bottom: 10px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Lista completa de ingredientes
                            </li>
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.85rem; color: #1e293b; margin-bottom: 10px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Consejos para acelerar resultados
                            </li>
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.85rem; color: #1e293b; margin-bottom: 10px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Acceso vitalicio a la app
                            </li>
                        </ul>
                        
                        <div class="bonus-box mt-4" style="background:#fdf4ff; border: 1px solid #f8e1fe; border-radius:12px; padding:12px;">
                            <div class="bonus-item text-purple" style="font-size:0.8rem; font-weight:600; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                                <span>🎁</span> BONO: Dietas completas
                            </div>
                            <div class="bonus-item text-purple" style="font-size:0.8rem; font-weight:600; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                                <span>🎁</span> BONO: Recetas dulces saludables
                            </div>
                            <div class="bonus-item text-purple" style="font-size:0.8rem; font-weight:600; display:flex; align-items:center; gap:6px;">
                                <span>🎁</span> BONO: Clases en video de pilates en la pared
                            </div>
                        </div>

                        <div class="price-section mt-5 text-center">
                            <div class="crossed-price" style="text-decoration: line-through; color: #94a3b8; font-size: 0.75rem;">TODO ESTO POR $149.00</div>
                            <div class="mt-1" style="color: #64748b; font-weight:600; font-size: 0.75rem;">POR SOLO</div>
                            <div class="main-price text-green" style="font-size: 3.5rem; font-weight: 900; line-height:1; margin-top:0.25rem;">$27</div>
                            <div class="installments mt-1" style="color: #64748b; font-size:0.85rem;">O 6 cuotas de $5.32</div>
                        </div>
                        
                        <button class="btn green-cta mt-5 w-full" style="background:#16a34a; border-radius:8px; padding:16px; font-size:1.1rem; box-shadow: 0 4px 15px rgba(22, 163, 74, 0.3);">¡QUIERO MI GELATINA AHORA!</button>
                    </div>
                </div>

                <div class="timer-box mt-4 text-center" style="background: #fff5f8; padding: 14px; border-radius: 12px;">
                    <span style="color: #64748b; font-size: 0.8rem; display:block; margin-bottom:2px;">⏰ Tu plan expira en:</span>
                    <div id="countdown-timer" class="countdown-text text-purple font-bold" style="font-size: 1.4rem;">14:51</div>
                </div>

                <div class="guarantee-card mt-4 text-center p-4" style="background:#fffbeb; border: 1px solid #fef08a; border-radius: 12px;">
                    <img src="assets/selo-garantia.png" alt="Selo Garantia 30 Dias" class="guarantee-seal mx-auto mb-3" style="width: 110px; border-radius: 0; box-shadow: none;">
                    <div class="font-bold mb-2" style="font-size: 1rem; color: #1e293b;">Garantía de Reembolso</div>
                    <p style="font-size: 0.7rem; color: #64748b; margin-bottom: 0.5rem; line-height: 1.4;">Todo producto está obligado a dar al menos 7 días de garantía, pero confiamos tanto en la fórmula que ofrecemos 30 días calendario.</p>
                    <p style="font-size: 0.7rem; color: #64748b; line-height: 1.4;">Es decir, si no te gusta o no funciona para ti, te reembolsaremos cada centavo que hayas pagado, sin hacer preguntas.</p>
                </div>

                <button class="btn green-cta mt-4 w-full" style="background:#16a34a; border-radius:8px; padding:16px; font-size:1.1rem; box-shadow: 0 4px 15px rgba(22, 163, 74, 0.3);">¡QUIERO MI GELATINA AHORA!</button>

                <div class="author-card mt-4 text-center p-4" style="background:white; border: 1px solid var(--border-color); border-radius:12px; display: flex; flex-direction: column; align-items: center;">
                    <img src="assets/nutri-luciana-2.png" alt="Nutri Luciana Britto" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin-bottom: 0.75rem; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" >
                    <p style="font-size: 0.7rem; color: #64748b; margin-bottom: 2px;">Plan generado por:</p>
                    <p class="font-bold" style="font-size: 0.9rem; color: #1e293b;">Nutri Luciana Britto</p>
                    <p style="font-size: 0.7rem; color: #64748b;">Nutricionista • CRN-PR 08-7734</p>
                </div>
                
                <button class="btn green-cta mt-4 w-full mb-3" style="background:#16a34a; border-radius:8px; padding:16px; font-size:1.1rem; box-shadow: 0 4px 15px rgba(22, 163, 74, 0.3);">¡QUIERO MI GELATINA AHORA!</button>
                <div class="text-center text-muted mb-6" style="font-size: 0.7rem; display: flex; align-items: center; justify-content: center; gap: 4px; color: #64748b;">
                    <span style="color: #f59e0b;">🔒</span> Compra 100% segura • Garantía de 30 días
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
