const projectOne = document.querySelector(".project-one");
const projectTwo = document.querySelector(".project-two");
const projectThree = document.querySelector(".project-three");
const projectFour = document.querySelector(".project-four");
const projectFife = document.querySelector(".project-fife");
const projectSix = document.querySelector(".project-six");
const projectSeven = document.querySelector(".project-seven");
const projectEight = document.querySelector(".project-eight");
const projectNine = document.querySelector(".project-nine");


const pointerOne = document.querySelector(".pointer-one");
const pointerTwo = document.querySelector(".pointer-two");
const pointerThree = document.querySelector(".pointer-three");
const pointerFour = document.querySelector(".pointer-four");
const pointerFife = document.querySelector(".pointer-fife");
const pointerSix = document.querySelector(".pointer-six");
const pointerSeven = document.querySelector(".pointer-seven");
const pointerEight = document.querySelector(".pointer-eight");
const pointerNine = document.querySelector(".pointer-nine");

const arrowOne = document.querySelector(".arrow-one");
const arrowTwo = document.querySelector(".arrow-two");
const arrowThree = document.querySelector(".arrow-three");
const arrowFour = document.querySelector(".arrow-four");
const arrowFife = document.querySelector(".arrow-fife");
const arrowSix = document.querySelector(".arrow-six");
const arrowSeven = document.querySelector(".arrow-seven");
const arrowEight = document.querySelector(".arrow-eight");
const arrowNine = document.querySelector(".arrow-nine");

const mapView = document.querySelector(".road-two");


projectOne.style.display = "none";
projectTwo.style.display = "none";
projectThree.style.display = "none";
projectFour.style.display = "none";
projectFife.style.display = "none";
projectSix.style.display = "none";
projectSeven.style.display = "none";
projectEight.style.display = "none";
projectNine.style.display = "none";


arrowTwo.style.display = "none";
arrowThree.style.display = "none";
arrowFour.style.display = "none";
arrowFife.style.display = "none";
arrowSix.style.display = "none";
arrowSeven.style.display = "none";
arrowEight.style.display = "none";
arrowNine.style.display = "none";


const showProjectOne = ()=>{
    projectOne.style.display = "flex";

}

const showProjectTwo = ()=>{
    setTimeout(()=>{projectTwo.style.display = "flex"},5000);

    mainCharacter.style.transform= "scale(-1,1)";
    mainCharacter.style.animation = "moveToProjectTwo 4s linear alternate"
    setTimeout(()=>{
        mainCharacter.style.top= "29rem";
        mainCharacter.style.left= "23rem";
        mainCharacter.style.animation = "handPointer 1s infinite linear alternate"}, 4000)
}


const showProjectThree = ()=>{
    projectThree.style.display = "flex";

}

const showProjectFour = ()=>{
    setTimeout(()=>{projectFour.style.display = "flex"},5000);
    mainCharacter.style.transform= "scale(1,1)";
    mainCharacter.style.animation = "moveToProjectFour 4s linear alternate"
    setTimeout(()=>{
        mainCharacter.style.top= "5rem";
        mainCharacter.style.left= "42rem";
        mainCharacter.style.animation = "handPointer 1s infinite linear alternate"}, 4000)
}

const showProjectFife = ()=>{
    setTimeout(()=>{projectFife.style.display = "flex"},14000);

    mainCharacter.style.animation = "moveToProjectFifeTillStopPoint 6s linear alternate"
    setTimeout(()=>{
        mainCharacter.style.top= "44rem";
        mainCharacter.style.left= "14rem";
        mainCharacter.style.transform= "scale(1,1)";
    //dodac div dymek z informacją że nie było drogi na skróty

    }, 4000)

    setTimeout(()=>{
        mainCharacter.style.animation = "moveToProjectFifeFromStopPoint 6s linear alternate"
        mainCharacter.style.top= "35rem";
        mainCharacter.style.left= "56rem";
        setTimeout(()=>{  mainCharacter.style.animation = "handPointer 1s infinite linear alternate"},6000)
    },8000)


}

