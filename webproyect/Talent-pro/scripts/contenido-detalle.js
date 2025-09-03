// contenido-detalle.js - Contenido detallado para lecciones y prácticas

const contenidoLecciones = {
    'Ingeniería en Sistemas': [
        // Lección 1: Fundamentos de Programación
        {
            descripcion: 'Esta lección es la base de todo. Aquí entenderás cómo las computadoras piensan y cómo darles instrucciones precisas a través de algoritmos y código. Es el punto de partida para convertirte en un creador de software.',
            objetivos: 'Comprender los conceptos de variables, estructuras de control (condicionales y bucles) y funciones. Resolver problemas lógicos sencillos con pseudocódigo y un lenguaje de programación básico como Python.',
            recursos: ['Libro: "Grokking Algorithms"', 'Plataforma: Codecademy (curso de Python)', 'Canal de YouTube: Píldoras informáticas'],
            faqs: [
                { pregunta: '¿Necesito saber matemáticas avanzadas?', respuesta: 'No para empezar, pero una buena base lógica es fundamental. El álgebra y la lógica discreta serán útiles más adelante.' },
                { pregunta: '¿Qué lenguaje debo aprender primero?', respuesta: 'Python es excelente para principiantes por su sintaxis clara y legible.' }
            ]
        },
        // Lección 2: Introducción a Bases de Datos
        {
            descripcion: 'Las bases de datos son el corazón de cualquier aplicación moderna. En esta lección, aprenderás a almacenar, organizar y recuperar grandes volúmenes de información de manera eficiente y segura.',
            objetivos: 'Entender qué es un sistema de gestión de bases de datos (SGBD). Aprender los fundamentos del modelo relacional y el lenguaje SQL (Structured Query Language).',
            recursos: ['Libro: "SQL para Dummies"', 'Herramienta: DB Fiddle o MySQL Workbench', 'Tutorial: W3Schools SQL Tutorial'],
            faqs: [
                { pregunta: '¿Por qué es importante saber SQL?', respuesta: 'SQL es el lenguaje estándar para interactuar con bases de datos relacionales, una habilidad esencial para casi cualquier desarrollador.' },
                { pregunta: '¿Todas las bases de datos son iguales?', respuesta: 'No. Existen diferentes tipos (relacionales, NoSQL), pero el concepto de organizar datos es común.' }
            ]
        },
        // Lección 3: Desarrollo Web (Frontend)
        {
            descripcion: 'El frontend es lo que ves y con lo que interactúas en una página web. Aquí, darás vida al diseño visual usando los tres lenguajes fundamentales de la web.',
            objetivos: 'Dominar HTML para la estructura, CSS para el estilo y JavaScript para la interactividad. Crear una página web estática desde cero y añadirle efectos dinámicos.',
            recursos: ['Curso Online: The Odin Project', 'Plataforma: FreeCodeCamp', 'Canal de YouTube: Fazt Code'],
            faqs: [
                { pregunta: '¿Cuál es la diferencia entre HTML, CSS y JavaScript?', respuesta: 'HTML es la estructura (esqueleto), CSS es el estilo (ropa y maquillaje) y JavaScript es la interactividad (comportamiento).' }
            ]
        },
        // Lección 4: Desarrollo Web (Backend)
        {
            descripcion: 'El backend es la lógica que se ejecuta en el servidor y que hace que las páginas web sean dinámicas. Conectarás tu frontend con la base de datos y manejarás la autenticación de usuarios.',
            objetivos: 'Entender el concepto de cliente-servidor. Aprender a crear una API REST con Node.js y Express. Conectar tu API a una base de datos.',
            recursos: ['Curso Online: Node.js Tutorial for Beginners de Net Ninja', 'Herramienta: Postman', 'Documentación oficial de Express.js'],
            faqs: [
                { pregunta: '¿Necesito saber frontend para aprender backend?', respuesta: 'No, pero es muy recomendable para entender cómo se comunican las dos partes de una aplicación web.' }
            ]
        },
        // Lección 5: Sistemas Operativos
        {
            descripcion: 'Esta lección te da una mirada bajo el capó. Comprenderás cómo tu computadora gestiona sus recursos, desde el procesador hasta la memoria y los archivos. Es fundamental para optimizar el rendimiento y resolver problemas complejos.',
            objetivos: 'Conocer las funciones principales de un SO: gestión de procesos, memoria, archivos y dispositivos. Entender conceptos como hilos, sincronización y memoria virtual.',
            recursos: ['Libro: "Sistemas Operativos" de Tanenbaum', 'Canal de YouTube: Computerphile', 'Simuladores de SO online'],
            faqs: [
                { pregunta: '¿Por qué es importante para un ingeniero en sistemas?', respuesta: 'Un buen entendimiento del SO te permite escribir código más eficiente y diagnosticar problemas de rendimiento a un nivel más profundo.' }
            ]
        },
        // Lección 6: Estructuras de Datos y Algoritmos
        {
            descripcion: 'El arte de la programación no es solo escribir código, sino escribirlo de manera eficiente. Esta lección es clave para resolver problemas complejos y prepararte para entrevistas de trabajo en grandes empresas tecnológicas.',
            objetivos: 'Aprender estructuras de datos como listas enlazadas, árboles, grafos y tablas hash. Dominar algoritmos de búsqueda y ordenamiento y analizar su complejidad (notación Big O).',
            recursos: ['Libro: "Cracking the Coding Interview"', 'Plataforma: HackerRank o LeetCode', 'Canal de YouTube: freeCodeCamp.org'],
            faqs: [
                { pregunta: '¿Esto es solo para ingenieros de software?', respuesta: 'Aunque es vital para roles de software, el pensamiento algorítmico es útil en cualquier campo que implique resolver problemas de manera estructurada.' }
            ]
        }
    ],
    'Medicina': [
        // Lección 1: Anatomía Humana
        {
            descripcion: 'La Anatomía es el mapa del cuerpo humano. En esta lección, conocerás cada hueso, músculo y órgano, sentando las bases para comprender cómo funciona el cuerpo en su totalidad.',
            objetivos: 'Identificar las principales estructuras del cuerpo humano a nivel macroscópico y microscópico. Comprender la relación espacial entre órganos y sistemas.',
            recursos: ['Libro: "Anatomía de Gray para estudiantes"', 'Aplicación: 3D Anatomy', 'Atlas de Anatomía online: Acland\'s Anatomy'],
            faqs: [{ pregunta: '¿Se requiere memorizar cada detalle?', respuesta: 'La memorización es parte del proceso, pero lo más importante es entender las relaciones y funciones de las estructuras.' }]
        },
        // Lección 2: Fisiología
        {
            descripcion: 'Si la anatomía es la estructura, la fisiología es la función. Aquí, aprenderás cómo cada sistema del cuerpo (cardiovascular, respiratorio, nervioso) trabaja en conjunto para mantener la vida.',
            objetivos: 'Comprender los mecanismos y procesos que ocurren en los órganos y sistemas para mantener la homeostasis.',
            recursos: ['Libro: "Fisiología Humana" de Guyton y Hall', 'Video: "Fisiología" de Khan Academy', 'Simuladores de Fisiología'],
            faqs: [{ pregunta: '¿Cómo relaciono la fisiología con la medicina clínica?', respuesta: 'Todo diagnóstico se basa en la fisiología. Un síntoma es una alteración de una función fisiológica normal.' }]
        },
        // Lección 3: Bioquímica
        {
            descripcion: 'La bioquímica es la química de la vida. Te sumergirás en las moléculas que nos componen (proteínas, lípidos, carbohidratos) y los procesos metabólicos que nos dan energía.',
            objetivos: 'Entender el papel de las biomoléculas. Comprender los ciclos metabólicos como la glucólisis y el ciclo de Krebs.',
            recursos: ['Libro: "Bioquímica" de Lehninger', 'Tutorial: "Bioquímica" en YouTube de Bioquímica y Más'],
            faqs: [{ pregunta: '¿Por qué es tan difícil la bioquímica?', respuesta: 'Puede ser abstracta, pero entenderla es clave para la farmacología y la nutrición, ya que los medicamentos y alimentos actúan a nivel molecular.' }]
        },
        // Lección 4: Farmacología
        {
            descripcion: 'Esta lección te enseñará cómo los medicamentos interactúan con el cuerpo para tratar enfermedades. Aprenderás a elegir el tratamiento correcto y a entender sus efectos.',
            objetivos: 'Clasificar los diferentes tipos de fármacos. Conocer los mecanismos de acción, efectos secundarios e indicaciones de los medicamentos más comunes.',
            recursos: ['Libro: "Goodman & Gilman: Las bases farmacológicas de la terapéutica"', 'Software: Guías Farmacológicas online'],
            faqs: [{ pregunta: '¿Qué es un efecto secundario?', respuesta: 'Es un efecto no deseado que ocurre con la dosis terapéutica de un medicamento.' }]
        },
        // Lección 5: Microbiología
        {
            descripcion: 'El mundo de los microorganismos es fascinante y crucial para la medicina. Aquí estudiarás bacterias, virus y hongos, y cómo causan enfermedades infecciosas.',
            objetivos: 'Identificar los principales patógenos. Comprender los mecanismos de transmisión y los métodos de diagnóstico y tratamiento de infecciones.',
            recursos: ['Libro: "Microbiología Médica" de Jawetz, Melnick y Adelberg', 'Recurso online: "Microbiología y Parasitología Médica" en UNAM'],
            faqs: [{ pregunta: '¿Es verdad que los antibióticos no curan los virus?', respuesta: 'Sí. Los antibióticos solo son efectivos contra bacterias.' }]
        }
    ],
    'Diseño Gráfico': [
        // Lección 1: Teoría del Color
        {
            descripcion: 'El color es una de las herramientas más poderosas del diseñador. Aprenderás a usarlo para evocar emociones, guiar la mirada y construir una identidad visual coherente.',
            objetivos: 'Comprender la rueda de color, los modelos de color (RGB, CMYK) y la psicología del color. Crear paletas de color armoniosas para diferentes propósitos.',
            recursos: ['Libro: "La interacción del color" de Josef Albers', 'Herramienta: Adobe Color', 'Recurso online: Paletton'],
            faqs: [{ pregunta: '¿Qué diferencia hay entre RGB y CMYK?', respuesta: 'RGB es para pantallas (luz) y CMYK es para impresión (tinta). Usar el incorrecto puede alterar los colores en el resultado final.' }]
        },
        // Lección 2: Principios de la Tipografía
        {
            descripcion: 'La tipografía es más que solo texto; es arte. En esta lección, aprenderás a seleccionar, combinar y maquetar fuentes para mejorar la legibilidad y la estética de tus diseños.',
            objetivos: 'Identificar diferentes tipos de fuentes (serif, sans-serif, script). Entender la jerarquía visual y el espaciado entre letras (kerning) y líneas (leading).',
            recursos: ['Libro: "Thinking with Type" de Ellen Lupton', 'Recurso online: Google Fonts', 'Guía: Guía básica de tipografía en Canva'],
            faqs: [{ pregunta: '¿Cuántas fuentes debo usar en un diseño?', respuesta: 'Generalmente, se recomienda usar 2-3 fuentes para mantener un diseño limpio y coherente.' }]
        }
    ],
    'Psicología': [
        // Lección 1: Historia de la Psicología
        {
            descripcion: 'Para entender el presente, hay que conocer el pasado. Esta lección te llevará por un recorrido desde los orígenes filosóficos hasta la creación de las principales escuelas de pensamiento.',
            objetivos: 'Conocer las principales corrientes (conductismo, psicoanálisis, humanismo, cognitivismo). Identificar a los pensadores clave como Freud, Skinner y Maslow.',
            recursos: ['Libro: "Historia de la Psicología" de Goodwin', 'Canal de YouTube: CrashCourse Psychology'],
            faqs: [{ pregunta: '¿La psicología es solo sobre el psicoanálisis?', respuesta: 'No. El psicoanálisis es una de las corrientes, pero la psicología moderna abarca muchas otras como la cognitiva y la neurociencia.' }]
        },
        // Lección 2: Desarrollo Humano
        {
            descripcion: 'El desarrollo humano es un viaje fascinante. Aprenderás cómo las personas cambian física, cognitiva y emocionalmente desde la infancia hasta la vejez.',
            objetivos: 'Entender las etapas del desarrollo (Piaget, Erikson). Analizar los factores genéticos y ambientales que influyen en el crecimiento.',
            recursos: ['Libro: "Desarrollo Humano" de Papalia', 'Artículo: "Teorías del Desarrollo Humano" de la UNAM'],
            faqs: [{ pregunta: '¿El desarrollo termina en la adultez?', respuesta: 'No. El desarrollo es un proceso continuo que dura toda la vida, incluyendo el envejecimiento.' }]
        }
    ],
    'Administración de Empresas': [
        // Lección 1: Fundamentos de la Gestión
        {
            descripcion: 'Esta es la lección inicial que te dará una visión completa de lo que implica administrar una empresa. Aprenderás los pilares básicos para dirigir y optimizar recursos.',
            objetivos: 'Comprender las cuatro funciones de la administración: planeación, organización, dirección y control. Conocer los diferentes tipos de estructuras organizacionales.',
            recursos: ['Libro: "Principios de Administración" de Robbins y Coulter', 'Caso de Estudio: Harvard Business Review'],
            faqs: [{ pregunta: '¿Es lo mismo ser un líder que un jefe?', respuesta: 'No. Un jefe dirige, un líder inspira y guía a su equipo hacia una visión compartida.' }]
        },
        // Lección 2: Contabilidad Financiera
        {
            descripcion: 'Los números cuentan una historia. Con esta lección, aprenderás a leer e interpretar el lenguaje financiero para tomar decisiones informadas sobre la salud económica de una empresa.',
            objetivos: 'Elaborar un balance general, estado de resultados y flujo de efectivo. Analizar los indicadores financieros clave para evaluar el desempeño.',
            recursos: ['Libro: "Contabilidad de la A a la Z" de A. K. K. B.'],
            faqs: [{ pregunta: '¿Necesito ser un experto en matemáticas?', respuesta: 'No. La contabilidad requiere precisión, pero se basa en la lógica y en reglas más que en cálculos complejos.' }]
        }
    ],
    'Arquitectura': [
        // Lección 1: Historia de la Arquitectura
        {
            descripcion: 'Viaja por el tiempo y descubre cómo las civilizaciones construyeron sus mundos. Desde las pirámides de Egipto hasta los rascacielos modernos, entenderás la evolución del diseño y la tecnología.',
            objetivos: 'Identificar los principales estilos arquitectónicos (clásico, gótico, barroco, moderno). Comprender el contexto social y cultural detrás de cada movimiento.',
            recursos: ['Libro: "Historia de la Arquitectura" de Spiro Kostof'],
            faqs: [{ pregunta: '¿Por qué es importante la historia para un arquitecto?', respuesta: 'La historia es una fuente de inspiración y te permite evitar errores del pasado, adaptando soluciones probadas a problemas contemporáneos.' }]
        },
        // Lección 2: Principios de Diseño
        {
            descripcion: 'Esta lección es tu caja de herramientas conceptual. Aprenderás a manipular elementos como el espacio, la forma, la luz y la textura para crear edificios funcionales y estéticamente agradables.',
            objetivos: 'Aplicar principios de diseño como la proporción, la escala, el ritmo y el equilibrio. Entender la relación entre el edificio y su entorno.',
            recursos: ['Libro: "El Arte de Proyectar en Arquitectura" de Ernst Neufert'],
            faqs: [{ pregunta: '¿Es el diseño arquitectónico lo mismo que el diseño de interiores?', respuesta: 'No. La arquitectura se enfoca en el diseño de la estructura y el espacio habitable, mientras que el interiorismo se ocupa de la decoración y el mobiliario dentro de ese espacio.' }]
        }
    ],
    'Derecho': [
        // Lección 1: Introducción al Derecho
        {
            descripcion: 'Aquí conocerás los cimientos del sistema jurídico. Aprenderás qué es la ley, de dónde viene y cómo se organiza para gobernar la sociedad.',
            objetivos: 'Definir el concepto de derecho y sus principales fuentes (ley, costumbre, jurisprudencia). Identificar las ramas del derecho público y privado.',
            recursos: ['Libro: "Introducción al Estudio del Derecho" de Eduardo García Máynez'],
            faqs: [{ pregunta: '¿Es el derecho solo para abogados?', respuesta: 'No. Comprender los principios del derecho es útil para cualquier persona, ya que nos rige en la vida cotidiana.' }]
        },
        // Lección 2: Derecho Constitucional
        {
            descripcion: 'La Constitución es la ley máxima de una nación. En esta lección, entenderás su estructura y los derechos y deberes que consagra para los ciudadanos.',
            objetivos: 'Analizar la división de poderes (ejecutivo, legislativo, judicial). Comprender los derechos fundamentales y sus mecanismos de protección.',
            recursos: ['Constitución Política de tu país', 'Libro: "Manual de Derecho Constitucional" de J. J. S. O. A.'],
            faqs: [{ pregunta: '¿Qué es el "estado de derecho"?', respuesta: 'Es el principio por el cual todos, desde el gobierno hasta los ciudadanos, están sujetos a la ley.' }]
        }
    ],
    'Comunicación': [
        // Lección 1: Teoría de la Comunicación
        {
            descripcion: 'Esta lección es un viaje a la esencia de la interacción humana. Descubrirás cómo se transmite un mensaje, los elementos del proceso y cómo los medios influyen en nuestra percepción.',
            objetivos: 'Comprender los modelos básicos de comunicación. Analizar el rol del emisor, receptor, mensaje, canal y retroalimentación.',
            recursos: ['Libro: "Teoría de la Comunicación" de Denis McQuail'],
            faqs: [{ pregunta: '¿Por qué estudiar la teoría de la comunicación?', respuesta: 'Te da un marco conceptual para analizar cualquier tipo de interacción, desde una conversación personal hasta una campaña publicitaria global.' }]
        },
        // Lección 2: Periodismo y Redacción
        {
            descripcion: 'Aprenderás a contar historias de manera veraz, clara y concisa. Esta lección te enseña a investigar, entrevistar y escribir para diferentes formatos, desde un reportaje hasta un artículo de opinión.',
            objetivos: 'Dominar la estructura de la noticia (pirámide invertida). Desarrollar habilidades de redacción periodística y ética profesional.',
            recursos: ['Libro: "El arte del periodismo" de John McPhee'],
            faqs: [{ pregunta: '¿Qué es la ética periodística?', respuesta: 'Es el conjunto de principios morales que guían al periodista a buscar la verdad, ser objetivo y minimizar los daños.' }]
        }
    ],
    'Ingeniería Civil': [
        // Lección 1: Mecánica de Suelos
        {
            descripcion: 'Antes de construir, debes conocer el terreno. Esta lección es fundamental para entender las propiedades del suelo y cómo afecta la cimentación y estabilidad de cualquier estructura.',
            objetivos: 'Clasificar los diferentes tipos de suelo. Calcular la capacidad de carga del suelo y determinar la cimentación adecuada para un proyecto.',
            recursos: ['Libro: "Mecánica de Suelos" de Braja M. Das'],
            faqs: [{ pregunta: '¿Qué es una cimentación?', respuesta: 'Es la parte de una estructura que la conecta con el suelo, transfiriendo las cargas al terreno de forma segura.' }]
        },
        // Lección 2: Hidráulica y Saneamiento
        {
            descripcion: 'Esta lección se enfoca en el movimiento del agua. Aprenderás a diseñar sistemas que manejen el agua de manera eficiente, desde el suministro en una ciudad hasta el drenaje pluvial.',
            objetivos: 'Comprender los principios de la hidráulica (presión, flujo, velocidad). Diseñar redes de agua potable y sistemas de alcantarillado.',
            recursos: ['Libro: "Hidráulica de Canales" de Ven Te Chow'],
            faqs: [{ pregunta: '¿Qué es el saneamiento?', respuesta: 'Es el conjunto de técnicas y sistemas para la gestión y disposición de aguas residuales y residuos sólidos, vital para la salud pública.' }]
        }
    ],
    'Contabilidad': [
        // Lección 1: Principios Contables
        {
            descripcion: 'Esta lección es tu primer paso para dominar el lenguaje de los negocios. Aprenderás las reglas básicas para registrar, resumir e informar las transacciones financieras de una empresa.',
            objetivos: 'Comprender la ecuación contable (Activo = Pasivo + Patrimonio). Registrar transacciones en asientos de diario y transferirlas al libro mayor.',
            recursos: ['Libro: "Principios de Contabilidad" de Kieso, Weygandt y Kimmel'],
            faqs: [{ pregunta: '¿Qué es el "principio de partida doble"?', respuesta: 'Es el principio fundamental que establece que en toda transacción financiera, un cargo debe corresponder a un abono de igual valor.' }]
        },
        // Lección 2: Análisis de Estados Financieros
        {
            descripcion: 'Los estados financieros son como el historial médico de una empresa. Aquí aprenderás a leer e interpretar estos reportes para evaluar la salud y el rendimiento de un negocio.',
            objetivos: 'Analizar el balance general, estado de resultados y flujo de efectivo. Calcular ratios financieros (liquidez, rentabilidad) para tomar decisiones de inversión.',
            recursos: ['Libro: "Análisis e Interpretación de los Estados Financieros" de R. S. I. O. N.'],
            faqs: [{ pregunta: '¿Qué es un ratio financiero?', respuesta: 'Es una relación matemática entre dos cifras de los estados financieros, usada para evaluar el rendimiento o el riesgo de una empresa.' }]
        }
    ],
    'Pedagogía': [
        // Lección 1: Teorías del Aprendizaje
        {
            descripcion: '¿Cómo aprendemos? Esta lección explora las ideas de los grandes pensadores de la educación. Entenderás los procesos detrás de la adquisición de conocimiento, habilidades y valores.',
            objetivos: 'Identificar las principales teorías (conductismo, cognitivismo, constructivismo). Conocer a figuras como Piaget, Vygotsky y Skinner.',
            recursos: ['Libro: "Teorías del Aprendizaje" de Schunk'],
            faqs: [{ pregunta: '¿Qué es el constructivismo?', respuesta: 'Es una teoría que sostiene que el aprendizaje es un proceso activo en el que los estudiantes construyen su propio conocimiento a partir de sus experiencias.' }]
        },
        // Lección 2: Diseño Curricular
        {
            descripcion: 'Esta lección te da las herramientas para ser un arquitecto de la educación. Aprenderás a planificar, diseñar e implementar programas de estudio efectivos que guíen el aprendizaje.',
            objetivos: 'Comprender los componentes de un currículo (objetivos, contenidos, metodologías, evaluación). Diseñar un plan de estudios para un curso específico.',
            recursos: ['Libro: "Diseño Curricular" de F. M. U. S.'],
            faqs: [{ pregunta: '¿Qué es la evaluación del aprendizaje?', respuesta: 'Es el proceso sistemático de recolectar y analizar información para determinar el grado en que los estudiantes han logrado los objetivos de aprendizaje.' }]
        }
    ],
    'Nutrición': [
        // Lección 1: Bases de la Alimentación
        {
            descripcion: 'Esta es tu guía esencial para entender la ciencia detrás de lo que comemos. Descubrirás los roles de los macronutrientes (proteínas, carbohidratos, grasas) y micronutrientes (vitaminas, minerales) para la salud.',
            objetivos: 'Identificar las funciones y fuentes de los principales nutrientes. Comprender la importancia de una dieta balanceada para el bienestar.',
            recursos: ['Libro: "Nutrición y Salud" de J. V. L. M. T.'],
            faqs: [{ pregunta: '¿Es verdad que los carbohidratos son malos?', respuesta: 'No. Son la principal fuente de energía del cuerpo. El problema está en el tipo de carbohidratos que se consumen y las porciones.' }]
        },
        // Lección 2: Fisiología de la Digestión
        {
            descripcion: 'Un viaje desde la boca hasta el intestino. Aprenderás cómo el cuerpo descompone los alimentos, absorbe los nutrientes y desecha lo que no necesita, un proceso vital para la nutrición y la salud.',
            objetivos: 'Comprender los procesos mecánicos y químicos de la digestión. Identificar la función de cada órgano digestivo (estómago, hígado, páncreas, intestinos).',
            recursos: ['Libro: "Fisiología de la Nutrición" de M. R. N. M. G.'],
            faqs: [{ pregunta: '¿Qué es el metabolismo?', respuesta: 'Es el conjunto de reacciones químicas que ocurren en el cuerpo para convertir la energía de los alimentos en energía para las funciones vitales.' }]
        }
    ]
};

