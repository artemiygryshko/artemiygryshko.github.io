let courses = [
  {
    title: "Web Design Fundamentals",
    shortDescription: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    images: [
      "../assets/images/wdf_1.png",
      "../assets/images/wdf_2.png",
      "../assets/images/wdf_3.png",
    ],
    link: "#",
    period: 4,
    level: 'beginner',
    speaker: "John Smith",
    topics: [
      { title: 'Introduction to HTML', },
      { title: 'Stylish with CSS', },
      { title: 'Introduction to Responsive Design', },
      { title: 'Design Principles for Web', },
      { title: "Buiding a Basic Website", },
    ]
  },
  {
    title: "UI/UX Design",
    shortDescription: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    fullDescription: 'Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum',
    images: [
      "../assets/images/ui-design_1.png",
      "../assets/images/ui-design_2.png",
      "../assets/images/ui-design_3.png",
    ],
    link: "#",
    period: 6,
    level: 'Intermediate',
    speaker: "Emily Johnson",
    topics: [
      {
        title: 'Introduction to UI/UX Design',
        lessons: [{
          name: 'Understanding UI/UX Design Principles',
          duration: `45 minutes`,
        },
        {
          name: 'Importance of User-Centered Design',
          duration: `1 hour`,
        },
        {
          name: 'The Role of UI/UX Design in Product Development',
          duration: `45 minutes`,
        },
        ],
      },
      {
        title: 'User Research and Personas',
        lessons: [
          {
            name: 'Conducting User Research and Interviews',
            duration: `1 hour`,
          },
          {
            name: 'Analyzing User Needs and Behavior',
            duration: `1 hour`,
          },
          {
            name: 'Creating User Personas and Scenarios',
            duration: `45 minutes`,
          },
        ],
      },
      {
        title: 'Wirefarming and Prototyping',
        lessons: [
          {
            name: 'Introduction to Wireframing Tools and Techniques',
            duration: `1 hour`,
          },
          {
            name: 'Creating Low-Fidelity Wireframes',
            duration: `1 hour`,
          },
          {
            name: 'Prototyping and Interactive Mockups',
            duration: `1 hour`,
          },
        ]
      },
      {
        title: 'Visual Design and Branding',
        lessons: [
          {
            name: 'Color Theory and Typography in UI Design',
            duration: `1 hour`,
          },
          {
            name: 'Visual Hierarchy and Layout Design',
            duration: `1 hour`,
          },
          {
            name: 'Creating a Strong Brand Identity',
            duration: `45 minutes`,
          },
        ]
      },
      {
        title: "Usability Testing and Iteration",
        lessons: [
          {
            name: 'Usability Testing Methods and Techniques',
            duration: `1 hour`,
          },
          {
            name: 'Analyzing Usability Test Results',
            duration: `45 minutes`,
          },
          {
            name: 'Iterating and Improving UX Designs',
            duration: `45 minutes`,
          },
        ]
      }
    ]
  },
  {
    title: "Mobile App Development",
    shortDescription: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    images: [
      "../assets/images/mad_1.png",
      "../assets/images/mad_2.png",
      "../assets/images/mad_3.png",
    ],
    link: "#",
    period: 8,
    level: 'Intermediate',
    speaker: "David Brown",
    topics: [
      { title: 'Introduction to Mobile App Development', },
      { title: 'Fundamentals of Swift Programming (iOS)', },
      { title: 'Fundamentals of Kotlin Programming (Android)', },
      { title: 'Building User Interfaces', },
      { title: 'App Deployment and Testing', },
    ]
  },
  {
    title: "Graphic Design for Beginners",
    shortDescription: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    images: [
      "../assets/images/gdb_1.png",
      "../assets/images/gdb_2.png",
      "../assets/images/gdb_3.png",
    ],
    link: "#",
    period: 10,
    level: 'Beginner',
    speaker: "Sarah Thompson",
    topics: [
      { title: 'Introduction to Graphic Design', },
      { title: 'Typography and Color Theory', },
      { title: 'Layout Design and Composition', },
      { title: 'Image Editing and Manipulation', },
      { title: 'Designing for Print and Digital Medi', },
    ]
  },
  {
    title: "Front-End Web Development",
    shortDescription: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    images: [
      "../assets/images/fewd_1.png",
      "../assets/images/fewd_2.png",
      "../assets/images/fewd_3.png",
    ],
    link: "#",
    period: 10,
    level: 'Intermediate',
    speaker: "Michael Adams",
    topics: [
      { title: 'HTML Fundamentals', },
      { title: 'CSS Styling and Layouts', },
      { title: 'JavaScript Basics', },
      { title: 'Building Responsive Websites', },
      { title: "Introduction to Bootstrap and React", },
    ]
  }
]



showMainHeroSectionInfo();

let menuListLinks = document.querySelectorAll(".menu-link");

// for (let i = 0; i < menuListLinks.length; i++) {
//   menuListLinks[i].addEventListener('click', console.log('hello'));
// }

