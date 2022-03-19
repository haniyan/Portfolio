const sayHi = document.querySelector(".say-hi");

const currentWindow1 = document.querySelector(".view-one");

const backTwo = document.querySelector(".back-two");
const backThree = document.querySelector(".back-three");
const backFour = document.querySelector(".back-four");



const me = document.createElement("div");
me.classList.add(".thatsMe");
currentWindow1.appendChild(me);

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

const screenMove = () => {
    let value = window.scrollY;

    sayHi.style.bottom = 80 + value * -0.08 + '%';
    backTwo.style.bottom = 50 + value * -0.01 + '%';
    backThree.style.left = 26 + value * -0.05 + '%';
    backFour.style.left = value * 0.04 + '%';


}

me.style.animation = "goToRight 8s linear alternate";

window.addEventListener("scroll", screenMove)