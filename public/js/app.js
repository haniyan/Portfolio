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
    projectTwo.style.display = "flex";

}

const showProjectThree = ()=>{
    projectThree.style.display = "flex";

}

const showProjectFour = ()=>{
    projectFour.style.display = "flex";

}

const showProjectFife = ()=>{
    projectFife.style.display = "flex";

}

const showProjectSix = ()=>{
    projectSix.style.display = "flex";

}

const showProjectSeven = ()=>{
    projectSeven.style.display = "flex";

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
    mapView.style.animation = "boat 4s  linear alternate";
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


pointerOne.addEventListener("click", showProjectOne);
projectOne.addEventListener("click", hideProjectOne);

pointerTwo.addEventListener("click", showProjectTwo);
projectTwo.addEventListener("click", hideProjectTwo);

pointerThree.addEventListener("click", showProjectThree);
projectThree.addEventListener("click", hideProjectThree);

pointerFour.addEventListener("click", showProjectFour);
projectFour.addEventListener("click", hideProjectFour);

pointerFife.addEventListener("click", showProjectFife);
projectFife.addEventListener("click", hideProjectFife);

pointerSix.addEventListener("click", showProjectSix);
projectSix.addEventListener("click", hideProjectSix);

pointerSeven.addEventListener("click", showProjectSeven);
projectSeven.addEventListener("click", hideProjectSeven);

pointerEight.addEventListener("click", showProjectEight);
projectEight.addEventListener("click", hideProjectEight);

pointerNine.addEventListener("click", showProjectNine);
projectNine.addEventListener("click", hideProjectNine);