menuListLinks.forEach(el => {
  el.addEventListener('click', function (e) {
    setCounter(e);
    showMainHeroSectionInfo();
  }
  )
})



// document.onclick = setCounter;


// function showTarget(e) {
//   console.log(e.target.className)
//   console.log(sectionCounter)
//   // let number = parseInt(e.target.id)
//   // console.log(number)
// }
// document.onclick = showTarget;




// let mainContainer = document.querySelector("main .container");

// let mainTemplateWrapper = document.getElementById("main-template-wrapper").innerHTML;

// for (let course of courses) {
//   let rendered = Mustache.render(mainTemplateWrapper, course);
//   mainContainer.innerHTML += rendered;
// }

// let skillsLists = document.querySelectorAll(".skills-list");
// console.log(skillsLists);



// for (let i = 0; i < skillsLists.length; i++) {
//   let a = "";
//   for (let j = 0; j < courses[i].skills.length; j++) {
//     let listItem = `<li class="skills-list-item">
//       <div class="skills-number">${j + 1}</div>
//       <p>${courses[i].skills[j]}</p>
//     </li>`;
//     a += listItem;
//   }
//   skillsLists[i].innerHTML = a;
// }


let coursesIteration = 0;
let counter = 2;
let courseCounter = 0;

let coursesContainer = document.querySelector("main .container");

function changeCoursesCounter(e) {
  courseCounter = parseInt(e.target.id) - 1;
}



let showMoreBtn = document.createElement("div");
showMoreBtn.classList = "d-flex align-center just-center show-more-btn";
showMoreBtn.innerHTML = 'Show More Courses';
coursesContainer.append(showMoreBtn);

showMoreBtn.onclick = () => {
  if (coursesIteration < courses.length) {
    showCourses();
  }
}

function showCourses() {
  let i = coursesIteration;
  for (i; i < counter; i++) {
    if (courses[i]) {
      let courseSection = document.createElement("section");
      courseSection.classList = "course-section";
      let sectionHeader = document.createElement("header");
      sectionHeader.classList = "d-flex fw-wr";
      let headerDescription = document.createElement("div");
      headerDescription.classList = "header-descr";
      let title = document.createElement("h2");
      title.textContent = courses[i].title;

      let description = document.createElement("p");
      description.textContent = courses[i].shortDescription;

      let headerBtn = document.createElement("div");
      headerBtn.classList = "header-view-btn d-flex align-center just-center";
      headerBtn.id = `${i + 1}course`;
      headerBtn.textContent = 'View Course';
      headerBtn.onclick = showSingleCourse;

      let photoContainer = document.createElement("div");
      photoContainer.classList = "photo-container d-flex fw-wr";

      for (let j = 0; j < courses[i].images.length; j++) {
        let photoWrapper = document.createElement("div");
        photoWrapper.classList = "photo-wrapper d-flex align-center just-center";
        let image = document.createElement("img");
        image.classList = "img";
        image.setAttribute("src", `${courses[i].images[j]}`);
        image.setAttribute('alt', `Image of ${courses[i].title} #${j + 1}`);
        photoWrapper.append(image);
        photoContainer.append(photoWrapper);
      }

      let speakerInfo = document.createElement("div");
      speakerInfo.classList = "speaker-info d-flex fw-wr align-center";
      let speakerLvl = document.createElement("div");
      speakerLvl.classList = "speaker-level d-flex";
      let period = document.createElement("div");
      period.textContent = `${courses[i].period} months`;
      let level = document.createElement("div");
      level.textContent = courses[i].level;
      let speakerName = document.createElement('div');
      speakerName.classList = "speaker-name";
      speakerName.textContent = courses[i].speaker;

      let curriculum = document.createElement("div");
      curriculum.classList = "curriculum";
      curriculum.innerHTML = `<div class="curriculum-title"> 
                            <h3>Curriculum</h3>    
                            </div>`;

      let curriculumList = document.createElement("ul");
      curriculumList.classList = "topics-list d-flex fw-wr";

      for (let j = 0; j < courses[i].topics.length; j++) {
        let listItem = document.createElement("li");
        listItem.classList = "topics-list-item"
        listItem.innerHTML = `<div class="topics-number">${j + 1}</div>
                            <p>${courses[i].topics[j].title}</p>`;
        curriculumList.append(listItem);
      }

      headerDescription.append(title, description);
      sectionHeader.append(headerDescription, headerBtn);
      speakerLvl.append(period, level);
      speakerInfo.append(speakerLvl, speakerName);
      curriculum.append(curriculumList);

      courseSection.append(sectionHeader, photoContainer, speakerInfo, curriculum);
      showMoreBtn.before(courseSection);
    }

  }

  if (i = counter && courses[i]) {
    counter += 2;
    coursesIteration += 2;
  }
  else {
    counter += 1;
    coursesIteration += 1;
  }
}

showCourses();





