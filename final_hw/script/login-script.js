
async function buildMainPage() {
    const url = 'https://artemiygryshko.github.io/final_hw/json/header-data.json'
    let data = {};
    await axios.get(url)
        .then((response) => {
            data = response.data;
        })

        .catch((error) => console.log(error))


    createMainHeaderOnSeconadryPages();
    feelMainHeader(data);
    createSpecOffer(data);
    createMainFooterOnSecondaryPages(data);




    fillLoginSignUpMain(data);


    checkTheFormFill();

}

buildMainPage()


function createStructureOfMainLogin(element) {
    let main = document.querySelector("main");
    main.innerHTML = "";
    main.innerHTML = `
            <div class="container">
                <div class="row-2 testimonials-row d-flex fw-wr">
                    <div class="col-2-1 col-2-2 login-wrapper"></div>
                    <div class="col-2-1 col-2-2 testimonials-section"></div>
                </div >
            </div>`

    addTopScroll(main);
}

function fillLoginSignUpForm(element) {
    let loginWrapper = document.querySelector(".login-wrapper");
    if (sessionStorage.getItem("selected user") !== "undefined") {
        loginWrapper.textContent = `Hello ${selectedUser.name}`
    }
    else {

        let section = {};
        if (sectionCounter === "login2") {
            section = element.sections[element.sections.length - 1];
            loginWrapper.innerHTML = `
                    <div class="login-header">
                       <h2>${section.title}</h2>
                       <p>${section.greating}</p>
                    </div>
                    <div>
                        <p class = "error-message"></p>
                        <form action="" method="get" class="form-example">
                            
                            <div class="form-box">
                               <label for="email">Email </label>
                               <input type="email" name="email" id="email"  placeholder = "Enter your Email"/>
                            </div>
                            <div class="form-box">
                                <label for="password">Password </label>
                                <input type="password" name="password" id="password"  placeholder = "Enter your Password"/>
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
                            <div class="login-with form-box login-form-btn align-center g-signin2" data-onsuccess="onSignIn">
                            </div>
                            <div class="no-account d-flex align-center just-center">
                                <span>Don’t have an account?</span>
                                <a href="#">Sign Up</a>
                            </div>
                        </form>
                    </div>`


        }
        else {
            section = element.sections[element.sections.length - 2]
            loginWrapper.innerHTML = `
                    <div class="login-header">
                       <h2>${section.title}</h2>
                       <p>${section.greating}</p>

                    </div>
                    <div>
                    <p class = "error-message"></p>
                        <form action="" method="get" class="form-example">
                            <div class="form-box">
                               <label for="name">Full Name </label>
                               <input type="text" name="name" id="name" placeholder = "Enter your Full Name"/>
                            </div>
                            <div class="form-box">
                               <label for="email">Email </label>
                               <input type="email" name="email" id="email" placeholder = "Enter your Email"/>
                            </div>  
                            <div class="form-box">
                                <label for="password">Password </label>
                                <input type="password" name="password" id="password" placeholder = "Enter your Password"/>
                            </div>
                            <div class="form-box">
                                <label for="password-check">Repeat Your Password </label>
                                <input type="password" name="password-check" id="password-check" placeholder = "Repeat your Password"/>
                            </div>
                            <div class="form-question"><a href="#">Forgot password?</a></div>
                            <label class="checkbox" for="remember">I agree with 
                                <a href="#">Terms of Use</a>
                                and
                                <a href="#">Privacy Policy</a>
                                <input type="checkbox" id="remember" name="remember" />
                                <span class="custom-checkbox"></span>
                            </label>                          
                            <div class="form-box login-form-btn">
                                <input type="submit" value="Sign Up" class="c-white"/>
                            </div>
                            <div class="login-suggestion d-flex align-center just-center">OR</div>
                            <div class="login-with form-box login-form-btn align-center g-signin2" data-onsuccess="onSignIn">
                            </div>
                            <div class="no-account d-flex align-center just-center">
                                <span>Don’t have an account?</span>
                                <a href="#">Sign Up</a>
                            </div>
                        </form>
                    </div>`
        }

    }





}
function fillLoginSignUpMain(element) {
    createStructureOfMainLogin(element);
    fillLoginSignUpForm(element)

    let testimonials = {};

    for (let i = 0; i < element.sections.length; i++) {
        if (element.sections[i].title === "Our Testimonials") {
            testimonials = element.sections[i];
        }
    }

    let row = document.querySelector("main .container .testimonials-row").childNodes;
    row[3].innerHTML = `<div class="header">
                        <h2>Students Testimonials</h2>
                        <p>${testimonials.description}</p>
                    </div> `

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
        let swiperSlide = document.createElement("div");
        swiperSlide.classList = "swiper-slide";
        swiperSlide.innerHTML = `
            <div class="testimonial-card-text" > ${testimonials[i].testimonial}</div >
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










function checkTheFormFill() {
    let form = document.querySelector(".form-example");

    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let nameInput = document.getElementById("name");
    let passwordCheckInput = document.getElementById("password-check");
    let errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", (e) => {
        let selectedUser;
        let errors = [];
        if (nameInput) {
            errors = getSignUpFormErrors(emailInput.value, passwordInput.value, passwordCheckInput.value, nameInput.value);

        } else {
            errors = getLoginFormErrors(emailInput.value, passwordInput.value);
            if (errors.length < 1) {
                errors = checkUserEmail(emailInput.value, password.value);
            }
        }

        if (errors.length > 0) {
            e.preventDefault();
            errorMessage.innerHTML = errors.join(`. `)
        }
        else {
            selectedUser = getSelectedUser(emailInput.value, password.value);
            sessionStorage.setItem("selected user", selectedUser.userId);
            setUpUser();

            let loginWrapper = document.querySelector(".login-wrapper");
            loginWrapper.textContent = `Hello ${selectedUser.name}`
        }
    })

    function checkUserEmail(email, password) {
        let errors = [];
        let selectedUser;
        users.forEach((user) => {
            if (user.email == email) {
                selectedUser = user;

            }
        });

        if (selectedUser == undefined) {
            errors.push("No user with this email. Try one more time or <span onclick=\"(()=> {changeCounterSignUp(); buildMainPage()})()\">Sign IN</span>");
            emailInput.classList.add("required");
        } else {
            if (selectedUser.password !== password) {
                errors.push("Password is incorrect");
                passwordInput.classList.add("required")
            }
        }

        return errors
    }

    function getSelectedUser(email, password) {
        let selectedUser;
        users.forEach((user) => {
            if (user.email == email) {
                selectedUser = user;

            }
        })
        return selectedUser
    }

    function getSignUpFormErrors(email, password, passwordCheck, name) {
        let errors = [];

        if (email === "" || email == null) {
            errors.push('Email is required');
            emailInput.classList.add("required")
        }
        if (password === "" || password == null) {
            errors.push('Password is required');
            passwordInput.classList.add("required")
        }
        if (passwordCheck === "" || passwordCheck == null) {
            errors.push('Password repeat is required');
            passwordInput.classList.add("required")
        }
        if (name === "" || name == null) {
            errors.push('Name is required');
            nameInput.classList.add("required")
        }
        if (password.length < 8) {
            errors.push("Password must have at least 8 characters");
            passwordInput.classList.add("required")
        }
        if (password !== passwordCheck) {
            errors.push("Password does not match repeated password");
            passwordInput.classList.add("required");
            passwordCheckInput.classList.add("required");
        }

        return errors
    }


    function getLoginFormErrors(email, password) {
        let errors = [];

        if (email === "" || email == null) {
            errors.push('Email is required');
            emailInput.classList.add("required")
        }
        if (password === "" || password == null) {
            errors.push('Password is required');
            passwordInput.classList.add("required")
        }


        return errors
    }



    const allInput = [emailInput, passwordInput, passwordCheckInput, nameInput].filter(input => input !== null);

    allInput.forEach(input => {
        input.addEventListener("input", () => {
            if (input.classList.contains("required")) {
                input.classList.remove("required");
                errorMessage.innerText = "";
            }
        })
    })
}

