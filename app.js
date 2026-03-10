const stepsData = [
    {
        id: "start",
        type: "welcome",
        hideProgress: true,
        image: "assets/capa1.png",
        subtitle: "Descubra como ativar seu metabolismo e perder até <span class='text-purple'>12kg em 30 dias</span> com a <span class='text-purple'>Gelatina Mounjaro!</span>",
        buttonText: "Quero saber se funciona para mim! 🔥",
        footerText: "✓ 127.000+ mulheres &nbsp;•&nbsp; ✓ 100% Natural",
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
        nextStep: "corpo",
        autoAdvance: true
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
        nextStep: "body-areas",
        autoAdvance: true
    },
    {
        id: "body-areas",
        type: "body-selection",
        progress: 45,
        title: "Quais as áreas que você <span class='text-purple'>mais quer perder gordura?</span>",
        subtitle: "Toque nas áreas do corpo que deseja melhorar.",
        image: "assets/personagem.png",
        options: [
            { id: "papada", label: "Papada" },
            { id: "bracos", label: "Braços" },
            { id: "cintura", label: "Cintura" },
            { id: "barriga", label: "Barriga" },
            { id: "gluteos", label: "Glúteos" },
            { id: "culotes", label: "Culotes" },
            { id: "coxas", label: "Coxas" },
            { id: "corpo-todo", label: "Corpo Todo" }
        ],
        buttonText: "Continuar",
        nextStep: "afeta-vida"
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
        nextStep: "como-funciona"
    },
    {
        id: "como-funciona",
        type: "como-funciona",
        progress: 91,
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
        nextStep: "peso-desejado"
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
        nextStep: "otimo-objetivo"
    },
    {
        id: "otimo-objetivo",
        type: "otimo-objetivo",
        progress: 98,
        buttonText: "Ok, Vamos lá! 🚀",
        nextStep: "gestacoes"
    },
    {
        id: "gestacoes",
        type: "radio",
        progress: 98,
        title: "<span class='text-purple'>Quantas gestações</span> você já teve?",
        subtitle: "Isso ajuda a personalizar seu plano.",
        options: [
            { id: "0", label: "Nunca estive grávida", icon: "<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#ff4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'></circle><line x1='4.93' y1='4.93' x2='19.07' y2='19.07'></line></svg>" },
            { id: "1", label: "1 gestação", icon: "<div style='background-color: #4b8ce2; color: white; width: 22px; height: 22px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold;'>1</div>" },
            { id: "2", label: "2 gestações", icon: "<div style='background-color: #4b8ce2; color: white; width: 22px; height: 22px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold;'>2</div>" },
            { id: "3", label: "3 ou mais gestações", icon: "<div style='background-color: #4b8ce2; color: white; width: 22px; height: 22px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold;'>3</div>" }
        ],
        nextStep: "rotina",
        autoAdvance: true
    },
    {
        id: "rotina",
        type: "checkbox-list",
        progress: 98,
        title: "Como é sua <span class='text-purple'>rotina diária?</span>",
        subtitle: "Selecione todas as que se encaixam.",
        options: [
            { id: "trabalho-fora", label: "Trabalho fora de casa", icon: "🏢" },
            { id: "home-office", label: "Trabalho em home office", icon: "🏡" },
            { id: "casa-familia", label: "Cuido da casa/família", icon: "👨‍👩‍👧‍👦" },
            { id: "estudo", label: "Estudo", icon: "📚" }
        ],
        buttonText: "Continuar",
        nextStep: "sono"
    },
    {
        id: "sono",
        type: "radio",
        progress: 98,
        title: "Quantas horas <span class='text-purple'>você dorme por noite?</span>",
        subtitle: "O sono é essencial para o emagrecimento.",
        options: [
            { id: "menos-5", label: "Menos de 5 horas", icon: "😴" },
            { id: "5-7", label: "5 a 7 horas", icon: "🛏️" },
            { id: "7-9", label: "7 a 9 horas", icon: "🥰" },
            { id: "mais-9", label: "Mais de 9 horas", icon: "💤" }
        ],
        nextStep: "agua",
        autoAdvance: true
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
        nextStep: "resultado-analise",
        autoAdvance: true
    },
    {
        id: "resultado-analise",
        type: "analysis",
        progress: 100,
        title: "Resultado de tu análisis, tú",
        buttonText: "Continuar",
        nextStep: "como-usar"
    },
    {
        id: "como-usar",
        type: "como-usar",
        progress: 100,
        buttonText: "<span class='btn-check-icon'></span> Sim, eu me comprometo!",
        nextStep: "compromisso-semana"
    },
    {
        id: "compromisso-semana",
        type: "radio-image-top",
        progress: 100,
        title: "Você se compromete a aplicar o <span class='text-purple'>protocolo</span> por pelo menos 1 semana para poder ver os resultados?",
        image: "assets/before_after_v2-BwdiI3Uv.png",
        badge: "🔒 PARA LIBERAR SEU PLANO, PRECISO SABER:",
        options: [
            { id: "sim-comprometo", label: "Sim me comprometo!", icon: "🥰" },
            { id: "comecar-hoje", label: "Quero começar hoje", icon: "😎" },
            { id: "nao-sei", label: "Não sei...", icon: "🙄" }
        ],
        nextStep: "loading-analise",
        autoAdvance: true
    },
    {
        id: "loading-analise",
        type: "circular-loading",
        progress: 100,
        nextStep: "vsl-page"
    },
    {
        id: "vsl-page",
        type: "vsl",
        progress: 100,
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
        nextStep: "loading-final"
    },
    {
        id: "loading-final",
        type: "loading-final",
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
let stepHistory = [];
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

let isProcessingClick = false;

function handlePurchaseClick(url) {
    if (isProcessingClick) return;
    isProcessingClick = true;

    if (typeof fbq !== 'undefined') {
        fbq('trackCustom', 'SubscribedButtonClick');
    }

    // Timeout of 500ms to ensure the pixel is fired before navigating away
    setTimeout(() => {
        window.location.href = url;
        isProcessingClick = false;
    }, 500);
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

    if (typeof fbq !== 'undefined') {
        if (stepId === 'intro') {
            fbq('track', 'ViewContent');
        }
    }

    // Usar caminho relativo para funcionar tanto no localhost quanto na Vercel
    const apiUrl = '/api/track-quiz';

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
            <div class="welcome-container text-center" style="display: flex; flex-direction: column; align-items: center; padding-top: 0.5rem; padding-bottom: 2rem;">
                <div class="capa-image-container mx-auto" style="width: 100%; max-width: 420px; margin-bottom: 1.5rem;">
                    <img src="${step.image}" alt="Mounjaro Gelatina" style="width: 100%; height: auto; display: block; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));">
                </div>
                <p class="subtitle mt-1" style="font-size: 1.1rem; line-height: 1.5; color: #6b7280; font-weight: 400; max-width: 95%; margin: 0 auto;">${step.subtitle}</p>
                <button class="btn mt-4" style="background: linear-gradient(135deg, #22c55e 0%, #15803d 100%); width: auto; min-width: 250px; font-size: 1.05rem; font-weight: 700; padding: 1rem 1.5rem; border-radius: 12px; box-shadow: 0 8px 25px -5px rgba(34, 197, 94, 0.5); margin-top: 1.5rem; border: 1px solid #16a34a; transition: transform 0.2s; white-space: nowrap; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'" onclick="goToStep('${step.nextStep}')">Quero saber se funciona para mim! 🔥</button>
                <p class="footer-text" style="margin-top: 1.5rem; font-size: 0.85rem; color: #9ca3af; font-weight: 500;">${step.footerText}</p>
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
    else if (step.type === "como-funciona") {
        let nomeUsuario = userAnswers["nome"] || "Visitante";
        nomeUsuario = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1).toLowerCase();

        contentHTML = `
            <div class="content-wrapper">
                <h2 class="title text-center text-xl font-bold">Ótimo, <span class="text-pink">${nomeUsuario}</span>! <span class="text-purple">Veja como funciona 🎉</span></h2>
                <p class="subtitle text-center mt-2 mb-4 text-pink font-bold">A Gelatina Mounjaro ativa a queima de gordura natural com <span class="text-gray-500 font-normal">ingredientes caseiros que você prepara em minutos.</span></p>

                <div class="funciona-check-list mb-4">
                    <div class="funciona-check-item">
                        <div class="check-icon">✓</div> Fácil de preparar
                    </div>
                    <div class="funciona-check-item">
                        <div class="check-icon">✓</div> 2 vezes ao dia
                    </div>
                    <div class="funciona-check-item">
                        <div class="check-icon">✓</div> Receita 100% Natural
                    </div>
                </div>

                <div class="funciona-timeline-card mt-3">
                    <!-- Item 1 -->
                    <div class="funciona-timeline-item">
                        <div class="funciona-number bg-purple">1</div>
                        <div class="funciona-img-box"><img src="assets/flow_antes-XnqC_31E.png" alt="Antes"></div>
                        <div class="funciona-text">
                            <strong>Antes</strong>
                            <span>Gordura acumulada e metabolismo lento</span>
                        </div>
                    </div>
                    <div class="funciona-arrow text-purple">↓</div>

                    <!-- Item 2 -->
                    <div class="funciona-timeline-item">
                        <div class="funciona-number bg-purple">2</div>
                        <div class="funciona-img-box"><img src="assets/flow_gelatina-B9ryWXkD.png" alt="Gelatina"></div>
                        <div class="funciona-text">
                            <strong class="text-purple">Gelatina Mounjaro</strong>
                            <span>Receita caseira simples e poderosa</span>
                        </div>
                    </div>
                    <div class="funciona-arrow text-purple">↓</div>

                    <!-- Item 3 -->
                    <div class="funciona-timeline-item">
                        <div class="funciona-number bg-purple">3</div>
                        <div class="funciona-img-box"><img src="assets/icone_queima.png" alt="Queima"></div>
                        <div class="funciona-text">
                            <strong>Queima natural ativada 🔥</strong>
                            <span>Metabolismo acelerado sem dietas</span>
                        </div>
                    </div>
                    <div class="funciona-arrow text-green">↓</div>

                    <!-- Item 4 -->
                    <div class="funciona-timeline-item">
                        <div class="funciona-number bg-green">✨</div>
                        <div class="funciona-img-box"><img src="assets/corpo_sonhos.png" alt="Depois"></div>
                        <div class="funciona-text text-green">
                            <strong class="text-green">Corpo dos sonhos!</strong>
                            <span class="text-gray-500">Resultado visível em poucas semanas</span>
                        </div>
                    </div>
                </div>

                <div class="funciona-info-box mt-4">
                    <p>💡 <strong class="text-purple font-bold">Receita caseira</strong> que ativa o <strong class="font-bold">GLP-1</strong>, o mesmo hormônio do Mounjaro, de forma <strong class="text-purple font-bold">100% natural!</strong></p>
                </div>

                <button class="btn gradient-btn mt-5 w-full" onclick="goToStep('${step.nextStep}')">Entendi! Continuar 🚀</button>
            </div>
        `;
    }
    else if (step.type === "otimo-objetivo") {
        let nomeUsuario = userAnswers["nome"] || "Visitante";
        nomeUsuario = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1).toLowerCase();
        let pAtual = parseInt(userAnswers["peso-atual"]) || 75;
        let pDesejado = parseInt(userAnswers["peso-desejado"]) || 65;
        let diferenca = pAtual - pDesejado;
        if (diferenca < 0) diferenca = 0;

        contentHTML = `
            <div class="content-wrapper centered-padding">
                <div class="objetivo-img-container mx-auto mb-4" style="text-align: center;">
                    <img src="assets/gelatina_resultado-CbO72sN0.png" alt="Transformação" class="img-fluid" style="max-width: 250px; margin: 0 auto; display: inline-block;">
                </div>
                
                <div class="objetivo-card text-center text-main" style="background: #faf5ff; border: 1px solid #f3e8ff; border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
                    <h2 class="title text-lg font-bold mb-2">Esse é um ótimo objetivo, <span class="text-pink" style="display:inline-block">${nomeUsuario}! 💜</span></h2>
                    
                    <p class="objetivo-meta mb-3" style="color: #64748b; font-size: 0.85rem;">
                        Meta: ${pAtual}kg ➔ ${pDesejado}kg (${diferenca}kg)
                    </p>
                    
                    <p class="objetivo-desc" style="color: #64748b; font-size: 0.95rem; line-height: 1.5;">
                        Agora vamos ajustar o próximo passo para você começar a perceber diferença <span class="text-purple font-bold">já nos primeiros dias.</span>
                    </p>
                </div>

                <div class="sticky-footer-btn mt-5">
                    <button class="btn gradient-btn w-full" onclick="goToStep('${step.nextStep}')">${step.buttonText}</button>
                </div>
            </div>
        `;
    }
    else if (step.type === "analysis") {
        let pAtual = parseInt(userAnswers["peso-atual"]) || 75;
        let alt = parseInt(userAnswers["altura"]) || 165;
        let imcVal = (pAtual / ((alt / 100) * (alt / 100))).toFixed(1);
        let statusIMC = "Sobrepeso";
        let nomeUsuario = userAnswers["nome"] || "Leoni";
        nomeUsuario = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1).toLowerCase();

        if (imcVal < 18.5) statusIMC = "Baixo peso";
        else if (imcVal < 25) statusIMC = "Peso normal";
        else if (imcVal >= 30) statusIMC = "Obesidade";

        contentHTML = `
            <div class="content-wrapper centered-padding pb-8">
                <h2 class="title text-center text-xl mb-4">Resultado da sua <span class="text-purple">análise</span>, <span class="text-purple">${nomeUsuario}</span></h2>
                
                <div class="resultado-imc-card">
                    <div class="resultado-imc-value text-purple">${imcVal}</div>
                    <div class="resultado-imc-status">Seu IMC: <span class="text-alert-red">${statusIMC}</span></div>
                    
                    <div class="resultado-alert-box">
                        <div class="resultado-alert-title">⚠️ Sinais de alerta identificados:</div>
                        <ul class="resultado-alert-list">
                            <li><span class="x-icon"></span> Metabolismo desacelerado</li>
                            <li><span class="x-icon"></span> Risco de acúmulo de gordura visceral</li>
                            <li><span class="x-icon"></span> Hormônios de saciedade desregulados</li>
                        </ul>
                    </div>
                </div>
                
                <div class="resultado-verde-box">
                    🌿 O segredo para secar: <strong style="color: #16a34a">ativar o GLP-1.</strong> A <strong style="color: #16a34a">Gelatina Mounjaro</strong> é o "interruptor" hormonal natural!
                </div>
                
                <h3 class="resultado-beneficios-title text-center mt-4 mb-3" style="font-size: 1rem; color: #111827; font-weight: 700;">Benefícios da <span class="text-purple">Gelatina Mounjaro 👇</span></h3>
                
                <div class="resultado-beneficios-list mb-4">
                    <div class="beneficio-item"><span class="check-circle"></span> Receita 100% Natural</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Ativa o GLP-1 do seu corpo</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Queima de Gordura localizada</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Regula o seu Metabolismo</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Leveza e corpo Desinchado</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Menos impulsos por doces</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Fácil de fazer e seguir</div>
                </div>

                <div class="testimonial-card shadow-sm mb-4" style="border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px rgba(0,0,0,0.02)">
                    <img src="assets/gelatina_resultado-CbO72sN0.png" class="testimonial-img" alt="Antes e Depois" style="width: 100%; display: block;">
                    <div class="testimonial-footer bg-white" style="padding: 1rem;">
                        <div class="testimonial-title font-bold text-center" style="font-size: 1rem; color: #1f2937;">"Perdi 12kg em 5 semanas!"</div>
                        <div class="testimonial-author text-center text-gray-500 mt-1" style="font-size: 0.75rem; color: #6b7280;">Maria, 32 anos - São Paulo</div>
                        <div class="stars text-center mt-1" style="font-size: 0.9rem;">⭐⭐⭐⭐⭐</div>
                    </div>
                </div>
                
                <button class="btn gradient-btn w-full mt-2" style="font-size: 1.1rem; padding: 1rem;" onclick="goToStep('${step.nextStep}')">Continuar</button>
            </div>
        `;
    }
    else if (step.type === "como-usar") {
        contentHTML = `
            <div class="content-wrapper centered-padding pb-8">
                <h2 class="title text-center text-xl mb-1">Como usar a <span class="text-purple font-bold" style="font-weight: 800;">Gelatina Mounjaro</span></h2>
                <p class="subtitle text-center mt-1 mb-4" style="color: #9ca3af; font-size: 0.95rem;">Simples, prático e eficaz</p>

                <div class="como-usar-image-container mx-auto mb-4" style="text-align: center;">
                    <img src="assets/mulher_gelatina_calendario-CcxgGxU0.png" alt="Como usar" class="img-fluid" style="max-width: 250px; margin: 0 auto; display: block;">
                </div>

                <div class="como-usar-steps-card">
                    <div class="como-usar-step-item">
                        <div class="step-circle bg-orange">1</div>
                        <div class="step-text">
                            <div class="step-title">Prepare a gelatina</div>
                            <div class="step-desc">Receita simples do app</div>
                        </div>
                        <div class="step-icon">✨</div>
                    </div>
                    <div class="step-divider"></div>
                    <div class="como-usar-step-item">
                        <div class="step-circle bg-purple">2</div>
                        <div class="step-text">
                            <div class="step-title">Consuma 2x ao dia</div>
                            <div class="step-desc">Manhã e antes de dormir</div>
                        </div>
                        <div class="step-icon">🕘</div>
                    </div>
                    <div class="step-divider"></div>
                    <div class="como-usar-step-item">
                        <div class="step-circle bg-green">3</div>
                        <div class="step-text">
                            <div class="step-title">Siga por 30 dias</div>
                            <div class="step-desc">Protocolo completo</div>
                        </div>
                        <div class="step-icon">🗓️</div>
                    </div>
                </div>

                <div class="como-usar-timeline-card mt-4">
                    <div class="timeline-nodes">
                        <div class="timeline-line-bg"></div>
                        <div class="node">
                            <div class="node-icon">🌅</div>
                            <div class="node-title">Manhã</div>
                            <div class="node-desc">Em jejum</div>
                        </div>
                        <div class="node">
                            <div class="node-icon">✨</div>
                            <div class="node-title">Dia</div>
                            <div class="node-desc">Sem fome</div>
                        </div>
                        <div class="node">
                            <div class="node-icon">🌙</div>
                            <div class="node-title">Noite</div>
                            <div class="node-desc">Antes de dormir</div>
                        </div>
                    </div>
                </div>

                <div class="sticky-footer-btn mt-6">
                    <button class="btn commit-btn w-full flex-center" onclick="goToStep('${step.nextStep}')">${step.buttonText}</button>
                </div>
            </div>
        `;
    }
    else if (step.type === "radio-image-top") {
        contentHTML = `
            <div class="content-wrapper centered-padding pb-8">
                <div style="max-width: 480px; margin: 0 auto; width: 100%;">
                    <div class="radio-img-top-container mx-auto mb-2" style="display: flex; justify-content: center; position: relative; max-width: 280px;">
                        <img src="${step.image}" alt="Transformação" class="img-fluid" style="height: 280px; width: 100%; object-fit: contain; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05));">
                        <div class="animated-arrow-right">›</div>
                    </div>
                    
                    <div class="text-center" style="margin-top: -15px; margin-bottom: 20px; position: relative;">
                        <div style="background: linear-gradient(90deg, #d946ef, #ec4899); color: white; padding: 6px 16px; border-radius: 20px; font-weight: 700; font-size: 0.70rem; display: inline-block; box-shadow: 0 4px 6px rgba(236, 72, 153, 0.25); letter-spacing: 0.5px; position: relative; z-index: 10;">
                            ${step.badge}
                        </div>
                    </div>

                    <h2 class="title text-center text-xl mb-6" style="font-weight: 700; color: #1f2937; line-height: 1.4; font-size: 1.25rem;">
                        ${step.title}
                    </h2>
                    
                    <div class="options-list">
                        ${step.options.map(opt => `
                            <label class="option-row" style="padding: 1rem 1.25rem;" onclick="handleRadioSelect('${step.id}', '${opt.id}', '${step.nextStep}', ${step.autoAdvance})">
                                <div class="flex-center">
                                    <span class="icon" style="font-size: 1.5rem; margin-right: 12px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">${opt.icon}</span>
                                    <div class="label-wrapper">
                                        <span class="label" style="font-weight: 600; color: #4b5563; font-size: 0.95rem;">${opt.label}</span>
                                    </div>
                                </div>
                                <input type="radio" name="${step.id}" value="${opt.id}" class="radio-input">
                                <span class="custom-radio"></span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            </div>
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
    else if (step.type === "circular-loading") {
        contentHTML = `
            <div class="circular-loading-container centered-padding" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 4rem;">
                
                <div style="position: relative; width: 140px; height: 140px; margin: 0 auto;">
                    <svg viewBox="0 0 36 36" style="width: 100%; height: 100%; transform: rotate(-90deg);">
                        <!-- Background Circle -->
                        <path stroke="#e5e7eb" stroke-width="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <!-- Progress Circle -->
                        <path id="circular-progress-path" stroke="url(#pink-purple-grad)" stroke-width="3" stroke-dasharray="0, 100" stroke-linecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" style="transition: stroke-dasharray 0.3s ease-out;" />
                        <defs>
                            <linearGradient id="pink-purple-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#9b4dca" />
                                <stop offset="100%" stop-color="#ec4899" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div id="circular-percent-text" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1.6rem; font-weight: 700; color: #a855f7;">0%</div>
                </div>

                <div class="flex-center mt-5" style="gap: 10px;">
                    <span style="font-size: 1.5rem; opacity: 0.8;">📊</span>
                    <span id="circular-loading-text" style="font-size: 1.1rem; font-weight: 500; color: #9ca3af;">Avaliando seu perfil corporal...</span>
                </div>

                <div class="loading-dots" style="display: flex; gap: 8px; margin-top: 1.25rem; justify-content: center;">
                    <div class="loading-dot active" style="width: 10px; height: 10px; border-radius: 50%; background-color: #a855f7; transition: all 0.3s;"></div>
                    <div class="loading-dot" style="width: 10px; height: 10px; border-radius: 50%; background-color: #ec4899; transition: all 0.3s; opacity: 0.4;"></div>
                    <div class="loading-dot" style="width: 10px; height: 10px; border-radius: 50%; background-color: #ec4899; transition: all 0.3s; opacity: 0.4;"></div>
                    <div class="loading-dot" style="width: 10px; height: 10px; border-radius: 50%; background-color: #a855f7; transition: all 0.3s; opacity: 0.4;"></div>
                    <div class="loading-dot" style="width: 10px; height: 10px; border-radius: 50%; background-color: #6b7280; transition: all 0.3s; opacity: 0.4;"></div>
                </div>

                <p style="margin-top: 1.5rem; font-size: 0.85rem; color: #9ca3af;">Aguarde um momento...</p>
            </div>
        `;

        let progress = 0;
        let pId = setInterval(() => {
            progress += 1; // 100 ticks total
            if (progress > 100) {
                clearInterval(pId);
                setTimeout(() => goToStep(step.nextStep), 300);
                return;
            }

            const path = document.getElementById("circular-progress-path");
            const txt = document.getElementById("circular-percent-text");
            const loadingText = document.getElementById("circular-loading-text");
            const dots = document.querySelectorAll('.loading-dots .loading-dot');

            if (path) path.style.strokeDasharray = progress + ", 100";
            if (txt) txt.innerText = progress + "%";

            // Update loading text organically during the 30 seconds
            if (loadingText) {
                if (progress > 85) loadingText.innerText = "Finalizando a análise do perfil...";
                else if (progress > 65) loadingText.innerText = "Calculando seu metabolismo ideal...";
                else if (progress > 45) loadingText.innerText = "Buscando o protocolo de acordo...";
                else if (progress > 25) loadingText.innerText = "Cruzando dados da sua rotina...";
            }

            // Animate dots slightly
            if (dots && dots.length > 0) {
                let activeDotIndex = Math.floor(progress / 5) % 5;
                dots.forEach((dot, index) => {
                    dot.style.opacity = index === activeDotIndex ? "1" : "0.4";
                });
            }

        }, 100); // 1% per 100ms = 100% in 10 seconds
    }
    else if (step.type === "vsl") {
        contentHTML = `
            <div class="content-wrapper centered-padding pb-8">
                <style>
                    .vsl-wrapper{
                        position:relative;
                        width:100%;
                        max-width:360px;
                        margin: 20px auto;
                        aspect-ratio: 9 / 16;
                        overflow:hidden;
                        border-radius:20px;
                        box-shadow: 0 0 20px #ff47c550, 0 0 5px #ff47c580;
                    }

                    .vsl-wrapper video{
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    }

                    /* overlay estilo VSL */
                    .vsl-overlay{
                        position:absolute;
                        top:50%;
                        left:50%;
                        transform:translate(-50%,-50%);
                        background:#ff3ab5;
                        padding:30px 25px;
                        border-radius:14px;
                        text-align:center;
                        color:white;
                        cursor:pointer;
                        z-index:10;
                        width:230px;
                        box-shadow:0 8px 25px rgba(0,0,0,0.3);
                        animation: vsl-mute-pulse 2s ease-in-out infinite;
                    }

                    .vsl-overlay-top{
                        font-size:20px;
                        font-weight:bold;
                        margin-bottom:15px;
                    }

                    .vsl-overlay-icon{
                        font-size:42px;
                        margin-bottom:15px;
                        line-height: 1;
                    }

                    .vsl-overlay-bottom{
                        font-size:18px;
                    }

                    /* barra fake */
                    .fakebar{
                        position:absolute;
                        bottom:0;
                        left:0;
                        width:100%;
                        height:10px;
                        background:#222;
                    }

                    .fakeprogress{
                        height:100%;
                        width:0%;
                        background:#ff2aa5;
                        transition:width .3s;
                    }

                    /* botão play pause */
                    .playbtn{
                        position:absolute;
                        bottom:20px;
                        left:20px;
                        background:#ff2aa5;
                        border:none;
                        width:40px;
                        height:40px;
                        border-radius:50%;
                        color:white;
                        font-size:16px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        cursor:pointer;
                        z-index:999999;
                    }

                    @keyframes paradise-fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                    @keyframes vsl-mute-pulse { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.05); } }
                </style>

                <h2 style="font-size: 1.15rem; font-weight: 800; text-align: center; color: #1f2937; margin-bottom: 0.25rem; line-height: 1.4;">
                    Agora assista à explicação rápida de <span style="color: #a855f7;">1 Minuto</span><br>
                    <span style="font-size: 0.95em; color: #ec4899;">e entenda por que esse método está<br>chamando atenção 👀</span>
                </h2>
                
                <div style="text-align: center; margin-bottom: 0.5rem; margin-top: 1rem;">
                    <div style="background-color: #fbbf24; padding: 6px 16px; border-radius: 8px; font-weight: 700; font-size: 0.85rem; color: #111827; display: inline-block;">Clique no vídeo para Assistir ⬇️</div>
                </div>

                <div class="vsl-wrapper">
                    <div class="vsl-overlay" id="vsl-overlay">
                        <div class="vsl-overlay-top">¡Tu video ya comenzó!</div>
                        <div class="vsl-overlay-icon">🔇</div>
                        <div class="vsl-overlay-bottom">Haz clic para activar el sonido</div>
                    </div>

                    <video
                        id="vsl-player"
                        playsinline
                        autoplay
                        muted
                        preload="auto"
                        controlslist="nodownload"
                        disablepictureinpicture
                        poster="https://t3.ftcdn.net/jpg/05/25/58/46/360_F_525584616_lKJ9605fRFWk8wxJRLZfU9lonvJzV3fa.jpg"
                    >
                        <source src="https://res.cloudinary.com/duie23dpv/video/upload/v1773094770/mdpfozi5jsawphueab5d.mp4" type="video/mp4">
                    </video>

                    <button class="playbtn" id="playbtn">❚❚</button>

                    <div class="fakebar">
                        <div class="fakeprogress" id="fakeprogress"></div>
                    </div>
                </div>

                <button id="vsl-continue-btn" class="btn primary-btn mt-4 w-full" style="display: none; animation: paradise-fadeInUp 0.5s forwards;" onclick="goToStep('${step.nextStep}')">Continuar 🚀</button>

            </div>
        `;

        setTimeout(() => {
            const playerEl = document.getElementById('vsl-player');
            if (!playerEl || typeof Plyr === 'undefined') return;

            const player = new Plyr('#vsl-player', {
                controls: [],
                fullscreen: { enabled: false, fallback: false },
                clickToPlay: true
            });

            // Tenta dar play mutado assim que carregar
            player.muted = true;
            let playPromise = player.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => { });
            }

            const overlay = document.getElementById("vsl-overlay");
            if (overlay) {
                overlay.onclick = function () {
                    player.muted = false;
                    overlay.style.display = "none";
                }
            }

            const progress = document.getElementById("fakeprogress");
            const continueBtn = document.getElementById('vsl-continue-btn');

            player.on('timeupdate', () => {
                if (!player.duration) return;
                let percent = (player.currentTime / player.duration) * 100;
                if (progress) progress.style.width = percent + "%";

                // Allow continuation slightly before the video totally finishes
                if (percent >= 85 || player.currentTime > 50) {
                    if (continueBtn) continueBtn.style.display = 'block';
                }
            });

            player.on('ended', () => {
                if (continueBtn) continueBtn.style.display = 'block';
            });

            const btn = document.getElementById("playbtn");

            player.on('play', () => {
                if (btn) btn.innerHTML = "❚❚";
            });

            player.on('pause', () => {
                if (btn) btn.innerHTML = "▶";
            });

            if (btn) {
                btn.onclick = function (e) {
                    e.stopPropagation();
                    if (player.playing || !player.paused) {
                        player.pause();
                        btn.innerHTML = "▶";
                    } else {
                        player.play();
                        btn.innerHTML = "❚❚";
                    }
                }
            }
        }, 50);
    }
    else if (step.type === "loading-screen") {
        contentHTML = `
            <div class="circular-loading-container centered-padding" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 4rem;">
                
                <div style="position: relative; width: 140px; height: 140px; margin: 0 auto;">
                    <svg viewBox="0 0 36 36" style="width: 100%; height: 100%; transform: rotate(-90deg);">
                        <!-- Background Circle -->
                        <path stroke="#e5e7eb" stroke-width="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <!-- Progress Circle -->
                        <path id="check-progress-path" stroke="url(#pink-purple-grad2)" stroke-width="3" stroke-dasharray="0, 100" stroke-linecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" style="transition: stroke-dasharray 0.3s ease-out;" />
                        <defs>
                            <linearGradient id="pink-purple-grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#9b4dca" />
                                <stop offset="100%" stop-color="#ec4899" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div id="check-percent-text" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1.6rem; font-weight: 700; color: #1e293b;">0%</div>
                </div>

                <div class="mt-5 text-center">
                    <div id="check-loading-title" style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 1.5rem;">Verificando seus dados...</div>
                </div>

                <div style="display:flex; flex-direction: column; gap: 12px; width: 100%; max-width: 280px; margin: 0 auto; margin-top: 0.5rem;">
                    
                    <div id="check-item-1" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-1" style="width: 22px; height: 22px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:14px; height:14px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.85rem; font-weight: 500; color: #64748b;">Analisando suas respostas</span>
                    </div>

                    <div id="check-item-2" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-2" style="width: 22px; height: 22px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:14px; height:14px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.85rem; font-weight: 500; color: #64748b;">Calculando seu déficit calórico</span>
                    </div>

                    <div id="check-item-3" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-3" style="width: 22px; height: 22px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:14px; height:14px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.85rem; font-weight: 500; color: #64748b;">Selecionando ingredientes ideias</span>
                    </div>

                    <div id="check-item-4" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-4" style="width: 22px; height: 22px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:14px; height:14px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.85rem; font-weight: 500; color: #64748b;">Verificação concluída!</span>
                    </div>

                </div>

            </div>
        `;

        let progress = 0;
        let pId = setInterval(() => {
            progress += 1;
            if (progress >= 100) {
                progress = 100;
                clearInterval(pId);
                setTimeout(() => goToStep(step.nextStep), 300);
            }

            const path = document.getElementById("check-progress-path");
            const txt = document.getElementById("check-percent-text");

            if (path) path.style.strokeDasharray = progress + ", 100";
            if (txt) txt.innerText = progress + "%";

            // Ativar itens ao longo do tempo (25%, 50%, 75%, 100%)
            const markActive = (num) => {
                const item = document.getElementById(`check-item-${num}`);
                const icon = document.getElementById(`check-icon-${num}`);
                if (item) {
                    item.style.opacity = "1";
                    item.querySelector('span').style.color = "#1e293b";
                }
                if (icon) icon.style.background = "#22c55e"; // Green check
            }

            if (progress > 10) markActive(1);
            if (progress > 40) markActive(2);
            if (progress > 70) markActive(3);
            if (progress > 95) {
                markActive(4);
            }

        }, 100); // 10 seconds total
    }
    else if (step.type === "loading-final") {
        contentHTML = `
            <div class="final-loading-container centered-padding" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 3rem; padding-bottom: 3rem;">
                
                <div style="width: 100%; max-width: 320px; margin: 0 auto 1.5rem auto; text-align: center;">
                    <img src="assets/ChatGPT Image 9 de mar. de 2026, 20_22_25.png" style="width: 100%; max-width: 280px; height: auto;" alt="Protocolo Pronto">
                </div>

                <div style="display:flex; flex-direction: column; gap: 12px; width: 100%; max-width: 280px; margin: 0 auto;">
                    
                    <div id="check-item-f-1" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-f-1" style="width: 20px; height: 20px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:12px; height:12px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.82rem; font-weight: 600; color: #64748b;">Perfil metabólico analisado</span>
                    </div>

                    <div id="check-item-f-2" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-f-2" style="width: 20px; height: 20px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:12px; height:12px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.82rem; font-weight: 600; color: #64748b;">Meta de peso calculada</span>
                    </div>

                    <div id="check-item-f-3" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-f-3" style="width: 20px; height: 20px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:12px; height:12px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.82rem; font-weight: 600; color: #64748b;">Compatibilidade verificada</span>
                    </div>

                    <div id="check-item-f-4" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-f-4" style="width: 20px; height: 20px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:12px; height:12px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.82rem; font-weight: 600; color: #64748b;">Protocolo de 30 dias montado</span>
                    </div>

                    <div id="check-item-f-5" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-f-5" style="width: 20px; height: 20px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:12px; height:12px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.82rem; font-weight: 600; color: #64748b;">Bônus exclusivos selecionados</span>
                    </div>

                    <div id="check-item-f-6" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-f-6" style="width: 20px; height: 20px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:12px; height:12px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.82rem; font-weight: 600; color: #64748b;">Oferta especial preparada</span>
                    </div>

                </div>

                <div class="mt-6 w-full" style="max-width: 280px; margin-left: auto; margin-right: auto;">
                    <div style="width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div id="final-loading-bar-fill" style="width: 0%; height: 100%; background: linear-gradient(90deg, #9b4dca, #ec4899, #22c55e); transition: width 0.3s ease;"></div>
                    </div>
                </div>
                <p style="margin-top: 0.75rem; font-size: 0.75rem; color: #9ca3af; text-align: center;">Aguarde enquanto finalizamos tudo para você...</p>

            </div>
        `;

        let progress = 0;
        let pId = setInterval(() => {
            progress += 1;
            if (progress >= 100) {
                progress = 100;
                clearInterval(pId);
                setTimeout(() => goToStep(step.nextStep), 300);
            }

            const fill = document.getElementById("final-loading-bar-fill");
            if (fill) fill.style.width = progress + "%";

            // Mark items active progressively
            const markActive = (num) => {
                const item = document.getElementById(`check-item-f-${num}`);
                const icon = document.getElementById(`check-icon-f-${num}`);
                if (item) {
                    item.style.opacity = "1";
                    item.querySelector('span').style.color = "#1e293b";
                }
                if (icon) icon.style.background = "#22c55e"; // Green check
            }

            if (progress > 5) markActive(1);
            if (progress > 20) markActive(2);
            if (progress > 40) markActive(3);
            if (progress > 60) markActive(4);
            if (progress > 80) markActive(5);
            if (progress > 95) markActive(6);

        }, 100); // 10 seconds total
    }
    else if (step.type === "body-selection") {
        contentHTML = `
            <h2 class="title text-center">${step.title}</h2>
            <p class="subtitle text-center mt-2 mb-4">${step.subtitle}</p>
            
            <div class="body-selection-container">
                <img src="${step.image}" alt="Personagem" class="body-character">
                
                <div class="body-overlay overlay-corpo-todo" id="overlay-corpo-todo"></div>
                <div class="body-overlay overlay-papada" id="overlay-papada"></div>
                <div class="body-overlay overlay-bracos" id="overlay-bracos"></div>
                <div class="body-overlay overlay-bracos-2" id="overlay-bracos-2"></div>
                <div class="body-overlay overlay-cintura" id="overlay-cintura"></div>
                <div class="body-overlay overlay-cintura-2" id="overlay-cintura-2"></div>
                <div class="body-overlay overlay-barriga" id="overlay-barriga"></div>
                <div class="body-overlay overlay-gluteos" id="overlay-gluteos"></div>
                <div class="body-overlay overlay-gluteos-2" id="overlay-gluteos-2"></div>
                <div class="body-overlay overlay-culotes" id="overlay-culotes"></div>
                <div class="body-overlay overlay-culotes-2" id="overlay-culotes-2"></div>
                <div class="body-overlay overlay-coxas" id="overlay-coxas"></div>
                <div class="body-overlay overlay-coxas-2" id="overlay-coxas-2"></div>

                ${step.options.map(opt => `
                    <div class="body-hotspot hotspot-${opt.id}" onclick="toggleBodyPart(this, '${opt.id}')">
                        <div class="body-dot"></div>
                        <div class="body-line"></div>
                        <div class="body-label">${opt.label}</div>
                    </div>
                `).join('')}
            </div>
            
            <button class="btn primary-btn mt-5 w-full" onclick="handleBodySelectionSubmit('${step.id}', '${step.nextStep}')">${step.buttonText}</button>
            <div id="body-selection-error" style="color: #ec4899; text-align: center; font-size: 0.85rem; margin-top: 12px; display: none; font-weight: 600;">Por favor, selecione pelo menos uma área.</div>
        `;
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
            <div class="checkout-container fade-in" style="background: #fafafa; padding-bottom: 40px; min-height: 100vh;">
                <!-- Pink Banner Top -->
                <div style="background: #e879f9; color: white; text-align: center; padding: 8px 10px; font-weight: 700; font-size: 0.85rem; border-radius: 8px; margin: 10px auto; max-width: 480px; box-shadow: 0 4px 10px rgba(232, 121, 249, 0.3);">
                    ⏳ Seu protocolo expira em: <span id="countdown-timer">06:26</span>
                </div>

                <div class="checkout-header" style="text-align: center; max-width: 480px; margin: 0 auto; padding: 0 10px;">
                    <div class="success-icon" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid #22c55e; display: flex; align-items: center; justify-content: center; margin: 15px auto 10px auto; background: #f0fdf4; box-shadow: 0 0 15px rgba(34,197,94,0.15);">
                        <svg style="width: 20px; height: 20px; color: #22c55e;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    
                    <h2 class="title" style="font-size: 1.15rem; font-weight:800; line-height: 1.4; color: #1e293b; margin-top: 5px;">
                        <span style="color: #c084fc; font-size: 1.25rem;">${nomeUsuario}</span>, seu<br>
                        <span style="display:inline-block; margin-top:4px;">Plano da Gelatina de 30 dias foi</span><br>
                        <span style="background: #dcfce7; color: #16a34a; padding: 4px 12px; border-radius: 6px; font-size:1.15rem; display:inline-block; margin-top: 5px;">Gerado com Sucesso!</span>
                    </h2>
                    
                    <p class="subtitle text-center mt-3" style="font-size: 0.75rem; color: #64748b; line-height: 1.4;">Ele é exclusivo e gerado só uma vez, não saia dessa página para não perdê-lo.</p>

                    <div style="margin: 20px 0;">
                        <img src="assets/antes_depois_realistic-BQbSAZb6.png" alt="Antes e Depois Realistic" style="width: 100%; max-width: 280px; height: auto;">
                    </div>
                </div>

                <div class="checkout-card mt-3 mx-auto" style="max-width: 480px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f1f5f9; background: white;">
                    <div class="card-header" style="background: linear-gradient(90deg, #d946ef, #ec4899); color: white; padding: 12px; text-align: center;">
                        <div style="font-size: 0.7rem; font-weight: 700; opacity: 0.9; letter-spacing: 1px;">SEU PLANO EXCLUSIVO</div>
                        <b style="font-size: 1.1rem; display: block; margin-top: 2px;">1 Mês de Tratamento 🧊</b>
                    </div>
                    <div class="card-body" style="padding: 1.25rem;">
                        <p class="text-center text-sm mb-4" style="color: #64748b; font-size: 0.8rem; line-height: 1.4;"><span style="color: #ec4899; font-weight: 700;">${nomeUsuario}</span>, seguindo o protocolo certinho, veja o que vai acontecer:</p>
                        
                        <div class="timeline-vertical">
                            <div class="t-row" style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 12px;">
                                <div class="t-icon" style="font-size: 1rem; background: #faf5ff; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">✨</div>
                                <div class="t-content" style="flex: 1;">
                                    <div class="t-title text-purple" style="font-size: 0.7rem; font-weight: 700; margin-bottom: 2px; text-transform: uppercase;">SEMANA 1</div>
                                    <div class="t-desc" style="font-size: 0.8rem; color: #1e293b; font-weight: 600;">Desincha e primeiros resultados</div>
                                </div>
                            </div>
                            <div class="t-row" style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 12px;">
                                <div class="t-icon" style="font-size: 1rem; background: #faf5ff; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; opacity:0.8;">📉</div>
                                <div class="t-content" style="flex: 1;">
                                    <div class="t-title text-purple" style="font-size: 0.7rem; font-weight: 700; margin-bottom: 2px; text-transform: uppercase;">SEMANA 2</div>
                                    <div class="t-desc" style="font-size: 0.8rem; color: #1e293b; font-weight: 600;">Perda de até ${Math.max(2, meta1)} kg</div>
                                </div>
                            </div>
                            <div class="t-row" style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 12px;">
                                <div class="t-icon" style="font-size: 1rem; background: #faf5ff; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; opacity:0.6;">⚡</div>
                                <div class="t-content" style="flex: 1;">
                                    <div class="t-title text-purple" style="font-size: 0.7rem; font-weight: 700; margin-bottom: 2px; text-transform: uppercase;">SEMANA 3</div>
                                    <div class="t-desc" style="font-size: 0.8rem; color: #1e293b; font-weight: 600;">Perda de ${Math.max(4, meta1)} a ${Math.max(6, meta2)} kg</div>
                                </div>
                            </div>
                            <div class="t-row" style="padding: 10px 0; display: flex; align-items: center; gap: 12px;">
                                <div class="t-icon" style="font-size: 1rem; background: #f0fdf4; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; opacity:0.8;">🔥</div>
                                <div class="t-content" style="flex: 1; display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <div class="t-title" style="color: #16a34a; font-size: 0.7rem; font-weight: 700; margin-bottom: 2px; text-transform: uppercase;">SEMANA 4</div>
                                        <div class="t-desc" style="font-size: 0.8rem; color: #1e293b; font-weight: 600;">Perda de ${Math.max(7, meta2)} a ${Math.max(9, meta3)} kg</div>
                                    </div>
                                    <span style="background: #22c55e; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.65rem; font-weight: 800;">META</span>
                                </div>
                            </div>
                        </div>

                        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 10px; margin-top: 15px; text-align: center;">
                            <span style="font-size: 0.75rem; color: #16a34a; font-weight: 700;">🎉 Resultado esperado: -${Math.max(7, meta2)} a -${Math.max(9, meta3)} kg em 30 dias</span>
                        </div>
                    </div>
                </div>

                <div class="checkout-card mt-5 mx-auto" style="max-width: 480px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f1f5f9; background: white;">
                    <div class="card-header" style="background: #a855f7; color: white; text-align: center; padding: 16px 12px; line-height:1.3;">
                        <b style="font-size:1.05rem">Gelatina Mounjaro + APP Protocolo Completo</b><br>
                        <span style="font-size:0.75rem; opacity:0.9; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; display: inline-block; margin-top: 4px;">ACESSO VITALÍCIO</span>
                    </div>
                    <div class="card-body" style="padding: 1.5rem 1.25rem;">
                        <div class="text-center py-2" style="display: flex; justify-content: center;">
                             <img src="assets/bowl-gelatina-novo.jpg" style="width: 140px; border-radius: 12px; max-width:100%; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" alt="Gelatina Mounjaro">
                        </div>
                        <ul class="check-list mt-4" style="list-style: none; padding: 0;">
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.8rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Receita completa da Gelatina Mounjaro
                            </li>
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.8rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Protocolo de 30 dias passo a passo
                            </li>
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.8rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Acesso ao Aplicativo Exclusivo
                            </li>
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.8rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Lista completa dos ingredientes
                            </li>
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.8rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Dicas para acelerar resultados
                            </li>
                            <li style="display:flex; align-items:center; gap:8px; font-size: 0.8rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 11px; font-weight: bold;">✓</div>
                                Acesso vitalício ao app
                            </li>
                        </ul>
                        
                        <div class="bonus-box mt-4" style="background:#faf5ff; border: 1px solid #f3e8ff; border-radius:12px; padding:12px;">
                            <div class="bonus-item text-purple" style="font-size:0.75rem; font-weight:700; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                                <span>🎁</span> BÔNUS: Dietas completas
                            </div>
                            <div class="bonus-item text-purple" style="font-size:0.75rem; font-weight:700; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                                <span>🎁</span> BÔNUS: Receitas doces saudáveis
                            </div>
                            <div class="bonus-item text-purple" style="font-size:0.75rem; font-weight:700; display:flex; align-items:center; gap:8px;">
                                <span>🎁</span> BÔNUS: Aulas em vídeo de pilates na parede
                            </div>
                        </div>

                        <div class="price-section mt-5 text-center">
                            <div class="crossed-price" style="text-decoration: line-through; color: #94a3b8; font-size: 0.75rem;">TUDO ISSO DE R$ 109,90</div>
                            <div class="mt-1" style="color: #64748b; font-weight:600; font-size: 0.75rem;">POR APENAS</div>
                            <div class="main-price text-green" style="font-size: 3.5rem; color: #16a34a; font-weight: 900; line-height:1; margin-top:0.25rem;">R$ 27</div>
                            <div class="installments mt-1" style="color: #64748b; font-size: 0.8rem;">Ou 6x de R$5,32</div>
                        </div>
                        
                        <button class="btn green-cta mt-5 w-full" onclick="handlePurchaseClick('https://pay.hotmart.com/J104701335C?bid=1772379518612')" style="background:#22c55e; color: white; border-radius:8px; padding:16px; font-size:1.1rem; font-weight: 800; border: none; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4); text-transform: uppercase;">QUERO COMEÇAR 🍓</button>
                    </div>
                </div>

                <div class="guarantee-card mt-5 mx-auto text-center p-4" style="max-width: 480px; background:#fffbeb; border: 1px solid #fef08a; border-radius: 12px;">
                    <img src="assets/selo-garantia.png" alt="Selo Garantia 30 Dias" class="guarantee-seal mx-auto mb-3" style="width: 100px; border-radius: 0; box-shadow: none;">
                    <div class="font-bold mb-2" style="font-size: 1rem; color: #1e293b;">Garantia de Reembolso</div>
                    <p style="font-size: 0.75rem; color: #64748b; margin-bottom: 0.5rem; line-height: 1.4;">Todo o produto tem garantia oficial de 7 dias, porém confiamos tanto em nossa fórmula que nossa garantia é de 30 dias corridos.</p>
                    <p style="font-size: 0.75rem; color: #64748b; line-height: 1.4;">Ou seja, se você não gostar, devolveremos seu dinheiro na hora, sem questionar.</p>
                </div>

                <div class="mx-auto mt-4" style="max-width: 480px;">
                    <button class="btn green-cta mt-2 w-full" onclick="handlePurchaseClick('https://pay.hotmart.com/J104701335C?bid=1772379518612')" style="background:#22c55e; color: white; border-radius:8px; padding:16px; font-size:1.1rem; font-weight: 800; border: none; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4); text-transform: uppercase;">QUERO COMEÇAR 🍓</button>
                </div>

                <div class="faq-container mt-8 mx-auto" style="max-width: 480px; text-align: left; padding-bottom: 30px; padding: 0 10px;">
                    <h3 class="font-bold text-center mb-4" style="color:#1e293b; font-size: 1.2rem;">❓ Perguntas Frequentes</h3>
                    
                    <div class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 10px; background: white;">
                        <h4 class="font-bold mb-1" style="color: #a855f7; font-size: 0.9rem;">A Gelatina Mounjaro realmente funciona?</h4>
                        <p style="font-size: 0.85rem; color: #64748b; line-height: 1.5; margin-top: 6px;">Sim, a fórmula é 100% natural, baseada em ingredientes comprovados que ativam de forma segura a queima de gordura sem causar efeitos colaterais.</p>
                    </div>
                    
                    <div class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 10px; background: white;">
                        <h4 class="font-bold mb-1" style="color: #a855f7; font-size: 0.9rem;">Quanto tempo leva para ver resultados?</h4>
                        <p style="font-size: 0.85rem; color: #64748b; line-height: 1.5; margin-top: 6px;">A maioria de nossas clientes sente uma grande desinflamação nos primeiros 3 a 5 dias e uma perda de peso notável ao finalizar a segunda semana.</p>
                    </div>

                    <div class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 10px; background: white;">
                        <h4 class="font-bold mb-1" style="color: #a855f7; font-size: 0.9rem;">É seguro? Tem efeitos colaterais?</h4>
                        <p style="font-size: 0.85rem; color: #64748b; line-height: 1.5; margin-top: 6px;">A receita e o protocolo não possuem contraindicação e não tem efeitos colaterais desde que usados sob acompanhamento saudável, todos os ingredientes são naturais.</p>
                    </div>

                    <div class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 10px; background: white;">
                        <h4 class="font-bold mb-1" style="color: #a855f7; font-size: 0.9rem;">Como vou receber o protocolo?</h4>
                        <p style="font-size: 0.85rem; color: #64748b; line-height: 1.5; margin-top: 6px;">Imediatamente após a confirmação da sua compra, você receberá um e-mail com o link para acessar todo o material no nosso Aplicativo Exclusivo.</p>
                    </div>
                    
                    <div class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 10px; background: white;">
                        <h4 class="font-bold mb-1" style="color: #a855f7; font-size: 0.9rem;">E se não funcionar para mim?</h4>
                        <p style="font-size: 0.85rem; color: #64748b; line-height: 1.5; margin-top: 6px;">Se por qualquer motivo você não se adaptar ao protocolo em 30 dias, basta entrar em contato solicitando o reembolso e devolveremos seu investimento.</p>
                    </div>

                    <div class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 10px; background: white;">
                        <h4 class="font-bold mb-1" style="color: #a855f7; font-size: 0.9rem;">O pagamento é seguro?</h4>
                        <p style="font-size: 0.85rem; color: #64748b; line-height: 1.5; margin-top: 6px;">Completamente seguro. Todo o pagamento é processado via Hotmart e Braip, duas das plataformas mais seguras e confiáveis da América Latina.</p>
                    </div>

                    <div class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 10px; background: white;">
                        <h4 class="font-bold mb-1" style="color: #a855f7; font-size: 0.9rem;">Preciso comprar ingredientes caros?</h4>
                        <p style="font-size: 0.85rem; color: #64748b; line-height: 1.5; margin-top: 6px;">Não, a ideia da Gelatina Mounjaro é justamente usar ingredientes que você encontra facilmente em qualquer supermercado e com baixo custo.</p>
                    </div>
                    
                    <button class="btn green-cta mt-6 w-full mb-3" onclick="handlePurchaseClick('https://pay.hotmart.com/J104701335C?bid=1772379518612')" style="background:#22c55e; color: white; border-radius:8px; padding:16px; font-size:1.1rem; font-weight: 800; border: none; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4); text-transform: uppercase;">QUERO COMEÇAR 🍓</button>
                    
                    <div class="text-center text-muted mb-4" style="font-size: 0.70rem; color: #94a3b8; margin-top: 15px; display:flex; align-items:center; justify-content:center; gap: 4px;">
                        <span>🔒 Compra 100% segura • Garantia de 30 dias</span>
                    </div>
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

    // Setup Back button visibility
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        if (stepId !== "start" && step.type !== "loading-screen" && step.type !== "checkout" && step.type !== "dynamic-promise") {
            backBtn.style.display = "flex";
        } else {
            backBtn.style.display = "none";
        }
    }

    currentStepId = stepId;
}

