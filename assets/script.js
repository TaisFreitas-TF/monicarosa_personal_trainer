// ============================
// MENU MOBILE
// ============================

const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {

    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        btnMenu.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        btnMenu.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

// Fecha o menu ao clicar em um link

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("ativo");

        btnMenu.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// ============================
// HEADER AO ROLAR
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.92)";
        header.style.padding = "12px 0";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.35)";
        header.style.padding = "18px 0";
        header.style.boxShadow = "none";

    }

});



// ============================
// CONTADORES
// ============================

const contadores = document.querySelectorAll(".contador");

const iniciarContadores = () => {

    contadores.forEach(contador => {

        const alvo = Number(contador.dataset.numero);

        let atual = 0;

        const incremento = alvo / 80;

        const atualizar = () => {

            atual += incremento;

            if(atual < alvo){

                contador.innerText = Math.floor(atual);

                requestAnimationFrame(atualizar);

            }else{

                contador.innerText = alvo + "+";

            }

        }

        atualizar();

    });

}

let contadorIniciado = false;

window.addEventListener("scroll", () => {

    const secao = document.querySelector(".numeros");

    const posicao = secao.offsetTop - 500;

    if(window.scrollY > posicao && !contadorIniciado){

        iniciarContadores();

        contadorIniciado = true;

    }

});


// ============================
// ANIMAÇÃO AO APARECER
// ============================

const elementos = document.querySelectorAll(

".card,.depoimento,.resultado,.numero,.sobre,.hero-texto"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.15});

elementos.forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});


// ============================
// FORMULÁRIO → WHATSAPP
// ============================

const form = document.getElementById("form-contato");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const objetivo = document.querySelector("select").value;
    const mensagem = document.querySelector("textarea").value;

    const texto =

`Olá!

Meu nome é ${nome}.

WhatsApp: ${telefone}

Objetivo: ${objetivo}

Mensagem:

${mensagem}`;

    const numero = "5541999999999"; // Troque pelo número da personal

    const url =

`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url,"_blank");

    form.reset();

});


// ============================
// EFEITO PARALLAX HERO
// ============================

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY =

    window.scrollY * .35 + "px";

});


// ============================
// SCROLL SUAVE
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ============================
// ANIMAÇÃO DOS BOTÕES
// ============================

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});


// ============================
// PRELOAD
// ============================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});