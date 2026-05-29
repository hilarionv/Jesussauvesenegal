
const menuToggle = document.getElementById("toggle");
const fullMenu = document.querySelector(".full-menu");
const top1 = document.querySelector(".top1");

menuToggle.addEventListener("click", function() {
    menuToggle.classList.toggle("active");
    fullMenu.classList.toggle("active");
    top1.classList.toggle("hidden");
});

const closeMenu = document.getElementById("closeMenu");

if (closeMenu) {
    closeMenu.addEventListener("click", function() {
        fullMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        top1.classList.remove("hidden");
    });
}

const buttons = document.querySelectorAll(".select button");
const infos = document.querySelectorAll(".info-SN, .info-Canada, .info-Togo, .info-Guediawaye");

infos.forEach((info, i) => {
    if (i !== 0) info.style.display = "none";
});

buttons.forEach((button, index) => {
    button.addEventListener("click", function() {
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        infos.forEach(info => info.style.display = "none");
        if (infos[index]) infos[index].style.display = "block";
    });
});

new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    arrows: false,
    pagination: true,
}).mount();

function openMot(e) {
    e.preventDefault();
    document.getElementById('motModal').classList.add('open');
}

function closeMot() {
    document.getElementById('motModal').classList.remove('open');
}

// Fermer avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMot();
});
