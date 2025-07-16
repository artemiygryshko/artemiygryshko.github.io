
let sectionCounter = sessionStorage.getItem("choosed menu link");


function setCounter(e) {
    if (e.target.className === 'menu-link') {
        if (sectionCounter) {
            sessionStorage.setItem("choosed menu link", e.target.id)
            sectionCounter = e.target.id;
        }
        else {
            sessionStorage.setItem("choosed menu link", e.target.id)
            sectionCounter = e.target.id;
        }
    }
}

function changeCounterSignUp() {
    sectionCounter = "login1";
    sessionStorage.setItem("choosed menu link", "login1")
}




