// Datos de las plantas medicinales
const plantData = {
    aloe: {
        icon: '🌵',
        title: 'Aloe Vera',
        cientifico: 'Aloe barbadensis miller',
        description: 'El Aloe Vera es una planta suculenta originaria de África que ha sido utilizada durante miles de años por sus propiedades medicinales y cosméticas. Sus hojas gruesas contienen un gel transparente rico en vitaminas, minerales y aminoácidos.',
        properties: [
            'Cicatrizante y regenerador de tejidos',
            'Antiinflamatorio natural',
            'Hidratante profundo para la piel',
            'Antioxidante potente',
            'Antibacteriano y antifúngico'
        ],
        uses: [
            'Tratamiento de quemaduras solares',
            'Curación de heridas y cortes',
            'Hidratación de la piel',
            'Alivio del acné',
            'Tratamiento de problemas digestivos'
        ],
        precautions: 'No aplicar en heridas profundas. Las personas alérgicas a las plantas de la familia Liliaceae deben evitarlo. El látex de aloe (savia amarilla) puede causar irritación gastrointestinal si se ingiere.'
    },
    manzanilla: {
        icon: '🼼',
        title: 'Manzanilla',
        cientifico: 'Matricaria chamomilla',
        description: 'La manzanilla es una de las plantas medicinales más antiguas y populares. Sus pequeñas flores blancas y amarillas han sido utilizadas tradicionalmente para preparar infusiones calmantes y tratamientos naturales.',
        properties: [
            'Calmante y relajante',
            'Antiinflamatorio',
            'Antiespasmódico',
            'Antiséptico natural',
            'Digestivo'
        ],
        uses: [
            'Infusión para reducir la ansiedad',
            'Alivio de cólicos menstruales',
            'Tratamiento de problemas digestivos',
            'Compresas para irritaciones de la piel',
            'Enjuague bucal para inflamaciones'
        ],
        precautions: 'Las personas alérgicas a las plantas de la familia Asteraceae pueden experimentar reacciones alérgicas. Puede interactuar con medicamentos anticoagulantes.'
    },
    menta: {
        icon: '🌿',
        title: 'Menta',
        cientifico: 'Mentha piperita',
        description: 'La menta es una planta aromática híbrida conocida por su fresco aroma y sabor. Ha sido utilizada desde la antigüedad tanto en la cocina como en la medicina tradicional por sus múltiples beneficios.',
        properties: [
            'Digestiva y carminativa',
            'Analgésica natural',
            'Descongestionante',
            'Antimicrobiana',
            'Estimulante cognitivo'
        ],
        uses: [
            'Alivio de náuseas y malestar estomacal',
            'Tratamiento de dolores de cabeza',
            'Descongestión nasal',
            'Refresco bucal natural',
            'Alivio del síndrome del intestino irritable'
        ],
        precautions: 'Puede causar acidez en personas con reflujo gastroesofágico. No recomendada para bebés y niños pequeños. Puede interactuar con algunos medicamentos.'
    },
    lavanda: {
        icon: '💜',
        title: 'Lavanda',
        cientifico: 'Lavandula angustifolia',
        description: 'La lavanda es una planta aromática mediterránea conocida por sus hermosas flores moradas y su aroma distintivo. Ha sido valorada durante siglos por sus propiedades relajantes y curativas.',
        properties: [
            'Relajante y sedante',
            'Ansiedad y estrés',
            'Antiséptico',
            'Antiinflamatorio',
            'Repelente de insectos natural'
        ],
        uses: [
            'Aceite esencial para aromaterapia',
            'Mejora de la calidad del sueño',
            'Tratamiento de ansiedad leve',
            'Alivio de dolores musculares',
            'Repelente natural de mosquitos'
        ],
        precautions: 'El aceite esencial debe diluirse antes de aplicar sobre la piel. Puede causar somnolencia. No ingerir aceites esenciales sin supervisión profesional.'
    },
    eucalipto: {
        icon: '🌳',
        title: 'Eucalipto',
        cientifico: 'Eucalyptus globulus',
        description: 'El eucalipto es un árbol originario de Australia, conocido por sus hojas aromáticas y su aceite esencial. Es ampliamente utilizado en productos farmacéuticos y de cuidado personal.',
        properties: [
            'Expectorante y mucolítico',
            'Antiséptico respiratorio',
            'Antiinflamatorio',
            'Antibacteriano',
            'Analgésico tópico'
        ],
        uses: [
            'Vaporizaciones para congestión nasal',
            'Tratamiento de tos y resfriados',
            'Alivio de dolores musculares',
            'Desinfección del ambiente',
            'Tratamiento de problemas de la piel'
        ],
        precautions: 'El aceite esencial no debe ingerirse. Mantener alejado de niños y mascotas. Puede causar irritación en pieles sensibles. No usar en niños menores de 2 años.'
    },
    romero: {
        icon: '🌿',
        title: 'Romero',
        cientifico: 'Rosmarinus officinalis',
        description: 'El romero es una planta aromática mediterránea de hojas perennes. Además de ser una popular especia culinaria, tiene una larga historia de uso medicinal y se le atribuyen numerosas propiedades beneficiosas.',
        properties: [
            'Antioxidante potente',
            'Estimulante circulatorio',
            'Mejora la memoria y concentración',
            'Antiinflamatorio',
            'Antimicrobiano'
        ],
        uses: [
            'Infusión para mejorar la circulación',
            'Estimulante cognitivo',
            'Tratamiento de dolores musculares',
            'Fortalecimiento del cabello',
            'Antioxidante natural en alimentos'
        ],
        precautions: 'No recomendado en embarazo. Puede aumentar la presión arterial en algunas personas. Las personas con epilepsia deben consultar antes de usarlo medicinalmente.'
    },
    jengibre: {
        icon: '🫚',
        title: 'Jengibre',
        cientifico: 'Zingiber officinale',
        description: 'El jengibre es una planta tropical cuya raíz ha sido utilizada durante miles de años en la medicina tradicional asiática. Es conocido por su sabor picante y sus potentes propiedades medicinales.',
        properties: [
            'Antiinflamatorio natural',
            'Digestivo y antiemético',
            'Antioxidante',
            'Analgésico',
            'Estimulante del sistema inmune'
        ],
        uses: [
            'Alivio de náuseas y mareos',
            'Tratamiento de dolores articulares',
            'Mejora de la digestión',
            'Reducción de inflamación',
            'Prevención de resfriados'
        ],
        precautions: 'Puede causar acidez en algunas personas. Consultar con médico si se toman anticoagulantes. No exceder 4g diarios.'
    },
    ajo: {
        icon: '🧄',
        title: 'Ajo',
        cientifico: 'Allium sativum',
        description: 'El ajo es una planta bulbosa de la familia de las cebollas. Ha sido valorado desde la antigüedad tanto por su sabor como por sus extraordinarias propiedades medicinales.',
        properties: [
            'Antibiótico natural',
            'Reduce la presión arterial',
            'Antioxidante potente',
            'Mejora el sistema inmune',
            'Antiinflamatorio'
        ],
        uses: [
            'Prevención de enfermedades cardiovasculares',
            'Tratamiento de infecciones',
            'Reducción del colesterol',
            'Refuerzo del sistema inmunológico',
            'Control de la presión arterial'
        ],
        precautions: 'Puede causar mal aliento y olor corporal. Consultar antes de cirugías. Puede interactuar con anticoagulantes.'
    },
    calendula: {
        icon: '🌼',
        title: 'Caléndula',
        cientifico: 'Calendula officinalis',
        description: 'La caléndula es una planta de flores amarillas o naranjas brillantes. Es ampliamente utilizada en productos para el cuidado de la piel por sus propiedades curativas.',
        properties: [
            'Cicatrizante',
            'Antiséptica',
            'Antiinflamatoria',
            'Antifúngica',
            'Regeneradora de tejidos'
        ],
        uses: [
            'Curación de heridas',
            'Tratamiento de quemaduras',
            'Alivio de irritaciones de la piel',
            'Crema para pañalitis',
            'Tratamiento de eczema'
        ],
        precautions: 'Las personas alérgicas a las margaritas pueden tener reacciones. Evitar durante el embarazo.'
    },
    tomillo: {
        icon: '🌿',
        title: 'Tomillo',
        cientifico: 'Thymus vulgaris',
        description: 'El tomillo es una pequeña planta aromática mediterránea. Sus hojas pequeñas pero poderosas han sido utilizadas tanto en cocina como en medicina tradicional.',
        properties: [
            'Antiséptico potente',
            'Expectorante',
            'Antibacteriano',
            'Antiespasmódico',
            'Antioxidante'
        ],
        uses: [
            'Tratamiento de tos y bronquitis',
            'Gárgaras para dolor de garganta',
            'Desinfección de heridas',
            'Alivio de problemas digestivos',
            'Repelente de insectos'
        ],
        precautions: 'No usar aceite esencial sin diluir. Consultar en embarazo. Puede afectar la coagulación.'
    },
    ortiga: {
        icon: '🍃',
        title: 'Ortiga',
        cientifico: 'Urtica dioica',
        description: 'La ortiga es una planta silvestre conocida por sus pelos urticantes. A pesar de su reputación, es una de las plantas medicinales más nutritivas y versátiles.',
        properties: [
            'Depurativa',
            'Remineralizante',
            'Diurética',
            'Antianémica',
            'Antiinflamatoria'
        ],
        uses: [
            'Limpieza de sangre',
            'Tratamiento de anemia',
            'Alivio de alergias estacionales',
            'Fortalecimiento del cabello',
            'Reducción de dolores articulares'
        ],
        precautions: 'Usar guantes al recolectar. Cocinar elimina el efecto urticante. Consultar si hay problemas renales.'
    },
    valeriana: {
        icon: '🌺',
        title: 'Valeriana',
        cientifico: 'Valeriana officinalis',
        description: 'La valeriana es una planta perenne cuyas raíces han sido utilizadas desde la antigua Grecia como sedante natural. Es conocida por su aroma distintivo y efectos calmantes.',
        properties: [
            'Sedante natural',
            'Relajante muscular',
            'Ansiedad y estrés',
            'Inductor del sueño',
            'Antiespasmódico'
        ],
        uses: [
            'Tratamiento del insomnio',
            'Reducción de la ansiedad',
            'Alivio de espasmos musculares',
            'Relajación antes de dormir',
            'Tratamiento de nerviosismo'
        ],
        precautions: 'Puede causar somnolencia. No conducir después de tomarla. Consultar si se toman otros sedantes.'
    }
};