function showSingleCourse(e) {
  showCourseHeroSectionInfo(e);
  let singleCourse = courses[parseInt(e.target.id) - 1];
  console.log(singleCourse);
  coursesContainer.innerHTML = "";
  let videoContainer = document.createElement("div");
  videoContainer.classList = 'video-container';
  let img = document.createElement('img');
  img.setAttribute("src", `${singleCourse.images[2]}`);
  let playBtn = document.createElement('div');
  playBtn.classList = "play-btn";

  let rowDiv = document.createElement("div");
  rowDiv.classList = "row row-2 d-flex fw-wr just-center";

  for (let j = 0; j < singleCourse.topics.length; j++) {
    let colDiv = document.createElement("div");
    colDiv.classList = "col col-2-1 col-2-2 benefits-card d-flex";

    let lineWrapper1 = document.createElement("div");
    let lineWrapper2 = document.createElement("div");
    let lineWrapper3 = document.createElement("div");
    lineWrapper1.classList = "line-wrapper d-flex";
    lineWrapper2.classList = "line-wrapper d-flex";
    lineWrapper3.classList = "line-wrapper d-flex";

    let cardNumberWrapper = document.createElement("div");
    cardNumberWrapper.classList = "benefits-card-number";
    cardNumberWrapper.textContent = `${j + 1}`;

    lineWrapper1.append(cardNumberWrapper);


    let cardInfo = document.createElement("div");
    cardInfo.classList = "benefits-card-info";
    let title = document.createElement("h3");
    title.textContent = `${singleCourse.topics[j].title}`;


    cardInfo.append(title);
    lineWrapper2.append(cardInfo);


    let topicsList = document.createElement("ul");

    for (let k = 0; k < singleCourse.topics[j].lessons.length; k++) {
      let listItem = document.createElement("li");
      let lessonTitle = document.createElement("h4");
      lessonTitle.textContent = `${singleCourse.topics[j].lessons[k].name}`

      let lessonNumber = document.createElement("p");
      lessonNumber.textContent = `Lesson 0${k + 1}`

      let lessonBtn = document.createElement("div");
      lessonBtn.textContent = `${singleCourse.topics[j].lessons[k].duration}`

      listItem.append(lessonTitle, lessonNumber, lessonBtn);
      topicsList.append(listItem);
    }

    lineWrapper3.append(topicsList);
    colDiv.append(lineWrapper1, lineWrapper2, lineWrapper3);


    rowDiv.append(colDiv);
  }





  videoContainer.append(img, playBtn);


  // <div class="row row-3 d-flex fw-wr just-center">
  //       <div class="col col-3-1 col-3-2 col-3-3 benefits-card d-flex">
  //         <div class="line-wrapper d-flex">
  //           <div class="benefits-card-number">
  //             01
  //           </div>
  //         </div>
  //         <div class="line-wrapper">
  //           <div class="benefits-card-info">
  //             <h3>Flexible Learning Schedule</h3>
  //             <p>Fit your coursework around your existing commitments and obligations.</p>
  //           </div>
  //         </div>
  //         <div class="line-wrapper d-flex">
  //           <div class="benefits-card-btn">
  //             <a href="#"></a>
  //           </div>
  //         </div>
  //       </div>


  coursesContainer.append(videoContainer, rowDiv);

}


function showCourseHeroSectionInfo(e) {
  changeCoursesCounter(e);
  infoContainer.textContent = '';
  let heroInfo = document.createElement("div");
  heroInfo.classList = "hero-info row-2 d-flex fw-wr space-bw";
  let heroTitle = document.createElement("div");
  heroTitle.classList = "hero-title col-1 col-2-1";
  heroTitle.innerHTML = `<h1>${courses[courseCounter].title}</h1>`;
  let heroText = document.createElement("div");
  heroText.classList = "hero-text col-1 col-2-1";
  if (courses[courseCounter].fullDescription) {
    heroText.innerHTML = `<p>${courses[courseCounter].fullDescription}</p>`;
  }
  else {
    heroText.innerHTML = `<p>${courses[courseCounter].shortDescription}</p>`;
  }

  heroInfo.append(heroTitle, heroText);
  infoContainer.append(heroInfo);
}







// <section class="course-section">
//   <header class="d-flex fw-wr">
//     <div class="header-descr">
//       <h2>{{title}}</h2>
//       <p>{{description}}</p>
//     </div>
//     <div class="header-view-btn">
//       <a href="#" class="d-flex align-center just-center">View Course</a>
//     </div>
//   </header>
//   <div class="photo-container  d-flex fw-wr">

//   </div>
//   <div class="speaker-info d-flex fw-wr align-center">
//     <div class="speaker-level d-flex">
//       <div>{{period}} months</div>
//       <div>{{level}}</div>
//     </div>
//     <div class="speaker-name">{{speaker}}</div>
//   </div>
//   <div class="curriculum">
//     <div class="curriculum-title">
//       <h3>Curriculum</h3>
//     </div>
//     <ul class="skills-list d-flex fw-wr ">
//     </ul>
//   </div>
// </section>







//<div class="video-container">
//   <img src="assets/images/image_1.png" alt="video image">
//   <div class="play-btn">
//   </div>
// </div>
