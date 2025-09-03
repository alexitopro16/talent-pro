// matching-engine.js - Motor de recomendación vocacional actualizado

// Definir perfiles de carreras con características clave
const perfilesCarreras = {
    'Ingeniería en Sistemas': {
        matematicas: 5, tecnologia: 5, logica: 5, creatividad: 3, trabajoEquipo: 4, liderazgo: 3, ayudarPersonas: 2, practico: 5, arte: 1, negocios: 3,
        keywords: ['matemáticas', 'tecnología', 'programación', 'computadora', 'software', 'algoritmos', 'datos']
    },
    'Medicina': {
        matematicas: 4, tecnologia: 3, logica: 4, creatividad: 2, trabajoEquipo: 4, liderazgo: 4, ayudarPersonas: 5, practico: 5, arte: 1, negocios: 2,
        keywords: ['salud', 'ayudar', 'curar', 'medicina', 'hospital', 'pacientes', 'biología']
    },
    'Diseño Gráfico': {
        matematicas: 2, tecnologia: 4, logica: 3, creatividad: 5, trabajoEquipo: 3, liderazgo: 3, ayudarPersonas: 3, practico: 4, arte: 5, negocios: 3,
        keywords: ['arte', 'creatividad', 'diseño', 'digital', 'imagen', 'color']
    },
    'Psicología': {
        matematicas: 2, tecnologia: 2, logica: 4, creatividad: 3, trabajoEquipo: 5, liderazgo: 4, ayudarPersonas: 5, practico: 3, arte: 2, negocios: 2,
        keywords: ['ayudar', 'mente', 'comportamiento', 'terapia', 'humano']
    },
    'Administración de Empresas': {
        matematicas: 4, tecnologia: 3, logica: 4, creatividad: 3, trabajoEquipo: 5, liderazgo: 5, ayudarPersonas: 4, practico: 3, arte: 2, negocios: 5,
        keywords: ['negocios', 'gestión', 'liderazgo', 'finanzas', 'organización']
    },
    'Arquitectura': {
        matematicas: 5, tecnologia: 4, logica: 5, creatividad: 5, trabajoEquipo: 4, liderazgo: 4, ayudarPersonas: 3, practico: 5, arte: 4, negocios: 3,
        keywords: ['diseño', 'construcción', 'espacio', 'creatividad', 'planos']
    },
    'Derecho': {
        matematicas: 3, tecnologia: 2, logica: 5, creatividad: 2, trabajoEquipo: 4, liderazgo: 5, ayudarPersonas: 4, practico: 3, arte: 1, negocios: 4,
        keywords: ['leyes', 'justicia', 'argumentación', 'normas']
    },
    'Comunicación': {
        matematicas: 2, tecnologia: 4, logica: 3, creatividad: 5, trabajoEquipo: 5, liderazgo: 4, ayudarPersonas: 4, practico: 3, arte: 4, negocios: 3,
        keywords: ['medios', 'periodismo', 'publicidad', 'redes', 'hablar']
    },
    'Ingeniería Civil': {
        matematicas: 5, tecnologia: 4, logica: 5, creatividad: 3, trabajoEquipo: 4, liderazgo: 4, ayudarPersonas: 2, practico: 5, arte: 1, negocios: 4,
        keywords: ['construcción', 'estructuras', 'matemáticas', 'infraestructura', 'proyectos']
    },
    'Contabilidad': {
        matematicas: 5, tecnologia: 4, logica: 5, creatividad: 1, trabajoEquipo: 3, liderazgo: 3, ayudarPersonas: 2, practico: 4, arte: 1, negocios: 5,
        keywords: ['finanzas', 'números', 'auditoría', 'análisis', 'impuestos']
    },
    'Pedagogía': {
        matematicas: 2, tecnologia: 2, logica: 3, creatividad: 4, trabajoEquipo: 5, liderazgo: 4, ayudarPersonas: 5, practico: 4, arte: 3, negocios: 1,
        keywords: ['enseñanza', 'educación', 'ayudar', 'niños', 'formar']
    },
    'Nutrición': {
        matematicas: 3, tecnologia: 3, logica: 4, creatividad: 2, trabajoEquipo: 4, liderazgo: 3, ayudarPersonas: 5, practico: 5, arte: 2, negocios: 2,
        keywords: ['salud', 'alimentos', 'dieta', 'bienestar', 'ayudar']
    }
};

