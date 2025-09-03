// practica-detalle.js - Script completo para la página de detalle de prácticas

document.addEventListener('DOMContentLoaded', function() {
    cargarDetallePractica();
    configurarNavegacion();
    configurarChatbot();
});

// Datos completos de prácticas profesionales por carrera
const practicasDataCompleto = {
    'Ingeniería en Sistemas': [
        {
            titulo: 'Sistema de gestión bibliotecaria',
            icono: '💻',
            descripcion: `
                <p>Desarrollarás un sistema completo de gestión bibliotecaria que incluye autenticación de usuarios, catálogo de libros, sistema de préstamos y reportes administrativos.</p>
                <p>Este proyecto te permitirá aplicar conceptos de desarrollo full-stack, bases de datos relacionales, autenticación segura y arquitectura de software escalable.</p>
                <p><strong>Stack tecnológico:</strong> React.js + Spring Boot + PostgreSQL + JWT Authentication</p>
            `,
            objetivos: [
                'Implementar un sistema CRUD completo con operaciones complejas',
                'Diseñar y normalizar una base de datos relacional',
                'Desarrollar APIs RESTful seguras y bien documentadas',
                'Crear interfaces de usuario intuitivas y responsive',
                'Implementar autenticación y autorización robusta',
                'Aplicar patrones de diseño y buenas prácticas de desarrollo'
            ],
            pasos: `
                <div class="step-block">
                    <h4>📋 Fase 1: Análisis y Diseño (Semana 1)</h4>
                    <ul>
                        <li>Análisis de requerimientos funcionales y no funcionales</li>
                        <li>Diseño de la base de datos (modelo ER, normalización)</li>
                        <li>Arquitectura del sistema (frontend, backend, base de datos)</li>
                        <li>Wireframes y mockups de interfaces principales</li>
                        <li>Definición de APIs y endpoints</li>
                    </ul>
                </div>
                <div class="step-block">
                    <h4>🗄️ Fase 2: Base de Datos (Semana 2)</h4>
                    <ul>
                        <li>Creación de tablas: usuarios, libros, autores, categorías, préstamos</li>
                        <li>Implementación de relaciones y restricciones</li>
                        <li>Creación de índices para optimización</li>
                        <li>Scripts de datos de prueba</li>
                        <li>Procedimientos almacenados para operaciones complejas</li>
                    </ul>
                </div>
                <div class="step-block">
                    <h4>⚙️ Fase 3: Backend con Spring Boot (Semanas 3-4)</h4>
                    <ul>
                        <li>Configuración del proyecto Spring Boot</li>
                        <li>Entidades JPA y repositorios</li>
                        <li>Servicios de negocio y DTOs</li>
                        <li>Controladores REST con validaciones</li>
                        <li>Autenticación JWT y autorización por roles</li>
                        <li>Manejo de excepciones y logging</li>
                    </ul>
                </div>
                <div class="step-block">
                    <h4>🎨 Fase 4: Frontend con React (Semanas 5-6)</h4>
                    <ul>
                        <li>Configuración del proyecto React con Create React App</li>
                        <li>Componentes reutilizables y hooks personalizados</li>
                        <li>Gestión de estado con Context API o Redux</li>
                        <li>Consumo de APIs REST del backend</li>
                        <li>Rutas y navegación en el frontend</li>
                        <li>Validación de formularios</li>
                    </ul>
                </div>
                <div class="step-block">
                    <h4>🚀 Fase 5: Despliegue y Pruebas (Semana 7)</h4>
                    <ul>
                        <li>Pruebas unitarias y de integración</li>
                        <li>Optimización del rendimiento</li>
                        <li>Despliegue del backend en un servicio cloud (ej. Heroku)</li>
                        <li>Despliegue del frontend en un servicio de hosting estático (ej. Netlify)</li>
                        <li>Documentación del proyecto</li>
                    </ul>
                </div>
            `,
            recursos: [
                'React.js - Documentación oficial', 
                'Spring Boot - Guía de inicio', 
                'PostgreSQL - Tutoriales de bases de datos',
                'JWT Authentication - Guía de implementación'
            ]
        },
        {
            titulo: 'Plataforma de e-commerce básica',
            icono: '🛒',
            descripcion: `<p>Desarrollarás una plataforma de comercio electrónico funcional que incluye un catálogo de productos, un carrito de compras y un proceso de pago simplificado.`,
            objetivos: [
                'Crear una interfaz de usuario para el catálogo de productos',
                'Implementar la lógica del carrito de compras (agregar, eliminar, actualizar)',
                'Simular un proceso de pago seguro',
                'Aplicar conceptos de gestión de estado',
                'Diseñar un backend que gestione los productos y pedidos'
            ],
            pasos: `
                <div class="step-block">
                    <h4>📋 Fase 1: Diseño y Planificación</h4>
                    <ul>
                        <li>Diseño de la interfaz de usuario (UI)</li>
                        <li>Definición de las entidades (Producto, Carrito, Pedido)</li>
                        <li>Diagrama de flujo del proceso de compra</li>
                    </ul>
                </div>
                <div class="step-block">
                    <h4>💻 Fase 2: Desarrollo Frontend</h4>
                    <ul>
                        <li>Creación de la página principal con el catálogo de productos</li>
                        <li>Desarrollo del componente del carrito de compras</li>
                        <li>Implementación de la página de checkout</li>
                    </ul>
                </div>
            `,
            recursos: [
                'Curso de React para e-commerce',
                'Guía de Stripe API para pagos'
            ]
        }
    ],
    'Medicina': [
        {
            titulo: 'Análisis de casos clínicos',
            icono: '👨‍⚕️',
            descripcion: `
                <p>Analizarás una serie de casos clínicos simulados, identificando síntomas, posibles diagnósticos y planes de tratamiento. Aprenderás a integrar información de diferentes fuentes para tomar decisiones informadas.`,
            objetivos: [
                'Desarrollar habilidades de diagnóstico diferencial',
                'Integrar conocimientos de anatomía y fisiología en la práctica',
                'Formular planes de tratamiento lógicos y coherentes',
                'Mejorar el razonamiento clínico'
            ],
            pasos: `
                <div class="step-block">
                    <h4>📋 Fase 1: Recopilación de Información</h4>
                    <ul>
                        <li>Lee detenidamente la historia clínica y los síntomas del paciente.</li>
                        <li>Identifica los hallazgos clave en los resultados de laboratorio.</li>
                    </ul>
                </div>
                <div class="step-block">
                    <h4>🧠 Fase 2: Diagnóstico</h4>
                    <ul>
                        <li>Formula una lista de posibles diagnósticos (diagnóstico diferencial).</li>
                        <li>Justifica cada diagnóstico con evidencia de la historia clínica.</li>
                        <li>Selecciona el diagnóstico más probable.</li>
                    </ul>
                </div>
            `,
            recursos: [
                'Base de datos de casos clínicos',
                'Libro: Fisiopatología para estudiantes'
            ]
        }
    ]
    // ... (otras carreras y prácticas)
};

