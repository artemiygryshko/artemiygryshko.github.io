let body = document.querySelector("body");


function createMainHeader() {
  let header = document.querySelector("header");
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


function createSpecOffer(element) {
  let specOffer = document.createElement("div");
  let header = document.querySelector(".main-header");
  specOffer.classList = "spec-offer d-flex just-center";
  specOffer.innerHTML = `<a href="#" class="bg-filled-main">
                          <span class="c-white">${element.offers.specOffer.title}</span>
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
    header.classList.add("closed-offer-padding");
  }

  let specOfferFullScreen = document.createElement("div");
  specOfferFullScreen.classList = "spec-offer-full-screen d-flex align-center just-center spec-offer-full-screen-hide";
  let text = document.createElement("div");
  text.classList = "spec-offer-full-screen-text d-flex align-center just-center c-white";
  text.textContent = "U closed my offer, so I will   blow your mind every 15sec";
  let offerCloseBtn = document.createElement("div");
  offerCloseBtn.innerHTML = `<div class="menu-btn-close d-flex just-center">
                                    <i class="fa-solid fa-x c-white"></i>
                                  </div>`;
  offerCloseBtn.classList = "spec-offer-full-screen-btn";
  offerCloseBtn.addEventListener("click", () => {
    specOfferFullScreen.classList.toggle("spec-offer-full-screen-hide");
  });

  specOfferFullScreen.append(text, offerCloseBtn);
  body.append(specOffer);
  body.append(specOfferFullScreen);

  let sessionCheckOut = function () {
    let value = sessionStorage.getItem("special offer");
    if (value) {
      if (value === "false") {
        specOffer.classList.add("spec-offer-hide");
        header.classList.add("closed-offer-padding");
      }
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
    sessionStorage.setItem("special offer", false);
    sessionCheckOut()
  })
}

function fillMainHeroSection(element) {
  let mainOffer = element.offers.mainOffer;
  let heroSection = document.querySelector(".hero-section");
  let container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = `<header class="hero-main-header d-flex just-center fw-wr">
                          <div class="hero-main-wrapper d-flex just-center">
                            <div class="hero-main-offer d-flex align-center">
                              <div class="offer-rays"></div>
                              <div class="offer-icon" style = "background: #FFF4E5 center no-repeat url('${mainOffer.icon}')"></div>
                              <div class="offer-text">
                                ${mainOffer.title}
                              </div>
                            </div>
                          </div>
                          <div class="hero-main-wrapper">
                            <div class="hero-main-descr d-flex fl-dir-col just-center align-center">
                            </div>
                          </div>
                          <div class="hero-main-wrapper">
                            <div class="hero-main-btn d-flex just-center">
                            </div>
                          </div>
                        </header>`
  heroSection.append(container);

  let mainDescription = document.querySelector(".hero-main-descr");
  for (let i = 0; i < mainOffer.description.length; i++) {
    let span = document.createElement("span");
    span.textContent = `${mainOffer.description[i]}`;
    mainDescription.append(span);
  }
  let heroMainBtn = document.querySelector(".hero-main-btn");
  for (let i = 0; i < mainOffer.buttons.length; i++) {
    let button = document.createElement("div");
    button.textContent = `${mainOffer.buttons[i]}`;

    if (isEven(i)) {
      button.classList = "c-white bg-filled-main d-flex align-center just-center";
    } else {
      button.classList = "d-flex align-center just-center";
    }

    heroMainBtn.append(button);
  }

  createSponsorSlider(element, container);
  createMediaContainer(element, container);


}

function createSponsorSlider(elem1, elem2) {
  let sponsors = elem1.sponsors;
  let sponsorsDiv = document.createElement("div");
  sponsorsDiv.classList = "sponsors";
  let swiperDiv = document.createElement("div");
  swiperDiv.classList = "swiper";
  let swiperWrapperDiv = document.createElement("div");
  swiperWrapperDiv.classList = "swiper-wrapper";
  let swiperPagination = document.createElement("div");
  swiperPagination.classList = "swiper-pagination";

  for (let i = 0; i < sponsors.length; i++) {
    let swiperSlide = document.createElement("div");
    swiperSlide.classList = "swiper-slide";
    let slideLink = document.createElement('a');
    slideLink.classList = "d-flex align-center just-center";
    slideLink.href = `${sponsors[i].url}`
    let media = document.createElement("img");
    media.src = `${sponsors[i].logo}`;
    media.alt = `${sponsors[i].name}'s logo`;
    slideLink.append(media);
    swiperSlide.append(slideLink);
    swiperWrapperDiv.append(swiperSlide);
  }
  swiperDiv.append(swiperWrapperDiv, swiperPagination);
  sponsorsDiv.append(swiperDiv);
  elem2.append(sponsorsDiv);

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
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
}

