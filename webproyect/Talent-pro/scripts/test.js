// test.js - Versión con sistema de recomendación inteligente y resultados dinámicos

const preguntasIncisos = [
    '¿Qué materia disfrutas más en la escuela?',
    '¿Prefieres trabajar en equipo o solo?',
    '¿Te gustan las matemáticas?',
    '¿Te interesa la tecnología?',
    '¿Te ves liderando proyectos?',
    '¿Te gustaría ayudar a otras personas?',
    '¿Prefieres actividades prácticas o teóricas?',
    '¿Te atrae el arte y la creatividad?',
    '¿Te gustaría viajar por trabajo?',
    '¿Te interesa el mundo de los negocios?'
];

const opcionesIncisos = [
    ['Matemáticas', 'Ciencias', 'Arte', 'Lengua', 'Deportes'],
    ['Equipo', 'Solo'],
    ['Sí', 'No'],
    ['Sí', 'No'],
    ['Sí', 'No'],
    ['Sí', 'No'],
    ['Prácticas', 'Teóricas'],
    ['Sí', 'No'],
    ['Sí', 'No'],
    ['Sí', 'No']
];

function cargarPreguntasIncisos() {
    const testSection = document.getElementById('test-section');
    testSection.innerHTML = ''; // Limpiar preguntas anteriores

    const form = document.createElement('form');
    form.id = 'test-form';

    const questionsContainer = document.createElement('div');
    questionsContainer.id = 'questions-container';
    
    // Iterar sobre las preguntas y opciones para crearlas
    preguntasIncisos.forEach((pregunta, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<h4>${index + 1}. ${pregunta}</h4>`;

        opcionesIncisos[index].forEach(opcion => {
            const label = document.createElement('label');
            label.className = 'option-label';
            label.innerHTML = `<input type="radio" name="pregunta${index}" value="${opcion}"> ${opcion}`;
            questionDiv.appendChild(label);
        });
        
        // Añadir cada pregunta al contenedor de preguntas
        questionsContainer.appendChild(questionDiv);
    });

    // Crear el botón de envío DESPUÉS de todas las preguntas
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Ver Resultados';
    submitBtn.className = 'btn';
    submitBtn.id = 'submit-test';
    
    // Añadir el contenedor de preguntas y luego el botón al formulario
    form.appendChild(questionsContainer);
    form.appendChild(submitBtn);

    // Añadir el formulario completo a la sección del test
    testSection.appendChild(form);

    // Añadir el evento de clic al nuevo botón
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const resultados = obtenerResultados();
        mostrarResultados(resultados);
    });
}

function obtenerResultados() {
    const respuestas = {};
    const form = document.getElementById('test-form');
    preguntasIncisos.forEach((pregunta, index) => {
        const selectedOption = form.querySelector(`input[name="pregunta${index}"]:checked`);
        if (selectedOption) {
            respuestas[`pregunta${index}`] = selectedOption.value;
        }
    });
    return respuestas;
}

function mostrarResultados(respuestas) {
    const testSection = document.getElementById('test-section');
    const resultSection = document.getElementById('result-section');
    
    if (!resultSection) {
        console.error('El elemento #result-section no existe.');
        return;
    }

    let resultContent = document.getElementById('result-content');
    if (!resultContent) {
        resultContent = document.createElement('div');
        resultContent.id = 'result-content';
        resultSection.appendChild(resultContent);
    }
    
    resultContent.innerHTML = '';
    
    const perfilUsuario = calcularPuntuacion(respuestas);
    const recomendacionData = MatchingEngine.calcularCompatibilidad(perfilUsuario);
    const recomendaciones = recomendacionData.recomendaciones;

    const tituloResultados = document.createElement('h2');
    tituloResultados.style.cssText = 'color: #2d6cdf; text-align: center;';
    tituloResultados.textContent = '¡Tus resultados están listos!';
    resultContent.appendChild(tituloResultados);

    const subtituloResultados = document.createElement('h3');
    subtituloResultados.style.cssText = 'color: #00b140; text-align: center; margin-bottom: 20px;';
    subtituloResultados.textContent = `Hemos encontrado ${recomendaciones.length} carreras que se alinean con tu perfil.`;
    resultContent.appendChild(subtituloResultados);

    const resultsGrid = document.createElement('div');
    resultsGrid.className = 'results-grid'; // Clase para el nuevo contenedor de carreras
    resultContent.appendChild(resultsGrid);

    // Iterar sobre las 3 principales recomendaciones y crear una tarjeta para cada una
    recomendaciones.forEach(rec => {
        const explicacion = MatchingEngine.obtenerExplicacionRecomendacion(rec.carrera, perfilUsuario);
        const carreraCard = document.createElement('a');
        carreraCard.href = `carreras.html?carrera=${encodeURIComponent(rec.carrera)}`;
        carreraCard.className = 'item-card'; // Usar la misma clase para el efecto de hover
        carreraCard.innerHTML = `
            <h4 class="item-title">${rec.carrera}</h4>
            <p class="item-description">${MatchingEngine.descripcionesCarreras[rec.carrera]}</p>
            <p style="font-size: 0.9em; font-weight: bold; color: #666; margin-top: 10px;">
                Compatibilidad: ${explicacion.compatibilidad} (${Math.round(rec.porcentaje)}%)
            </p>
        `;
        resultsGrid.appendChild(carreraCard);
    });

    const reiniciarBtn = document.createElement('button');
    reiniciarBtn.textContent = 'Reiniciar Test';
    reiniciarBtn.className = 'btn';
    reiniciarBtn.style.marginTop = '40px';
    reiniciarBtn.addEventListener('click', reiniciarTest);
    resultContent.appendChild(reiniciarBtn);
    
    testSection.style.display = 'none';
    resultSection.style.display = 'block';
    
    localStorage.setItem('resultadosTest', JSON.stringify({
        respuestas,
        recomendacionData
    }));
}

function reiniciarTest() {
    const testChoice = document.getElementById('test-choice');
    const testSection = document.getElementById('test-section');
    const resultSection = document.getElementById('result-section');
    
    testChoice.style.display = 'block';
    testSection.style.display = 'none';
    resultSection.style.display = 'none';

    localStorage.removeItem('resultadosTest');
}

function calcularPuntuacion(respuestas) {
    const puntuacion = {
        matematicas: 0, tecnologia: 0, logica: 0, creatividad: 0, trabajoEquipo: 0,
        liderazgo: 0, ayudarPersonas: 0, practico: 0, arte: 0, negocios: 0
    };

    const mapeoRespuestas = {
        'Matemáticas': { matematicas: 10, logica: 8 }, 'Ciencias': { logica: 8, tecnologia: 5 },
        'Arte': { arte: 10, creatividad: 8 }, 'Lengua': { creatividad: 5 },
        'Deportes': { practico: 5, trabajoEquipo: 5 }, 'Equipo': { trabajoEquipo: 10, liderazgo: 5 },
        'Solo': { logica: 5, creatividad: 5 },
        'Sí': { matematicas: 5, tecnologia: 5, liderazgo: 5, ayudarPersonas: 5, practico: 5, arte: 5, negocios: 5 },
        'No': { matematicas: -5, tecnologia: -5, liderazgo: -5, ayudarPersonas: -5, practico: -5, arte: -5, negocios: -5 },
        'Prácticas': { practico: 10 }, 'Teóricas': { logica: 10 }
    };
    
    for (const key in respuestas) {
        const valor = respuestas[key];
        const impacto = mapeoRespuestas[valor];
        if (impacto) {
            for (const categoria in impacto) {
                puntuacion[categoria] += impacto[categoria];
            }
        }
    }
    return puntuacion;
}

document.addEventListener('DOMContentLoaded', function() {
    const testChoice = document.getElementById('test-choice');
    const testSection = document.getElementById('test-section');
    const resultSection = document.getElementById('result-section');
    const testOpcionBtn = document.querySelector('.test-option:nth-child(1)');
    const testPersonalizadoBtn = document.querySelector('.test-option:nth-child(2)');

    if (testOpcionBtn) {
        testOpcionBtn.addEventListener('click', () => {
            testChoice.style.display = 'none';
            testSection.style.display = 'block';
            cargarPreguntasIncisos();
        });
    }

    if (testPersonalizadoBtn) {
        testPersonalizadoBtn.addEventListener('click', () => {
            testChoice.style.display = 'none';
            testSection.style.display = 'block';
            testSection.innerHTML = '<p>Funcionalidad para el Test Personalizado en desarrollo...</p>';
        });
    }

    const resultadosGuardados = JSON.parse(localStorage.getItem('resultadosTest'));
    if (resultadosGuardados) {
        testChoice.style.display = 'none';
        resultSection.style.display = 'block';
        mostrarResultados(resultadosGuardados.respuestas); 
    }
});