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
    }
};

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

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validación simple
    if (nombre && email && mensaje) {
        // Simulación de envío exitoso
        alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto a ${email}.`);
        
        // Limpiar formulario
        contactForm.reset();
    } else {
        alert('Por favor, completa todos los campos del formulario.');
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
    const heroContent = document.querySelector('.hero-content');
    const leaves = document.querySelectorAll('.leaf');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
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