function createMediaContainer(elem1, elem2) {
  contentArr = [];
  for (let el of elem1.sections) {
    if (el.courses) {
      let courses = el.courses;
      for (i = 0; i < courses.length; i++) {
        let images = courses[i].images;
        for (j = 0; j < images.length; j++) {
          contentArr.push(images[j])
        }
      }
    }
  }

  let randomNumber = getRandomInt(contentArr);

  let mediaContainer = document.createElement("div");
  mediaContainer.classList = "video-container";
  let image = document.createElement("img");
  image.src = `${contentArr[randomNumber]}`;
  image.alt = `video image`;
  let playBtn = document.createElement("div");
  playBtn.classList = "play-btn";

  mediaContainer.append(image, playBtn);
  elem2.append(mediaContainer);
}

function createMainFooter(element) {
  let footer = document.querySelector('.footer-section');
  let container = document.createElement("div");
  container.classList = 'container';

  let wrapper = document.createElement("div");
  wrapper.classList = "d-flex fw-wr border-b space-bw";

  let logoContacts = document.createElement("div");
  logoContacts.classList = "footer-logo-contacts";

  logoContacts.innerHTML = `<div class="footer-logo logo bg-filled-main">
             <a href="/" title="Home" rel="home" class="d-flex align-center just-center">
               <img src="assets/icons/shape-17.svg" alt="logo image">
             </a>
           </div>
           <div class="contacts">
             <ul class="contacts-list">
               <li class="contacts-list-item list-item-mail d-flex align-center">
                 <a href="mailto:${element.companyInfo.email}">${element.companyInfo.email}</a>
               </li>
               <li class="contacts-list-item list-item-phone d-flex align-center">
                 <a href="tel:${element.companyInfo.phone}">${element.companyInfo.phone}</a>
               </li>
               <li class="contacts-list-item list-item-location d-flex align-center">
                 <address>
                   <a href="${element.companyInfo.location.link}">${element.companyInfo.location.address}</a>
                 </address>
               </li>
             </ul>
           </div>`;

  let footerMenu = document.createElement("div");
  footerMenu.classList = "footer-menu d-flex fw-wr";
  footerMenu.innerHTML = `
            <div class="footer-list-container footer-col-3">
             <ul class="footer-list d-flex fl-dir-col ">
               <li>
                 <a href="#">Home</a>
               </li>
               <li>
                 <a href="#">Benefits</a>
               </li>
               <li>
                 <a href="#">Our Courses</a>
               </li>
               <li>
                 <a href="#">Our Testimonials</a>
               </li>
               <li>
                 <a href="#">Our FAQ</a>
               </li>
             </ul>
            </div>
            <div class="footer-list-container footer-col-3">
             <ul class="footer-list  d-flex fl-dir-col">
               <li>
                 <a href="#">About Us</a>
               </li>
               <li>
                 <a href="#">Company</a>
               </li>
               <li>
                 <a href="#">Achievements</a>
               </li>
               <li>
                 <a href="#">Our Goals</a>
               </li>
             </ul>
           </div>`;

  let socialContainer = document.createElement("div");
  socialContainer.classList = "socials-container d-flex fw-wr footer-list-container footer-col-3";
  socialContainer.innerHTML = `
             <div class="socials-header">
               <a href="#">Social Profiles</a>
             </div>`;
  let socialIcons = document.createElement("div");
  socialIcons.classList = "social-icons d-flex";
  for (i = 0; i < element.companyInfo.socials.length; i++) {
    let socialWrapper = document.createElement("div");
    socialWrapper.classList = "social-logo";
    let socialLink = document.createElement("a");
    socialLink.classList = "d-flex align-center just-center";
    socialLink.href = `${element.companyInfo.socials[i].link}`;
    let img = document.createElement("img");
    img.src = `${element.companyInfo.socials[i].logo}`;
    img.alt = `${element.companyInfo.socials[i].name} icon`;

    socialLink.append(img);
    socialWrapper.append(socialLink);
    socialIcons.append(socialWrapper);
  }
  socialContainer.append(socialIcons);
  footerMenu.append(socialContainer);
  wrapper.append(logoContacts, footerMenu);


  let footerRights = document.createElement("div");
  footerRights.className = "footer-rights";
  let now = new Date().getFullYear();
  footerRights.textContent = `© ${now} Skillbridge. All rights reserved.`;


  container.append(wrapper, footerRights);
  footer.append(container);

}

