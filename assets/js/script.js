// JavaScript para interatividade estilo Duolingo

// Variável global para controlar o efeito de digitação
let isTypewriterRunning = false;
let hasLanguageBeenSet = false;

// Traduções dos principais textos
const translations = {
    pt: {
        'brand-name': 'Yuno',
        'login-btn': 'Já tenho uma conta',
        'start-btn': 'Começar',
        'mobile-header-start-btn': 'Começar',
        'hero-title': 'A maneira gratuita, divertida e eficaz de despertar a curiosidade!',
        'hero-subtitle': 'Transforme cada pergunta do seu filho em uma aventura de descoberta com o Yuno - o app que responde na hora certa, do jeito certo.',
        'hero-start-btn': 'COMEÇAR AGORA',
        'hero-login-btn': 'JÁ TENHO UMA CONTA',
        'speech-bubble-text': '"Por que o céu é azul?"',
        'feature1-title': 'gratuito. divertido. eficaz.',
        'feature1-text': 'Seu filho pergunta por voz, o Yu responde na hora! Com lições rápidas e respostas adaptadas à idade, cada pergunta vira uma nova descoberta enquanto desenvolve habilidades de comunicação e pensamento crítico.',
        'feature2-title': 'baseado na ciência',
        'feature2-text': 'Usamos uma combinação de métodos de ensino comprovados pela pesquisa e conteúdo encantador para criar respostas que efetivamente ensinam e estimulam a curiosidade natural das crianças!',
        'feature3-title': 'mantenha-se motivado',
        'feature3-text': 'Tornamos fácil formar o hábito de aprender com recursos semelhantes a jogos, desafios divertidos e lembretes do nosso mascote amigável, Yu!',
        'feature4-title': 'aprendizado personalizado',
        'feature4-text': 'Combinando o melhor da IA e da ciência do desenvolvimento infantil, as respostas são personalizadas para ajudar seu filho a aprender no nível e ritmo ideais.',
        'testimonials-title': 'O que os pais estão dizendo',
        'testimonial1-text': '"Desde que o Yuno entrou em nossa casa, a hora das perguntas virou a hora da magia! Meu filho, antes frustrado, agora sorri a cada nova descoberta."',
        'testimonial1-author': 'Ana Paula, mãe do Pedro (4 anos)',
        'testimonial2-text': '"Eu me sentia exausto tentando responder a tudo. O Yuno me deu um respiro e, o melhor, meu filho está aprendendo muito mais!"',
        'testimonial2-author': 'Carlos Eduardo, pai da Sofia (3 anos)',
        'testimonial3-text': '"Yu é meu melhor amigo! Ele me ensina sobre os dinossauros e as estrelas. Adoro perguntar para ele!"',
        'testimonial3-author': 'Lara, 5 anos',
        'pricing-title': 'Comece sua jornada de descobertas',
        'billing-monthly': 'Mensal',
        'billing-annual': 'Anual',
        'pricing-recommended': 'Recomendado',
        'plan-essential-title': 'Essencial',
        'plan-essential-subtitle': 'Para crianças descobrindo o mundo',
        'plan-essential-questions': '60 perguntas/mês',
        'plan-explorer-title': 'Explorador',
        'plan-explorer-subtitle': 'Para crianças muito curiosas',
        'plan-explorer-questions': '120 perguntas/mês',
        'plan-super-title': 'Super Curioso',
        'plan-super-subtitle': 'Para crianças super curiosas',
        'plan-super-questions': '360 perguntas/mês',
        'plan-free-title': 'Gratuito',
        'plan-free-subtitle': 'Para começar a explorar',
        'plan-free-questions': '6 perguntas',
        'plan-free-price': 'Grátis',
        'plan-essential-annual-total': 'US$ 99,00/ano',
        'plan-explorer-annual-total': 'US$ 159,00/ano',
        'plan-super-annual-total': 'US$ 329,00/ano',
        'plan-essential-monthly-period': '/mês',
        'plan-essential-annual-period': '/mês',
        'plan-explorer-monthly-period': '/mês',
        'plan-explorer-annual-period': '/mês',
        'plan-super-monthly-period': '/mês',
        'plan-super-annual-period': '/mês',
        'plan-essential-discount': '30% OFF',
        'plan-explorer-discount': '33% OFF',
        'plan-super-discount': '39% OFF',
        'plan-essential-btn': 'ESCOLHER ESSENCIAL',
        'plan-explorer-btn': 'ESCOLHER EXPLORADOR',
        'plan-super-btn': 'ESCOLHER SUPER CURIOSO',
        'plan-free-btn': 'COMEÇAR GRÁTIS',
        'footer-brand-name': 'Yuno',
        'footer-text': 'Transformando curiosidade em conhecimento, uma pergunta de cada vez.',
        'footer-copyright': '© 2025 Yuno. Todos os direitos reservados.',
        'modal-title': 'Continue no app Yuno',
        'modal-message': 'Para acessar sua conta, baixe o app Yuno gratuitamente:',
        'benefit-voice-image': 'Uso por voz e imagem',
        'benefit-multilingual': 'Multilíngue (EN, ES, PT)',
        'benefit-widget': 'Widget do Yuno',
        'benefit-basic-ai': 'IA básica',
        'benefit-advanced-ai': 'IA avançada',
        'benefit-parent-insights': 'Insights para os pais'
    },
    en: {
        'brand-name': 'Yuno',
        'login-btn': 'Already have an account',
        'start-btn': 'Start',
        'mobile-header-start-btn': 'Start',
        'hero-title': 'The free, fun and effective way to spark curiosity!',
        'hero-subtitle': 'Turn every question from your child into a discovery adventure with Yuno - the app that answers at the right time, in the right way.',
        'hero-start-btn': 'START NOW',
        'hero-login-btn': 'I ALREADY HAVE AN ACCOUNT',
        'speech-bubble-text': '"Why is the sky blue?"',
        'feature1-title': 'free. fun. effective.',
        'feature1-text': 'Your child asks by voice, Yu answers instantly! With quick lessons and age-adapted answers, every question becomes a new discovery while developing communication and critical thinking skills.',
        'feature2-title': 'science-based',
        'feature2-text': 'We use a combination of research-proven teaching methods and delightful content to create answers that effectively teach and stimulate children\'s natural curiosity!',
        'feature3-title': 'stay motivated',
        'feature3-text': 'We make it easy to build the habit of learning with game-like features, fun challenges, and reminders from our friendly mascot, Yu!',
        'feature4-title': 'personalized learning',
        'feature4-text': 'Combining the best of AI and child development science, answers are personalized to help your child learn at the ideal level and pace.',
        'testimonials-title': 'What parents are saying',
        'testimonial1-text': '"Since Yuno came into our home, question time became magic time! My son, who was frustrated before, now smiles with each new discovery."',
        'testimonial1-author': 'Ana Paula, Pedro\'s mom (4 years old)',
        'testimonial2-text': '"I felt exhausted trying to answer everything. Yuno gave me a break and, best of all, my son is learning much more!"',
        'testimonial2-author': 'Carlos Eduardo, Sofia\'s dad (3 years old)',
        'testimonial3-text': '"Yu is my best friend! He teaches me about dinosaurs and stars. I love asking him questions!"',
        'testimonial3-author': 'Lara, 5 years old',
        'pricing-title': 'Start your journey of discoveries',
        'billing-monthly': 'Monthly',
        'billing-annual': 'Annual',
        'pricing-recommended': 'Recommended',
        'plan-essential-title': 'Essential',
        'plan-essential-subtitle': 'For children discovering the world',
        'plan-essential-questions': '60 questions/month',
        'plan-explorer-title': 'Explorer',
        'plan-explorer-subtitle': 'For very curious children',
        'plan-explorer-questions': '120 questions/month',
        'plan-super-title': 'Super Curious',
        'plan-super-subtitle': 'For super curious children',
        'plan-super-questions': '360 questions/month',
        'plan-free-title': 'Free',
        'plan-free-subtitle': 'To start exploring',
        'plan-free-questions': '6 questions',
        'plan-free-price': 'Free',
        'plan-essential-annual-total': 'US$ 99.00/year',
        'plan-explorer-annual-total': 'US$ 159.00/year',
        'plan-super-annual-total': 'US$ 329.00/year',
        'plan-essential-monthly-period': '/month',
        'plan-essential-annual-period': '/month',
        'plan-explorer-monthly-period': '/month',
        'plan-explorer-annual-period': '/month',
        'plan-super-monthly-period': '/month',
        'plan-super-annual-period': '/month',
        'plan-essential-discount': '30% OFF',
        'plan-explorer-discount': '33% OFF',
        'plan-super-discount': '39% OFF',
        'plan-essential-btn': 'CHOOSE ESSENTIAL',
        'plan-explorer-btn': 'CHOOSE EXPLORER',
        'plan-super-btn': 'CHOOSE SUPER CURIOUS',
        'plan-free-btn': 'START FREE',
        'footer-brand-name': 'Yuno',
        'footer-text': 'Turning curiosity into knowledge, one question at a time.',
        'footer-copyright': '© 2025 Yuno. All rights reserved.',
        'modal-title': 'Continue in the Yuno app',
        'modal-message': 'To access your account, download the free Yuno app:',
        'benefit-voice-image': 'Voice and Image Usage',
        'benefit-multilingual': 'Multilingual (EN, ES, PT)',
        'benefit-widget': 'Yuno Widget',
        'benefit-basic-ai': 'Basic AI',
        'benefit-advanced-ai': 'Advanced AI',
        'benefit-parent-insights': 'Parent Insights'
    },
    es: {
        'brand-name': 'Yuno',
        'login-btn': 'Ya tengo una cuenta',
        'start-btn': 'Comenzar',
        'mobile-header-start-btn': 'Comenzar',
        'hero-title': '¡La forma gratuita, divertida y eficaz de despertar la curiosidad!',
        'hero-subtitle': 'Convierte cada pregunta de tu hijo en una aventura de descubrimiento con Yuno: la app que responde en el momento y de la manera correcta.',
        'hero-start-btn': 'EMPEZAR AHORA',
        'hero-login-btn': 'YA TENGO UNA CUENTA',
        'speech-bubble-text': '"¿Por qué el cielo es azul?"',
        'feature1-title': 'gratis. divertido. eficaz.',
        'feature1-text': '¡Tu hijo pregunta por voz y Yu responde al instante! Con lecciones rápidas y respuestas adaptadas a la edad, cada pregunta se convierte en un nuevo descubrimiento mientras desarrolla habilidades de comunicación y pensamiento crítico.',
        'feature2-title': 'basado en la ciencia',
        'feature2-text': '¡Usamos una combinación de métodos de enseñanza comprobados por la investigación y contenido encantador para crear respuestas que realmente enseñan y estimulan la curiosidad natural de los niños!',
        'feature3-title': 'mantente motivado',
        'feature3-text': 'Facilitamos la formación del hábito de aprender con funciones similares a juegos, desafíos divertidos y recordatorios de nuestro amigable mascota, Yu!',
        'feature4-title': 'aprendizaje personalizado',
        'feature4-text': 'Combinando lo mejor de la IA y la ciencia del desarrollo infantil, las respuestas se personalizan para ayudar a tu hijo a aprender al nivel y ritmo ideales.',
        'testimonials-title': 'Lo que dicen los padres',
        'testimonial1-text': '"Desde que Yuno llegó a nuestra casa, la hora de las preguntas se convirtió en hora mágica! Mi hijo, que antes se frustraba, ahora sonríe con cada nuevo descubrimiento."',
        'testimonial1-author': 'Ana Paula, mamá de Pedro (4 años)',
        'testimonial2-text': '"Me sentía exhausto tratando de responder todo. Yuno me dio un respiro y, lo mejor, ¡mi hijo está aprendiendo mucho más!"',
        'testimonial2-author': 'Carlos Eduardo, papá de Sofia (3 años)',
        'testimonial3-text': '"¡Yu es mi mejor amigo! Me enseña sobre dinosaurios y estrellas. ¡Me encanta hacerle preguntas!"',
        'testimonial3-author': 'Lara, 5 años',
        'pricing-title': 'Comienza tu viaje de descubrimientos',
        'billing-monthly': 'Mensual',
        'billing-annual': 'Anual',
        'pricing-recommended': 'Recomendado',
        'plan-essential-title': 'Esencial',
        'plan-essential-subtitle': 'Para niños descubriendo el mundo',
        'plan-essential-questions': '60 preguntas/mes',
        'plan-explorer-title': 'Explorador',
        'plan-explorer-subtitle': 'Para niños muy curiosos',
        'plan-explorer-questions': '120 preguntas/mes',
        'plan-super-title': 'Super Curioso',
        'plan-super-subtitle': 'Para niños super curiosos',
        'plan-super-questions': '360 preguntas/mes',
        'plan-free-title': 'Gratis',
        'plan-free-subtitle': 'Para empezar a explorar',
        'plan-free-questions': '6 preguntas',
        'plan-free-price': 'Gratis',
        'plan-essential-annual-total': 'US$ 99,00/año',
        'plan-explorer-annual-total': 'US$ 159,00/año',
        'plan-super-annual-total': 'US$ 329,00/año',
        'plan-essential-monthly-period': '/mes',
        'plan-essential-annual-period': '/mes',
        'plan-explorer-monthly-period': '/mes',
        'plan-explorer-annual-period': '/mes',
        'plan-super-monthly-period': '/mes',
        'plan-super-annual-period': '/mes',
        'plan-essential-discount': '30% OFF',
        'plan-explorer-discount': '33% OFF',
        'plan-super-discount': '39% OFF',
        'plan-essential-btn': 'ESCOGER ESENCIAL',
        'plan-explorer-btn': 'ESCOGER EXPLORADOR',
        'plan-super-btn': 'ESCOGER SUPER CURIOSO',
        'plan-free-btn': 'EMPEZAR GRATIS',
        'footer-brand-name': 'Yuno',
        'footer-text': 'Transformando la curiosidad en conocimiento, una pregunta a la vez.',
        'footer-copyright': '© 2025 Yuno. Todos los derechos reservados.',
        'modal-title': 'Continúa en la app Yuno',
        'modal-message': 'Para acceder a tu cuenta, descarga la app Yuno gratis:',
        'benefit-voice-image': 'Uso por voz y imagen',
        'benefit-multilingual': 'Multilíngue (EN, ES, PT)',
        'benefit-widget': 'Widget del Yuno',
        'benefit-basic-ai': 'IA básica',
        'benefit-advanced-ai': 'IA avanzada',
        'benefit-parent-insights': 'Insights para los padres'
    }
};

