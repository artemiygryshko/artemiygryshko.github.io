let users = [
    {
        email: "example@gmail.com",
        password: "example",
        name: "Admin",
        surname: "Main",
        userId: "1"
    }
];

let selectedUser;

function checkForUser() {

    if (sessionStorage.getItem("selected user")) {
        // if (sessionStorage.getItem("selected user") === "undefined") {
        //     let login = document.querySelector("div .login");
        //     login.innerHTML = `
        //                         <div class="login-btn d-flex align-center just-center"></div>
        //                         <div class="login-btn d-flex align-center just-center bg-filled-main c-white"></div>`;
        // }
        if (sessionStorage.getItem("selected user") !== "undefined") {
            users.forEach((user) => {
                if (user.userId == sessionStorage.getItem("selected user")) {
                    selectedUser = user;

                }
            })
        }

    }
}

function setUpUser() {
    checkForUser();
    if (selectedUser) {
        let login = document.querySelector("div .login");
        login.innerHTML = "";
        let logOut = document.createElement('div');
        logOut.textContent = "Log Out"
        logOut.classList = "login-btn d-flex align-center just-center bg-filled-main c-white";
        logOut.addEventListener("click", () => {
            sessionStorage.setItem("selected user", undefined);
            sectionCounter = "login2";
            sessionStorage.setItem("choosed menu link", "login2")
            window.location.href = "login-page.html";
        });
        let userPage = document.createElement('div');
        userPage.textContent = `${selectedUser.name}`;
        userPage.classList = "login-btn d-flex align-center just-center";
        userPage.onclick = () => {
            if (sessionStorage.getItem("choosed menu link") !== "menuItem1") {
                sectionCounter = "login2";
                sessionStorage.setItem("choosed menu link", "login2")
                window.location.href = "login-page.html";

            } else {
                sectionCounter = "login2";
                sessionStorage.setItem("choosed menu link", "login2")
                window.location.href = "pages/login-page.html";

            }           
        }

       

        // login.innerHTML = `<div class="login-btn d-flex align-center just-center">${selectedUser.name}</div>`;
        login.append(userPage, logOut);
    }

}


// if (!sessionStorage.getItem("logged in")) {
//     console.log("no user")
// } else {
//     console.log(users.filter(el => () => {
//         if (el.userId === sessionStorage, getItem("logged in")) {
//             console.log(el)
//         }
//     }))
// }




// function checkForLogin() {
//     if (!sessionStorage.getItem("logged in")) {
//         console.log("no user")
//     } else {
//         console.log(users.filter(el => () => {
//             if (el.userId === sessionStorage, getItem("logged in")) {
//                 console.log(el)
//             }
//         }))
//     }
// }


// function submitLogIn () {

// }


