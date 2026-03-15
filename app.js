const stepsData = [
    {
        id: "start",
        type: "welcome",
        hideProgress: true,
        image: "assets/capa1.webp",
        subtitle: "Descubre cómo activar tu metabolismo y perder hasta <span class='text-purple'>12kg en 30 días</span> con la <span class='text-purple'>Gelatina Mounjaro!</span>",
        buttonText: "¡Quiero saber si funciona para mí! 🔥",
        footerText: "✓ 127.000+ mujeres &nbsp;•&nbsp; ✓ 100% Natural",
        nextStep: "intro"
    },
    {
        id: "intro",
        type: "intro",
        progress: 5,
        title: "¡Comencemos tu viaje! 🚀",
        subtitle: "Responde algunas preguntas rápidas para personalizar tu plan.",
        buttonText: "¡Vamos! 💪",
        nextStep: "idade"
    },
    {
        id: "idade",
        type: "radio",
        progress: 12,
        title: "¿Cuál es tu edad?",
        subtitle: "Selecciona tu rango de edad.",
        options: [
            { id: "18-27", label: "18 - 27 años", icon: "🌸" },
            { id: "28-39", label: "28 - 39 años", icon: "🌹" },
            { id: "40-54", label: "40 - 54 años", icon: "🌺" },
            { id: "54+", label: "54+ años", icon: "🌷" }
        ],
        nextStep: "corpo",
        autoAdvance: true
    },
    {
        id: "corpo",
        type: "image-grid",
        progress: 22,
        title: "¿Cómo clasificas <span class='text-purple'>tu cuerpo?</span>",
        subtitle: "Selecciona la opción que mejor te describa",
        options: [
            { id: "medio", label: "Medio", image: "assets/corpo_medio.webp" },
            { id: "plus-size", label: "Plus Size", image: "assets/corpo_plussize.webp" },
            { id: "acima-peso", label: "Con sobrepeso", image: "assets/corpo_acimadopeso.webp" },
            { id: "sobrepeso", label: "Sobrepeso alto", image: "assets/corpo_sobrepeso.webp" }
        ],
        nextStep: "body-areas",
        autoAdvance: true
    },
    {
        id: "body-areas",
        type: "body-selection",
        progress: 28,
        title: "¿En qué áreas quieres <span class=\'text-purple\'>perder más grasa?</span>",
        subtitle: "Toca las áreas deseadas.",
        image: "assets/body_silhouette_new-BD3Ymrmf.jpg",
        options: [
            { id: "papada", label: "Papada", icon: "🌝" },
            { id: "bracos", label: "Brazos", icon: "💪" },
            { id: "barriga", label: "Barriga", icon: "🎯" },
            { id: "cintura", label: "Cintura", icon: "👙" },
            { id: "gluteos", label: "Glúteos", icon: "🍑" },
            { id: "coxas", label: "Muslos", icon: "🦵" },
            { id: "corpo-todo", label: "Cuerpo Completo", icon: "✨" }
        ],
        buttonText: "Continuar",
        nextStep: "afeta-vida"
    },
    {
        id: "afeta-vida",
        type: "radio",
        progress: 34,
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
        progress: 42,
        title: "¿Cuál es tu nombre?",
        subtitle: "Para personalizar tu experiencia.",
        placeholder: "Tu primer nombre",
        buttonText: "Continuar",
        nextStep: "explicacao"
    },
    {
        id: "explicacao",
        type: "explanation",
        progress: 50,
        title: "¡Excelente, {nome}! 🎉",
        subtitle: "Sin esfuerzo ni dietas aburridas: la Gelatina Mounjaro hace el trabajo pesado por ti, activando la quema de grasa con ingredientes caseros que preparas en minutos.",
        image: "assets/bowl.webp",
        buttonText: "¡Entendido! Continuar 🚀",
        nextStep: "feliz-aparencia"
    },
    {
        id: "feliz-aparencia",
        type: "radio",
        progress: 58,
        title: "¿Estás feliz con tu apariencia actual?",
        subtitle: "Sé sincera contigo misma",
        options: [
            { id: "nao-feliz", label: "No estoy feliz", icon: "😔" },
            { id: "poderia-melhor", label: "Podría ser mejor", icon: "😍" },
            { id: "trabalhando", label: "Estoy trabajando en ello", icon: "💪" }
        ],
        nextStep: "impede-emagrecer",
        autoAdvance: true
    },
    {
        id: "impede-emagrecer",
        type: "checkbox-list",
        progress: 64,
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
        progress: 70,
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
        progress: 74,
        nextStep: "peso-atual"
    },
    {
        id: "peso-atual",
        type: "number-picker",
        progress: 78,
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
        progress: 82,
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
        progress: 86,
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
        progress: 88,
        buttonText: "¡Ok, vamos! 🚀",
        nextStep: "gestacoes"
    },
    {
        id: "gestacoes",
        type: "radio",
        progress: 90,
        title: "¿<span class=\'text-purple\'>Cuántos embarazos</span> has tenido?",
        subtitle: "Esto ayuda a personalizar tu plan.",
        options: [
            { id: "0", label: "Nunca estuve embarazada", icon: "<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#ff4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'></circle><line x1='4.93' y1='4.93' x2='19.07' y2='19.07'></line></svg>" },
            { id: "1", label: "1 embarazo", icon: "<div style='background-color: #4b8ce2; color: white; width: 22px; height: 22px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold;'>1</div>" },
            { id: "2", label: "2 embarazos", icon: "<div style='background-color: #4b8ce2; color: white; width: 22px; height: 22px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold;'>2</div>" },
            { id: "3", label: "3 o más embarazos", icon: "<div style='background-color: #4b8ce2; color: white; width: 22px; height: 22px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold;'>3</div>" }
        ],
        nextStep: "rotina",
        autoAdvance: true
    },
    {
        id: "rotina",
        type: "checkbox-list",
        progress: 92,
        title: "¿Cómo es tu <span class=\'text-purple\'>rutina diaria?</span>",
        subtitle: "Selecciona todas las que correspondan.",
        options: [
            { id: "trabalho-fora", label: "Trabajo fuera de casa", icon: "🏢" },
            { id: "home-office", label: "Hago home office", icon: "🏡" },
            { id: "casa-familia", label: "Cuido la casa/familia", icon: "👨‍👩‍👧‍👦" },
            { id: "estudo", label: "Estudio", icon: "📚" }
        ],
        buttonText: "Continuar",
        nextStep: "sono"
    },
    {
        id: "sono",
        type: "radio",
        progress: 94,
        title: "¿Cuántas horas <span class=\'text-purple\'>duermes por noche?</span>",
        subtitle: "El sueño es esencial para adelgazar.",
        options: [
            { id: "menos-5", label: "Menos de 5 horas", icon: "😴" },
            { id: "5-7", label: "5 a 7 horas", icon: "🛏️" },
            { id: "7-9", label: "7 a 9 horas", icon: "🥰" },
            { id: "mais-9", label: "Más de 9 horas", icon: "💤" }
        ],
        nextStep: "agua",
        autoAdvance: true
    },
    {
        id: "agua",
        type: "radio",
        progress: 96,
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
        progress: 98,
        title: "Resultado de tu análisis, tú",
        buttonText: "Continuar",
        nextStep: "como-usar"
    },
    {
        id: "como-usar",
        type: "como-usar",
        progress: 100,
        buttonText: "<span class='btn-check-icon'></span> ¡Sí, me comprometo!",
        nextStep: "compromisso-semana"
    },
    {
        id: "compromisso-semana",
        type: "radio-image-top",
        progress: 100,
        title: "¿Te comprometes a aplicar el <span class=\'text-purple\'>protocolo</span> por al menos 1 semana para ver resultados?",
        image: "assets/before_after_v2-BwdiI3Uv.webp",
        badge: "🔒 PARA LIBERAR TU PLAN, NECESITO SABER:",
        options: [
            { id: "sim-comprometo", label: "¡Sí, me comprometo!", icon: "🥰" },
            { id: "comecar-hoje", label: "Quiero empezar hoy", icon: "😎" },
            { id: "nao-sei", label: "No lo sé...", icon: "🙄" }
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
    // Permite testar direto numa página específica pela URL (ex: ?step=checkout&nome=Leoni)
    const urlParams = new URLSearchParams(window.location.search);
    const targetStep = urlParams.get('step');
    
    if (urlParams.has('nome')) {
        userAnswers['nome'] = urlParams.get('nome');
    }
    
    if (targetStep && stepsData.find(s => s.id === targetStep)) {
        currentStepId = targetStep;
    }
    
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
                <button class="btn mt-4" style="background: linear-gradient(135deg, #22c55e 0%, #15803d 100%); width: auto; min-width: 250px; font-size: 1.05rem; font-weight: 700; padding: 1rem 1.5rem; border-radius: 12px; box-shadow: 0 8px 25px -5px rgba(34, 197, 94, 0.5); margin-top: 1.5rem; border: 1px solid #16a34a; transition: transform 0.2s; white-space: nowrap; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'" onclick="goToStep('${step.nextStep}')">¡Quiero saber si funciona para mí! 🔥</button>
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
                <h2 class="title text-center text-xl font-bold">¡Excelente, <span class="text-pink">${nomeUsuario}</span>! <span class="text-purple">Mira cómo funciona 🎉</span></h2>
                <p class="subtitle text-center mt-2 mb-4 text-pink font-bold">La Gelatina Mounjaro activa la quema de grasa natural con <span class="text-gray-500 font-normal">ingredientes caseros que preparas en minutos.</span></p>

                <div class="funciona-check-list mb-4">
                    <div class="funciona-check-item">
                        <div class="check-icon">✓</div> Fácil de preparar
                    </div>
                    <div class="funciona-check-item">
                        <div class="check-icon">✓</div> 2 veces al día
                    </div>
                    <div class="funciona-check-item">
                        <div class="check-icon">✓</div> Receta 100% Natural
                    </div>
                </div>

                <div class="funciona-timeline-card mt-3">
                    <!-- Item 1 -->
                    <div class="funciona-timeline-item">
                        <div class="funciona-number bg-purple">1</div>
                        <div class="funciona-img-box"><img src="assets/flow_antes-XnqC_31E.webp" alt="Antes"></div>
                        <div class="funciona-text">
                            <strong>Antes</strong>
                            <span>Grasa acumulada y metabolismo lento</span>
                        </div>
                    </div>
                    <div class="funciona-arrow text-purple">↓</div>

                    <!-- Item 2 -->
                    <div class="funciona-timeline-item">
                        <div class="funciona-number bg-purple">2</div>
                        <div class="funciona-img-box"><img src="assets/flow_gelatina-B9ryWXkD.webp" alt="Gelatina"></div>
                        <div class="funciona-text">
                            <strong class="text-purple">Gelatina Mounjaro</strong>
                            <span>Receta casera simple y poderosa</span>
                        </div>
                    </div>
                    <div class="funciona-arrow text-purple">↓</div>

                    <!-- Item 3 -->
                    <div class="funciona-timeline-item">
                        <div class="funciona-number bg-purple">3</div>
                        <div class="funciona-img-box"><img src="assets/icone_queima.webp" alt="Quema"></div>
                        <div class="funciona-text">
                            <strong>Quema natural activada 🔥</strong>
                            <span>Metabolismo acelerado sin dietas</span>
                        </div>
                    </div>
                    <div class="funciona-arrow text-green">↓</div>

                    <!-- Item 4 -->
                    <div class="funciona-timeline-item">
                        <div class="funciona-number bg-green">✨</div>
                        <div class="funciona-img-box"><img src="assets/corpo_sonhos.webp" alt="Después"></div>
                        <div class="funciona-text text-green">
                            <strong class="text-green">¡Cuerpo de los sueños!</strong>
                            <span class="text-gray-500">Resultado visible en pocas semanas</span>
                        </div>
                    </div>
                </div>

                <div class="funciona-info-box mt-4">
                    <p>💡 <strong class="text-purple font-bold">Receta casera</strong> que activa el <strong class="font-bold">GLP-1</strong>, la misma hormona del Mounjaro, ¡de forma <strong class="text-purple font-bold">100% natural!</strong></p>
                </div>

                <button class="btn gradient-btn mt-5 w-full" onclick="goToStep('${step.nextStep}')">¡Entendido! Continuar 🚀</button>
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
                    <img src="assets/gelatina_resultado-CbO72sN0.webp" alt="Transformação" class="img-fluid" style="max-width: 250px; margin: 0 auto; display: inline-block;">
                </div>
                
                <div class="objetivo-card text-center text-main" style="background: #faf5ff; border: 1px solid #f3e8ff; border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
                    <h2 class="title text-lg font-bold mb-2">¡Ese es un excelente objetivo, <span class="text-pink" style="display:inline-block">${nomeUsuario}! 💜</span></h2>
                    
                    <p class="objetivo-meta mb-3" style="color: #64748b; font-size: 0.85rem;">
                        Meta: ${pAtual}kg ➔ ${pDesejado}kg (${diferenca}kg)
                    </p>
                    
                    <p class="objetivo-desc" style="color: #64748b; font-size: 0.95rem; line-height: 1.5;">
                        Ahora vamos a ajustar el próximo paso para que comiences a notar la diferencia <span class="text-purple font-bold">ya en los primeros días.</span>
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
                <h2 class="title text-center text-xl mb-4">Resultado de tu <span class="text-purple">análisis</span>, <span class="text-purple">${nomeUsuario}</span></h2>
                
                <div class="resultado-imc-card">
                    <div class="resultado-imc-value text-purple">${imcVal}</div>
                    <div class="resultado-imc-status">Tu IMC: <span class="text-alert-red">${statusIMC}</span></div>
                    
                    <div class="resultado-alert-box">
                        <div class="resultado-alert-title">🚨 Sinais de alerta identificados:</div>
                        <ul class="resultado-alert-list">
                            <li><span class="x-icon"></span> Metabolismo desacelerado</li>
                            <li><span class="x-icon"></span> Riesgo de acumulación de grasa visceral</li>
                            <li><span class="x-icon"></span> Hormonas de saciedad desreguladas</li>
                        </ul>
                    </div>
                </div>
                
                <div class="resultado-verde-box">
                    🌿 El secreto para secar: <strong style="color: #16a34a">activar el GLP-1.</strong> A <strong style="color: #16a34a">Gelatina Mounjaro</strong> es el "interruptor" hormonal natural!
                </div>
                
                <h3 class="resultado-beneficios-title text-center mt-4 mb-3" style="font-size: 1rem; color: #111827; font-weight: 700;">Beneficios de la <span class="text-purple">Gelatina Mounjaro 👇</span></h3>
                
                <div class="resultado-beneficios-list mb-4">
                    <div class="beneficio-item"><span class="check-circle"></span> Receta 100% Natural</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Activa el GLP-1 de tu cuerpo</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Quema de grasa localizada</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Regula tu Metabolismo</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Ligereza y cuerpo desinflamado</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Menos impulsos por dulces</div>
                    <div class="beneficio-item"><span class="check-circle"></span> Fácil de hacer y seguir</div>
                </div>

                <div class="testimonial-card shadow-sm mb-4" style="border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px rgba(0,0,0,0.02)">
                    <img src="assets/gelatina_resultado-CbO72sN0.webp" class="testimonial-img" alt="Antes e Depois" style="width: 100%; display: block;">
                    <div class="testimonial-footer bg-white" style="padding: 1rem;">
                        <div class="testimonial-title font-bold text-center" style="font-size: 1rem; color: #1f2937;">"¡Perdí 12kg en 5 semanas!"</div>
                        <div class="testimonial-author text-center text-gray-500 mt-1" style="font-size: 0.75rem; color: #6b7280;">María, 32 años - Santiago</div>
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
                <h2 class="title text-center text-xl mb-1">Cómo usar la <span class="text-purple font-bold" style="font-weight: 800;">Gelatina Mounjaro</span></h2>
                <p class="subtitle text-center mt-1 mb-4" style="color: #9ca3af; font-size: 0.95rem;">Simple, práctico y eficaz</p>

                <div class="como-usar-image-container mx-auto mb-4" style="text-align: center;">
                    <img src="assets/mulher_gelatina_calendario-CcxgGxU0.webp" alt="Como usar" class="img-fluid" style="max-width: 250px; margin: 0 auto; display: block;">
                </div>

                <div class="como-usar-steps-card">
                    <div class="como-usar-step-item">
                        <div class="step-circle bg-orange">1</div>
                        <div class="step-text">
                            <div class="step-title">Prepara la gelatina</div>
                            <div class="step-desc">Receta simple de la app</div>
                        </div>
                        <div class="step-icon">✨</div>
                    </div>
                    <div class="step-divider"></div>
                    <div class="como-usar-step-item">
                        <div class="step-circle bg-purple">2</div>
                        <div class="step-text">
                            <div class="step-title">Consume 2 veces al día</div>
                            <div class="step-desc">Mañana y antes de dormir</div>
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
                        <div class="step-icon">🗓ï¸</div>
                    </div>
                </div>

                <div class="como-usar-timeline-card mt-4">
                    <div class="timeline-nodes">
                        <div class="timeline-line-bg"></div>
                        <div class="node">
                            <div class="node-icon">🌅</div>
                            <div class="node-title">Mañana</div>
                            <div class="node-desc">En ayunas</div>
                        </div>
                        <div class="node">
                            <div class="node-icon">✨</div>
                            <div class="node-title">Día</div>
                            <div class="node-desc">Sin hambre</div>
                        </div>
                        <div class="node">
                            <div class="node-icon">🌙</div>
                            <div class="node-title">Noche</div>
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
                <style>
                    @keyframes inline-arrow-pulse-right {
                        0%, 100% { transform: translateX(0); box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4); }
                        50% { transform: translateX(8px); box-shadow: 0 4px 20px rgba(236, 72, 153, 0.6); }
                    }
                </style>
                <div style="max-width: 480px; margin: 0 auto; width: 100%;">
                    <div style="margin: 0 auto 10px auto; max-width: 380px; display: flex; align-items: stretch; justify-content: center; position: relative;">
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; z-index: 1; position: relative;">
                            <div style="width: 100%; overflow: hidden; border-radius: 12px; position: relative; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                                <img src="${step.image}" alt="Transformação" style="width: 100%; height: auto; display: block; object-fit: contain;">
                            </div>
                            <!-- Seta Centralizada -->
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10; pointer-events: none;">
                                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #a855f7, #ec4899); border-radius: 50%; display: flex; align-items: center; justify-content: center; animation: inline-arrow-pulse-right 1.5s ease-in-out infinite;">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </div>
                            </div>
                        </div>
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
                        <img src="assets/transf_1.webp" alt="Antes y Después Giovanna" class="historia-img">
                        <div class="historia-footer">
                            <p class="historia-quote">"Increíble... ¡Perdí 7kg en 3 semanas!"</p>
                            <p class="historia-author">Giovanna, 34</p>
                        </div>
                    </div>
                    
                    <div class="historia-card">
                        <img src="assets/transf_2.webp" alt="Antes y Después Sandra" class="historia-img">
                        <div class="historia-footer">
                            <p class="historia-quote">"¡Mi barriga desapareció! ¡No lo creo!"</p>
                            <p class="historia-author">Sandra, 39</p>
                        </div>
                    </div>
                    
                    <div class="historia-card">
                        <img src="assets/transf_3.webp" alt="Antes y Después Cláudia" class="historia-img">
                        <div class="historia-footer">
                            <p class="historia-quote">"¡Volví a usar mi ropa antigua!"</p>
                            <p class="historia-author">Cláudia, 35</p>
                        </div>
                    </div>
                    
                    <div class="historia-card">
                        <img src="assets/transf_4.webp" alt="Antes y Después Patrícia" class="historia-img">
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
                    <span id="circular-loading-text" style="font-size: 1.1rem; font-weight: 500; color: #9ca3af;">Evaluando tu perfil corporal...</span>
                </div>

                <div class="loading-dots" style="display: flex; gap: 8px; margin-top: 1.25rem; justify-content: center;">
                    <div class="loading-dot active" style="width: 10px; height: 10px; border-radius: 50%; background-color: #a855f7; transition: all 0.3s;"></div>
                    <div class="loading-dot" style="width: 10px; height: 10px; border-radius: 50%; background-color: #ec4899; transition: all 0.3s; opacity: 0.4;"></div>
                    <div class="loading-dot" style="width: 10px; height: 10px; border-radius: 50%; background-color: #ec4899; transition: all 0.3s; opacity: 0.4;"></div>
                    <div class="loading-dot" style="width: 10px; height: 10px; border-radius: 50%; background-color: #a855f7; transition: all 0.3s; opacity: 0.4;"></div>
                    <div class="loading-dot" style="width: 10px; height: 10px; border-radius: 50%; background-color: #6b7280; transition: all 0.3s; opacity: 0.4;"></div>
                </div>

                <p style="margin-top: 1.5rem; font-size: 0.85rem; color: #9ca3af;">Espera un momento...</p>
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
                if (progress > 85) loadingText.innerText = "Finalizando el análisis del perfil...";
                else if (progress > 65) loadingText.innerText = "Calculando tu metabolismo ideal...";
                else if (progress > 45) loadingText.innerText = "Buscando el protocolo adecuado...";
                else if (progress > 25) loadingText.innerText = "Cruzando datos de tu rutina...";
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
                        background:#000;
                    }

                    .vsl-wrapper video{
                        width:100%;
                        height:100%;
                        object-fit:cover;
                        display:block;
                        pointer-events:none;
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
                        box-sizing:border-box;
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
                        z-index:5;
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
                        width:44px;
                        height:44px;
                        border-radius:50%;
                        color:white;
                        font-size:16px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        cursor:pointer;
                        z-index:30;
                        touch-action:manipulation;
                        -webkit-tap-highlight-color: transparent;
                        user-select:none;
                    }

                    @keyframes paradise-fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                    @keyframes vsl-mute-pulse { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.05); } }
                    @keyframes vsl-btn-pulse {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(251,191,36,0.7); }
                        50% { transform: scale(1.07); box-shadow: 0 0 0 10px rgba(251,191,36,0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(251,191,36,0); }
                    }
                </style>

                <h2 style="font-size: 1.15rem; font-weight: 800; text-align: center; color: #1f2937; margin-bottom: 0.25rem; line-height: 1.4;">
                    Ahora mira la explicación rápida de <span style="color: #a855f7;">1 Minuto</span><br>
                    <span style="font-size: 0.95em; color: #ec4899;">y entiende por qué este método está<br>llamando la atención 👀</span>
                </h2>
                
                <div style="text-align: center; margin-bottom: 0.5rem; margin-top: 1rem;">
                    <div style="background-color: #fbbf24; padding: 6px 16px; border-radius: 8px; font-weight: 700; font-size: 0.85rem; color: #111827; display: inline-block; animation: vsl-btn-pulse 1.5s ease-in-out infinite; box-shadow: 0 0 0 0 rgba(251,191,36,0.7);">Haz clic en el video para ver ⬇️</div>
                </div>

                <div class="vsl-wrapper">
                    <div class="vsl-overlay" id="vsl-overlay" onclick="vslUnmute()">
                        <div class="vsl-overlay-top">¡Tu video ya comenzó!</div>
                        <div class="vsl-overlay-icon">🔇</div>
                        <div class="vsl-overlay-bottom">Haz clic para activar el sonido</div>
                    </div>

                    <div class="vsl-resume-overlay" id="vsl-resume-overlay" style="display: none; position:absolute; top:0; left:0; width:100%; height:100%; background:#ec4899; padding:20px; text-align:center; color:white; z-index:20; box-sizing:border-box; flex-direction:column; justify-content:center; align-items:center;">
                        <div style="font-size:1.1rem; font-weight:bold; margin-bottom:10px; line-height: 1.3;">¡Ya habías comenzado<br>a ver!</div>
                        <div style="font-size:0.85rem; margin-bottom:20px; opacity: 0.9;">¿Dónde deseas continuar?</div>
                        <button onclick="vslResumeVideo()" style="background:#22c55e; color:white; border:none; padding:12px; border-radius:8px; width:100%; font-weight:800; margin-bottom:12px; cursor:pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.15); font-size: 0.95rem; text-transform: uppercase;">▶ Continuar Viendo</button>
                        <button onclick="vslRestartVideo()" style="background:transparent; color:white; border:2px solid white; padding:10px; border-radius:8px; width:100%; font-weight:bold; cursor:pointer; font-size: 0.85rem;">🔄 Ver desde el Inicio</button>
                    </div>

                    <video
                        id="vsl-player"
                        playsinline
                        webkit-playsinline
                        muted
                        preload="auto"
                        controlslist="nodownload nofullscreen"
                        disablepictureinpicture
                        oncontextmenu="return false;"
                        onplay="vslOnPlay()"
                        onpause="vslOnPause()"
                        onended="vslOnEnded()"
                        ontimeupdate="vslTimeUpdate()"
                    >
                        <source src="https://res.cloudinary.com/duie23dpv/video/upload/v1773105398/ebhtrqk5stfwhgy9hvmu.mp4" type="video/mp4">
                    </video>

                    <button class="playbtn" id="vsl-playbtn" onclick="vslTogglePlay()">⏸</button>

                    <div class="fakebar">
                        <div class="fakeprogress" id="fakeprogress"></div>
                    </div>
                </div>

                <button id="vsl-continue-btn" class="btn primary-btn mt-4 w-full" style="display: none; animation: paradise-fadeInUp 0.5s forwards;" onclick="goToStep('${step.nextStep}')">Continuar 🚀</button>

            </div>
        `;

        setTimeout(() => {
            const video = document.getElementById('vsl-player');
            if (!video) return;

            const savedTime = localStorage.getItem('vsl_savedTime');
            
            if (savedTime && parseFloat(savedTime) > 2) {
                // User has progress, show the resume overlay
                document.getElementById('vsl-overlay').style.display = 'none';
                document.getElementById('vsl-resume-overlay').style.display = 'flex';
                
                // wait for metadata to set the time correctly to the screenshot
                video.addEventListener('loadedmetadata', function() {
                    video.currentTime = parseFloat(savedTime);
                }, { once: true });
                
                // If it's already loaded
                if (video.readyState >= 1) {
                    video.currentTime = parseFloat(savedTime);
                }
            } else {
                // Autoplay muted from start
                video.muted = true;
                video.play().catch(() => { });
            }

            // Global VSL functions called by inline event handlers
            window.vslResumeVideo = function () {
                const v = document.getElementById('vsl-player');
                const ov = document.getElementById('vsl-resume-overlay');
                if (v) {
                    v.muted = false;
                    v.play();
                }
                if (ov) ov.style.display = 'none';
            };
            
            window.vslRestartVideo = function () {
                const v = document.getElementById('vsl-player');
                const ov = document.getElementById('vsl-resume-overlay');
                if (v) {
                    v.currentTime = 0;
                    v.muted = false;
                    v.play();
                }
                if (ov) ov.style.display = 'none';
            };

            window.vslTogglePlay = function () {
                const v = document.getElementById('vsl-player');
                if (!v) return;
                if (v.paused) { v.play(); } else { v.pause(); }
            };
            
            window.vslUnmute = function () {
                const v = document.getElementById('vsl-player');
                const ov = document.getElementById('vsl-overlay');
                if (v) {
                    v.muted = false;
                    v.currentTime = 0;
                }
                if (ov) ov.style.display = 'none';
            };
            
            window.vslOnPlay = function () {
                const btn = document.getElementById('vsl-playbtn');
                if (btn) btn.innerHTML = '⏸';
            };
            
            window.vslOnPause = function () {
                const btn = document.getElementById('vsl-playbtn');
                if (btn) btn.innerHTML = '▶';
                const v = document.getElementById('vsl-player');
                if (v && v.currentTime > 2) {
                    localStorage.setItem('vsl_savedTime', v.currentTime);
                }
            };
            
            window.vslOnEnded = function () {
                const btn = document.getElementById('vsl-continue-btn');
                if (btn) btn.style.display = 'block';
                localStorage.removeItem('vsl_savedTime');
            };
            
            window.vslTimeUpdate = function () {
                const v = document.getElementById('vsl-player');
                if (!v || !v.duration) return;
                const pct = (v.currentTime / v.duration) * 100;
                const bar = document.getElementById('fakeprogress');
                if (bar) bar.style.width = pct + '%';
                if (pct >= 85 || v.currentTime > 50) {
                    const cb = document.getElementById('vsl-continue-btn');
                    if (cb) cb.style.display = 'block';
                }
                
                // Save progress periodically (throttling manually or just saving often)
                // In local storage it's ok to write frequently, or we could just write every 2s
                if (v.currentTime > 2 && !v.paused) {
                    localStorage.setItem('vsl_savedTime', v.currentTime);
                }
            };
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
                    <div id="check-loading-title" style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 1.5rem;">Verificando tus datos...</div>
                </div>

                <div style="display:flex; flex-direction: column; gap: 12px; width: 100%; max-width: 280px; margin: 0 auto; margin-top: 0.5rem;">
                    
                    <div id="check-item-1" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-1" style="width: 22px; height: 22px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:14px; height:14px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.85rem; font-weight: 500; color: #64748b;">Analizando tus respuestas</span>
                    </div>

                    <div id="check-item-2" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-2" style="width: 22px; height: 22px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:14px; height:14px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.85rem; font-weight: 500; color: #64748b;">Calculando tu déficit calórico</span>
                    </div>

                    <div id="check-item-3" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-3" style="width: 22px; height: 22px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:14px; height:14px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.85rem; font-weight: 500; color: #64748b;">Seleccionando ingredientes ideales</span>
                    </div>

                    <div id="check-item-4" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-4" style="width: 22px; height: 22px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:14px; height:14px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.85rem; font-weight: 500; color: #64748b;">¡Verificación concluida!</span>
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
                    <img src="assets/ChatGPT Image 9 de mar. de 2026, 20_22_25.webp" style="width: 100%; max-width: 280px; height: auto;" alt="Protocolo Pronto">
                </div>

                <div style="display:flex; flex-direction: column; gap: 12px; width: 100%; max-width: 280px; margin: 0 auto;">
                    
                    <div id="check-item-f-1" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-f-1" style="width: 20px; height: 20px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:12px; height:12px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.82rem; font-weight: 600; color: #64748b;">Perfil metabólico analizado</span>
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
                        <span style="font-size: 0.82rem; font-weight: 600; color: #64748b;">Compatibilidad verificada</span>
                    </div>

                    <div id="check-item-f-4" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-f-4" style="width: 20px; height: 20px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:12px; height:12px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.82rem; font-weight: 600; color: #64748b;">Protocolo de 30 días creado</span>
                    </div>

                    <div id="check-item-f-5" style="display:flex; align-items:center; gap: 10px; opacity: 0.4; transition: opacity 0.3s;">
                        <div id="check-icon-f-5" style="width: 20px; height: 20px; border-radius: 50%; background: #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: background 0.3s;">
                            <svg style="width:12px; height:12px; color:white;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span style="font-size: 0.82rem; font-weight: 600; color: #64748b;">Bonos exclusivos seleccionados</span>
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
                <p style="margin-top: 0.75rem; font-size: 0.75rem; color: #9ca3af; text-align: center;">Espera mientras preparamos todo para ti...</p>

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
            <div class="content-wrapper centered-padding pb-8">
                <h2 class="title text-center text-xl sm-text-2xl">${step.title}</h2>
                <p class="subtitle text-center mt-2 mb-6">${step.subtitle}</p>
                
                <div style="display: flex; align-items: stretch; justify-content: center; gap: 1rem; width: 100%; max-width: 440px; margin: 0 auto;">
                    <!-- Left Silhouette -->
                    <div style="flex: 0 0 32%; display: flex; align-items: center; justify-content: center;">
                        <img src="${step.image}" alt="Silhueta do Corpo" style="width: 100%; max-width: 140px; height: auto; object-fit: contain;">
                    </div>
                    
                    <!-- Right Options -->
                    <div class="options-list" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between; gap: 8px;">
                        ${step.options.map(opt => `
                            <label class="option-row" style="padding: 10px 14px; margin: 0; border: 1px solid #e5e7eb; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; transition: all 0.2s; background: white;" onclick="document.getElementById('${step.id}-error').style.display='none';">
                                <div class="flex-center" style="gap: 12px;">
                                    <span class="icon" style="font-size: 1.25rem;">${opt.icon}</span>
                                    <span class="label" style="font-weight: 600; font-size: 0.95rem; color: #1f2937;">${opt.label}</span>
                                </div>
                                <div class="checkbox-container" style="position: relative; width: 22px; height: 22px;">
                                    <input type="checkbox" value="${opt.id}" data-step="${step.id}" style="display: none;" onchange="
                                        if(this.value === 'corpo-todo' && this.checked) {
                                            const all = document.querySelectorAll('input[data-step=${step.id}]');
                                            all.forEach(c => { if(c !== this) c.checked = false; });
                                        } else if(this.value !== 'corpo-todo' && this.checked) {
                                            const ct = document.querySelector('input[data-step=${step.id}][value=corpo-todo]');
                                            if(ct) ct.checked = false;
                                        }
                                    ">
                                    <div class="custom-checkbox-round" style="width: 22px; height: 22px; border: 2px solid #e5e7eb; border-radius: 6px; background-color: white; transition: all 0.2s; position: absolute; top:0; left:0; pointer-events:none;"></div>
                                    <style>
                                        .option-row:has(input[type="checkbox"]:checked) {
                                            border-color: var(--primary) !important;
                                            box-shadow: 0 1px 3px rgba(168, 85, 247, 0.1);
                                        }
                                        input[type="checkbox"]:checked + .custom-checkbox-round {
                                            background-color: var(--primary) !important;
                                            border-color: var(--primary) !important;
                                        }
                                        input[type="checkbox"]:checked + .custom-checkbox-round::after {
                                            content: '';
                                            position: absolute;
                                            left: 6px;
                                            top: 2px;
                                            width: 5px;
                                            height: 11px;
                                            border: solid white;
                                            border-width: 0 2px 2px 0;
                                            transform: rotate(45deg);
                                        }
                                    </style>
                                </div>
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <button class="btn primary-btn mt-6 w-full" style="padding: 1rem; border-radius: 12px; font-size: 1.05rem;" onclick="handleBodySelectionSubmit('${step.id}', '${step.nextStep}')">${step.buttonText}</button>
                <div id="${step.id}-error" style="color: #ec4899; text-align: center; font-size: 0.85rem; margin-top: 12px; display: none; font-weight: 600;">Por favor, selecciona por lo menos un área.</div>
            </div>
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
            <div class="checkout-container fade-in" style="background: #ffffff; padding-bottom: 40px; min-height: 100vh;">
                <!-- Product Logo / Branding Top -->
                <div class="checkout-app-header" style="text-align: center; padding-top: 10px;">
                    <img src="assets/capa1.webp" alt="Mounjaro" style="height: 35px; width: auto; object-fit: contain;">
                </div>

                <!-- Pink Banner Top -->
                <div style="background: #e84fc4; color: white; text-align: center; padding: 10px 10px; font-weight: 700; font-size: 0.85rem; border-radius: 8px; margin: 10px auto; max-width: 480px; box-shadow: 0 4px 10px rgba(232, 121, 249, 0.3);">
                    ⏳ Tu protocolo expira en: <span id="countdown-timer">09:37</span>
                </div>

                <div class="checkout-header" style="text-align: center; max-width: 480px; margin: 0 auto; padding: 0 10px;">
                    <div class="success-icon" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid #22c55e; display: flex; align-items: center; justify-content: center; margin: 10px auto 10px auto; background: #f0fdf4; box-shadow: 0 0 15px rgba(34,197,94,0.15);">
                        <svg style="width: 20px; height: 20px; color: #22c55e;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    
                    <h2 class="title" style="font-size: 1.15rem; font-weight:800; line-height: 1.4; color: #1e293b; margin-top: 5px;">
                        <span style="color: #ec4899; font-size: 1.25rem;">${nomeUsuario}</span>, tu<br>
                        <span style="background: #dcfce7; color: #16a34a; padding: 4px 12px; border-radius: 6px; font-size:1.15rem; display:inline-block; margin-top: 5px;">Plan de Gelatina de 30 días fue</span><br>
                        <span style="background: #dcfce7; color: #16a34a; padding: 4px 12px; border-radius: 6px; font-size:1.15rem; display:inline-block; margin-top: 5px;">¡Generado con Éxito!</span>
                    </h2>
                    
                    <p class="subtitle text-center mt-3" style="font-size: 0.75rem; color: #64748b; line-height: 1.4;">Es exclusivo y generado solo una vez, no salgas de esta página para no perderlo.</p>

                    <!-- Before/After com seta pulsando -->
                    <div style="margin: 25px auto; max-width: 440px; display: flex; align-items: stretch; justify-content: center; position: relative;">
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; z-index: 1; position: relative;">
                            <div style="width: 100%; border-radius: 12px; position: relative; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden;">
                                <img src="assets/antes_depois_realistic-BQbSAZb6.webp" alt="Transformación" style="width: 100%; height: auto; display: block; object-fit: contain;">
                            </div>
                            
                            <!-- Badges -->
                            <div style="position: absolute; bottom: -12px; left: 15%; z-index: 2; background:#4b5563; color:white; font-size:0.75rem; font-weight:800; padding:6px 22px; border-radius:20px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); letter-spacing: 0.5px;">Antes</div>
                            <div style="position: absolute; bottom: -12px; right: 15%; z-index: 2; background:#22c55e; color:white; font-size:0.75rem; font-weight:800; padding:6px 22px; border-radius:20px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); letter-spacing: 0.5px;">Después</div>
                            
                            <!-- Seta Centralizada -->
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10;">
                                <div id="arrow-pulse" style="width: 38px; height: 38px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(34,197,94,0.5); animation: arrow-pulse-right 1s ease-in-out infinite;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style>
                        @keyframes arrow-pulse-right {
                            0%   { transform: translateX(0);    opacity: 1; box-shadow: 0 0 10px rgba(34,197,94,0.4); }
                            50%  { transform: translateX(4px);  opacity: 0.8; box-shadow: 0 0 20px rgba(34,197,94,0.8); }
                            100% { transform: translateX(0);    opacity: 1; box-shadow: 0 0 10px rgba(34,197,94,0.4); }
                        }
                    </style>
                </div>

                <div class="checkout-card mt-3 mx-auto" style="max-width: 480px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f1f5f9; background: white;">
                    <div class="card-header" style="background: #d946ef; color: white; padding: 12px; text-align: center;">
                        <div style="font-size: 0.6rem; font-weight: 700; opacity: 0.9; letter-spacing: 1px; text-transform: uppercase;">TU PLAN EXCLUSIVO</div>
                        <b style="font-size: 1.1rem; display: block; margin-top: 2px;">1 Mes de Tratamiento 🧊</b>
                    </div>
                    <div class="card-body" style="padding: 1.25rem;">
                        <p class="text-center text-sm mb-4" style="color: #64748b; font-size: 0.75rem; line-height: 1.4;"><span style="color: #ec4899; font-weight: 700;">${nomeUsuario}</span>, siguiendo el protocolo, mira lo que pasará:</p>
                        
                        <div class="timeline-vertical">
                            <div class="t-row" style="padding: 10px; background: #faf5ff; border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; gap: 12px; text-align: center; justify-content: center;">
                                <div class="t-icon" style="font-size: 1.2rem; display: flex; align-items: center; justify-content: center;">✨</div>
                                <div class="t-content">
                                    <div class="t-title text-purple" style="font-size: 0.65rem; font-weight: 700; margin-bottom: 2px; text-transform: uppercase;">SEMANA 1</div>
                                    <div class="t-desc" style="font-size: 0.8rem; color: #1e293b; font-weight: 600;">Desinflamación y primeros resultados</div>
                                </div>
                            </div>
                            <div class="t-row" style="padding: 10px; background: #fdf2f8; border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; gap: 12px; text-align: center; justify-content: center;">
                                <div class="t-icon" style="font-size: 1.2rem; display: flex; align-items: center; justify-content: center;">📉</div>
                                <div class="t-content">
                                    <div class="t-title" style="color: #ec4899; font-size: 0.65rem; font-weight: 700; margin-bottom: 2px; text-transform: uppercase;">SEMANA 2</div>
                                    <div class="t-desc" style="font-size: 0.8rem; color: #1e293b; font-weight: 600;">Pérdida de hasta ${Math.max(2, meta1)} kg</div>
                                </div>
                            </div>
                            <div class="t-row" style="padding: 10px; background: #fff1f2; border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; gap: 12px; text-align: center; justify-content: center;">
                                <div class="t-icon" style="font-size: 1.2rem; display: flex; align-items: center; justify-content: center;">⚡</div>
                                <div class="t-content">
                                    <div class="t-title" style="color: #f43f5e; font-size: 0.65rem; font-weight: 700; margin-bottom: 2px; text-transform: uppercase;">SEMANA 3</div>
                                    <div class="t-desc" style="font-size: 0.8rem; color: #1e293b; font-weight: 600;">Pérdida de ${Math.max(4, meta1)} a ${Math.max(6, meta2)} kg</div>
                                </div>
                            </div>
                            <div class="t-row" style="padding: 10px; background: #f0fdf4; border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; gap: 12px; text-align: center; justify-content: center; position: relative;">
                                <div class="t-icon" style="font-size: 1.2rem; display: flex; align-items: center; justify-content: center;">🔥</div>
                                <div class="t-content">
                                    <div class="t-title" style="color: #16a34a; font-size: 0.65rem; font-weight: 700; margin-bottom: 2px; text-transform: uppercase;">SEMANA 4</div>
                                    <div class="t-desc" style="font-size: 0.8rem; color: #1e293b; font-weight: 600;">Pérdida de ${Math.max(7, meta2)} a ${Math.max(9, meta3)} kg</div>
                                </div>
                                <span style="position: absolute; right: 10px; background: #22c55e; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.6rem; font-weight: 800;">META</span>
                            </div>
                        </div>

                        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 10px; margin-top: 15px; text-align: center;">
                            <span style="font-size: 0.75rem; color: #16a34a; font-weight: 700;">🎉 Resultado esperado: -${Math.max(7, meta2)} a -${Math.max(9, meta3)} kg en 30 días</span>
                        </div>
                    </div>
                </div>

                <div class="checkout-card mt-4 mx-auto" style="max-width: 480px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f1f5f9; background: white;">
                    <div class="card-header" style="background: linear-gradient(90deg, #d946ef, #a855f7); color: white; text-align: center; padding: 16px 12px; line-height:1.3;">
                        <b style="font-size:1.05rem">Gelatina Mounjaro + APP Protocolo Completo</b><br>
                        <span style="font-size:0.75rem; opacity:0.9; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; display: inline-block; margin-top: 4px;">ACCESO VITALICIO</span>
                    </div>
                    <div class="card-body" style="padding: 1.5rem 1.25rem;">
                        <div class="text-center py-2" style="display: flex; justify-content: center; margin-bottom: 20px;">
                             <img src="assets/bowl-gelatina-novo.webp" style="width: 140px; border-radius: 12px; max-width:100%; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" alt="Gelatina Mounjaro">
                        </div>
                        <ul class="check-list mt-4" style="list-style: none; padding: 0;">
                            <li style="display:flex; align-items:center; gap:10px; font-size: 0.75rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 10px; font-weight: bold;">✓</div>
                                Receta completa de la Gelatina Mounjaro
                            </li>
                            <li style="display:flex; align-items:center; gap:10px; font-size: 0.75rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 10px; font-weight: bold;">✓</div>
                                Protocolo de 30 días paso a paso
                            </li>
                            <li style="display:flex; align-items:center; gap:10px; font-size: 0.75rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 10px; font-weight: bold;">✓</div>
                                Acceso a la Aplicación Exclusiva
                            </li>
                            <li style="display:flex; align-items:center; gap:10px; font-size: 0.75rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 10px; font-weight: bold;">✓</div>
                                Lista completa de los ingredientes
                            </li>
                            <li style="display:flex; align-items:center; gap:10px; font-size: 0.75rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 10px; font-weight: bold;">✓</div>
                                Tips para acelerar los resultados
                            </li>
                            <li style="display:flex; align-items:center; gap:10px; font-size: 0.75rem; color: #334155; margin-bottom: 12px;">
                                <div style="display:flex; align-items:center; justify-content:center; min-width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid #22c55e; color: #22c55e; font-size: 10px; font-weight: bold;">✓</div>
                                Acceso vitalicio a la app
                            </li>
                        </ul>
                        
                        <div class="bonus-box mt-4" style="background:#faf5ff; border: 1px solid #f3e8ff; border-radius:12px; padding:12px;">
                            <div class="bonus-item text-purple" style="font-size:0.7rem; font-weight:700; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                                <span>🎁</span> BONO: Dietas completas
                            </div>
                            <div class="bonus-item text-purple" style="font-size:0.7rem; font-weight:700; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                                <span>🎁</span> BONO: Recetas dulces saludables
                            </div>
                            <div class="bonus-item text-purple" style="font-size:0.7rem; font-weight:700; display:flex; align-items:center; gap:8px;">
                                <span>🎁</span> BONO: Videoclases de pilates en pared
                            </div>
                        </div>

                        <div class="price-section mt-5 text-center">
                            <div class="crossed-price" style="font-size: 0.75rem;">
                                <span style="color: #1e293b; font-weight: bold;">TODO ESTO DE </span>
                                <span style="text-decoration: line-through; color: #1e293b; font-weight: bold;">
                                    <span style="color: #ef4444;">$39.00</span>
                                </span>
                            </div>
                            <div class="mt-1" style="color: #64748b; font-weight:600; font-size: 0.75rem; text-transform: uppercase;">POR SOLO</div>
                            <div class="main-price text-green" style="font-size: 3.5rem; color: #22c55e; font-weight: 900; line-height:1; margin-top:0.25rem;">$9.90</div>
                            <div class="installments mt-1" style="color: #64748b; font-size: 0.8rem; font-weight: 500;">Pago único</div>
                        </div>
                        
                        <button class="btn green-cta mt-5 w-full" onclick="handlePurchaseClick('https://pay.hotmart.com/J104701335C?bid=1772379518612')" style="background:#22c55e; color: white; border-radius:8px; padding:16px; font-size:1.1rem; font-weight: 800; border: none; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4); text-transform: uppercase;">QUIERO EMPEZAR 🍓</button>
                        
                        <!-- Formas de Pagamento LATAM -->
                        <div class="payment-methods mt-4 text-center" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; max-width: 100%;">
                            <div style="display: flex; justify-content: center; align-items: center; gap: 14px; flex-wrap: wrap; margin-bottom: 8px;">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/200px-Visa_2021.svg.png" 
                                     alt="Visa" style="height: 12px; width: auto; display: block;" 
                                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline'">
                                <span style="display:none; font-size: 0.75rem; font-weight: bold; color: #1e293b;">Visa</span>

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" 
                                     alt="Mastercard" style="height: 20px; width: auto; display: block;"
                                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline'">
                                <span style="display:none; font-size: 0.75rem; font-weight: bold; color: #1e293b;">Mastercard</span>

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png" 
                                     alt="Amex" style="height: 18px; width: auto; display: block;"
                                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline'">
                                <span style="display:none; font-size: 0.75rem; font-weight: bold; color: #1e293b;">Amex</span>

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Diners_Club_Logo3.svg/200px-Diners_Club_Logo3.svg.png" 
                                     alt="Diners Club" style="height: 16px; width: auto; display: block;"
                                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline'">
                                <span style="display:none; font-size: 0.75rem; font-weight: bold; color: #1e293b;">Diners</span>
                            </div>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 14px; flex-wrap: wrap;">
                                <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.5/mercadopago/logo__small@2x.png" 
                                     alt="Mercado Pago" style="height: 22px; width: auto; display: block;"
                                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline'">
                                <span style="display:none; font-size: 0.75rem; font-weight: bold; color: #1e293b;">MercadoPago</span>

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Oxxo_Logo.svg/200px-Oxxo_Logo.svg.png" 
                                     alt="OXXO" style="height: 18px; width: auto; display: block;"
                                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline'">
                                <span style="display:none; font-size: 0.75rem; font-weight: bold; color: #1e293b;">OXXO</span>

                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_PSE.png" 
                                     alt="PSE" style="height: 22px; width: auto; display: block;"
                                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline'">
                                <span style="display:none; font-size: 0.75rem; font-weight: bold; color: #1e293b;">PSE</span>
                                
                                <div style="font-size: 0.75rem; color: #475569; font-weight: 800; text-transform: italic;">+ Pagos Locales</div>
                            </div>
                            <div style="font-size: 0.65rem; color: #64748b; font-weight: 500; text-align: center; margin-top: 10px;">Soporte para PagoEfectivo, Sencillito, Mach, Efecty y cuotas habilitadas en LatAm 🌎</div>
                        </div>
                    </div>
                </div>

                <div class="guarantee-card mt-5 mx-auto text-center p-4" style="max-width: 480px; background:#fffdeb; border: 1px solid #fef08a; border-radius: 12px;">
                    <img src="assets/selo-garantia.webp" alt="Selo Garantia 30 Dias" class="guarantee-seal mx-auto mb-3" style="width: 100px; border-radius: 0; box-shadow: none;">
                    <div class="font-bold mb-2" style="font-size: 1.1rem; color: #1e293b;">Garantía de Reembolso</div>
                    <p style="font-size: 0.75rem; color: #64748b; margin-bottom: 0.5rem; line-height: 1.4;">Todo producto debe dar mínimo 7 días de garantía legal, pero confiamos tanto en nuestra fórmula que ofrecemos 30 días.</p>
                    <p style="font-size: 0.75rem; color: #64748b; line-height: 1.4;">Si no te gusta o no te funciona, te devolveremos hasta el último centavo, sin hacer preguntas.</p>
                </div>

                <div class="mx-auto mt-4" style="max-width: 480px; padding: 0 10px;">
                    <button class="btn green-cta mt-2 w-full" onclick="handlePurchaseClick('https://pay.hotmart.com/J104701335C?bid=1772379518612')" style="background:#22c55e; color: white; border-radius:8px; padding:16px; font-size:1.1rem; font-weight: 800; border: none; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4); text-transform: uppercase;">QUIERO EMPEZAR 🍓</button>
                </div>

                <div class="faq-container mt-8 mx-auto" style="max-width: 480px; text-align: left; padding-bottom: 30px; padding: 0 10px;">
                    <h3 class="font-bold text-center mb-4" style="color:#1e293b; font-size: 1.1rem;">❓ Preguntas Frecuentes</h3>

                    <style>
                        .faq-item { border: 1px solid #f1f5f9; border-radius: 8px; margin-bottom: 8px; background: white; overflow: hidden; box-shadow: 0 1px 2px rgba(0,0,0,0.02); }
                        .faq-question { display: flex; justify-content: space-between; align-items: center; padding: 14px; cursor: pointer; }
                        .faq-question h4 { color: #1e293b; font-size: 0.8rem; font-weight: 700; margin: 0; flex:1; }
                        .faq-arrow { font-size: 1.2rem; color: #a855f7; transition: transform 0.3s; margin-left: 10px; flex-shrink:0; line-height: 1; }
                        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.3s; padding: 0 14px; }
                        .faq-answer p { font-size: 0.8rem; color: #64748b; line-height: 1.5; margin: 0 0 14px 0; }
                        .faq-item.open .faq-answer { max-height: 200px; padding: 0 14px; }
                        .faq-item.open .faq-arrow { transform: rotate(45deg); }
                    </style>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <h4>¿La Gelatina Mounjaro realmente funciona?</h4>
                            <span class="faq-arrow">+</span>
                        </div>
                        <div class="faq-answer"><p>Sí, la fórmula es 100% natural, basada en ingredientes comprobados que activan de forma segura la quema de grasa sin causar efectos secundarios.</p></div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <h4>¿Cuánto tiempo tarda en dar resultados?</h4>
                            <span class="faq-arrow">+</span>
                        </div>
                        <div class="faq-answer"><p>La mayoría de nuestras clientes siente una gran desinflamación en los primeros 3 a 5 días y una pérdida de peso notable al finalizar la segunda semana.</p></div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <h4>¿Es seguro? ¿Tiene efectos secundarios?</h4>
                            <span class="faq-arrow">+</span>
                        </div>
                        <div class="faq-answer"><p>La receta y el protocolo no tienen contraindicaciones y no tienen efectos secundarios siempre que se usen bajo un seguimiento saludable, todos los ingredientes son naturales.</p></div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <h4>¿Cómo recibiré el protocolo?</h4>
                            <span class="faq-arrow">+</span>
                        </div>
                        <div class="faq-answer"><p>Inmediatamente después de la confirmación de su compra, recibirás un correo electrónico con el enlace para acceder a todo el material en nuestra Aplicación Exclusiva.</p></div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <h4>¿Y si no funciona para mí?</h4>
                            <span class="faq-arrow">+</span>
                        </div>
                        <div class="faq-answer"><p>Si por cualquier motivo no te adaptas al protocolo en 30 días, basta con ponerte en contacto solicitando el reembolso y te devolveremos tu inversión.</p></div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <h4>¿El pago es seguro?</h4>
                            <span class="faq-arrow">+</span>
                        </div>
                        <div class="faq-answer"><p>Completamente seguro. Todo el pago se procesa a través de Hotmart y Braip, dos de las plataformas más seguras y confiables de América Latina.</p></div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <h4>¿Necesito comprar ingredientes caros?</h4>
                            <span class="faq-arrow">+</span>
                        </div>
                        <div class="faq-answer"><p>No, la idea de la Gelatina Mounjaro es justamente usar ingredientes que encuentras fácilmente en cualquier supermercado y de bajo costo.</p></div>
                    </div>

                    <button class="btn green-cta mt-6 w-full mb-3" onclick="handlePurchaseClick('https://pay.hotmart.com/J104701335C?bid=1772379518612')" style="background:#22c55e; color: white; border-radius:8px; padding:16px; font-size:1.1rem; font-weight: 800; border: none; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4); text-transform: uppercase;">QUIERO EMPEZAR 🍓</button>
                    
                    <div class="text-center text-muted mb-4" style="font-size: 0.65rem; color: #94a3b8; margin-top: 15px; display:flex; align-items:center; justify-content:center; gap: 4px;">
                        <span>🔒 Compra 100% segura • Garantía de 30 días</span>
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

    // Toggle WhatsApp Button only on checkout page
    const waBtn = document.getElementById('whatsapp-btn');
    if (waBtn) {
        waBtn.style.display = (stepId === 'plano-gerado') ? 'flex' : 'none';
    }

    currentStepId = stepId;
}

function toggleFaq(questionEl) {
    const item = questionEl.parentElement;
    const isOpen = item.classList.contains('open');
    // Close all open items
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    // Open clicked one if it wasn't open
    if (!isOpen) item.classList.add('open');
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

function handleBodySelectionSubmit(stepId, nextStep) {
    const checkedBoxes = document.querySelectorAll(`input[data-step="${stepId}"]:checked`);
    if (checkedBoxes.length === 0) {
        const errorMsg = document.getElementById(`${stepId}-error`);
        if (errorMsg) errorMsg.style.display = 'block';
        return;
    }

    const values = Array.from(checkedBoxes).map(cb => cb.value);
    userAnswers[stepId] = values;
    goToStep(nextStep);
}

// Start app
document.addEventListener("DOMContentLoaded", initApp);