function setLanguage(lang) {
    if (!translations[lang]) lang = 'pt';
    Object.keys(translations[lang]).forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.textContent = translations[lang][id];
    });
    localStorage.setItem('yuno-lang', lang);
    updateLangDropdownUI(lang);
    hasLanguageBeenSet = true;
    
    // Restart typewriter effect for speech bubble with better control
    const speechBubble = document.querySelector('.speech-bubble p');
    if (speechBubble && !isTypewriterRunning) {
        isTypewriterRunning = true;
        const text = translations[lang]['speech-bubble-text'];
        
        // Limpar completamente o conteúdo
        speechBubble.textContent = '';
        
        // Aguardar um pouco antes de começar a digitação
        setTimeout(() => {
            // Verificar se ainda não há conflito
            if (speechBubble.textContent === '' && isTypewriterRunning) {
                let i = 0;
                const typeWriter = () => {
                    if (i < text.length && isTypewriterRunning) {
                        speechBubble.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    } else {
                        isTypewriterRunning = false;
                    }
                };
                typeWriter();
            } else {
                isTypewriterRunning = false;
            }
        }, 500);
    }

    // Atualizar modal se estiver aberto
    document.getElementById('modal-title').textContent = translations[lang]['modal-title'];
    document.getElementById('modal-message').textContent = translations[lang]['modal-message'];
    
    // Atualizar benefícios dos planos
    const benefitMappings = {
        // Plano Gratuito
        'plan-free-benefit-1': 'benefit-voice-image',
        'plan-free-benefit-2': 'benefit-multilingual',
        'plan-free-benefit-3': 'benefit-basic-ai',
        
        // Plano Essencial
        'plan-essential-benefit-1': 'benefit-voice-image',
        'plan-essential-benefit-2': 'benefit-multilingual',
        'plan-essential-benefit-3': 'benefit-widget',
        'plan-essential-benefit-4': 'benefit-basic-ai',
        
        // Plano Explorador
        'plan-explorer-benefit-1': 'benefit-voice-image',
        'plan-explorer-benefit-2': 'benefit-multilingual',
        'plan-explorer-benefit-3': 'benefit-widget',
        'plan-explorer-benefit-4': 'benefit-advanced-ai',
        
        // Plano Super Curioso
        'plan-super-benefit-1': 'benefit-voice-image',
        'plan-super-benefit-2': 'benefit-multilingual',
        'plan-super-benefit-3': 'benefit-widget',
        'plan-super-benefit-4': 'benefit-advanced-ai',
        'plan-super-benefit-5': 'benefit-parent-insights'
    };
    
    Object.keys(benefitMappings).forEach(function(benefitId) {
        const element = document.getElementById(benefitId);
        const translationKey = benefitMappings[benefitId];
        if (element && translations[lang][translationKey]) {
            element.textContent = translations[lang][translationKey];
        }
    });
}

