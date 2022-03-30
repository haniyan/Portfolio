const mainContainer = document.querySelector(".main-container");

const parallel = document.createElement("section");
parallel.classList.add("parallel"); //potem dodawać jeszcze który to widok
mainContainer.appendChild(parallel);

const saySomething = document.createElement("h2");
saySomething.classList.add("say-something");
parallel.appendChild(saySomething);
saySomething.style.left = "50%";

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

const imgNine = document.createElement("img");
imgNine.classList.add("back-eight");
imgNine.classList.add("parallel-background");
parallel.appendChild(imgNine);

const currentWindow1 = document.querySelector(".view-one");


const backgroundViews = ["background1.png", "background2.png", "background3.png", "background4.png", "background5.png", "background6.png", "background7.png", "background8.png", "background9.png"];
const imagesCollection = [imgOne, imgTwo, imgThree, imgFour, imgFife, imgSix, imgSeven, imgEight, imgNine]

const me = document.createElement("div");
me.style.cursor = "pointer";




//girl animation

const characterWalk = () => {
    //create main character

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

    setTimeout(() => {
        me.style.transform = "scale(-1,1)";
        me.style.animation = "goToLeft 5s linear alternate";
    }, 5000)
    setTimeout(() => {
        me.style.transform = "scale(1,1)";
        me.style.animation = "goToRight 5s linear alternate";
    }, 10000)
    setTimeout(() => {
        me.style.transform = "scale(-1,1)";
        me.style.animation = "goToLeft 5s linear alternate";
    }, 15000)
    setTimeout(() => {
        me.style.transform = "scale(1,1)";
        me.style.animation = "goToRight 5s linear alternate";
    }, 20000)
    setTimeout(() => {
        me.style.transform = "scale(-1,1)";
        me.style.animation = "goToLeft 5s linear alternate";
    }, 25000)
    setTimeout(() => {
        me.style.transform = "scale(1,1)";
        me.style.animation = "goToRight 5s linear alternate";
    }, 30000)
    setTimeout(() => {
        me.style.transform = "scale(-1,1)";
        me.style.animation = "goToLeft 5s linear alternate";
    }, 35000)
    setTimeout(() => {
        me.style.transform = "scale(1,1)";
        me.style.animation = "goToRight 5s linear alternate";
    }, 40000)
    setTimeout(() => {
        me.style.transform = "scale(-1,1)";
        me.style.animation = "goToLeft 5s linear alternate";
    }, 45000)
    setTimeout(() => {
        me.style.transform = "scale(1,1)";
        me.style.animation = "goToRight 5s linear alternate";
    }, 50000)
    setTimeout(() => {
        me.style.transform = "scale(-1,1)";
        me.style.animation = "goToLeft 5s linear alternate";
    }, 55000)
    setTimeout(() => {
        me.style.transform = "scale(1,1)";
        me.style.animation = "goToRight 5s linear alternate";
    }, 60000)
    setTimeout(() => {
        me.style.transform = "scale(-1,1)";
        me.style.animation = "goToLeft 5s linear alternate";
    }, 65000)
    setTimeout(() => {
        me.style.transform = "scale(1,1)";
        me.style.animation = "goToRight 5s linear alternate";
    }, 70000)
    setTimeout(() => {
        me.style.transform = "scale(-1,1)";
        me.style.animation = "goToLeft 5s linear alternate";
    }, 75000)
    setTimeout(() => {
        me.style.transform = "scale(1,1)";
        me.style.animation = "goToRight 5s linear alternate";
    }, 80000)
    setTimeout(() => {
        me.style.transform = "scale(-1,1)";
        me.style.animation = "goToLeft 5s linear alternate";
    }, 85000)


}

//background function generation

function createBackgroundOne() {
    parallel.classList.add("view-one");
    saySomething.innerHTML = "Cześć! To ja w moim dotychczasowym świecie";
    for (let i = 0; i <= 6; i++) {
        imagesCollection[i].src = `../assets/paralell/1/${backgroundViews[i]}`;
    }



}

const showBackgroundTwo = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Każdego dnia idąc do pracy";
        for (let i = 0; i <=5; i++) {
            imagesCollection[i].src = `../assets/paralell/2/${backgroundViews[i]}`;
        }
        imgSeven.src = "";
    }, 5000)


}

