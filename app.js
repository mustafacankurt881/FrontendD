window.addEventListener('DOMContentLoaded', load);
let personName = prompt('Lütfen Kullanıcı Adınızı Giriniz: ');
let personPassword = prompt('Lütfen Şifrenizi Giriniz: ');

const personCondition = {
    name: "Mustafa",
    password: 1234
}

if (personName == personCondition.name && personPassword == String(personCondition.password)) {
    const loaderScreen = document.querySelector('.loader');
    //Loader
    setTimeout(() => {
        const loaderStyle = {
            display: "none"
        }
        Object.assign(loaderScreen.style, loaderStyle);
    }, 1550);
}
else {
     for (let index = 0; index < 150; index++) {
        window.alert('Giriş Başarısız');
     }
}

function load() {



    setTimeout(() => {
        grettings();
        grettingsHeader();
    }, 1750);

    setTimeout(() => {
        grettingsContainer();
    }, 1950);

    setTimeout(() => {
        grettingsContainerButton();
    }, 1950);



    grettingsContainerİmage();
}
function grettings() {
    const imageCircle = document.querySelector('.img_One');

    const imagestyle = {
        transform: "rotate(0deg)",
        transition: "all 1.5s",
        opacity: "1"
    }
    Object.assign(imageCircle.style, imagestyle);
}

function grettingsContainer() {
    const headContainerTitle = document.querySelector(".title-head");
    const titleheadStyle = {
        transform: "translateX(0px)",
        transition: "all 1.5s"
    }
    Object.assign(headContainerTitle.style, titleheadStyle);

    const descContainerTitle = document.querySelector(".title-desc");
    const titledescStyle = {
        transform: "translateX(0px)",
        transition: "all 1.5s"
    }
    Object.assign(descContainerTitle.style, titledescStyle);
}

function grettingsHeader() {
    const header = document.querySelector('.header');
    const headerStyle = {
        transform: "translateY(0px)",
        transition: "all 2s"
    }
    Object.assign(header.style, headerStyle);
}

function grettingsContainerButton() {
    const btnContainer = document.querySelector(".box-btn");
    const btnStyle = {
        transform: "translateX(0px)",
        transition: "all 1.5s"
    }
    Object.assign(btnContainer.style, btnStyle);
}

function grettingsContainerİmage() {
    const aboutContainerRow = document.getElementById('about-row-id');
    const aboutContainerİmage = document.querySelector('.about_image');

    window.addEventListener('scroll', scrollMove)
    function scrollMove() {
        const rect = aboutContainerRow.getBoundingClientRect();
        if (rect.top < 550) {
            const rowStyle = {
                transform: "translateX(0px)",
                transition: "all 2.5s"
            }
            Object.assign(aboutContainerRow.style, rowStyle);
        }
    }

    window.addEventListener('scroll', scrollMoveOne);
    function scrollMoveOne() {
        const rect = aboutContainerİmage.getBoundingClientRect();
        if (rect.top < 550) {
            const imageStyle = {
                transform: "translateX(0px)",
            }
            Object.assign(aboutContainerİmage.style, imageStyle);
        }
    }
}



