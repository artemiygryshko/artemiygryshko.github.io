
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
    console.log(data)
}

buildMainPage()


function createStructureOfMain(element) {
    let main = document.querySelector("main");
    main.innerHTML = "";
    let container = document.createElement("div");
    container.classList = "container";
    let section = {};
    if (sectionCounter === "login2") {
        section = element.sections[element.sections.length - 1];
        console.log(section)
    }
    else { section = element.sections[element.sections.length - 2] }
    container.innerHTML = `
            <div class="row-2 testimonials-row d-flex fw-wr">
               <div class="col-2-1 col-2-2 login-wrapper">
                    <div class="login-header">
                       <h2>${section.title}</h2>
                       <p>${section.greating}</p>
                    </div>
                    <div>
                        <form action="" method="get" class="form-example">
                            <div class="form-box">
                               <label for="email">Email </label>
                               <input type="email" name="email" id="email" required placeholder = "Enter your Email"/>
                            </div>
                            <div class="form-box">
                                <label for="password">Password </label>
                                <input type="password" name="password" id="password" required placeholder = "Enter your Password"/>
                            </div>
                            <div class="form-question"><a href="#">Forgot password?</a></div>
                            <label class="checkbox d-flex align-center" for="remember">Remember Me
                                <input type="checkbox" id="remember" name="remember" />
                                <span class="custom-checkbox"></span>
                            </label>                          
                            <div class="form-box login-form-btn">
                                <input type="submit" value="Login" class="c-white"/>
                            </div>
                            <div class="login-suggestion d-flex align-center just-center">OR</div>
                            <div class="login-with form-box login-form-btn align-center">
                                <a href="#">Login with Google</a>
                            </div>
                            <div class="no-account d-flex align-center just-center">
                                <span>Don’t have an account?</span>
                                <a href="#">Sign Up</a>
                            </div>
                        </form>
                    </div>
               </div>
               <div class="col-2-1 col-2-2 testimonials-section"></div>
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

    let row = document.querySelector("main .container .testimonials-row").childNodes;
    console.log(row)
    row[3].innerHTML = `<div class="header">
                        <h2>Students Testimonials</h2>
                        <p>${testimonials.description}</p>
                    </div>`

    createTestimonialSlider(testimonials, row[3])


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
    swiperDiv.append(swiperWrapperDiv);

    testimonialsDiv.append(swiperDiv, swiperPrevBtn, swiperNextBtn);
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