const showBackgroundThree = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Żartuję! Nie było aż tak źle<br> Lubiłam to co robię";
        saySomething.style.left="10%";
        for (let i = 0; i <= 8; i++) {
            imagesCollection[i].src = `../assets/paralell/3/${backgroundViews[i]}`;
        }

    }, 10000)

}

const showBackgroundFour = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Było całkiem kolorowo,<br> jednak czegoś mi brakowało";
        for (let i = 0; i <= 6; i++) {
            imagesCollection[i].src = `../assets/paralell/4/${backgroundViews[i]}`;
        }
        imgEight.src = "";
        imgNine.src = "";

    }, 15000)

}

const showBackgroundFife = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.style.color = "#f52e54";
        saySomething.innerHTML = "spełnienia, miejsca na kreatywność<br>łamania schematów<br>może po prostu czegoś nowego";
        for (let i = 0; i <= 5; i++) {
            imagesCollection[i].src = `../assets/paralell/5/${backgroundViews[i]}`;
        }


    }, 20000)

}

const showBackgroundSix = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "W marzeniach często widziałam inne miejsce<br>...ale droga do niego prowadziła w nieznane";
        saySomething.style.color = "#0f546e";
        for (let i = 0; i < 7; i++) {
            imagesCollection[i].src = `../assets/paralell/6/${backgroundViews[i]}`;
        }

    }, 25000)
}

const showBackgroundSeven = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "W sumie...<br>co mi tam<br>Zacznijmy przygodę!";
        for (let i = 0; i < 9; i++) {
            imagesCollection[i].src = `../assets/paralell/7/${backgroundViews[i]}`;
        }

    }, 30000)
}

const showBackgroundEight = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Tylko w którą stronę się udać?<br>Jak znaleźć dobrą drogę?";
        for (let i = 0; i < 9; i++) {
            imagesCollection[i].src = `../assets/paralell/8/${backgroundViews[i]}`;
        }

    }, 35000)
}

const showBackgroundNine = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Wszystko co nieznane, budzi ekscytację</span><br>Tak było i teraz";
        saySomething.style.color = "#0f546e";
        for (let i = 0; i < 7; i++) {
            imagesCollection[i].src = `../assets/paralell/9/${backgroundViews[i]}`;
        }

    }, 40000)
}

const showBackgroundTen = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Żartuję! Nie było aż tak źle<br> Lubiłam to co robię";
        saySomething.style.color = "#0f546e";
        for (let i = 0; i < 5; i++) {
            imagesCollection[i].src = `../assets/paralell/10/${backgroundViews[i]}`;
        }

    }, 45000)
}

const showBackgroundEleven = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Żartuję! Nie było aż tak źle<br> Lubiłam to co robię";
        saySomething.style.color = "#0f546e";
        for (let i = 0; i < 8; i++) {
            imagesCollection[i].src = `../assets/paralell/11/${backgroundViews[i]}`;
        }

    }, 50000)
}

const showBackgroundTwelve = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Żartuję! Nie było aż tak źle<br> Lubiłam to co robię";
        saySomething.style.color = "#0f546e";
        for (let i = 0; i < 5; i++) {
            imagesCollection[i].src = `../assets/paralell/12/${backgroundViews[i]}`;
        }

    }, 55000)
}

const showBackgroundThirteen = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Żartuję! Nie było aż tak źle<br> Lubiłam to co robię";
        saySomething.style.color = "#0f546e";
        for (let i = 0; i < 5; i++) {
            imagesCollection[i].src = `../assets/paralell/13/${backgroundViews[i]}`;
        }

    }, 60000)
}

const showBackgroundFourteen = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Żartuję! Nie było aż tak źle<br> Lubiłam to co robię";
        for (let i = 0; i < 5; i++) {
            imagesCollection[i].src = `../assets/paralell/14/${backgroundViews[i]}`;
        }

    }, 65000)
}

const showBackgroundFifteen = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Żartuję! Nie było aż tak źle<br> Lubiłam to co robię";
        for (let i = 0; i < 5; i++) {
            imagesCollection[i].src = `../assets/paralell/15/${backgroundViews[i]}`;
        }

    }, 70000)
}

const showBackgroundSixteen = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Żartuję! Nie było aż tak źle<br> Lubiłam to co robię";

        for (let i = 0; i < 6; i++) {
            imagesCollection[i].src = `../assets/paralell/16/${backgroundViews[i]}`;
        }

    }, 75000)
}