const showProjectSix = ()=>{
    projectSix.style.display = "flex";

}

const showProjectSeven = ()=>{

    setTimeout(()=>{ projectSeven.style.display = "flex";},7000);
    mainCharacter.style.animation = "moveToProjectSeven 6s linear alternate"
    setTimeout(()=>{
        mainCharacter.style.top= "5rem";
        mainCharacter.style.left= "82rem";
        mainCharacter.style.animation = "handPointer 1s infinite linear alternate"}, 6000)

}

const showProjectEight = ()=>{
    projectEight.style.display = "flex";

}

const showProjectNine = ()=>{
    projectNine.style.display = "flex";

}


const hideProjectOne = ()=>{
    projectOne.style.display = "none";
    arrowOne.style.display = "none";
    arrowFour.style.display = "inline-block";
    mainCharacter.style.transform= "scale(1,1)";
}

const hideProjectTwo = ()=>{
    projectTwo.style.display = "none";
    arrowTwo.style.display = "none";
    arrowFife.style.display = "inline-block";
}

const hideProjectThree = ()=>{
    projectThree.style.display = "none";
    arrowThree.style.display = "none";
    arrowFour.style.display = "inline-block";
    mapView.style.animation = "boat 4s linear alternate";
}

const hideProjectFour = ()=>{
    projectFour.style.display = "none";
    arrowFour.style.display = "none";
    arrowTwo.style.display = "inline-block";
}

const hideProjectFife = ()=>{
    projectFife.style.display = "none";
    arrowFife.style.display = "none";
    arrowSeven.style.display = "inline-block";
}

const hideProjectSix = ()=>{
    projectSix.style.display = "none";
    arrowSix.style.display = "none";
    arrowThree.style.display = "inline-block";

}

const hideProjectSeven = ()=>{
    projectSeven.style.display = "none";
    arrowSeven.style.display = "none";
    arrowEight.style.display = "inline-block";
}

const hideProjectEight = ()=>{
    projectEight.style.display = "none";
    arrowEight.style.display = "none";
    arrowNine.style.display = "inline-block";
}

const hideProjectNine = ()=>{
    projectNine.style.display = "none";
    arrowNine.style.display = "none";
    arrowSix.style.display = "inline-block";
}

const delayProjectOne = ()=>{
    setTimeout(showProjectOne, 100)
}

const delayProjectTwo = ()=>{
    setTimeout(showProjectTwo, 300)
}
const delayProjectThree = ()=>{
    setTimeout(showProjectThree, 300)
}
const delayProjectFour = ()=>{
    setTimeout(showProjectFour, 300)
}
const delayProjectFife = ()=>{
    setTimeout(showProjectFife, 300)
}
const delayProjectSix = ()=>{
    setTimeout(showProjectSix, 300)
}
const delayProjectSeven = ()=>{
    setTimeout(showProjectSeven, 300)
}
const delayProjectEight = ()=>{
    setTimeout(showProjectEight, 300)
}
const delayProjectNine = ()=>{
    setTimeout(showProjectNine, 300)
}


pointerOne.addEventListener("click", delayProjectOne);
projectOne.addEventListener("click", hideProjectOne);

pointerTwo.addEventListener("click", delayProjectTwo);
projectTwo.addEventListener("click", hideProjectTwo);

pointerThree.addEventListener("click", delayProjectThree);
projectThree.addEventListener("click", hideProjectThree);

pointerFour.addEventListener("click", delayProjectFour);
projectFour.addEventListener("click", hideProjectFour);

pointerFife.addEventListener("click", delayProjectFife);
projectFife.addEventListener("click", hideProjectFife);

pointerSix.addEventListener("click", delayProjectSix);
projectSix.addEventListener("click", hideProjectSix);

pointerSeven.addEventListener("click", delayProjectSeven);
projectSeven.addEventListener("click", hideProjectSeven);

pointerEight.addEventListener("click", delayProjectEight);
projectEight.addEventListener("click", hideProjectEight);

pointerNine.addEventListener("click", delayProjectNine);
projectNine.addEventListener("click", hideProjectNine);