function detectLanguage() {
    // 1. Preferência salva
    var saved = localStorage.getItem('yuno-lang');
    if (saved && translations[saved]) return saved;
    // 2. Idioma do navegador
    var nav = navigator.languages ? navigator.languages[0] : navigator.language;
    if (nav.startsWith('pt')) return 'pt';
    if (nav.startsWith('es')) return 'es';
    if (nav.startsWith('en')) return 'en';
    return 'pt';
}

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.feature-item, .testimonial-card, .pricing-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Efeito hover nos botões
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efeito de clique nos botões principais
    const primaryButtons = document.querySelectorAll('.btn-primary, .btn-hero-primary, .btn-pricing');
    primaryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animação de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Scroll to pricing section
            scrollToPricing();
        });
    });

    // Animação do mascote no hero
    const mascotHero = document.querySelector('.mascot-hero');
    if (mascotHero) {
        setInterval(() => {
            mascotHero.style.transform = 'scale(1.05)';
            setTimeout(() => {
                mascotHero.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }

    // Animação da barra de progresso
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const animateProgress = () => {
            progressFill.style.width = '0%';
            setTimeout(() => {
                progressFill.style.width = '70%';
            }, 500);
        };
        
        // Animar quando a seção estiver visível
        const progressObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgress();
                }
            });
        }, { threshold: 0.5 });
        
        progressObserver.observe(progressFill.parentElement);
    }

    // Efeito de digitação na speech bubble
    const speechBubble = document.querySelector('.speech-bubble p');
    if (speechBubble && !isTypewriterRunning && !hasLanguageBeenSet) {
        isTypewriterRunning = true;
        const currentLang = localStorage.getItem('yuno-lang') || 'pt';
        const text = translations[currentLang]['speech-bubble-text'];
        
        // Limpar completamente o conteúdo e aguardar
        speechBubble.textContent = '';
        
        // Aguardar um pouco mais para garantir que não há conflitos
        setTimeout(() => {
            // Verificar novamente se não há conflito
            if (speechBubble.textContent === '' && !hasLanguageBeenSet) {
                let i = 0;
                const typeWriter = () => {
                    if (i < text.length && !hasLanguageBeenSet) {
                        speechBubble.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    } else {
                        isTypewriterRunning = false;
                    }
                };
                typeWriter();
            } else {
                isTypewriterRunning = false;
            }
        }, 2000);
    }

    // Parallax suave no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroIllustration = document.querySelector('.hero-illustration');
        
        if (hero && heroIllustration) {
            heroIllustration.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Contador animado para estatísticas (se houver)
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Sistema de notificações
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#58cc02' : type === 'error' ? '#ff4b4b' : '#1cb0f6'};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10001;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
            font-weight: 500;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover após 4 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
    }

    // Efeitos de hover nos cards de depoimentos
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efeito de destaque no card de preço
    const pricingCard = document.querySelector('.pricing-card');
    if (pricingCard) {
        pricingCard.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(88, 204, 2, 0.2)';
        });
        
        pricingCard.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
    }

    // Animação das estrelas
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        setInterval(() => {
            star.style.transform = 'scale(1.2) rotate(10deg)';
            setTimeout(() => {
                star.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        }, 2000 + index * 500);
    });

    // Efeito de loading nos botões
    function showLoading(button) {
        const originalText = button.textContent;
        button.textContent = 'Carregando...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }

    // Aplicar loading nos botões de ação
    const actionButtons = document.querySelectorAll('#start-btn, #hero-start-btn, #plan-essential-btn, #plan-explorer-btn, #plan-super-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            showLoading(this);
        });
    });

    // Dropdown customizado
    const dropdown = document.getElementById('lang-dropdown');
    const toggle = document.getElementById('lang-dropdown-toggle');
    const menu = document.getElementById('lang-dropdown-menu');
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('open');
        toggle.setAttribute('aria-expanded', dropdown.classList.contains('open'));
    });
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const selected = btn.dataset.lang;
            setLanguage(selected);
            updateLangDropdownUI(selected);
            dropdown.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
    // Inicializar idioma
    var lang = detectLanguage();
    setLanguage(lang);
    updateLangDropdownUI(lang);

    // Billing Toggle Functionality
    const billingToggle = document.getElementById('billing-toggle');
    const priceMonthly = document.querySelectorAll('.price-monthly');
    const priceAnnual = document.querySelectorAll('.price-annual');
    const discounts = document.querySelectorAll('.discount');
    const discountBadges = document.querySelectorAll('.discount-badge');

    function updateBillingDisplay() {
        const isAnnual = billingToggle.checked;
        
        priceMonthly.forEach(el => {
            el.classList.toggle('active', !isAnnual);
        });
        
        priceAnnual.forEach(el => {
            el.classList.toggle('active', isAnnual);
        });
        
        discounts.forEach(el => {
            el.style.display = isAnnual ? 'inline-block' : 'none';
        });
        
        // Mostrar/ocultar badges de desconto baseado no billing
        discountBadges.forEach(badge => {
            badge.style.display = isAnnual ? 'block' : 'none';
        });
    }

    // Initialize billing display
    updateBillingDisplay();

    // Add event listener to toggle
    billingToggle.addEventListener('change', updateBillingDisplay);

    // Alternar header mobile ao rolar
    function handleMobileHeader() {
        const mainHeader = document.querySelector('.header');
        const compactHeader = document.getElementById('mobile-header-compact');
        if (window.innerWidth > 480) {
            // Desktop/tablet: garantir que tudo está visível
            if (mainHeader) mainHeader.style.display = '';
            if (compactHeader) compactHeader.style.display = 'none';
            return;
        }
        // Mobile
        if (window.scrollY < 40) {
            // Topo: mostrar header padrão centralizado
            if (mainHeader) mainHeader.style.display = '';
            if (compactHeader) compactHeader.style.display = 'none';
        } else {
            // Após scroll: mostrar header compacto (mascote + Yuno à esquerda, botão à direita)
            if (mainHeader) mainHeader.style.display = 'none';
            if (compactHeader) compactHeader.style.display = 'flex';
        }
    }
    window.addEventListener('scroll', handleMobileHeader);
    window.addEventListener('resize', handleMobileHeader);
    document.addEventListener('DOMContentLoaded', handleMobileHeader);

    // Modal de Download do App
    const modal = document.getElementById('download-app-modal');
    const closeModalBtn = document.getElementById('modal-close-btn');
    const appStoreBtn = document.getElementById('appstore-btn');
    const googlePlayBtn = document.getElementById('googleplay-btn');
    // Coloque aqui os links reais das lojas quando disponíveis
    appStoreBtn.href = '#'; // Exemplo: 'https://apps.apple.com/app/idXXXXXXXXX'
    googlePlayBtn.href = '#'; // Exemplo: 'https://play.google.com/store/apps/details?id=XXXXXXXXX'

    function openModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        closeModalBtn.focus();
    }
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('mousedown', function(e) {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex' && e.key === 'Escape') closeModal();
    });
    // Abrir modal ao clicar em qualquer botão 'Já tenho uma conta'
    document.querySelectorAll('#hero-login-btn, #login-btn, .btn-hero-secondary, #plan-free-btn').forEach(btn => {
        btn && btn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });

    // Scroll to pricing section on 'Começar' buttons
    function scrollToPricing() {
        const section = document.getElementById('pricing-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const startBtns = [
        document.getElementById('start-btn'),
        document.getElementById('mobile-header-start-btn'),
        document.getElementById('hero-start-btn')
    ];
    startBtns.forEach(btn => {
        if (btn) btn.addEventListener('click', scrollToPricing);
    });

});

function updateLangDropdownUI(lang) {
    // Atualiza a flag e o label do dropdown
    const flagMap = {
        pt: 'fi-br',
        en: 'fi-us',
        es: 'fi-es'
    };
    const labelMap = { pt: 'Português', en: 'English', es: 'Español' };
    document.getElementById('current-lang-flag').innerHTML = `<span class="fi ${flagMap[lang]}"></span>`;
    document.getElementById('current-lang-label').textContent = labelMap[lang] || 'Idioma';
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Funções utilitárias
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