const showBackgroundSeventeen = () => {

    setTimeout(() => {
        parallel.classList.add("view-one");
        saySomething.innerHTML = "Żartuję! Nie było aż tak źle<br> Lubiłam to co robię";
        for (let i = 0; i <- 6; i++) {
            imagesCollection[i].src = `../assets/paralell/17/${backgroundViews[i]}`;
        }

    }, 80000)
}


//click counter to move background
let count = 0;
const clickCount = () => {
    count++
    if (count >= 40) {
        count = 0
    }
}



//movement of screens
const screenMoveOne = () => {
    clickCount();
        //położenie napisu zmienic
        saySomething.style.bottom = 80 + count * -0.8 + '%';
    imgTwo.style.left = 26 + count * -0.1 + '%';
    imgTwo.style.bottom = 26 + count * -0.1 + '%';
    imgThree.style.left = 26 + count * -0.5 + '%';
    imgFour.style.left = count * 0.4 + '%';
    imgFife.style.left = count * 0.4 + '%';
}

count = 0;

const screenMoveTwo = () => {
    saySomething.style.bottom = 80 + count * -0.8 + '%';
    // imgTwo.style.bottom = 50 + count * -0.1 + '%';
    // imgFour.style.left = count * 0.4 + '%';
}

const screenMoveThree = () => {
    saySomething.style.bottom = 80 + count * -0.8 + '%';
    imgTwo.style.left = 26 + count * -0.5 + '%';
    imgThree.style.left = 26 + count * -0.5 + '%';
    imgFour.style.left = count * 0.4 + '%';
    imgEight.style.left = count * 0.4 + '%';
}

const screenMoveFour = () => {
    saySomething.style.bottom = 80 + count * -0.8 + '%';
    // imgThree.style.bottom = -100 + count * -0.1 + '%';
    // imgFife.style.left = 26 + count * -0.5 + '%';
    // imgFour.style.left = count * 0.1 + '%';
    imgSeven.style.left = count * 0.1 + '%';
}

const screenMoveFife = () => {
    saySomething.style.bottom = 80 + count * -0.8 + '%';
    imgThree.style.bottom = -100 + count * -0.1 + '%';
    imgFife.style.left = 26 + count * -0.5 + '%';
    imgFour.style.left = count * 0.1 + '%';
    imgSeven.style.left = count * 0.1 + '%';
}

const screenMoveSix = () => {
    saySomething.style.bottom = 80 + count * -0.8 + '%';
    imgThree.style.bottom = -100 + count * -0.1 + '%';
    imgFife.style.left = 26 + count * -0.5 + '%';
    imgFour.style.left = count * 0.4 + '%';
    imgSeven.style.left = count * 0.1 + '%';
}

const screenMoveSeven = () => {
    saySomething.style.bottom = 80 + count * -0.8 + '%';
    imgThree.style.bottom = -100 + count * -0.1 + '%';
    imgFife.style.left = 26 + count * -0.5 + '%';
    imgFour.style.left = count * 0.1 + '%';
    imgSeven.style.left = count * 0.6 + '%';
}

const screenMoveEight = () => {
    saySomething.style.bottom = 80 + count * -0.8 + '%';
    imgThree.style.bottom = -100 + count * -0.1 + '%';
    imgFife.style.left = 26 + count * -0.5 + '%';
    imgFour.style.left = count * 0.1 + '%';
    imgSeven.style.left = count * 0.1 + '%';
}

const screenMoveNine = () => {
    saySomething.style.bottom = 80 + count * -0.8 + '%';
    imgThree.style.bottom = -100 + count * -0.1 + '%';
    imgFife.style.left = 26 + count * -0.5 + '%';
    imgFour.style.left = count * 0.1 + '%';
    imgSeven.style.left = count * 0.1 + '%';
}

const screenMoveTen = () => {
    saySomething.style.bottom = 80 + count * -0.8 + '%';
    imgThree.style.bottom = -100 + count * -0.1 + '%';
    imgFife.style.left = 26 + count * -0.5 + '%';
    imgFour.style.left = count * 0.1 + '%';
    imgSeven.style.left = count * 0.1 + '%';
}

const screenMoveEleven = () => {
    saySomething.style.bottom = 80 + count * -0.8 + '%';
    imgThree.style.bottom = -100 + count * -0.1 + '%';
    imgFife.style.left = 26 + count * -0.5 + '%';
    imgFour.style.left = count * 0.1 + '%';
    imgSeven.style.left = count * 0.1 + '%';
}

