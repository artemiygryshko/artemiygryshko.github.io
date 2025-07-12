
async function buildMainPage() {
    const url = 'https://artemiygryshko.github.io/final_hw/json/header-data.json'
    let data = {};
    await axios.get(url)
        .then((response) => {
            data = response.data;
            console.log(data)
        })

        .catch((error) => console.log(error))


    createMainHeaderOnSeconadryPages();
    feelMainHeader(data);
    createSpecOffer(data);
    createMainFooterOnSecondaryPages(data);




    fillLoginSignUpMain(data);
}

buildMainPage()


function createStructureOfMain(element) {
    let main = document.querySelector("main");
    main.innerHTML = "";
    let container = document.createElement("div");
    container.classList = "container";

    container.innerHTML = `
            <div class="row-2 testimonials-row">
               <div class="col col-2-1 col-2-2"></div>
               <div class="col col-2-1 col-2-2 testimonials-section"></div>
            </div>`




    main.append(container);

}


function fillLoginSignUpMain(element) {
    createStructureOfMain(element);

    let testimonials = {};

    for (let i = 0; i < element.sections.length; i++) {
        if (element.sections[i].title === "Our Testimonials") {
            testimonials = element.sections[i];
        }
    }

    let row = document.querySelector("main .container .row-2").children;

    row[1].innerHTML = `<div class="header">
                        <h2>Students Testimonials</h2>
                        <p>${testimonials.description}</p>
                    </div>`

    createTestimonialSlider(testimonials, row[1])


}


function createTestimonialSlider(elem1, elem2) {
    let testimonials = elem1.testimonials;
    let testimonialsDiv = document.createElement("div");
    testimonialsDiv.classList = "testimonials";
    let swiperDiv = document.createElement("div");
    swiperDiv.classList = "swiper";
    let swiperWrapperDiv = document.createElement("div");
    swiperWrapperDiv.classList = "swiper-wrapper";


    for (let i = 0; i < testimonials.length; i++) {
        console.log(testimonials[i])
        let swiperSlide = document.createElement("div");
        swiperSlide.classList = "swiper-slide";
        swiperSlide.innerHTML = `
        <div class="testimonial-card-text">${testimonials[i].testimonial}</div>
                        <div class="testimonial-card-info d-flex align-center">
                            <div class="testimonial-card-author d-flex align-center">
                                <div class="author-photo">
                                    <img src="../${testimonials[i].photo}"
                                        alt="Photo of ${testimonials[i].author}">
                                </div>
                                <div class="author-name">${testimonials[i].author}</div>
                            </div>
                            <div class="story-card-btn">
                                <a href="#" class="d-flex align-center just-center">Read More</a>
                            </div>
                        </div>`;
        swiperWrapperDiv.append(swiperSlide);
    }

    let swiperPrevBtn = document.createElement("div");
    swiperPrevBtn.classList = "swiper-button-prev";
    let swiperNextBtn = document.createElement("div");
    swiperNextBtn.classList = "swiper-button-next";
    swiperDiv.append(swiperWrapperDiv, swiperPrevBtn, swiperNextBtn);

    testimonialsDiv.append(swiperDiv);
    elem2.append(testimonialsDiv);

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slideActiveClass: 'swiper-slide-active',
    },
    );
}