// Variable para almacenar el estado de la práctica actual
let practicaActual;

// Función para obtener la carrera y práctica desde la URL
function obtenerParametrosURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const carreraNombre = urlParams.get('carrera');
    const practicaTitulo = urlParams.get('practica');
    return { carreraNombre, practicaTitulo };
}

// Función para cargar el contenido de la práctica
function cargarDetallePractica() {
    const { carreraNombre, practicaTitulo } = obtenerParametrosURL();
    const practicasDeCarrera = practicasDataCompleto[carreraNombre];

    if (practicasDeCarrera) {
        practicaActual = practicasDeCarrera.find(p => p.titulo === practicaTitulo);
    }

    if (practicaActual) {
        document.getElementById('practice-title').textContent = `${carreraNombre}: ${practicaActual.titulo}`;
        document.getElementById('practice-info').style.display = 'block';

        document.getElementById('practice-description').innerHTML = practicaActual.descripcion;
        document.getElementById('objectives-list').innerHTML = practicaActual.objetivos.map(obj => `<li>${obj}</li>`).join('');
        document.getElementById('practice-steps').innerHTML = practicaActual.pasos;

        const resourcesList = document.getElementById('resources-list');
        if (resourcesList) {
            resourcesList.innerHTML = practicaActual.recursos.map(rec => `
                <li class="resource-item">
                    🔗 ${rec}
                </li>
            `).join('');
        }
        
        simularProgresoPractica();
    } else {
        document.getElementById('practice-info').innerHTML = `<p style="text-align: center; color: #ff6347;">No se encontró la práctica o la carrera.</p>`;
    }
}

// Función para manejar la navegación entre prácticas
function configurarNavegacion() {
    const { carreraNombre, practicaTitulo } = obtenerParametrosURL();
    const practicasDeCarrera = practicasDataCompleto[carreraNombre];
    const currentIndex = practicasDeCarrera.findIndex(p => p.titulo === practicaTitulo);

    const prevBtn = document.getElementById('prev-practice');
    const nextBtn = document.getElementById('next-practice');

    if (currentIndex > 0) {
        prevBtn.disabled = false;
        prevBtn.onclick = () => {
            const prevPractica = practicasDeCarrera[currentIndex - 1];
            window.location.href = `practica-detalle.html?carrera=${encodeURIComponent(carreraNombre)}&practica=${encodeURIComponent(prevPractica.titulo)}`;
        };
    } else {
        prevBtn.disabled = true;
    }

    if (currentIndex < practicasDeCarrera.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = () => {
            const nextPractica = practicasDeCarrera[currentIndex + 1];
            window.location.href = `practica-detalle.html?carrera=${encodeURIComponent(carreraNombre)}&practica=${encodeURIComponent(nextPractica.titulo)}`;
        };
    } else {
        nextBtn.textContent = 'Volver a Carreras';
        nextBtn.onclick = () => {
            window.location.href = `carreras.html`;
        };
    }
}

