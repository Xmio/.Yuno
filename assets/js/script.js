// JavaScript para interatividade estilo Duolingo
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
            
            // Criar efeito de confete
            createConfetti();
            
            // Simular ação (aqui você integraria com um sistema real)
            setTimeout(() => {
                showNotification('🎉 Bem-vindo ao Yuno! Prepare-se para uma jornada incrível de descobertas!', 'success');
            }, 300);
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
    if (speechBubble) {
        const text = speechBubble.textContent;
        speechBubble.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                speechBubble.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
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

    // Função para criar confete
    function createConfetti() {
        const colors = ['#58cc02', '#1cb0f6', '#ff9600', '#ff4b4b', '#ce82ff'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}vw;
                top: -10px;
                z-index: 10000;
                pointer-events: none;
                border-radius: 50%;
            `;
            
            document.body.appendChild(confetti);
            
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(100vh) rotate(720deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 2000 + 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animation.onfinish = () => {
                confetti.remove();
            };
        }
    }

    // Função para mostrar notificações estilo Duolingo
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '🎉' : 'ℹ️'}</span>
                <span class="notification-text">${message}</span>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 20px;
            background: ${type === 'success' ? '#58cc02' : '#1cb0f6'};
            color: white;
            border-radius: 12px;
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    // Adicionar classes CSS para animações
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-icon {
            font-size: 20px;
        }
        
        .notification-text {
            font-size: 14px;
        }
        
        .progress-fill {
            transition: width 1s ease-out;
        }
        
        .mascot-hero {
            transition: transform 0.2s ease;
        }
        
        button, .btn {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
    `;
    document.head.appendChild(style);
});

// Função para validar email (para futuras integrações)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Função para simular loading
function showLoading(button) {
    const originalText = button.textContent;
    button.textContent = 'CARREGANDO...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

