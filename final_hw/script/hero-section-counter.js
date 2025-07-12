
let sectionCounter = sessionStorage.getItem("choosed menu link");


function setCounter(e) {
    if (e.target.className === 'menu-link') {
        if (sectionCounter) {
            sectionCounter = e.target.id;
        }
        else { sectionCounter = sessionStorage.setItem("choosed menu link", e.target.id) }
    }
}





