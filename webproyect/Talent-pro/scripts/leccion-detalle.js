// leccion-detalle.js - Script completo con navegación funcional y contenido expandido

// Datos completos de todas las carreras con contenido detallado
const carrerasDataLecciones = [
    {
        nombre: 'Ingeniería en Sistemas',
        lecciones: [
            { 
                titulo: 'Fundamentos de programación en Python', 
                contenido: 'Variables, tipos de datos, estructuras de control (if, for, while). Ejemplo práctico: calcular el IMC.',
                objetivos: [
                    'Comprender los conceptos básicos de programación',
                    'Dominar variables y tipos de datos en Python',
                    'Implementar estructuras de control (if, for, while)',
                    'Crear programas simples y funcionales',
                    'Aplicar buenas prácticas de programación'
                ],
                contenidoDetallado: `
                    <h3>🐍 Introducción a Python</h3>
                    <p>Python es un lenguaje de programación de alto nivel, interpretado y de propósito general. Es conocido por su sintaxis clara y legible, lo que lo hace ideal para principiantes.</p>
                    
                    <h4>📊 Variables y Tipos de Datos</h4>
                    <p>En Python, las variables se crean automáticamente cuando les asignas un valor:</p>
                    <ul>
                        <li><strong>Enteros (int):</strong> números sin decimales → <code>edad = 25</code></li>
                        <li><strong>Flotantes (float):</strong> números con decimales → <code>peso = 65.5</code></li>
                        <li><strong>Cadenas (str):</strong> texto entre comillas → <code>nombre = "Ana"</code></li>
                        <li><strong>Booleanos (bool):</strong> valores de verdad → <code>es_estudiante = True</code></li>
                    </ul>

                    <h4>🤖 Estructuras de Control</h4>
                    <p>Estas estructuras te permiten tomar decisiones y repetir acciones en tu código.</p>
                    <ul>
                        <li><strong>Condicionales (if):</strong> Ejecuta un bloque de código si una condición es verdadera.</li>
                        <li><strong>Bucles (for):</strong> Itera sobre una secuencia (como una lista o un rango).</li>
                        <li><strong>Bucles (while):</strong> Repite un bloque de código mientras una condición sea verdadera.</li>
                    </ul>
                `,
                recursos: [
                    { nombre: 'Documentación oficial de Python', url: 'https://docs.python.org/3/' },
                    { nombre: 'Tutorial de Python para principiantes', url: 'https://www.w3schools.com/python/' }
                ]
            },
            {
                titulo: 'Bases de Datos con SQL',
                contenido: 'Conceptos básicos, sentencias SELECT, INSERT, UPDATE, DELETE. Ejemplo: crear una base de datos simple.',
                objetivos: [
                    'Comprender los principios de las bases de datos relacionales',
                    'Escribir sentencias SQL básicas',
                    'Manejar datos con CREATE, READ, UPDATE, DELETE',
                    'Diseñar esquemas de bases de datos simples'
                ],
                contenidoDetallado: `
                    <h3>🗄️ Introducción a las Bases de Datos</h3>
                    <p>Una base de datos es un conjunto de datos estructurados que se almacenan de forma organizada en un sistema informático.</p>
                    
                    <h4>🔍 SQL (Structured Query Language)</h4>
                    <p>SQL es el lenguaje estándar para interactuar con bases de datos relacionales.</p>
                    <ul>
                        <li><strong>SELECT:</strong> Para recuperar datos de la base de datos.</li>
                        <li><strong>INSERT:</strong> Para añadir nuevos registros.</li>
                        <li><strong>UPDATE:</strong> Para modificar registros existentes.</li>
                        <li><strong>DELETE:</strong> Para eliminar registros.</li>
                    </ul>
                `,
                recursos: [
                    { nombre: 'Tutorial de SQL de W3Schools', url: 'https://www.w3schools.com/sql/' },
                    { nombre: 'Hoja de trucos de SQL', url: 'https://sqlbolt.com/lesson/introduction_to_sql' }
                ]
            }
        ]
    },
    {
        nombre: 'Medicina',
        lecciones: [
            {
                titulo: 'Anatomía Humana: Sistema Óseo',
                contenido: 'Estudio de la estructura y función de los huesos del cuerpo humano.',
                objetivos: [
                    'Identificar los principales huesos del cuerpo',
                    'Comprender la función del sistema esquelético',
                    'Relacionar la anatomía ósea con patologías comunes'
                ],
                contenidoDetallado: `
                    <h3>💀 El Esqueleto Humano</h3>
                    <p>El esqueleto es la estructura interna del cuerpo que sostiene y protege los órganos, permite el movimiento y produce células sanguíneas.</p>
                    
                    <h4>🦴 Huesos Principales</h4>
                    <ul>
                        <li><strong>Cráneo:</strong> Protege el cerebro.</li>
                        <li><strong>Columna Vertebral:</strong> Soporta el cuerpo y protege la médula espinal.</li>
                        <li><strong>Costillas:</strong> Protegen el corazón y los pulmones.</li>
                        <li><strong>Fémur:</strong> El hueso más largo y fuerte del cuerpo.</li>
                    </ul>
                `,
                recursos: [
                    { nombre: 'Atlas de Anatomía Humana (interactivo)', url: 'https://www.kenhub.com/es' }
                ]
            }
        ]
    }
];