function findTheSectionObject(elem1, elem2) {
  let objSelected = {};
  elem1.sections.filter((el) => {
    if (el.title === elem2) {
      objSelected = el;
    }
  });
  return objSelected;
}

function createSectionHeader(obj) {

  let container = document.createElement("div");
  container.classList = "container";
  let header = document.createElement("header");
  header.innerHTML = `<div class="header-descr">
            <h2>${obj.title}</h2>
            <p>${obj.description}</p>
          </div>
          <div class="header-view-btn">
            <a href="#" class="d-flex align-center just-center">View All</a>
          </div>`
  container.append(header);
  return container;
}

function createBenefitSubsection(elem1, elem2) {
  let section = document.createElement("section");
  section.classList = `info-section benefits-section`;

  let obj = findTheSectionObject(elem1, "Benefits");
  let container = createSectionHeader(obj);

  let row = document.createElement("div");
  row.classList = "row row-3 d-flex fw-wr just-center";

  for (let i = 0; i < obj.benefits.length; i++) {
    let col = document.createElement("div");
    col.classList = "col col-3-1 col-3-2 col-3-3 benefits-card d-flex";

    col.innerHTML = `
          <div class="line-wrapper d-flex">
            <div class="benefits-card-number">
              0${i + 1}
            </div>
          </div>
          <div class="line-wrapper">
            <div class="benefits-card-info">
              <h3>${obj.benefits[i].benefit}</h3>
              <p>${obj.benefits[i].description}</p>
            </div>
          </div>
          <div class="line-wrapper d-flex">
            <div class="benefits-card-btn">
              <a href="#"></a>
            </div>
          </div>`;

    row.append(col);
  }

  container.append(row);
  section.append(container);
  elem2.append(section);
}


function createCoursesSubsection(elem1, elem2) {
  let section = document.createElement("section");
  section.classList = "info-section courses-section";
  let obj = findTheSectionObject(elem1, "Courses");
  let container = createSectionHeader(obj);

  let row = document.createElement("div");
  row.classList = "row row-2 d-flex fw-wr just-center ";
  for (let i = 0; i < obj.courses.length; i++) {
    let col = document.createElement("div");
    col.classList = "col col-2-1 col-2-2 courses-card d-flex";

    col.innerHTML = `
          <div class="courses-card-img" style = "background-image:url(${obj.courses[i].images[getRandomInt(obj.courses[i].images)]})">
             </div>
             <div class="courses-card-header d-flex fw-wr">
               <div>${obj.courses[i].period} weeks</div>
               <div>${obj.courses[i].level}</div>
               <div>By ${obj.courses[i].speaker} </div>
             </div>
             <div class="courses-card-info">
               <h3>${obj.courses[i].title}</h3>
               <p>${obj.courses[i].shortDescription}</p>
             </div>
             <div class="courses-card-btn">
               <a href="#" class="d-flex align-center just-center">Get it Now</a>
             </div>`

    row.append(col);
  }

  container.append(row);
  section.append(container);
  elem2.append(section);
}