const screenMoveTwelve = () => {
    saySomething.style.bottom = 80 + count * -0.8 + '%';
    imgThree.style.bottom = -100 + count * -0.1 + '%';
    imgFife.style.left = 26 + count * -0.5 + '%';
    imgFour.style.left = count * 0.1 + '%';
    imgSeven.style.left = count * 0.1 + '%';
}

const screenMoveThirteen = () => {

    saySomething.style.bottom = 80 + value * -0.08 + '%';
    imgThree.style.bottom = -100 + value * -0.01 + '%';
    imgFife.style.left = 26 + value * -0.05 + '%';
    imgFour.style.left = value * 0.01 + '%';
    imgSeven.style.left = value * 0.01 + '%';
}

const screenMoveFourteen = () => {
    saySomething.style.bottom = 80 + value * -0.08 + '%';
    imgThree.style.bottom = -100 + value * -0.01 + '%';
    imgFife.style.left = 26 + value * -0.05 + '%';
    imgFour.style.left = value * 0.01 + '%';
    imgSeven.style.left = value * 0.01 + '%';
}

const screenMoveFifteen = () => {
    saySomething.style.bottom = 80 + value * -0.08 + '%';
    imgThree.style.bottom = -100 + value * -0.01 + '%';
    imgFife.style.left = 26 + value * -0.05 + '%';
    imgFour.style.left = value * 0.01 + '%';
    imgSeven.style.left = value * 0.01 + '%';
}

const screenMoveSixteen = () => {
    saySomething.style.bottom = 80 + value * -0.08 + '%';
    imgThree.style.bottom = -100 + value * -0.01 + '%';
    imgFife.style.left = 26 + value * -0.05 + '%';
    imgFour.style.left = value * 0.01 + '%';
    imgSeven.style.left = value * 0.01 + '%';
}

const screenMoveSeventeen = () => {
    saySomething.style.bottom = 80 + value * -0.08 + '%';
    imgThree.style.bottom = -100 + value * -0.01 + '%';
    imgFife.style.left = 26 + value * -0.05 + '%';
    imgFour.style.left = value * 0.01 + '%';
    imgSeven.style.left = value * 0.01 + '%';
}


//Screens
createBackgroundOne()
showBackgroundTwo()
showBackgroundThree()
showBackgroundFour()
showBackgroundFife()
showBackgroundSix()
showBackgroundSeven()
showBackgroundEight()
showBackgroundNine()
showBackgroundTen()
showBackgroundEleven()
showBackgroundTwelve()
showBackgroundThirteen()
showBackgroundFourteen()
showBackgroundFifteen()
showBackgroundSixteen()
showBackgroundSeventeen()
characterWalk()


window.addEventListener("keypress", screenMoveOne)

setTimeout(() => {
    window.addEventListener("keypress", screenMoveTwo)
}, 5000)

setTimeout(() => {
    window.addEventListener("keypress", screenMoveThree)
}, 10000)

setTimeout(() => {
    window.addEventListener("keypress", screenMoveFour)
}, 15000)

setTimeout(() => {
    window.addEventListener("keypress", screenMoveFife)
}, 20000)

setTimeout(() => {
    parallel.addEventListener("keypress", screenMoveSix)
}, 25000)

setTimeout(() => {
    parallel.addEventListener("click", screenMoveSeven)
}, 30000)

setTimeout(() => {
    me.addEventListener("click", screenMoveEight)
}, 35000)

setTimeout(() => {
    me.addEventListener("click", screenMoveNine)
}, 40000)

setTimeout(() => {
    me.addEventListener("click", screenMoveTen)
}, 45000)

setTimeout(() => {
    me.addEventListener("click", screenMoveEleven)
}, 50000)

setTimeout(() => {
    me.addEventListener("click", screenMoveTwelve)
}, 55000)

setTimeout(() => {
    me.addEventListener("click", screenMoveThirteen)
}, 60000)

setTimeout(() => {
    window.addEventListener("click", screenMoveFourteen)
}, 65000)

setTimeout(() => {
    me.addEventListener("click", screenMoveFifteen)
}, 70000)

setTimeout(() => {
    me.addEventListener("click", screenMoveSixteen)
}, 75000)

setTimeout(() => {
    me.addEventListener("click", screenMoveSeventeen)
}, 80000)