// Lógica de chatbot para prácticas
function configurarChatbot() {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-chat');
    const chatWindow = document.getElementById('chat-window');

    if (!chatInput || !sendBtn || !chatWindow) return;
    
    function agregarMensaje(remitente, mensaje) {
        const msgDiv = document.createElement('div');
        msgDiv.innerHTML = `<strong>${remitente}:</strong> ${mensaje}`;
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    const { carreraNombre } = obtenerParametrosURL();
    
    // Respuestas predefinidas del bot
    const respuestasPorCarrera = {
        'Ingeniería en Sistemas': {
            'backend': 'El backend se encarga de la lógica del servidor, la base de datos y la autenticación. Puedes usar frameworks como Spring Boot o Node.js.',
            'frontend': 'El frontend es la parte de la interfaz de usuario. Tecnologías como React, Angular o Vue.js son populares para construirla.',
            'base de datos': 'Una base de datos relacional como PostgreSQL es ideal para almacenar datos estructurados y se comunica a través de SQL.',
            'autenticación': 'La autenticación JWT es un método seguro para verificar la identidad de un usuario sin tener que guardar su estado en el servidor.',
            'diseño': 'Antes de programar, es vital diseñar la arquitectura, el modelo de datos y las interfaces. Esto previene errores futuros.'
        },
        'Medicina': {
            'diagnóstico': 'El diagnóstico diferencial es un proceso para distinguir una enfermedad de otras con síntomas similares.',
            'historia clínica': 'La historia clínica es un registro de todos los eventos de salud del paciente y es fundamental para el diagnóstico correcto.',
            'tratamiento': 'El plan de tratamiento debe ser personalizado para cada paciente, considerando su diagnóstico, historial y preferencias.'
        }
    };
    
    function respuestaBot(mensaje) {
        const mensajeLower = mensaje.toLowerCase();

        // Búsqueda en respuestas por carrera específica
        const respuestasCarrera = respuestasPorCarrera[carreraNombre] || {};
        for (const [palabra, respuesta] of Object.entries(respuestasCarrera)) {
            if (mensajeLower.includes(palabra)) {
                return respuesta;
            }
        }
        
        // Respuestas generales
        if (mensajeLower.includes('ayuda') || mensajeLower.includes('help')) {
            return 'Estoy aquí para ayudarte con tu proyecto práctico. Puedes preguntarme sobre metodología, herramientas, o cualquier aspecto técnico específico.';
        }
        
        if (mensajeLower.includes('tiempo') || mensajeLower.includes('cronograma')) {
            return 'El cronograma es importante para el éxito del proyecto. Te sugiero dividir el trabajo en fases y establecer hitos claros. ¿Necesitas ayuda planificando alguna fase específica?';
        }
        
        if (mensajeLower.includes('herramientas') || mensajeLower.includes('software')) {
            return 'Las herramientas correctas pueden hacer la diferencia. ¿Qué tipo de herramientas necesitas para tu proyecto?';
        }
        
        if (mensajeLower.includes('error') || mensajeLower.includes('problema')) {
            return 'Los errores son parte del aprendizaje. Describe el problema específico y te ayudo a encontrar una solución.';
        }
        
        // Respuesta por defecto
        return 'Interesante pregunta. ¿Podrías ser más específico sobre qué aspecto del proyecto te gustaría explorar? Estoy aquí para ayudarte con cualquier duda técnica o metodológica.';
    }

    function enviarMensaje() {
        const mensaje = chatInput.value.trim();
        if (mensaje) {
            agregarMensaje('Tú', mensaje);
            chatInput.value = '';
            
            setTimeout(function() {
                agregarMensaje('Asistente', respuestaBot(mensaje));
            }, 1000);
        }
    }
    
    sendBtn.addEventListener('click', enviarMensaje);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            enviarMensaje();
        }
    });
}

// Simular el progreso de la práctica
function simularProgresoPractica() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill && progressText) {
        let progreso = 0;
        const intervalo = setInterval(function() {
            progreso += 5;
            progressFill.style.width = progreso + '%';
            progressText.textContent = progreso + '%';
            
            if (progreso >= 25) {
                progressFill.style.background = 'linear-gradient(90deg, #fc5c7d, #6a82fb)';
            }
            if (progreso >= 100) {
                clearInterval(intervalo);
                progressText.textContent = '100% - ¡Práctica completada!';
                progressFill.style.background = 'linear-gradient(90deg, #e91e63, #c2185b)';
            }
        }, 100);
    }
}