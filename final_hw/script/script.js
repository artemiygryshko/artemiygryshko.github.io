let body = document.querySelector("body");

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
          <div class="story-card-text">${obj.testimonials[i].testimonial}</div>
          <div class="story-card-info d-flex align-center">
            <div class="story-card-author d-flex align-center">
              <div class="author-photo">
                <img src="${obj.testimonials[i].photo}" alt="Photo of ${obj.testimonials[i].author}">
              </div>
              <div class="author-name">${obj.testimonials[i].author}</div>
            </div>
            <div class="story-card-btn">
              <a href="#" class="d-flex align-center just-center">Read Full Story</a>
            </div>
          </div>
        `

    row.append(col);
  }

  container.append(row);
  section.append(container);
  elem2.append(section);

}

function createPricingSubsection(elem1, elem2) {
  let section = document.createElement("section");
  section.classList = "info-section pricing-section";
  let obj = findTheSectionObject(elem1, "Pricing");
  console.log(obj);
  let container = createSectionHeader(obj);
  console.log(container.children[0].children[1])
  container.children[0].children[1].classList = "pricing-btn-wrapper d-flex fw-wr";
  container.children[0].children[1].innerHTML = `<div id="month-price-btn" class="pricing-btn d-flex just-center align-center selected">Monthly</div>
            <div id="year-price-btn" class="pricing-btn d-flex just-center align-center">Yearly</div>`;

  let row = document.createElement("div");
  row.classList = "card-wrapper row row-2 d-flex fw-wr just-center";

  for (let i = 0; i < obj.plans.length; i++) {
    let col = document.createElement("div");
    col.classList = "pricing-card col col-2-1 col-2-2";

    let ul = document.createElement("ul");
    for (j = 0; j < obj.plans[i].benefitsAvailable.length; j++) {
      ul.innerHTML += `<li class="d-flex">
               <div class="available-feature"></div><span>${obj.plans[i].benefitsAvailable[j]}</span>
             </li>`
    };
    for (j = 0; j < obj.plans[i].benefitsUnavailable.length; j++) {
      ul.innerHTML += `<li class="d-flex">
               <div class="not-available-feature"></div><span>${obj.plans[i].benefitsUnavailable[j]}</span>
             </li>`
    };
    col.innerHTML = `
      <div class="card-plan-name d-flex align-center just-center">${obj.plans[i].name}</div>
      <div class="card-price">
          <span class="card-price-number">$${obj.plans[i].perMonth}</span>
          <span class="card-price-number card-price-hide">$${obj.plans[i].perYear}</span>
          /<span>month</span><span class="card-price-hide">yearly</span>
      </div>
      <div class="card-features">
         <div class="features-list">
           <div>Available Features</div>
           ${ul.innerHTML}
         </div>
         <div class="card-btn">
           <a href="#" class=" d-flex align-center just-center">Get Started</a>
         </div>
       </div>
     </div>`;

    row.append(col);
  }
  container.append(row);
  section.append(container);
  elem2.append(section);

}

function createFaqSubsection(elem1, elem2) {
  let section = document.createElement("section");
  section.classList = "info-section";
  let obj = findTheSectionObject(elem1, "Frequently Asked Questions");
  let container = createSectionHeader(obj);
  container.classList.add("faq-wrapper", "d-flex", "fw-wr");
  console.log(obj)

  let listWrapper = document.createElement("div");
  listWrapper.classList = "faq-list-wrapper";
  let faqList = document.createElement("ul");
  faqList.classList = "faq-list";
  for (let i = 0; i < 5; i++) {
    let listItem = document.createElement("li");
    listItem.classList = "faq-list-item list-item-closed";
    listItem.innerHTML = `<div class="faq-question d-flex align-center">
                        <div class="faq-question-text">${obj.questions[i].question}</div>
                        <div class="faq-question-icon"></div>
                      </div>
                      <div class="faq-answer">
                        <div class="faq-answer-text">${obj.questions[i].answer}</div>
                        <div class="faq-answer-link">
                          <a href="#" class="d-flex align-center">
                            <div class="answer-link-text">${obj.questions[i].suggestion}</div>
                            <div class="answer-link-icon"></div>
                          </a>
                        </div>
                      </div>`
    faqList.append(listItem);
  }
  container.append(faqList);
  section.append(container);
  elem2.append(section);

  // <section class="info-section">
  //     <div class="container faq-wrapper d-flex fw-wr">
  //       <header>
  //         <div class="header-descr">
  //           <h2>Frequently Asked <br> Questions</h2>
  //           <p>Still you have any quastions? Contact our Team via <a
  //               href="mailto:support@skillbridge.com">support@skillbridge.com</a></p>
  //         </div>
  //         <div class="header-view-btn">
  //           <a href="#" class="d-flex align-center just-center">See All FAQ's</a>
  //         </div>
  //       </header>
  //       <div class="faq-list-wrapper">
  //         <ul class="faq-list">
  //           <li class="faq-list-item list-item-closed">
  //             <div class="faq-question d-flex align-center">
  //               <div class="faq-question-text">Can I enroll in multiple courses at once?</div>
  //               <div class="faq-question-icon"></div>
  //             </div>
  //             <div class="faq-answer">
  //               <div class="faq-answer-text">Absolutely! You can enroll in multiple courses simultaneously and access
  //                 them at your convenience.</div>
  //               <div class="faq-answer-link">
  //                 <a href="#" class="d-flex align-center">
  //                   <div class="answer-link-text">Enrollment Process for Different Courses</div>
  //                   <div class="answer-link-icon"></div>
  //                 </a>
  //               </div>
  //             </div>
  //           </li>
  //           <li class="faq-list-item list-item-closed">
  //             <div class="faq-question d-flex align-center">
  //               <div class="faq-question-text">What kind of support can I expect from instructors?</div>
  //               <div class="faq-question-icon"></div>
  //             </div>
  //             <div class="faq-answer">
  //               <div class="faq-answer-text">Absolutely! You can enroll in multiple courses simultaneously and access
  //                 them at your convenience.</div>
  //               <div class="faq-answer-link">
  //                 <a href="#" class="d-flex align-center">
  //                   <div class="answer-link-text">Enrollment Process for Different Courses</div>
  //                   <div class="answer-link-icon"></div>
  //                 </a>
  //               </div>
  //             </div>
  //           </li>
  //           <li class="faq-list-item list-item-closed">
  //             <div class="faq-question d-flex align-center">
  //               <div class="faq-question-text">Are the courses self-paced or do they have specific start and end dates?
  //               </div>
  //               <div class="faq-question-icon"></div>
  //             </div>
  //             <div class="faq-answer">
  //               <div class="faq-answer-text">Absolutely! You can enroll in multiple courses simultaneously and access
  //                 them at your convenience.</div>
  //               <div class="faq-answer-link">
  //                 <a href="#" class="d-flex align-center">
  //                   <div class="answer-link-text">Enrollment Process for Different Courses</div>
  //                   <div class="answer-link-icon"></div>
  //                 </a>
  //               </div>
  //             </div>
  //           </li>
  //           <li class="faq-list-item list-item-closed">
  //             <div class="faq-question d-flex align-center">
  //               <div class="faq-question-text">Are there any prerequisites for the courses?</div>
  //               <div class="faq-question-icon"></div>
  //             </div>
  //             <div class="faq-answer">
  //               <div class="faq-answer-text">Absolutely! You can enroll in multiple courses simultaneously and access
  //                 them at your convenience.</div>
  //               <div class="faq-answer-link">
  //                 <a href="#" class="d-flex align-center">
  //                   <div class="answer-link-text">Enrollment Process for Different Courses</div>
  //                   <div class="answer-link-icon"></div>
  //                 </a>
  //               </div>
  //             </div>
  //           </li>
  //           <li class="faq-list-item list-item-closed">
  //             <div class="faq-question d-flex align-center">
  //               <div class="faq-question-text">Can I download the course materials for offline access?</div>
  //               <div class="faq-question-icon"></div>
  //             </div>
  //             <div class="faq-answer">
  //               <div class="faq-answer-text">Absolutely! You can enroll in multiple courses simultaneously and access
  //                 them at your convenience.</div>
  //               <div class="faq-answer-link">
  //                 <a href="#" class="d-flex align-center">
  //                   <div class="answer-link-text">Enrollment Process for Different Courses</div>
  //                   <div class="answer-link-icon"></div>
  //                 </a>
  //               </div>
  //             </div>
  //           </li>

  //         </ul>
  //       </div>
  //     </div>
  //   </section>
}

function fillMainSection(element) {
  let main = document.querySelector("main");


  createBenefitSubsection(element, main);
  createCoursesSubsection(element, main);
  createTestimonialsSubsection(element, main);
  createPricingSubsection(element, main);
  createFaqSubsection(element, main)
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



  addListenersOnMainPage()

}


buildMainPage();













function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n % 2));
}

function getRandomInt(arr) {
  return Math.floor(Math.random() * (arr.length - 1));
}



function addListenersOnMainPage() {
  addListenersOnPrices();
}

function addListenersOnPrices() {
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