function createTestimonialsSubsection(elem1, elem2) {
  let section = document.createElement("section");
  section.classList = "info-section testimonials-section";
  let obj = findTheSectionObject(elem1, "Our Testimonials");
  console.log(obj)
  let container = createSectionHeader(obj);

  let row = document.createElement("div");
  row.classList = "row row-2 d-flex fw-wr just-center ";

  for (let i = 0; i < obj.testimonials.length; i++) {
    let col = document.createElement("div");
    col.classList = "col col-2-1 col-2-2 courses-card d-flex";

    col.innerHTML = `
        <div class="col col-2-1 col-2-2 story-card d-flex">
          <div class="story-card-text">${obj.testimonials.testimonial}</div>
          <div class="story-card-info d-flex align-center">
            <div class="story-card-author d-flex align-center">
              <div class="author-photo">
                <img src="${obj.testimonials.photo}" alt="Photo of ${obj.testimonials.author}">
              </div>
              <div class="author-name">${obj.testimonials.author}</div>
            </div>
            <div class="story-card-btn">
              <a href="#" class="d-flex align-center just-center">Read Full Story</a>
            </div>
          </div>
        </div>`

    row.append(col);
  }

  // <section class="info-section testimonials-section">
  //   <div class="container">
  //     <header>
  //       <div class="header-descr">
  //         <h2>Our Testimonials</h2>
  //         <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit
  //           dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
  //       </div>
  //       <div class="header-view-btn">
  //         <a href="#" class="d-flex align-center just-center">View All</a>
  //       </div>
  //     </header>

  //     <div class="row row-2 d-flex fw-wr just-center ">

  //       <!-- TAKE FROM BACK_END THIS INFO -->


  //       <div class="col col-2-1 col-2-2 story-card d-flex">
  //         <div class="story-card-text">The web design course provided a solid foundation for me.
  //           The instructors were
  //           knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend
  //           it!</div>
  //         <div class="story-card-info d-flex align-center">
  //           <div class="story-card-author d-flex align-center">
  //             <div class="author-photo">
  //               <img src="assets/images/Sarah_L.png" alt="Sarah L">
  //             </div>
  //             <div class="author-name">Sarah L</div>
  //           </div>
  //           <div class="story-card-btn">
  //             <a href="#" class="d-flex align-center just-center">Read Full Story</a>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col col-2-1 col-2-2 story-card d-flex">
  //         <div class="story-card-text">The UI/UX design course exceeded my expectations. The instructor's expertise
  //           and practical assignments helped me improve my design skills. I feel more confident in my career now.
  //           Thank you!</div>
  //         <div class="story-card-info d-flex align-center">
  //           <div class="story-card-author d-flex align-center">
  //             <div class="author-photo">
  //               <img src="assets/images/Jason_M.png" alt="Jason M">
  //             </div>
  //             <div class="author-name">Jason M</div>
  //           </div>
  //           <div class="story-card-btn">
  //             <a href="#" class="d-flex align-center just-center">Read Full Story</a>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col col-2-1 col-2-2 story-card d-flex">
  //         <div class="story-card-text">The mobile app development course was fantastic! The step-by-step tutorials and
  //           hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!</div>
  //         <div class="story-card-info d-flex align-center">
  //           <div class="story-card-author d-flex align-center">
  //             <div class="author-photo">
  //               <img src="assets/images/Emily_R.png" alt="Emily R">
  //             </div>
  //             <div class="author-name">Emily R</div>
  //           </div>
  //           <div class="story-card-btn">
  //             <a href="#" class="d-flex align-center just-center">Read Full Story</a>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col col-2-1 col-2-2 story-card d-flex">
  //         <div class="story-card-text">I enrolled in the graphic design course as a beginner, and it was the perfect
  //           starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm
  //           grateful for this course!
  //         </div>
  //         <div class="story-card-info d-flex align-center">
  //           <div class="story-card-author d-flex align-center">
  //             <div class="author-photo">
  //               <img src="assets/images/Michael_K.png" alt="Michael K">
  //             </div>
  //             <div class="author-name">Michael K</div>
  //           </div>
  //           <div class="story-card-btn">
  //             <a href="#" class="d-flex align-center just-center">Read Full Story</a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  // </section>

  container.append(row);
  section.append(container);
  elem2.append(section);

}
function fillMainSection(element) {
  let main = document.querySelector("main");


  createBenefitSubsection(element, main);
  createCoursesSubsection(element, main);
  createTestimonialsSubsection(element, main)
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
  createSpecOffer(data);
  fillMainHeroSection(data);
  createMainFooter(data);
  fillMainSection(data);
}


buildMainPage();













function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n % 2));
}

function getRandomInt(arr) {
  return Math.floor(Math.random() * (arr.length - 1));
}






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