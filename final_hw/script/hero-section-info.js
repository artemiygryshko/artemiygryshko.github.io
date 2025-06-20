
let sectionsInfo = [
    {
        title: 'Online Courses on Design and Development',
        description: 'Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.',
    },
    {
        title: 'About Skillbridge',
        description: 'Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.',
    },
    {
        title: 'Our Pricings',
        description: `Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro.We believe in providing flexible and affordable pricing options for our services.Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.`,
    },
    {
        title: 'Contact Us',
        description: `Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.`,
    },

]

let sectionCounter = 0;
let infoContainer = document.querySelector(".info-container");

function setCounter(e) {
    if (e.target.className == 'menu-link') {
        sectionCounter = parseInt(e.target.id) - 2;
    }

}

function showMainHeroSectionInfo() {
    infoContainer.textContent = '';
    let heroInfo = document.createElement("div");
    heroInfo.classList = "hero-info row-2 d-flex fw-wr space-bw";
    let heroTitle = document.createElement("div");
    heroTitle.classList = "hero-title col-1 col-2-1";
    heroTitle.innerHTML = `<h1>${sectionsInfo[sectionCounter].title}</h1>`;
    let heroText = document.createElement("div");
    heroText.classList = "hero-text col-1 col-2-1";
    heroText.innerHTML = `<p>${sectionsInfo[sectionCounter].description}</p>`;
    heroInfo.append(heroTitle, heroText);
    infoContainer.append(heroInfo);
}






//   <div class="hero-info row-2 d-flex fw-wr space-bw">
//     <div class="hero-title col-1 col-2-1">
//       <h1>Online Courses on Design and Development</h1>
//     </div>
//     <div class="hero-text col-1 col-2-1">
//       <p>Welcome to our online course page, where you can enhance your skills in
//         design and
//         development. Choose from our carefully curated selection of 10 courses designed to provide you with
//         comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for
//         your
//         learning journey.</p>
//     </div>
//   </div>
// </div>

