//<header class="main-header">
//   <div class="container">
//     <nav>
//       <div class="header-container">
//         <div class="desktop-wrapper d-flex align-center">
//           <div class="logo bg-filled-main">
//             <a href="/" title="Home" rel="home" class="d-flex align-center just-center">
//               <img src="assets/icons/shape-17.svg" alt="logo image">
//             </a>
//           </div>
//           <div class="menu">
//             <ul id="menu-list" class="menu-list d-flex align-center">
//               <li class="menu-item">
//                 <a href="#" class="menu-link" id="1">Home</a>
//               </li>
//               <li class="menu-item">
//                 <a href="pages/courses-page.html" class="menu-link" id="2">Courses</a>
//               </li>
//               <li class="menu-item">
//                 <a href="#" class="menu-link" id="3">About Us</a>
//               </li>
//               <li class="menu-item">
//                 <a href="#" class="menu-link" id="4">Pricing</a>
//               </li>
//               <li class="menu-item">
//                 <a href="#" class="menu-link" id="5">Contact</a>
//               </li>
//             </ul>
//             <div id="menu-btn" class="menu-btn">
//               <div id="menu-btn-burger" class="menu-btn-burger">
//               </div>
//               <div id="menu-btn-close" class="menu-btn-close d-flex just-center menu-btn-hide"> <i
//                   class="fa-solid fa-x c-white"></i>
//               </div>
//             </div>
//           </div>
//           <div class="login d-flex fw-wrap ">
//             <div class="login-btn d-flex align-center just-center">Sign in</div>
//             <div class="login-btn d-flex align-center just-center bg-filled-main c-white">Login</div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   </div>
// </header>


let body = document.querySelector("body");


function createMainHeader() {
  let header = document.createElement("header");
  header.classMane = `main-header`;
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
                                <div class="login-btn d-flex align-center just-center">Sign in</div>
                                <div class="login-btn d-flex align-center just-center bg-filled-main c-white">Login</div>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>`;
  body.prepand(header);
}

function feelMainHeader(element) {
  let menuList = document.querySelector(".menu-list");
  for (let i = 0; i < element.sections.length; i++) {
    let menuItem = document.createElement("li");
    menuItem.classList = "menu-item";
    let menuLink = document.createElement("a");
    a.href = "#";
    a.className = "menu-link";
    a.id = `${i + 1}`;
    a.textContent = element.sections[i].title;
    menuItem.append(menuLink);
    menuList.append(menuItem);
  }
}














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