const menuBtn = document.getElementById("menu-btn");
const menuBtnBurger = document.getElementById("menu-btn-burger");
const menuBtnClose = document.getElementById("menu-btn-close");
const menuList = document.getElementById("menu-list");

menuBtn.addEventListener("click", () => {
    menuBtnBurger.classList.toggle("menu-btn-hide");
    menuBtnClose.classList.toggle("menu-btn-hide");
    menuList.classList.toggle("mobile-menu-open")

})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 3000,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});


const monthPriceBtn = document.getElementById("month-price-btn");
const yearPriceBtn = document.getElementById("year-price-btn");
let cardPrices = document.querySelectorAll(".card-price span");



monthPriceBtn.addEventListener("click", choosePrices);
yearPriceBtn.addEventListener("click", choosePrices);
function choosePrices(e) {
    if (!e.target.classList.contains("selected")) {
        e.target.classList.toggle("selected")
        cardPrices.forEach(card => card.classList.toggle("card-price-hide"))
        if (e.target == monthPriceBtn) {
            yearPriceBtn.classList.toggle("selected");
        }
        else {
            monthPriceBtn.classList.toggle("selected");
        }
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("faq-question-icon")) {
        if (e.target.parentElement.parentElement.classList.contains("list-item-opened")) {
            e.target.parentElement.parentElement.classList.toggle("list-item-opened");
            e.target.parentElement.parentElement.classList.toggle("list-item-closed")
        }
        else {
            let itemOpened = document.querySelector(".list-item-opened");
            if (itemOpened) {
                itemOpened.classList.toggle("list-item-closed");
                itemOpened.classList.toggle("list-item-opened");
            }
            e.target.parentElement.parentElement.classList.toggle("list-item-opened");
            e.target.parentElement.parentElement.classList.toggle("list-item-closed")
        }
    }
})