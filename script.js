/* =========================
   ABRIR ENVELOPE
========================= */

const envelope = document.getElementById("envelope");
const intro = document.getElementById("intro");
const letterPage = document.getElementById("letter-page");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        intro.classList.add("hidden");

        setTimeout(() => {

            letterPage.classList.add("show");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 800);

    }, 1200);

});


/* =========================
   CARROSSEL AUTOMÁTICO
========================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);


/* =========================
   CONTADOR DE TEMPO
========================= */

const relationshipDate = new Date("2025-11-30T00:00:00");

const monthsElement = document.getElementById("months");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCounter(){

    const now = new Date();

    let months = (
        (now.getFullYear() - relationshipDate.getFullYear()) * 12
    ) + (
        now.getMonth() - relationshipDate.getMonth()
    );

    if(now.getDate() < relationshipDate.getDate()){
        months--;
    }

    const lastMonthDate = new Date(relationshipDate);

    lastMonthDate.setMonth(
        relationshipDate.getMonth() + months
    );

    const difference = now - lastMonthDate;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    monthsElement.textContent = months;
    daysElement.textContent = days;
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

}

updateCounter();

setInterval(updateCounter, 1000);


/* =========================
   CORAÇÕES FLUTUANTES
========================= */

const loveBtn = document.getElementById("loveBtn");
const heartsContainer = document.getElementById("hearts-container");

loveBtn.addEventListener("click", createHearts);

function createHearts(){

    const amount = Math.floor(
        Math.random() * 20
    ) + 20;

    for(let i = 0; i < amount; i++){

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤";

        const size =
            Math.random() * 25 + 15;

        const left =
            Math.random() * window.innerWidth;

        const duration =
            Math.random() * 2 + 3;

        const opacity =
            Math.random() * 0.5 + 0.5;

        heart.style.left = left + "px";
        heart.style.fontSize = size + "px";
        heart.style.opacity = opacity;
        heart.style.animationDuration =
            duration + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);

    }

}


/* =========================
   EFEITO EXTRA
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/* =========================
   INDICADORES CLICÁVEIS
========================= */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

    });

});


/* =========================
   REVELAÇÃO SUAVE AO ROLAR
========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(
    ".message, .counter-section, .love-section, .signature"
).forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "1s";

    observer.observe(section);

});