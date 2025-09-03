// carreras.js - Lógica para mostrar lecciones y prácticas por carrera
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const carreraSeleccionada = params.get('carrera');

    if (carreraSeleccionada) {
        document.querySelector('.carrera-title').textContent = decodeURIComponent(carreraSeleccionada);
        mostrarLeccionesYPracticas(carreraSeleccionada);
    } else {
        document.getElementById('carrera-section').innerHTML = '<p style="text-align: center; color: #666;">No se seleccionó ninguna carrera. Regresa al <a href="test.html">Test Vocacional</a>.</p>';
    }
});

const carrerasContenido = {
    'Ingeniería en Sistemas': {
        lecciones: [
            { titulo: 'Fundamentos de Programación', descripcion: 'Aprende los conceptos básicos de algoritmos y lógica de programación.' },
            { titulo: 'Introducción a Bases de Datos', descripcion: 'Conoce los modelos de datos y el lenguaje SQL para gestionar información.' },
            { titulo: 'Desarrollo Web (Frontend)', descripcion: 'Domina HTML, CSS y JavaScript para crear interfaces de usuario interactivas.' },
            { titulo: 'Desarrollo Web (Backend)', descripcion: 'Crea la lógica del servidor y APIs con tecnologías como Node.js o Python.' },
            { titulo: 'Sistemas Operativos', descripcion: 'Entiende cómo funcionan los sistemas operativos y su gestión de recursos.' },
            { titulo: 'Estructuras de Datos y Algoritmos', descripcion: 'Optimiza la eficiencia de tu código con el uso de estructuras de datos avanzadas.' }
        ],
        practicas: [
            { titulo: 'Crear una Calculadora Web', descripcion: 'Proyecto práctico para aplicar tus conocimientos de JavaScript y HTML.' },
            { titulo: 'Diseñar una Base de Datos', descripcion: 'Diseña el esquema de una base de datos para una aplicación web sencilla.' },
            { titulo: 'Desarrollar una API Rest', descripcion: 'Construye tu primera API funcional usando un framework de backend.' },
            { titulo: 'Simular un Sistema de Archivos', descripcion: 'Implementa un pequeño simulador para entender la gestión de archivos.' }
        ]
    },
    'Medicina': {
        lecciones: [
            { titulo: 'Anatomía Humana', descripcion: 'Estudio de la estructura del cuerpo humano y sus sistemas.' },
            { titulo: 'Fisiología', descripcion: 'Aprende cómo funcionan los órganos y sistemas del cuerpo en condiciones normales.' },
            { titulo: 'Bioquímica', descripcion: 'Explora los procesos químicos y moleculares dentro de los seres vivos.' },
            { titulo: 'Farmacología', descripcion: 'Conoce los efectos de los medicamentos y su uso en el tratamiento de enfermedades.' },
            { titulo: 'Microbiología', descripcion: 'Estudio de los microorganismos y su relación con la salud humana.' }
        ],
        practicas: [
            { titulo: 'Análisis de un Caso Clínico', descripcion: 'Diagnostica y propone un tratamiento para un paciente ficticio.' },
            { titulo: 'Técnicas de Sutura', descripcion: 'Práctica de habilidades manuales para el cierre de heridas.' },
            { titulo: 'Interpretación de Radiografías', descripcion: 'Identifica estructuras y patologías en imágenes de rayos X.' },
            { titulo: 'Simulación de Urgencias', descripcion: 'Manejo de un escenario de emergencia médica con un maniquí.' }
        ]
    },
    'Diseño Gráfico': {
        lecciones: [
            { titulo: 'Teoría del Color', descripcion: 'Aprende sobre la psicología y la armonía del color en el diseño.' },
            { titulo: 'Principios de la Tipografía', descripcion: 'Domina el arte y la técnica de la selección de fuentes.' },
            { titulo: 'Introducción a la Suite Adobe', descripcion: 'Familiarízate con las herramientas esenciales como Photoshop e Illustrator.' },
            { titulo: 'Diseño de Identidad de Marca', descripcion: 'Crea logotipos y sistemas visuales para representar marcas.' },
            { titulo: 'Diseño UX/UI', descripcion: 'Aprende a crear interfaces de usuario intuitivas y agradables.' }
        ],
        practicas: [
            { titulo: 'Rediseñar un Logo Famoso', descripcion: 'Crea una nueva identidad visual para una marca conocida.' },
            { titulo: 'Diseñar un Cartel Publicitario', descripcion: 'Aplica los principios de diseño para un mensaje visual impactante.' },
            { titulo: 'Crear un Mockup de Sitio Web', descripcion: 'Diseña la maqueta visual de una página web en Figma o Adobe XD.' }
        ]
    },
    'Psicología': {
        lecciones: [
            { titulo: 'Historia de la Psicología', descripcion: 'Explora las principales corrientes y pensadores que moldearon la disciplina.' },
            { titulo: 'Desarrollo Humano', descripcion: 'Estudia los cambios cognitivos y emocionales a lo largo de la vida.' },
            { titulo: 'Bases Biológicas del Comportamiento', descripcion: 'Comprende la relación entre el cerebro y la conducta humana.' },
            { titulo: 'Psicopatología', descripcion: 'Aprende a identificar y comprender los trastornos mentales.' },
            { titulo: 'Técnicas de Entrevista Clínica', descripcion: 'Desarrolla habilidades para la comunicación efectiva con pacientes.' }
        ],
        practicas: [
            { titulo: 'Análisis de un Caso de Estudio', descripcion: 'Evalúa un caso psicológico y propone un plan de intervención.' },
            { titulo: 'Role-Playing de Sesión Terapéutica', descripcion: 'Simula una sesión de terapia para practicar tus habilidades de escucha.' }
        ]
    },
    'Administración de Empresas': {
        lecciones: [
            { titulo: 'Fundamentos de la Gestión', descripcion: 'Conoce los principios de la planificación, organización y dirección.' },
            { titulo: 'Contabilidad Financiera', descripcion: 'Aprende a interpretar estados financieros para la toma de decisiones.' },
            { titulo: 'Marketing Estratégico', descripcion: 'Desarrolla planes para posicionar productos y servicios en el mercado.' },
            { titulo: 'Gestión de Proyectos', descripcion: 'Domina las metodologías para la ejecución exitosa de proyectos.' }
        ],
        practicas: [
            { titulo: 'Crear un Plan de Negocios', descripcion: 'Elabora un plan completo para una startup ficticia.' },
            { titulo: 'Análisis de Mercado', descripcion: 'Investiga y presenta un análisis FODA para un producto o servicio.' },
            { titulo: 'Simulación de Operaciones', descripcion: 'Resuelve un problema de logística y cadena de suministro.' }
        ]
    },
    'Arquitectura': {
        lecciones: [
            { titulo: 'Historia de la Arquitectura', descripcion: 'Viaja por el tiempo para conocer los estilos y movimientos más influyentes.' },
            { titulo: 'Principios de Diseño', descripcion: 'Entiende cómo la forma, el espacio y la luz interactúan en un proyecto.' },
            { titulo: 'Cálculo Estructural', descripcion: 'Aprende a dimensionar y asegurar la estabilidad de una edificación.' },
            { titulo: 'Dibujo Técnico Asistido por Computadora', descripcion: 'Domina herramientas como AutoCAD para la creación de planos.' }
        ],
        practicas: [
            { titulo: 'Diseñar una Casa Pequeña', descripcion: 'Crea los planos y el modelo 3D de una vivienda unifamiliar.' },
            { titulo: 'Maqueta de un Edificio', descripcion: 'Construye un modelo físico para entender la volumetría del espacio.' }
        ]
    },
    'Derecho': {
        lecciones: [
            { titulo: 'Introducción al Derecho', descripcion: 'Aprende los conceptos fundamentales y las ramas del sistema jurídico.' },
            { titulo: 'Derecho Constitucional', descripcion: 'Estudia la ley suprema del país y los derechos fundamentales.' },
            { titulo: 'Derecho Civil y de Familia', descripcion: 'Analiza las leyes que rigen las relaciones entre personas.' },
            { titulo: 'Lógica Jurídica y Argumentación', descripcion: 'Desarrolla habilidades de razonamiento para defender un caso.' }
        ],
        practicas: [
            { titulo: 'Análisis de un Caso Jurídico', descripcion: 'Investiga y elabora un argumento legal para un escenario hipotético.' },
            { titulo: 'Redactar un Contrato', descripcion: 'Practica la redacción de un documento legal con cláusulas específicas.' },
            { titulo: 'Simulación de un Juicio Oral', descripcion: 'Participa en un juicio simulado para poner a prueba tu oratoria.' }
        ]
    },
    'Comunicación': {
        lecciones: [
            { titulo: 'Teoría de la Comunicación', descripcion: 'Conoce los modelos y principios que rigen la interacción humana.' },
            { titulo: 'Periodismo y Redacción', descripcion: 'Aprende a investigar, redactar y estructurar noticias de manera ética.' },
            { titulo: 'Producción Audiovisual', descripcion: 'Domina los conceptos de guionismo, dirección y edición de videos.' },
            { titulo: 'Relaciones Públicas', descripcion: 'Estudia cómo construir y mantener una imagen positiva para empresas y personas.' }
        ],
        practicas: [
            { titulo: 'Escribir un Comunicado de Prensa', descripcion: 'Redacta un comunicado oficial para anunciar un evento importante.' },
            { titulo: 'Producir un Corto Documental', descripcion: 'Graba y edita un documental corto sobre un tema de tu interés.' }
        ]
    },
    'Ingeniería Civil': {
        lecciones: [
            { titulo: 'Mecánica de Suelos', descripcion: 'Estudia las propiedades del suelo y su importancia en las cimentaciones.' },
            { titulo: 'Hidráulica y Saneamiento', descripcion: 'Diseña sistemas de distribución de agua y drenaje en ciudades.' },
            { titulo: 'Diseño de Estructuras', descripcion: 'Aprende a calcular y diseñar elementos como vigas, columnas y losas.' },
            { titulo: 'Materiales de Construcción', descripcion: 'Conoce las propiedades y aplicaciones de materiales como el concreto y el acero.' }
        ],
        practicas: [
            { titulo: 'Cálculo de Cargas Estructurales', descripcion: 'Realiza cálculos para asegurar la resistencia de una viga de acero.' },
            { titulo: 'Diseñar un Sistema de Drenaje', descripcion: 'Crea el plano de un sistema de drenaje para un desarrollo urbano.' }
        ]
    },
    'Contabilidad': {
        lecciones: [
            { titulo: 'Principios Contables', descripcion: 'Aprende los fundamentos del registro de transacciones financieras.' },
            { titulo: 'Análisis de Estados Financieros', descripcion: 'Evalúa la salud económica de una empresa a través de sus reportes.' },
            { titulo: 'Cálculo de Impuestos', descripcion: 'Domina los conceptos fiscales para la correcta liquidación de impuestos.' },
            { titulo: 'Auditoría', descripcion: 'Conoce el proceso de verificación de los registros contables.' }
        ],
        practicas: [
            { titulo: 'Registrar Transacciones', descripcion: 'Captura un conjunto de transacciones en un libro contable.' },
            { titulo: 'Preparar un Balance General', descripcion: 'Elabora un estado de situación financiera para una empresa.' },
            { titulo: 'Análisis de Inversiones', descripcion: 'Evalúa dos oportunidades de inversión para una empresa.' }
        ]
    },
    'Pedagogía': {
        lecciones: [
            { titulo: 'Teorías del Aprendizaje', descripcion: 'Explora las principales corrientes y los procesos que moldean la educación.' },
            { titulo: 'Diseño Curricular', descripcion: 'Aprende a estructurar planes de estudio y programas educativos.' },
            { titulo: 'Psicología Educativa', descripcion: 'Comprende el desarrollo cognitivo y emocional de los estudiantes.' },
            { titulo: 'Evaluación del Aprendizaje', descripcion: 'Diseña instrumentos para medir el progreso y los resultados de los estudiantes.' }
        ],
        practicas: [
            { titulo: 'Preparar una Clase Interactiva', descripcion: 'Diseña y presenta una clase de 15 minutos sobre un tema específico.' },
            { titulo: 'Desarrollar un Plan de Estudios', descripcion: 'Crea un plan de estudios para un curso corto o un taller.' }
        ]
    },
    'Nutrición': {
        lecciones: [
            { titulo: 'Bases de la Alimentación', descripcion: 'Aprende sobre los macronutrientes y micronutrientes esenciales para la vida.' },
            { titulo: 'Fisiología de la Digestión', descripcion: 'Comprende el proceso de asimilación de los alimentos en el cuerpo.' },
            { titulo: 'Nutrición Clínica', descripcion: 'Estudia cómo la dieta puede prevenir y tratar enfermedades.' },
            { titulo: 'Evaluación del Estado Nutricional', descripcion: 'Aprende a medir y evaluar el estado de salud nutricional de una persona.' }
        ],
        practicas: [
            { titulo: 'Crear un Plan de Alimentación', descripcion: 'Diseña un menú semanal para una persona con necesidades dietéticas específicas.' },
            { titulo: 'Análisis de Etiquetado Nutricional', descripcion: 'Evalúa y compara el valor nutricional de diferentes productos del supermercado.' }
        ]
    }
};


function mostrarLeccionesYPracticas(carrera) {
    const data = carrerasContenido[carrera];
    if (!data) return;

    const leccionesList = document.getElementById('lecciones-list');
    const practicasList = document.getElementById('practicas-list');

    leccionesList.innerHTML = '';
    practicasList.innerHTML = '';

    // Mostrar Lecciones
    data.lecciones.forEach((leccion, index) => {
        const item = document.createElement('a');
        item.href = `leccion-detalle.html?carrera=${encodeURIComponent(carrera)}&index=${index}`;
        item.className = 'item-card lesson-card';
        item.innerHTML = `
            <h4 class="item-title">📖 ${leccion.titulo}</h4>
            <p class="item-description">${leccion.descripcion}</p>
        `;
        leccionesList.appendChild(item);
    });

    // Mostrar Prácticas
    data.practicas.forEach((practica, index) => {
        const item = document.createElement('a');
        item.href = `practica-detalle.html?carrera=${encodeURIComponent(carrera)}&index=${index}`;
        item.className = 'item-card practice-card';
        item.innerHTML = `
            <h4 class="item-title">🛠️ ${practica.titulo}</h4>
            <p class="item-description">${practica.descripcion}</p>
        `;
        practicasList.appendChild(item);
    });
}