function cargarDetalleLeccion() {
    const urlParams = new URLSearchParams(window.location.search);
    const carrera = urlParams.get('carrera');
    const leccionIndex = parseInt(urlParams.get('index'));
    const carreraData = carrerasDataLecciones.find(c => c.nombre === carrera);

    if (!carreraData || isNaN(leccionIndex) || !carreraData.lecciones[leccionIndex]) {
        document.querySelector('.lesson-container').innerHTML = '<h2>Lección no encontrada.</h2>';
        return;
    }

    const leccion = carreraData.lecciones[leccionIndex];
    document.getElementById('lesson-title').textContent = leccion.titulo;
    document.getElementById('lesson-content').innerHTML = leccion.contenidoDetallado;

    const objetivosList = document.getElementById('objetivos-list');
    objetivosList.innerHTML = leccion.objetivos.map(obj => `<li>${obj}</li>`).join('');

    const resourcesList = document.getElementById('resources-list');
    resourcesList.innerHTML = leccion.recursos.map(res => `<li><a href="${res.url}" target="_blank">${res.nombre}</a></li>`).join('');

    document.getElementById('next-lesson').dataset.carrera = carrera;
    document.getElementById('next-lesson').dataset.index = leccionIndex + 1;
    document.getElementById('prev-lesson').dataset.carrera = carrera;
    document.getElementById('prev-lesson').dataset.index = leccionIndex - 1;

    if (leccionIndex === 0) {
        document.getElementById('prev-lesson').style.display = 'none';
    } else {
        document.getElementById('prev-lesson').style.display = 'inline-block';
    }
    if (leccionIndex >= carreraData.lecciones.length - 1) {
        document.getElementById('next-lesson').style.display = 'none';
    } else {
        document.getElementById('next-lesson').style.display = 'inline-block';
    }

    simularProgreso();
}

function configurarNavegacion() {
    document.getElementById('prev-lesson').addEventListener('click', function(e) {
        const carrera = e.target.dataset.carrera;
        const index = parseInt(e.target.dataset.index);
        if (index >= 0) {
            window.location.href = `leccion-detalle.html?carrera=${encodeURIComponent(carrera)}&index=${index}`;
        }
    });

    document.getElementById('next-lesson').addEventListener('click', function(e) {
        const carrera = e.target.dataset.carrera;
        const index = parseInt(e.target.dataset.index);
        const carreraData = carrerasDataLecciones.find(c => c.nombre === carrera);
        if (index < carreraData.lecciones.length) {
            window.location.href = `leccion-detalle.html?carrera=${encodeURIComponent(carrera)}&index=${index}`;
        }
    });
}

function configurarChatbot() {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-chat');
    const chatWindow = document.getElementById('chat-window');
    
    if (!chatInput || !sendBtn || !chatWindow) return;

    function agregarMensaje(remitente, mensaje) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${remitente.toLowerCase()}`;
        msgDiv.innerHTML = `<strong>${remitente}:</strong> ${mensaje}`;
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
    
    function respuestaBot(mensaje) {
        const mensajeLower = mensaje.toLowerCase();
        const leccion = document.getElementById('lesson-title').textContent;

        const respuestasContextuales = [
            `Para entender "${leccion}", te sugiero enfocarte en los objetivos principales. ¿Hay alguno que te resulte más difícil?`,
            `¡Buena pregunta! Sobre "${leccion}", los conceptos clave son...`,
            `Para profundizar en esto, te recomiendo revisar el primer recurso adicional de la lección.`
        ];
        
        return respuestasContextuales[Math.floor(Math.random() * respuestasContextuales.length)];
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

function simularProgreso() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill && progressText) {
        let progreso = 0;
        const intervalo = setInterval(function() {
            progreso += 5;
            progressFill.style.width = progreso + '%';
            progressText.textContent = progreso + '%';
            
            if (progreso >= 25) {
                clearInterval(intervalo);
            }
        }, 200);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cargarDetalleLeccion();
    configurarNavegacion();
    configurarChatbot();
});