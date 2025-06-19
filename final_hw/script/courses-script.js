let courses = [
  {
    title: "Web Design Fundamentals",
    description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    images: [
      "/assets/images/wdf_1.png",
      "/assets/images/wdf_2.png",
      "/assets/images/wdf_3.png",
    ],
    link: "#",
    period: 4,
    level: 'beginner',
    speaker: "John Smith",
    skills: [
      'Introduction to HTML',
      'Stylish with CSS',
      'Introduction to Responsive Design',
      'Design Principles for Web',
      "Buiding a Basic Website"
    ]
  },
  {
    title: "UI/UX Design",
    description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    images: [
      "/assets/images/ui-design_1.png",
      "/assets/images/ui-design_2.png",
      "/assets/images/ui-design_3.png",
    ],
    link: "#",
    period: 6,
    level: 'Intermediate',
    speaker: "Emily Johnson",
    skills: [
      'Introduction to UI/UX Design',
      'User Research and Personas',
      'Wirefarming and Prototyping',
      'Visual Design and Branding',
      "Usability Testing and Iteration"
    ]
  },
  {
    title: "Mobile App Development",
    description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    images: [
      "/assets/images/mad_1.png",
      "/assets/images/mad_2.png",
      "/assets/images/mad_3.png",
    ],
    link: "#",
    period: 8,
    level: 'Intermediate',
    speaker: "David Brown",
    skills: [
      'Introduction to Mobile App Development',
      'Fundamentals of Swift Programming (iOS)',
      'Fundamentals of Kotlin Programming (Android)',
      'Building User Interfaces',
      "App Deployment and Testing"
    ]
  },
  {
    title: "Graphic Design for Beginners",
    description: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    images: [
      "/assets/images/gdb_1.png",
      "/assets/images/gdb_2.png",
      "/assets/images/gdb_3.png",
    ],
    link: "#",
    period: 10,
    level: 'Beginner',
    speaker: "Sarah Thompson",
    skills: [
      'Introduction to Graphic Design',
      'Typography and Color Theory',
      'Layout Design and Composition',
      'Image Editing and Manipulation',
      "Designing for Print and Digital Media"
    ]
  },
  {
    title: "Front-End Web Development",
    description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    images: [
      "/assets/images/fewd_1.png",
      "/assets/images/fewd_2.png",
      "/assets/images/fewd_3.png",
    ],
    link: "#",
    period: 10,
    level: 'Intermediate',
    speaker: "Michael Adams",
    skills: [
      'HTML Fundamentals',
      'CSS Styling and Layouts',
      'JavaScript Basics',
      'Building Responsive Websites',
      "Introduction to Bootstrap and React"
    ]
  }
]


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
let coursesContainer = document.querySelector("main .container");


function showCourses() {
  let i = coursesIteration;
  for (i; i < counter; i++) {
    if (courses[i]) {
      console.log(`Iteration ${i}`)
      let courseSection = document.createElement("section");
      courseSection.classList = "course-section";
      let sectionHeader = document.createElement("header");
      sectionHeader.classList = "d-flex fw-wr";
      let headerDescription = document.createElement("div");
      headerDescription.classList = "header-descr";
      let title = document.createElement("h2");
      title.textContent = courses[i].title;

      let description = document.createElement("p");
      description.textContent = courses[i].description;

      let headerBtn = document.createElement("div");
      headerBtn.classList = "header-view-btn";
      headerBtn.innerHTML = '<a href="#" class="d-flex align-center just-center">View Course</a>';

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
      curriculumList.classList = "skills-list d-flex fw-wr";

      for (let j = 0; j < courses[i].skills.length; j++) {
        let listItem = document.createElement("li");
        listItem.classList = "skills-list-item"
        listItem.innerHTML = `<div class="skills-number">${j + 1}</div>
                            <p>${courses[i].skills[j]}</p>`;
        curriculumList.append(listItem);
      }

      headerDescription.append(title, description);
      sectionHeader.append(headerDescription, headerBtn);
      speakerLvl.append(period, level);
      speakerInfo.append(speakerLvl, speakerName);
      curriculum.append(curriculumList);

      courseSection.append(sectionHeader, photoContainer, speakerInfo, curriculum);
      coursesContainer.append(courseSection);
    }

  }
  console.log(`Ітерація = ${i - 1}, Ітерація курсов = ${coursesIteration}, Лічильник = ${counter}`)
  if (i = counter && courses[i]) {
    counter += 2;
    coursesIteration += 2;
  }
  else {
    counter += 1;
    coursesIteration += 1;
  }
  console.log(i);
  console.log(`Ітерація = ${i}, Ітерація курсов = ${coursesIteration}, Лічильник = ${counter}`)
}

showCourses()

let showMoreBtn = document.createElement("button");
showMoreBtn.textContent = "SHOW MORE COURSES";
coursesContainer.append(showMoreBtn);

showMoreBtn.onclick = () => {
  console.log(coursesIteration);
  if (coursesIteration < courses.length) {
    showCourses();
  }
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
