<<<<<<< HEAD
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
    productcontainer.scrollLeft -= event.deltaY;
    productcontainer.scrollLeft += event.deltaX;
});

scrollprevBtn.addEventListener("click", () => {
    // productcontainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
    productcontainer.scrollLeft -= 300; // Adjust the scroll amount as needed
})

scrollnextBtn.addEventListener("click", () => {
    // productcontainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
    productcontainer.scrollLeft += 300; // Adjust the scroll amount as needed
})


//------------------------------productcategory scroll-------------------------

let productcategory = document.querySelector('.product-category');
let categoryCards = document.querySelectorAll('.categorybox');

let categoryScrollPrevBtn = document.querySelector('.scrollbtns .prev');
let categoryScrollNextBtn = document.querySelector('.scrollbtns .next');

productcategory.addEventListener("wheel", function (e) {
    e.preventDefault();
    productcategory.scrollLeft -= e.deltaY;
    productcategory.scrollLeft += e.deltaX;
});

categoryScrollPrevBtn.addEventListener("click", () => {

    productcategory.scrollLeft -= 150;

})

categoryScrollNextBtn.addEventListener("click", () => {

    productcategory.scrollLeft += 150;

})


//------------------------------Top selling product-------------------------

let topSellingContainer = document.querySelector('.ts-container');
let topSellingCards = document.querySelectorAll('.ts-products');


topSellingContainer.addEventListener("wheel", function (e) {
    e.preventDefault();
    topSellingContainer.scrollLeft += e.deltaY;
    topSellingContainer.scrollLeft += e.deltaX;
})

//------------------------------Image slider-------------------------


let index = 0;
const slides = document.querySelectorAll(".slider-item");
showSlide() // pehla slide show karne ke liye
function showSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
    index = (index + 1) % slides.length; // loop
}

setInterval(showSlide, 5000); // har 5 sec baad change


//------------------------------Another selling product-------------------------

let prodcontainer = document.querySelector(".an-container");
let cards = document.querySelectorAll(".an-card");

prodcontainer.addEventListener("wheel", function (e) {
    e.preventDefault()
    prodcontainer.scrollLeft += e.deltaY;
    prodcontainer.scrollLeft += e.deltaX;
})

//------------------------------top scroll btn-------------------------

let topscrollcontainer = document.querySelector(".top-screen");

function topscreen() {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            topscrollcontainer.classList.remove("scroll")
        } else {
            topscrollcontainer.classList.add("scroll")
        }
    })

    topscrollcontainer.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}
topscreen();

//------------------------------<!-- products cart section -->-------------------------


const products = [
    { name: "HAVIT HV-G92 Gamepad", img: "image/gamepad.jpg", offprice: "120$", realprice: "160$", offer: "-40%" },
    { name: "JBL Speaker", img: "image/jbl1.jpg", offprice: "90$", realprice: "150$", offer: "-30%" },
    { name: "Sony Headphones", img: "image/perfume gucci.jpg", offprice: "200$", realprice: "250$", offer: "-20%" },
    { name: "Apple iPhone 14 Pro", img: "image/iphone-poster-1.jpg", offprice: "999$", realprice: "1200$", offer: "-15%" },
    { name: "Ps5 Gamepad", img: "image/ps5.jpg", offprice: "75$", realprice: "100$", offer: "-25%" },
    { name: "HAVIT HV-G92 Gamepad", img: "image/gamepad.jpg", offprice: "120$", realprice: "160$", offer: "-40%" },
    { name: "JBL Speaker", img: "image/jbl1.jpg", offprice: "90$", realprice: "150$", offer: "-30%" },
    { name: "Sony Headphones", img: "image/perfume gucci.jpg", offprice: "200$", realprice: "250$", offer: "-20%" },
    { name: "Apple iPhone 14", img: "image/Sunglasses.webp", offprice: "999$", realprice: "1200$", offer: "-15%" },
    { name: "Smart Watch", img: "image/ps5.jpg", offprice: "75$", realprice: "100$", offer: "-25%" }
];

const productContainer = document.querySelector(".prodcontainer");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("products");
    card.innerHTML = `
      <div class="product-card">
        <p class="offer">${product.offer}</p>
        <i class="fa-regular fa-heart"></i>
        <img src="${product.img}" alt="${product.name}">
        <div class="prodetail">
          <h6>${product.name}</h6>
          <div class="price">
            <p class="offprice">${product.offprice}</p>
            <p class="realprice">${product.realprice}</p>
          </div>
          <div class="purchase">
            <button class="buy">Buy Now</button>
            <button class="addcart">Add to cart</button>
          </div>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
      </div>
    `;
    productContainer.appendChild(card);
});


//------------------------------<!-- Topselling cart section -->-------------------------


const tsproducts = [
    { name: "JBL Speaker ", img: "image/jbl5.jpg", offprice: "120$", realprice: "160$", },
    { name: "JBL Speaker", img: "image/jbl1.jpg", offprice: "90$", realprice: "150$", },
    { name: "Sony Headphones", img: "image/perfume gucci.jpg", offprice: "200$", realprice: "250$", },
    { name: "Apple iPhone 14 Pro", img: "image/iphone-poster-1.jpg", offprice: "999$", realprice: "1200$", },
    { name: "Ps5 Gamepad", img: "image/ps5.jpg", offprice: "75$", realprice: "100$", },
    { name: "HAVIT Gamepad", img: "image/gamepad.jpg", offprice: "120$", realprice: "160$", },
    { name: "JBL Speaker", img: "image/jbl1.jpg", offprice: "90$", realprice: "150$", },
];


const tsContainer = document.querySelector(".ts-container");

tsproducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("ts-products");
    card.innerHTML = `<div class=" ts-products">
                        <div class="card ">
                            <img src="${product.img}" class="card-img-top" style="height: 10rem; object-fit: cover;"
                                alt="${product.img}">
                            <div class="card-body">
                                <div class="prodetail">
                                    <h6>${product.name}</h6>
                                    <div class="price d-flex gap-3">
                                        <h6 class="offprice">${product.offprice}</h6>
                                        <h6 class="realprice">${product.realprice}</h6>
                                    </div>
                                    <div class="rating">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

    tsContainer.appendChild(card);
});
=======
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


//------------------------------productcategory scroll-------------------------

let productcategory = document.querySelector('.product-category');
let categoryCards = document.querySelectorAll('.categorybox');

let categoryScrollPrevBtn = document.querySelector('.scrollbtns .prev');
let categoryScrollNextBtn = document.querySelector('.scrollbtns .next');

productcategory.addEventListener("wheel", function (e) {
    e.preventDefault();
    productcategory.scrollLeft += e.deltaY;
    productcategory.scrollLeft += e.deltaX;
});

categoryScrollPrevBtn.addEventListener("click", () => {

    productcategory.scrollLeft -= 150;

})

categoryScrollNextBtn.addEventListener("click", () => {

    productcategory.scrollLeft += 150;

})


//------------------------------Top selling product-------------------------

let topSellingContainer = document.querySelector('.ts-container');
let topSellingCards = document.querySelectorAll('.ts-products');


topSellingContainer.addEventListener("wheel", function (e) {
    e.preventDefault();
    topSellingContainer.scrollLeft += e.deltaY;
    topSellingContainer.scrollLeft += e.deltaX;
})


let index = 0;
const slides = document.querySelectorAll(".slider-item");
showSlide() // pehla slide show karne ke liye
function showSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
    index = (index + 1) % slides.length; // loop
}

setInterval(showSlide, 3000); // har 3 sec baad change
>>>>>>> 157d1b4e58120f45be2dea6dfd6cbe026d96ba44
