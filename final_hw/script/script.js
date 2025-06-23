let body = document.querySelector("body");


function createMainHeader() {
  let header = document.createElement("header");
  header.className = `main-header`;
  header.innerHTML = `<div class="container">
                        <nav>
                          <div class="header-container">
                            <div class="desktop-wrapper d-flex align-center">
                              <div class="logo bg-filled-main">
                                <a href="/" title="Home" rel="home" class="d-flex align-center just-center">
                                  <img src="assets/icons/shape-17.svg" alt="logo image">
                                </a>
                              </div>
                              <div class="menu">
                                <ul id="menu-list" class="menu-list d-flex align-center">
                                </ul>
                                <div id="menu-btn" class="menu-btn">
                                  <div id="menu-btn-burger" class="menu-btn-burger">
                                  </div>
                                  <div id="menu-btn-close" class="menu-btn-close d-flex just-center menu-btn-hide">
                                    <i class="fa-solid fa-x c-white"></i>
                                  </div>
                                </div>
                              </div>
                              <div class="login d-flex fw-wrap ">
                                <div class="login-btn d-flex align-center just-center"></div>
                                <div class="login-btn d-flex align-center just-center bg-filled-main c-white"></div>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>`;
  body.prepend(header);
}

function feelMainHeader(element) {
  let menuList = document.querySelector(".menu-list");
  for (let i = 0; i < element.sections.length - 2; i++) {
    let menuItem = document.createElement("li");
    menuItem.classList = "menu-item";
    let menuLink = document.createElement("a");
    menuLink.href = "#";
    menuLink.className = "menu-link";
    menuLink.id = `${i + 1}`;
    menuLink.textContent = element.sections[i].title;
    menuItem.append(menuLink);
    menuList.append(menuItem);
  }

  let loginBtn = document.querySelectorAll(".login-btn");
  let counter = element.sections.length - 2;
  for (let i = 0; i < loginBtn.length; i++) {
    let menuLink = document.createElement("a");
    menuLink.href = "#";
    menuLink.className = "menu-link";
    menuLink.id = `${counter}`;
    menuLink.textContent = element.sections[counter].title;
    counter++;
    loginBtn[i].append(menuLink);
  }

  const menuBtn = document.getElementById("menu-btn");
  const menuBtnBurger = document.getElementById("menu-btn-burger");
  const menuBtnClose = document.getElementById("menu-btn-close");

  menuBtn.addEventListener("click", () => {
    menuBtnBurger.classList.toggle("menu-btn-hide");
    menuBtnClose.classList.toggle("menu-btn-hide");
    menuList.classList.toggle("mobile-menu-open")

  })
}


function createMainOffer(element) {
  let specOffer = document.createElement("div");
  console.log(element)
  console.log(element.offers.mainOffer)
  specOffer.classList = "spec-offer d-flex just-center";
  specOffer.innerHTML = `<a href="#" class="bg-filled-main">
                          <span class="c-white">${element.offers.mainOffer}</span>
                          <span class="c-white arrow-hide">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M-2.62268e-07 6.5C-2.80374e-07 6.08579 0.335786 5.75 0.75 5.75L11.3879 5.75L7.23017 1.79062C6.93159 1.50353 6.92228 1.02875 7.20937 0.730167C7.49647 0.431589 7.97125 0.422279 8.26983 0.709374L13.7698 5.95937C13.9169 6.10078 14 6.29599 14 6.5C14 6.70401 13.9169 6.89922 13.7698 7.04062L8.26983 12.2906C7.97125 12.5777 7.49647 12.5684 7.20937 12.2698C6.92228 11.9713 6.93159 11.4965 7.23017 11.2094L11.3879 7.25L0.75 7.25C0.335786 7.25 -2.44163e-07 6.91421 -2.62268e-07 6.5Z" fill="white" />
                            </svg>
                           </span>
                        </a>`
  let closeBtn = document.createElement("div");
  closeBtn.classList = "close-btn";
  closeBtn.innerHTML = `<i class="fa-solid fa-x c-white"></i>`;
  specOffer.append(closeBtn);
  if (sessionStorage.getItem("special offer")) {
    specOffer.classList.add("spec-offer-hide");
    let header = document.querySelector(".main-header");
    header.classList.add("closed-offer-padding");
  }

  let specOfferFullScreen = document.createElement("div");
  specOfferFullScreen.classList = "spec-offer-full-screen d-flex align-center just-center spec-offer-full-screen-hide";
  let text = document.createElement("div");
  text.classList = "spec-offer-full-screen-text";
  text.textContent = "U closed my offer, so I will   blow your mind every 15sec";
  let offerCloseBtn = document.createElement("div");
  offerCloseBtn.textContent = "x"
  offerCloseBtn.classList = "spec-offer-full-screen-btn";
  offerCloseBtn.addEventListener("click", () => {
    specOfferFullScreen.classList.toggle("spec-offer-full-screen-hide");
  })
  specOfferFullScreen.append(text, offerCloseBtn);
  body.append(specOffer);
  body.append(specOfferFullScreen);

  let sessionCheckOut = function () {
    let value = sessionStorage.getItem("special offer");
    if (value) {
      setTimeout(() => {
        if (value === "false" && specOfferFullScreen.classList.contains("spec-offer-full-screen-hide")) {
          specOfferFullScreen.classList.toggle("spec-offer-full-screen-hide");
        }
        sessionCheckOut()
      }, 15000)
    }
  }

  sessionCheckOut()

  closeBtn.addEventListener("click", () => {
    specOffer.classList.add("spec-offer-hide");
    let header = document.querySelector(".main-header");
    header.classList.add("closed-offer-padding");
    sessionStorage.setItem("special offer", false);
    sessionCheckOut()
  })
}

function createMainFooter() {

}


async function buildMainPage() {
  const url = 'https://artemiygryshko.github.io/final_hw/json/header-data.json'
  let data = {};
  await axios.get(url)
    .then((response) => {
      data = response.data
      console.log(data)
    })

    .catch((error) => console.log(error))


  createMainHeader();
  feelMainHeader(data);
  createMainOffer(data);
}


buildMainPage();







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
  spaceBetween: 0,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
    },

    820: {
      slidesPerView: 5,
    },

    980: {
      slidesPerView: 6,
    },

    1280: {
      slidesPerView: 7,
      loop: false,
    },
  },

  slideActiveClass: 'swiper-slide-active',
},

);


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

// function showTarget(e) {
//     console.log(e.target)
//     let number = parseInt(e.target.id)
//     console.log(number)
// }

// document.onclick = showTarget;