function goToStep(nextStepId) {
    if (nextStepId) {
        if (currentStepId && currentStepId !== "start") {
            // Check if we are not navigating to the exact same step
            if (stepHistory[stepHistory.length - 1] !== currentStepId) {
                stepHistory.push(currentStepId);
            }
        } else if (currentStepId === "start") {
            stepHistory.push("start");
        }
        renderStep(nextStepId);
    }
}

function goBack() {
    if (stepHistory.length > 0) {
        const prevStep = stepHistory.pop();
        renderStep(prevStep);
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

function toggleBodyPart(el, id) {
    const isSelected = el.classList.toggle('selected');
    const overlay = document.getElementById('overlay-' + id);
    if (overlay) {
        if (isSelected) overlay.classList.add('active');
        else overlay.classList.remove('active');
    }

    // For doubled parts like arms/legs
    const overlay2 = document.getElementById('overlay-' + id + '-2');
    if (overlay2) {
        if (isSelected) overlay2.classList.add('active');
        else overlay2.classList.remove('active');
    }

    if (id === 'corpo-todo') {
        const allHotspots = document.querySelectorAll('.body-hotspot');
        const allOverlays = document.querySelectorAll('.body-overlay');
        if (isSelected) {
            allHotspots.forEach(h => h.classList.add('selected'));
            allOverlays.forEach(o => o.classList.add('active'));
        } else {
            allHotspots.forEach(h => h.classList.remove('selected'));
            allOverlays.forEach(o => o.classList.remove('active'));
        }
    } else {
        if (!isSelected) {
            const corpoTodo = document.querySelector('.hotspot-corpo-todo');
            if (corpoTodo) corpoTodo.classList.remove('selected');
        }
    }

    const errorMsg = document.getElementById('body-selection-error');
    if (errorMsg && errorMsg.style.display === 'block') {
        errorMsg.style.display = 'none';
    }
}

function handleBodySelectionSubmit(stepId, nextStep) {
    const selected = Array.from(document.querySelectorAll('.body-hotspot.selected')).map(el => {
        const idClass = Array.from(el.classList).find(c => c.startsWith('hotspot-'));
        return idClass ? idClass.replace('hotspot-', '') : null;
    }).filter(id => id !== null);

    const errorMsg = document.getElementById('body-selection-error');
    if (selected.length === 0) {
        if (errorMsg) errorMsg.style.display = 'block';
        return;
    }

    userAnswers[stepId] = selected;
    goToStep(nextStep);
}

// Start app
document.addEventListener("DOMContentLoaded", initApp);
