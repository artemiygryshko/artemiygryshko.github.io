
let courses = [];


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
  showHeroSectionInfoOnSecondaryPages(data);
  createMainFooterOnSecondaryPages(data);


  for (let i = 0; i < data.sections.length; i++) {
    if (data.sections[i].courses) {
      courses = data.sections[i].courses;
    }
  }


  fillMainCourses(data)
}





function fillMainCourses(element) {
  let main = document.querySelector("main");
  main.innerHTML = "";
  let container = document.createElement("div");
  container.classList = "container";

  let showMoreBtn = document.createElement("div");
  showMoreBtn.classList = "d-flex align-center just-center show-more-btn";
  showMoreBtn.innerHTML = 'Show More Courses';
  showMoreBtn.onclick = () => {
    if (coursesIteration < courses.length) {
      showCourses();
    }
  }
  container.append(showMoreBtn)





  main.append(container)

  showCourses(element);
}





buildMainPage();


let coursesIteration = 0;
let counter = 2;
let courseCounter = 0;

// let coursesContainer = document.querySelector("main .container");

function changeCoursesCounter(e) {
  courseCounter = parseInt(e.target.id) - 1;
}


function showCourses(element) {
  let showMoreBtn = document.querySelector(".show-more-btn")
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
        image.setAttribute("src", `../${courses[i].images[j]}`);
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
  coursesContainer.append(videoContainer, rowDiv);

}


// function showCourseHeroSectionInfo(e) {
//   changeCoursesCounter(e);
//   infoContainer.textContent = '';
//   let heroInfo = document.createElement("div");
//   heroInfo.classList = "hero-info row-2 d-flex fw-wr space-bw";
//   let heroTitle = document.createElement("div");
//   heroTitle.classList = "hero-title col-1 col-2-1";
//   heroTitle.innerHTML = `<h1>${courses[courseCounter].title}</h1>`;
//   let heroText = document.createElement("div");
//   heroText.classList = "hero-text col-1 col-2-1";
//   if (courses[courseCounter].fullDescription) {
//     heroText.innerHTML = `<p>${courses[courseCounter].fullDescription}</p>`;
//   }
//   else {
//     heroText.innerHTML = `<p>${courses[courseCounter].shortDescription}</p>`;
//   }

//   heroInfo.append(heroTitle, heroText);
//   infoContainer.append(heroInfo);
// }