const contenidoPracticas = {
    'Ingeniería en Sistemas': [
        // Práctica 1: Crear una Calculadora Web
        {
            descripcion: 'Aplica tus conocimientos de JavaScript para construir una calculadora funcional. Es un proyecto clásico que te ayudará a consolidar la lógica de programación y la manipulación del DOM.',
            instrucciones: ['1. Crea un archivo HTML, CSS y JavaScript.', '2. Diseña la interfaz con botones para números y operadores.', '3. Usa JavaScript para capturar los clics, procesar las operaciones y mostrar el resultado en la pantalla de la calculadora.'],
            recursos: ['Tutorial: "Cómo hacer una calculadora con JavaScript" en YouTube', 'Herramienta: Visual Studio Code', 'Recurso: Stack Overflow'],
            faqs: [{ pregunta: '¿Cómo manejo múltiples operaciones seguidas?', respuesta: 'Deberás almacenar los números y operadores en variables y procesarlos en el orden correcto.' }]
        },
        // Práctica 2: Diseñar una Base de Datos
        {
            descripcion: 'En esta práctica, pasarás de la teoría a la acción. Diseñarás el esquema de una base de datos para un proyecto sencillo, como un sistema de gestión de biblioteca o una tienda en línea.',
            instrucciones: ['1. Define las entidades que necesitas (libros, autores, usuarios).', '2. Identifica los atributos clave para cada entidad.', '3. Establece las relaciones entre las entidades (uno a muchos, muchos a muchos) y crea un diagrama entidad-relación.'],
            recursos: ['Herramienta: draw.io o Lucidchart para diagramas', 'Tutorial: "Diseño de bases de datos relacionales"'],
            faqs: [{ pregunta: '¿Cómo sé si mi diseño es bueno?', respuesta: 'Un buen diseño evita la duplicidad de datos, es flexible y fácil de entender.' }]
        },
        // Práctica 3: Desarrollar una API Rest
        {
            descripcion: 'Una API es la forma en que dos aplicaciones se comunican. Construirás tu primera API para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) sobre una lista de datos.',
            instrucciones: ['1. Configura un servidor con Node.js y Express.', '2. Define rutas para las operaciones GET, POST, PUT y DELETE.', '3. Simula una base de datos con un array de objetos o un archivo JSON.'],
            recursos: ['Documentación oficial de Express.js', 'Herramienta: Postman para probar los endpoints de la API'],
            faqs: [{ pregunta: '¿Qué es un endpoint?', respuesta: 'Es la URL específica a la que se realiza una petición para interactuar con la API.' }]
        },
        // Práctica 4: Simular un Sistema de Archivos
        {
            descripcion: 'Este es un reto para la lógica y las estructuras de datos. Simularás el comportamiento de un sistema de archivos, aprendiendo cómo se organizan los archivos y directorios de forma jerárquica.',
            instrucciones: ['1. Representa el sistema de archivos con una estructura de datos de árbol.', '2. Implementa funciones para crear, borrar y mover archivos/directorios.', '3. Añade una función para listar el contenido de un directorio.'],
            recursos: ['Tutorial: "Implementar un árbol en JavaScript"'],
            faqs: [{ pregunta: '¿Qué estructura de datos es mejor para esto?', respuesta: 'Una estructura de árbol (tree) es ideal para representar la jerarquía de directorios.' }]
        }
    ],
    'Medicina': [
        // Práctica 1: Análisis de un Caso Clínico
        {
            descripcion: 'Esta práctica es una simulación de la vida real. Se te presentará un caso de un paciente con síntomas, y tu tarea será llegar a un diagnóstico y proponer un tratamiento.',
            instrucciones: ['1. Lee detenidamente la historia clínica (síntomas, historial, signos vitales).', '2. Identifica los signos y síntomas clave y los posibles diagnósticos.', '3. Propón los exámenes complementarios necesarios y el tratamiento más adecuado.'],
            recursos: ['Libro: "Semiología Médica" de Argente y Álvarez', 'Plataforma: Casos Clínicos Interactivos de la UNAM'],
            faqs: [{ pregunta: '¿Cómo sé si mi diagnóstico es correcto?', respuesta: 'El proceso no es tan directo. Lo importante es que tu razonamiento sea lógico y esté basado en la evidencia que se te presenta.' }]
        },
        // Práctica 2: Técnicas de Sutura
        {
            descripcion: 'La sutura es una habilidad manual básica. Practicarás los nudos quirúrgicos y las técnicas de cierre de heridas más comunes, mejorando tu destreza manual.',
            instrucciones: ['1. Consigue un kit de sutura y una base de práctica (puede ser una pieza de silicona).', '2. Practica los puntos simples y continuos.', '3. Aprende a hacer un nudo quirúrgico con y sin portaagujas.'],
            recursos: ['Tutorial: "Suturas para principiantes" en YouTube', 'Kit de sutura de práctica'],
            faqs: [{ pregunta: '¿Es esta una habilidad difícil de aprender?', respuesta: 'Requiere práctica constante. La clave es la paciencia y la repetición para que los movimientos se vuelvan fluidos.' }]
        }
    ],
    'Diseño Gráfico': [
        // Práctica 1: Rediseñar un Logo Famoso
        {
            descripcion: 'Elige un logotipo de una marca conocida (ej. Nike, Coca-Cola) y re-imagínalo. Esta práctica te ayudará a entender la esencia de una marca y cómo el diseño la comunica.',
            instrucciones: ['1. Investiga la historia y los valores de la marca.', '2. Crea 3 bocetos de nuevas ideas de logo que mantengan la esencia de la marca.', '3. Digitaliza tu mejor boceto y justifica tus decisiones de diseño (color, tipografía, forma).'],
            recursos: ['Herramienta: Adobe Illustrator o CorelDRAW', 'Recurso: Behance para inspiración'],
            faqs: [{ pregunta: '¿Por qué no debería cambiar la tipografía?', respuesta: 'La tipografía es un elemento clave en la identidad. Es importante justificar su cambio con un propósito claro.' }]
        },
        // Práctica 2: Diseñar un Cartel Publicitario
        {
            descripcion: 'Crea un cartel para un evento o producto ficticio. El objetivo es comunicar un mensaje de forma clara y atractiva, usando los principios de composición y color.',
            instrucciones: ['1. Define el mensaje clave y el público objetivo.', '2. Elige una paleta de color y una tipografía que refuercen el mensaje.', '3. Organiza los elementos visuales (imágenes, texto) para crear un flujo de lectura efectivo.'],
            recursos: ['Herramienta: Adobe Photoshop', 'Recurso: Unsplash para imágenes gratuitas de alta calidad'],
            faqs: [{ pregunta: '¿Qué es la "jerarquía visual"?', respuesta: 'Es la organización de los elementos de un diseño de forma que el ojo del espectador sea guiado de lo más a lo menos importante.' }]
        }
    ],
    'Psicología': [
        // Práctica 1: Análisis de un Caso de Estudio
        {
            descripcion: 'Se te presentará un caso de una persona con un problema psicológico. Tu tarea será analizarlo desde una perspectiva teórica y proponer una intervención.',
            instrucciones: ['1. Lee el caso y subraya los datos relevantes (síntomas, historial).', '2. Formula una hipótesis diagnóstica usando una teoría psicológica.', '3. Propón un plan de intervención basado en esa teoría (ej. terapia cognitivo-conductual).'],
            recursos: ['Libro: "DSM-5" (Manual Diagnóstico y Estadístico de los Trastornos Mentales)'],
            faqs: [{ pregunta: '¿Puedo diagnosticar a alguien con esta práctica?', respuesta: 'No. Esta es una simulación académica para entrenar tu pensamiento crítico. El diagnóstico real lo hace un profesional de la salud mental.' }]
        },
        // Práctica 2: Role-Playing de Sesión Terapéutica
        {
            descripcion: 'En esta práctica, simularás una sesión de terapia con un compañero. El objetivo es practicar tus habilidades de escucha activa, empatía y formulación de preguntas abiertas.',
            instrucciones: ['1. Elige un problema simple para el "paciente" (ej. ansiedad por un examen).', '2. Como "terapeuta", escucha sin juzgar y resume lo que el paciente dice.', '3. Formula preguntas que animen al paciente a explorar sus sentimientos y pensamientos.'],
            recursos: ['Tutorial: "Habilidades de Entrevista en Psicología" en YouTube'],
            faqs: [{ pregunta: '¿Cómo puedo mostrar empatía?', respuesta: 'Validando los sentimientos del paciente con frases como "Entiendo que eso debe ser muy frustrante".' }]
        }
    ],
    'Administración de Empresas': [
        // Práctica 1: Crear un Plan de Negocios
        {
            descripcion: '¿Tienes una idea de negocio? Con esta práctica, la harás realidad en papel. Desarrollarás un plan de negocios completo, desde la idea hasta el análisis financiero.',
            instrucciones: ['1. Describe tu producto/servicio y la propuesta de valor.', '2. Realiza un análisis de mercado (competencia, público objetivo).', '3. Elabora un plan de marketing y un plan financiero básico (proyecciones de ingresos y gastos).'],
            recursos: ['Guía: "Cómo escribir un Plan de Negocios" de Forbes', 'Plantilla: Business Model Canvas'],
            faqs: [{ pregunta: '¿Qué es la propuesta de valor?', respuesta: 'Es la promesa de los beneficios que el cliente obtendrá al usar tu producto o servicio.' }]
        },
        // Práctica 2: Análisis de Mercado
        {
            descripcion: 'Analiza el entorno de un producto existente. Esta práctica te ayudará a entender las fuerzas que influyen en una empresa y cómo reaccionar estratégicamente.',
            instrucciones: ['1. Elige una empresa o producto.', '2. Realiza un análisis FODA (Fortalezas, Oportunidades, Debilidades, Amenazas).', '3. Identifica a sus principales competidores y su estrategia.'],
            recursos: ['Guía: "Análisis de la Industria" de Mckinsey'],
            faqs: [{ pregunta: '¿Para qué sirve un análisis FODA?', respuesta: 'Te ayuda a comprender la situación interna y externa de una empresa para tomar decisiones estratégicas.' }]
        }
    ],
    'Arquitectura': [
        // Práctica 1: Diseñar una Casa Pequeña
        {
            descripcion: 'Pondrás a prueba tu creatividad y conocimientos técnicos. Diseñarás una casa de dos pisos, considerando la distribución del espacio, la luz natural y la circulación.',
            instrucciones: ['1. Haz un programa de necesidades (cuántas habitaciones, baños, etc.).', '2. Dibuja a mano o en software un plano de planta y una vista en corte.', '3. Crea un modelo 3D básico en SketchUp o Revit para visualizar el espacio.'],
            recursos: ['Software: SketchUp o AutoCAD', 'Libro: "El Croquis del arquitecto" de Francis D. K. Ching'],
            faqs: [{ pregunta: '¿Qué es una vista en corte?', respuesta: 'Es un dibujo que muestra una sección transversal de un edificio, revelando la distribución interior y los detalles estructurales.' }]
        },
        // Práctica 2: Maqueta de un Edificio
        {
            descripcion: 'Crea un modelo físico a escala de un edificio simple. Esta práctica te ayudará a entender la relación entre el plano 2D y el volumen 3D del proyecto.',
            instrucciones: ['1. Elige un edificio simple (ej. un cubo, una L).', '2. Escala los planos a un tamaño manejable.', '3. Construye la maqueta usando cartón pluma, pegamento y cúter.'],
            recursos: ['Materiales: Cartón pluma, cúter, pegamento en spray', 'Tutorial: "Cómo hacer maquetas de arquitectura para principiantes" en YouTube'],
            faqs: [{ pregunta: '¿Qué escala debo usar?', respuesta: 'Depende del tamaño del edificio. Una escala común para maquetas de edificios es 1:100.' }]
        }
    ],
    'Derecho': [
        // Práctica 1: Análisis de un Caso Jurídico
        {
            descripcion: 'Se te presentará un caso de la vida real o ficticio. Tu tarea será identificar los problemas legales, los argumentos a favor y en contra, y proponer una solución legal.',
            instrucciones: ['1. Lee el caso y subraya los hechos relevantes.', '2. Identifica las normas legales aplicables.', '3. Construye un argumento claro y coherente para una de las partes.'],
            recursos: ['Base de datos legal online (ej. vLex, LexisNexis)'],
            faqs: [{ pregunta: '¿Debo memorizar todas las leyes?', respuesta: 'No. Lo más importante es saber dónde y cómo buscar la información legal y entender los principios que las rigen.' }]
        },
        // Práctica 2: Redactar un Contrato
        {
            descripcion: 'La redacción es una habilidad crucial en el derecho. Aquí, practicarás la redacción de un contrato de arrendamiento o de servicios, asegurando que proteja a tus clientes.',
            instrucciones: ['1. Elige el tipo de contrato.', '2. Identifica a las partes, el objeto y las cláusulas esenciales.', '3. Redacta las cláusulas con lenguaje claro y preciso, evitando ambigüedades.'],
            recursos: ['Modelos de contratos online', 'Guía: "Redacción de documentos legales"'],
            faqs: [{ pregunta: '¿Cuál es la diferencia entre un acuerdo y un contrato?', respuesta: 'Un contrato es un acuerdo legalmente exigible que contiene una promesa o un conjunto de promesas.' }]
        }
    ],
    'Comunicación': [
        // Práctica 1: Escribir un Comunicado de Prensa
        {
            descripcion: 'Escribirás un comunicado oficial para anunciar un evento o noticia de una empresa ficticia. Esta práctica te enseña a comunicar información de manera efectiva y profesional a los medios de comunicación.',
            instrucciones: ['1. Define la noticia (qué, quién, cuándo, dónde, por qué).', '2. Escribe un titular atractivo y un primer párrafo conciso (lead).', '3. Incluye una cita de un vocero y la información de contacto.'],
            recursos: ['Modelo: Plantillas de comunicados de prensa en línea'],
            faqs: [{ pregunta: '¿Qué es el "lead"?', respuesta: 'Es el primer párrafo de un comunicado o noticia que resume la información más importante para captar la atención del lector.' }]
        },
        // Práctica 2: Producir un Corto Documental
        {
            descripcion: 'De la teoría a la pantalla. Producirás un video corto de 2-3 minutos sobre un tema que te apasione, aplicando las bases de guionismo, grabación y edición.',
            instrucciones: ['1. Escribe un guion (storyboard) simple.', '2. Graba el material usando tu teléfono móvil o cámara.', '3. Edita el video con música, narración y efectos visuales básicos.'],
            recursos: ['Software: DaVinci Resolve (gratuito)', 'Tutorial: "Cómo hacer un documental con tu celular" en YouTube'],
            faqs: [{ pregunta: '¿Qué es el "storyboard"?', respuesta: 'Es una secuencia de dibujos que ilustra los planos de una película o video, como un cómic de tu proyecto.' }]
        }
    ],
    'Ingeniería Civil': [
        // Práctica 1: Cálculo de Cargas Estructurales
        {
            descripcion: 'Un ingeniero civil debe asegurar que un edificio no colapse. En esta práctica, calcularás las cargas (peso propio, viento, sismo) que actúan sobre un elemento estructural simple como una viga.',
            instrucciones: ['1. Dibuja la viga y las cargas que soporta.', '2. Aplica las fórmulas de la estática para calcular las fuerzas internas (cortante y momento).', '3. Dibuja los diagramas de fuerzas y momentos.'],
            recursos: ['Libro: "Análisis Estructural" de R. C. Hibbeler'],
            faqs: [{ pregunta: '¿Qué son las fuerzas internas?', respuesta: 'Son las fuerzas (tensión, compresión) que se generan dentro de un elemento estructural para resistir las cargas externas.' }]
        },
        // Práctica 2: Diseñar un Sistema de Drenaje
        {
            descripcion: 'La gestión del agua es vital. Diseñarás un pequeño sistema de drenaje pluvial para un estacionamiento, calculando el tamaño de las tuberías y la pendiente necesaria.',
            instrucciones: ['1. Dibuja el plano del estacionamiento.', '2. Calcula el área de captación y el caudal de lluvia.', '3. Dimensiona el diámetro de las tuberías y la pendiente para evacuar el agua de forma segura.'],
            recursos: ['Manual: "Diseño de Sistemas de Drenaje Urbano"'],
            faqs: [{ pregunta: '¿Por qué es importante el drenaje?', respuesta: 'Un mal drenaje puede causar inundaciones, daños a la estructura y problemas de salud pública.' }]
        }
    ],
    'Contabilidad': [
        // Práctica 1: Registrar Transacciones
        {
            descripcion: 'Las transacciones son el pan de cada día de un contador. En esta práctica, simularás una serie de operaciones comerciales y las registrarás en un libro de diario.',
            instrucciones: ['1. Analiza una serie de transacciones de compra, venta, pago de salarios, etc.', '2. Identifica las cuentas deudoras y acreedoras para cada transacción.', '3. Registra los asientos contables en un libro de diario.'],
            recursos: ['Hoja de cálculo de Excel o Google Sheets'],
            faqs: [{ pregunta: '¿Qué es una cuenta contable?', respuesta: 'Es un registro donde se anotan los aumentos y disminuciones de un elemento de la empresa (ej. caja, ventas, salarios).' }]
        },
        // Práctica 2: Preparar un Balance General
        {
            descripcion: 'El balance general es una "fotografía" de la situación financiera de una empresa en un momento dado. Aprenderás a crearlo usando los datos de tu libro mayor.',
            instrucciones: ['1. Usa los saldos finales de las cuentas del libro mayor de tu práctica anterior.', '2. Clasifica las cuentas en Activo, Pasivo y Patrimonio.', '3. Prepara el balance general, asegurando que la ecuación contable se cumpla.'],
            recursos: ['Plantilla de balance general en Excel'],
            faqs: [{ pregunta: '¿Qué significa que el balance "cuadre"?', respuesta: 'Significa que la suma total de los activos es igual a la suma de los pasivos más el patrimonio.' }]
        }
    ],
    'Pedagogía': [
        // Práctica 1: Preparar una Clase Interactiva
        {
            descripcion: '¡Es tu turno de ser el maestro! Diseñarás un plan de clase para un tema de tu elección, centrándote en metodologías que promuevan la participación y el aprendizaje activo.',
            instrucciones: ['1. Elige un tema simple para enseñar (ej. El ciclo del agua).', '2. Define los objetivos de aprendizaje.', '3. Diseña actividades interactivas y recursos didácticos para la clase.'],
            recursos: ['Guía: "Cómo hacer un plan de clase"'],
            faqs: [{ pregunta: '¿Qué es el aprendizaje activo?', respuesta: 'Es una metodología donde los estudiantes participan activamente en su propio proceso de aprendizaje, en lugar de ser receptores pasivos.' }]
        },
        // Práctica 2: Desarrollar un Plan de Estudios
        {
            descripcion: 'Ir más allá de una sola clase. Diseñarás un plan de estudios completo para un curso corto o un taller, definiendo los módulos, temas y la evaluación.',
            instrucciones: ['1. Elige un tema amplio para el curso (ej. "Introducción al Marketing Digital").', '2. Divide el tema en módulos y lecciones lógicas.', '3. Define cómo se evaluará el progreso de los estudiantes (exámenes, proyectos, etc.).'],
            recursos: ['Tutorial: "Guía para desarrollar un curso en línea"'],
            faqs: [{ pregunta: '¿Qué es el currículo?', respuesta: 'Es el conjunto de objetivos, contenidos, métodos y criterios de evaluación que guían la enseñanza y el aprendizaje.' }]
        }
    ],
    'Nutrición': [
        // Práctica 1: Crear un Plan de Alimentación
        {
            descripcion: '¡Ponte el sombrero de nutricionista! Diseñarás un menú semanal equilibrado para una persona con una necesidad específica (ej. deportista, persona con diabetes).',
            instrucciones: ['1. Elige un perfil de persona con sus datos básicos (edad, peso, actividad).', '2. Calcula los requerimientos calóricos y de macronutrientes.', '3. Diseña un menú para 7 días que cumpla con esos requerimientos, con variedad de alimentos.'],
            recursos: ['Software: Cronometer o MyFitnessPal (para seguimiento)', 'Guía: "Platillo del Buen Comer" de la OMS'],
            faqs: [{ pregunta: '¿Qué es una caloría?', respuesta: 'Es una unidad de energía. Representa la energía que el cuerpo obtiene de los alimentos y bebidas.' }]
        },
        // Práctica 2: Análisis de Etiquetado Nutricional
        {
            descripcion: 'Aprende a leer entre líneas. En esta práctica, analizarás las etiquetas de productos del supermercado para identificar su valor nutricional real y sus ingredientes.',
            instrucciones: ['1. Elige 3 productos de la misma categoría (ej. cereales, yogures).', '2. Compara el contenido de azúcares, grasas, sodio y fibra en la tabla nutricional.', '3. Analiza la lista de ingredientes y la presencia de aditivos y conservantes.'],
            recursos: ['Guía: "Cómo leer la etiqueta nutricional" de la FDA'],
            faqs: [{ pregunta: '¿Por qué la lista de ingredientes es importante?', respuesta: 'Los ingredientes se listan en orden de mayor a menor cantidad. El primer ingrediente es el que está en mayor proporción.' }]
        }
    ]
};