const mainContainer = document.querySelector(".main-container");

const parallel = document.createElement("section");
parallel.classList.add("parallel"); //potem dodawać jeszcze który to widok
mainContainer.appendChild(parallel);

const saySomething = document.createElement("h2");
saySomething.classList.add("say-something");
parallel.appendChild(saySomething);

const imgOne = document.createElement("img");
imgOne.classList.add("back-one");
imgOne.classList.add("parallel-background");
parallel.appendChild(imgOne);

const imgTwo = document.createElement("img");
imgTwo.classList.add("back-two");
imgTwo.classList.add("parallel-background");
parallel.appendChild(imgTwo);

const imgThree = document.createElement("img");
imgThree.classList.add("back-three");
imgThree.classList.add("parallel-background");
parallel.appendChild(imgThree);

const imgFour = document.createElement("img");
imgFour.classList.add("back-four");
imgFour.classList.add("parallel-background");
parallel.appendChild(imgFour);

const imgFife = document.createElement("img");
imgFife.classList.add("back-fife");
imgFife.classList.add("parallel-background");
parallel.appendChild(imgFife);

const imgSix = document.createElement("img");
imgSix.classList.add("back-six");
imgSix.classList.add("parallel-background");
parallel.appendChild(imgSix);

const imgSeven = document.createElement("img");
imgSeven.classList.add("back-seven");
imgSeven.classList.add("parallel-background");
parallel.appendChild(imgSeven);

const imgEight = document.createElement("img");
imgEight.classList.add("back-eight");
imgEight.classList.add("parallel-background");
parallel.appendChild(imgEight);

const currentWindow1 = document.querySelector(".view-one");


const backgroundViews = ["background1.png", "background2.png", "background3.png", "background4.png", "background5.png", "background6.png", "background7.png", "background8.png"];
const imagesCollection = [imgOne, imgTwo, imgThree, imgFour, imgFife, imgSix, imgSeven, imgEight]


//girl animation

const characterWalk=()=>{
    //create main character
    const me = document.createElement("div");
    me.classList.add(".thatsMe");
    parallel.appendChild(me);
    me.style.position = "absolute";
    me.style.bottom = "6rem";
    me.style.left = "5rem";
    me.style.width = "12rem";
    me.style.height = "18rem";
    me.style.backgroundImage = "url('../assets/character/Main_2.png')";
    me.style.backgroundSize = "contain";
    me.style.backgroundPosition = "center";
    me.style.backgroundRepeat = "no-repeat";
    me.style.zIndex = "100";

    me.style.animation = "goToRight 5s linear alternate";

    setTimeout(()=>{
        me.style.transform = "scale(-1,1)";
        me.style.animation = "goToLeft 5s linear alternate";
    },5000)
    setTimeout(()=>{
        me.style.transform = "scale(1,1)";
        me.style.animation = "goToRight 5s linear alternate";
    },10000)
    setTimeout(()=>{
        me.style.transform = "scale(-1,1)";
        me.style.animation = "goToLeft 5s linear alternate";
    },15000)
}





//Screen 1

function createBackgroundOne(){
    parallel.classList.add("view-one");
    saySomething.innerHTML = "Cześć! To ja w moim dotychczasowym świecie";
    for (let i = 0; i <= 6; i++) {
        imagesCollection[i].src = `../assets/paralell/1/${backgroundViews[i]}`;
    }



}


const screenMoveOne = () => {
    let value = window.scrollY;
    if (scrollY <= 950) {
        saySomething.style.bottom = 80 + value * -0.08 + '%';
        imgTwo.style.bottom = 50 + value * -0.01 + '%';
        imgThree.style.left = 26 + value * -0.05 + '%';
        imgFour.style.left = value * 0.04 + '%';
    }
}



createBackgroundOne()

window.addEventListener("scroll",screenMoveOne)



//Screen 2

const showBackgroundTwo=  ()=>{

    setTimeout(() => {
            parallel.classList.add("view-one");
            saySomething.innerHTML = "Każdego dnia idąc do pracy";
            for (let i = 0; i <= 6; i++) {
                imagesCollection[i].src = `../assets/paralell/2/${backgroundViews[i]}`;
            }

    }, 5000)
}



const screenMoveTwo = () => {
    let value = window.scrollY;
    if (scrollY <= 950) {
        saySomething.style.bottom = 80 + value * -0.08 + '%';
        imgTwo.style.bottom = 50 + value * -0.01 + '%';
        imgThree.style.left = 26 + value * -0.05 + '%';
        imgFour.style.left = value * 0.04 + '%';
    }
}



showBackgroundTwo()

setTimeout(() => {window.addEventListener("scroll",screenMoveTwo) }, 5000)

//Screen 3

const showBackgroundThree=  ()=>{

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Żartuję! Nie było aż tak źle<br> Lubiłam to co robię";
        for (let i = 0; i <= 8; i++) {
            imagesCollection[i].src = `../assets/paralell/3/${backgroundViews[i]}`;
        }

    }, 10000)
}



const screenMoveThree = () => {
    let value = window.scrollY;
    if (scrollY <= 950) {
        saySomething.style.bottom = 80 + value * -0.08 + '%';
        imgTwo.style.bottom = 50 + value * -0.01 + '%';
        imgThree.style.left = 26 + value * -0.05 + '%';
        imgFour.style.left = value * 0.04 + '%';
        imgEight.style.left = value * 0.04 + '%';
    }
}



showBackgroundThree()

setTimeout(() => {window.addEventListener("scroll",screenMoveThree)    }, 10000)

//Screen 3

const showBackgroundFour=  ()=>{

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Żartuję! Nie było aż tak źle<br> Lubiłam to co robię";
        saySomething.style.color = "#0f546e";
        for (let i = 0; i <= 7; i++) {
            imagesCollection[i].src = `../assets/paralell/4/${backgroundViews[i]}`;
        }

    }, 10000)
}



const screenMoveFour = () => {
    let value = window.scrollY;
    if (scrollY <= 950) {
        saySomething.style.bottom = 80 + value * -0.08 + '%';
        // imgThree.style.bottom = -100 + value * -0.01 + '%';
        // imgFife.style.left = 26 + value * -0.05 + '%';
        // imgFour.style.left = value * 0.01 + '%';
        imgSeven.style.left = value * 0.01 + '%';
    }
}



showBackgroundFour()

setTimeout(() => {window.addEventListener("scroll",screenMoveFour)    }, 15000)



characterWalk()