const descripcionesCarreras = {
    'Ingeniería en Sistemas': 'Desarrolla soluciones de software y hardware, gestiona redes y bases de datos. Ideal para mentes lógicas y analíticas.',
    'Medicina': 'Diagnostica y trata enfermedades, promueve la salud y el bienestar. Requiere empatía, disciplina y un fuerte interés en las ciencias biológicas.',
    'Diseño Gráfico': 'Crea conceptos visuales para comunicar ideas. Se enfoca en la creatividad, el uso de herramientas digitales y la estética.',
    'Psicología': 'Estudia el comportamiento humano y los procesos mentales para mejorar la calidad de vida de las personas. Ideal para quienes les gusta escuchar y analizar.',
    'Administración de Empresas': 'Planifica, organiza y dirige los recursos de una organización para alcanzar metas. Se basa en el liderazgo, la visión estratégica y la gestión de equipos.',
    'Arquitectura': 'Diseña y construye espacios habitables y funcionales. Combina arte, técnica y matemáticas para crear entornos innovadores.',
    'Derecho': 'Estudia y aplica las leyes para resolver conflictos y defender la justicia. Requiere una alta capacidad de análisis y argumentación.',
    'Comunicación': 'Produce y difunde mensajes a través de diversos medios. Perfecta para perfiles creativos, sociables y con excelentes habilidades de redacción.',
    'Ingeniería Civil': 'Diseña, construye y mantiene infraestructuras como puentes, carreteras y edificios. Implica una mezcla de matemáticas, física y resolución de problemas.',
    'Contabilidad': 'Registra y analiza las transacciones financieras de una entidad. Ideal para personas detallistas, organizadas y con afinidad por los números.',
    'Pedagogía': 'Forma y orienta a estudiantes en su proceso de aprendizaje. Es una carrera para quienes tienen vocación de servicio y disfrutan enseñar.',
    'Nutrición': 'Evalúa el estado nutricional y crea planes de alimentación para mejorar la salud. Requiere un interés genuino en la ciencia de los alimentos.'
};

function calcularCompatibilidad(perfilUsuario) {
    const resultados = Object.keys(perfilesCarreras).map(carrera => {
        let puntuacionTotal = 0;
        const perfilCarrera = perfilesCarreras[carrera];
        const factores = ['matematicas', 'tecnologia', 'logica', 'creatividad', 'trabajoEquipo', 'liderazgo', 'ayudarPersonas', 'practico', 'arte', 'negocios'];

        // Sumar puntos de compatibilidad
        factores.forEach(factor => {
            puntuacionTotal += perfilUsuario[factor] * perfilCarrera[factor];
        });

        // Normalizar puntuación a un porcentaje
        const maxPuntuacion = factores.reduce((sum, factor) => sum + 5 * 5, 0);
        const porcentajeCompatibilidad = (puntuacionTotal / maxPuntuacion) * 100;

        return {
            carrera: carrera,
            porcentaje: porcentajeCompatibilidad
        };
    });

    // Ordenar de mayor a menor y tomar las 3 primeras
    resultados.sort((a, b) => b.porcentaje - a.porcentaje);
    const top3 = resultados.slice(0, 3);

    // Obtener el perfil dominante
    const perfilDominante = Object.keys(perfilUsuario).reduce((a, b) => perfilUsuario[a] > perfilUsuario[b] ? a : b);

    return {
        recomendaciones: top3,
        perfilDominante: perfilDominante
    };
}

function obtenerExplicacionRecomendacion(carrera, perfilUsuario) {
    const puntuacion = calcularCompatibilidad(perfilUsuario).recomendaciones.find(rec => rec.carrera === carrera).porcentaje;

    const explicaciones = {
        'Ingeniería en Sistemas': 'Tu afinidad con las matemáticas y la tecnología te orienta a esta carrera.',
        'Medicina': 'Tu interés en ayudar a las personas y en la ciencia de la vida son claves para el estudio de la medicina.',
        'Diseño Gráfico': 'Tu lado creativo y tu gusto por el arte te preparan para el diseño y la comunicación visual.',
        'Psicología': 'Tu deseo de ayudar y tu interés en el comportamiento humano son perfectos para el campo de la psicología.',
        'Administración de Empresas': 'Tus habilidades de liderazgo y tu interés en los negocios te preparan para esta carrera.',
        'Arquitectura': 'Tu combinación de creatividad, lógica y visión espacial es perfecta para la arquitectura.',
        'Derecho': 'Tu sentido de justicia y tus habilidades argumentativas te hacen ideal para el derecho.',
        'Comunicación': 'Tu creatividad y habilidades comunicativas son perfectas para esta área.',
        'Ingeniería Civil': 'Tu interés en las matemáticas y la construcción te prepara bien para esta ingeniería.',
        'Contabilidad': 'Tu afinidad con las matemáticas y la lógica te hacen ideal para el análisis financiero.',
        'Pedagogía': 'Tu deseo de ayudar y tu gusto por la enseñanza son perfectos para formar a nuevas generaciones.',
        'Nutrición': 'Tu interés por la salud y la alimentación te guían hacia esta carrera.'
    };

    const nivelCompatibilidad = puntuacion >= 80 ? 'Excelente' :
        puntuacion >= 60 ? 'Muy buena' :
            puntuacion >= 40 ? 'Buena' : 'Moderada';

    return {
        explicacion: explicaciones[carrera] || 'Esta carrera se alinea con tu perfil vocacional.',
        compatibilidad: nivelCompatibilidad,
        porcentaje: Math.round(puntuacion)
    };
}

// Exportar funciones (para uso en test.js)
if (typeof window !== 'undefined') {
    window.MatchingEngine = {
        perfilesCarreras,
        descripcionesCarreras,
        calcularCompatibilidad,
        obtenerExplicacionRecomendacion
    };
}