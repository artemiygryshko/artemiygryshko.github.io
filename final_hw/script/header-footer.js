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
    let menuArray = ["Home", "Courses", "About Us", "Pricing", "Contact"]
    let menuList = document.querySelector(".menu-list");
    let counter = 1;
    for (let i = 0; i < element.sections.length; i++) {
        for (let j = 0; j < menuArray.length; j++) {
            if (element.sections[i].title === menuArray[j]) {
                let menuItem = document.createElement("li");
                menuItem.classList = "menu-item";
                let menuLink = document.createElement("a");
                if (!sessionStorage.getItem("choosed menu link") || sessionStorage.getItem("choosed menu link") === "menuItem1") {
                    if (menuArray[j] === "Home") {
                        menuLink.href = `${element.sections[i].link}`;
                    }
                    else { menuLink.href = `pages/${element.sections[i].link}`; }
                }
                else {
                    if (menuArray[j] === "Home") {
                        menuLink.href = `../${element.sections[i].link}`;
                    }
                    else { menuLink.href = `${element.sections[i].link}`; }
                }

                // menuLink.href = "#" 
                menuLink.className = "menu-link";
                menuLink.id = `${element.sections[i].id}`;
                menuLink.textContent = element.sections[i].title;
                menuLink.addEventListener('click', function (e) {
                    setCounter(e);
                })
                menuItem.append(menuLink);
                menuList.append(menuItem);
                counter++
            }
        }

    }

    let loginBtn = document.querySelectorAll(".login-btn");
    let loginCounter = element.sections.length - 2;
    for (let i = 0; i < loginBtn.length; i++) {
        let menuLink = document.createElement("a");
        if (!sessionStorage.getItem("choosed menu link") || sessionStorage.getItem("choosed menu link") === "menuItem1") {
            menuLink.href = `pages/${element.sections[loginCounter].link}`;
        }
        else {
            menuLink.href = `${element.sections[loginCounter].link}`;
        }

        menuLink.className = "menu-link";
        menuLink.id = `login${i+1}`;
        menuLink.textContent = element.sections[loginCounter].title;
        menuLink.addEventListener('click', function (e) {
            setCounter(e);
        })
        counter++;
        loginCounter++;
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
    let body = document.querySelector("body");
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





// secondary pages
function createMainHeaderOnSeconadryPages() {
    let header = document.querySelector("header");
    header.className = `main-header`;
    header.innerHTML = `<div class="container">
                        <nav>
                          <div class="header-container">
                            <div class="desktop-wrapper d-flex align-center">
                              <div class="logo bg-filled-main">
                                <a href="/" title="Home" rel="home" class="d-flex align-center just-center">
                                  <img src="../assets/icons/shape-17.svg" alt="logo image">
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

function createMainFooterOnSecondaryPages(element) {
    let footer = document.querySelector('.footer-section');
    let container = document.createElement("div");
    container.classList = 'container';

    let wrapper = document.createElement("div");
    wrapper.classList = "d-flex fw-wr border-b space-bw";

    let logoContacts = document.createElement("div");
    logoContacts.classList = "footer-logo-contacts";

    logoContacts.innerHTML = `<div class="footer-logo logo bg-filled-main">
             <a href="/" title="Home" rel="home" class="d-flex align-center just-center">
               <img src="../assets/icons/shape-17.svg" alt="logo image">
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
        img.src = `../${element.companyInfo.socials[i].logo}`;
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

function showHeroSectionInfoOnSecondaryPages(element) {
    let infoContainer = document.querySelector(".info-container");
    let obj = [];
    for (i = 0; i < element.sections.length; i++) {
        if (element.sections[i].id === sectionCounter) {
            obj = element.sections[i];
        }
    }
    infoContainer.textContent = '';
    let heroInfo = document.createElement("div");
    heroInfo.classList = "hero-info row-2 d-flex fw-wr space-bw";
    let heroTitle = document.createElement("div");
    heroTitle.classList = "hero-title col-1 col-2-1";
    heroTitle.innerHTML = `<h1>${obj.heroSectionInfo.title}</h1>`;
    let heroText = document.createElement("div");
    heroText.classList = "hero-text col-1 col-2-1";
    heroText.innerHTML = `<p>${obj.heroSectionInfo.description}</p>`;
    heroInfo.append(heroTitle, heroText);
    infoContainer.append(heroInfo);
}