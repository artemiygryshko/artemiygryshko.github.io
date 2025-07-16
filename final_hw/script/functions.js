

//  SCROLL TO TOP BUTTON
function addTopScroll(elem) {

    let div = document.createElement("div");
    div.innerHTML = `<img src="/assets/icons/up-chevron-svgrepo-com.svg" alt="topscroll"></img>`
    div.classList = "top-scroll";

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 1000) {
            div.classList.add("scroll-active");

        } else {
            div.classList.remove("scroll-active")
        }
    })
    div.addEventListener("click", function (event) {
        event.preventDefault();
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.addEventListener("wheel", disableMouseWheelScrolling, { passive: false });
            window.requestAnimationFrame(scrollStep);
        }
    })
    elem.append(div)
}

function scrollStep() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    let newScroll = currentScroll - (currentScroll / 20);

    window.scrollTo(0, 0);

    if (newScroll > 0) {
        window.requestAnimationFrame(scrollStep);
    }
    else {
        window.removeEventListener("wheel", disableMouseWheelScrolling, { passive: false })
    }
}

function disableMouseWheelScrolling(event) {
    event.preventDefault();
}

// END OF SCROLL  TO TOP BUTTON