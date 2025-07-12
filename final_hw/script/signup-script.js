
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
}

buildMainPage()



function fillLoginSignUpMain (element) {
    
}