// Slider automático y controles
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const sliderDots = document.querySelector('.slider-dots');

// Crear dots para el slider
if (slides.length > 0 && sliderDots) {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        const dots = document.querySelectorAll('.slider-dot');
        if (dots[i]) dots[i].classList.remove('active');
    });
    
    if (slides[index]) {
        slides[index].classList.add('active');
        const dots = document.querySelectorAll('.slider-dot');
        if (dots[index]) dots[index].classList.add('active');
    }
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

// Auto-cambio de slide cada 5 segundos
if (slides.length > 0) {
    setInterval(() => {
        moveSlide(1);
    }, 5000);
}

// Función para scroll suave a la sección de plantas
function scrollToPlants() {
    document.getElementById('plantas').scrollIntoView({
        behavior: 'smooth'
    });
}

// Elementos del DOM
const modal = document.getElementById('plantModal');
const closeModal = document.querySelector('.close-modal');
const plantCards = document.querySelectorAll('.plant-card');

// Elementos del modal
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalCientifico = document.getElementById('modalCientifico');
const modalDescription = document.getElementById('modalDescription');
const modalProperties = document.getElementById('modalProperties');
const modalUses = document.getElementById('modalUses');
const modalPrecautions = document.getElementById('modalPrecautions');

// Abrir modal con información de la planta
plantCards.forEach(card => {
    card.addEventListener('click', () => {
        const plantType = card.getAttribute('data-plant');
        const plantInfo = plantData[plantType];
        
        if (plantInfo) {
            // Actualizar contenido del modal
            modalIcon.textContent = plantInfo.icon;
            modalTitle.textContent = plantInfo.title;
            modalCientifico.textContent = plantInfo.cientifico;
            modalDescription.textContent = plantInfo.description;
            
            // Actualizar propiedades
            modalProperties.innerHTML = '';
            plantInfo.properties.forEach(property => {
                const li = document.createElement('li');
                li.textContent = property;
                modalProperties.appendChild(li);
            });
            
            // Actualizar usos
            modalUses.innerHTML = '';
            plantInfo.uses.forEach(use => {
                const li = document.createElement('li');
                li.textContent = use;
                modalUses.appendChild(li);
            });
            
            // Actualizar precauciones
            modalPrecautions.textContent = plantInfo.precautions;
            
            // Mostrar modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.plant-card, .team-member');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Efecto parallax suave en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const slides = document.querySelectorAll('.slide');
    const leaves = document.querySelectorAll('.leaf');
    
    slides.forEach((slide, index) => {
        const speed = 0.1 + (index * 0.05);
        slide.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    leaves.forEach((leaf, index) => {
        const speed = 0.1 + (index * 0.05);
        leaf.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Cambio de estilo en navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

console.log('🌿 Proyecto de Plantas Medicinales cargado correctamente');
