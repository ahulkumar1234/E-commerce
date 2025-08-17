//------------------------------sale timer-------------------------
// This script creates a countdown timer that updates every second
let days = 3;
let hours = 23;
let minutes = 59;
let seconds = 59;

function updateDisplay() {
    document.querySelector('.days').textContent = days < 10 ? "0" + days : days;
    document.querySelector('.hours').textContent = hours < 10 ? "0" + hours : hours;
    document.querySelector('.minutes').textContent = minutes < 10 ? "0" + minutes : minutes;
    document.querySelector('.seconds').textContent = seconds < 10 ? "0" + seconds : seconds;
}

updateDisplay();

setInterval(function () {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }
    if (minutes < 0) {
        minutes = 59;
        hours--;
    }
    if (hours < 0) {
        hours = 23;
        days--;
    }
    if (days < 0) {
        days = 3;
        hours = 23;
        minutes = 59;
        seconds = 59;
    }

    updateDisplay();
}, 1000);



//------------------------------product scroll-------------------------

const productcontainer = document.querySelector('.prodcontainer');
const productCards = document.querySelectorAll('.product-card');

const scrollprevBtn = document.querySelector('.scrollbtns .prev');
const scrollnextBtn = document.querySelector('.scrollbtns .next');

productcontainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    productcontainer.scrollLeft += event.deltaY;
});

scrollprevBtn.addEventListener("click", () => {
    // productcontainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
    productcontainer.scrollLeft -= 300; // Adjust the scroll amount as needed
})

scrollnextBtn.addEventListener("click", () => {
    // productcontainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
    productcontainer.scrollLeft += 300; // Adjust the scroll amount as needed
})

//------------------------------product scroll end-------------------------
