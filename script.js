// Menu Mobile
const btnMenu = document.getElementById('btn-menu');
const btnFechar = document.getElementById('btn-fechar');
const navegacao = document.getElementById('navegacao');
const linksMenu = navegacao.querySelectorAll('a');

btnMenu.addEventListener('click', () => {
    navegacao.classList.add('ativo');
});

btnFechar.addEventListener('click', () => {
    navegacao.classList.remove('ativo');
});

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        navegacao.classList.remove('ativo');
    });
});

// Efeito no Cabeçalho ao Rolar
const cabecalho = document.getElementById('cabecalho');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        cabecalho.style.padding = '0.5rem 0';
        cabecalho.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        cabecalho.style.padding = '1rem 0';
        cabecalho.style.boxShadow = 'none';
    }
});

// Envio do Formulário
const formContato = document.getElementById('form-contato');
formContato.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    alert(`Olá ${nome}! Recebi sua mensagem e entrarei em contato em breve pelo WhatsApp. Obrigada! 🤗`);
    
    formContato.reset();
});

// Animação de Entrada dos Elementos
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card-beneficio, .card-servico, .card-depoimento, .sobre-imagem, .sobre-texto').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observador.observe(el);
});