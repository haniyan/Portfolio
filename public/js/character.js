const mainCharacter = document.createElement("div");
const roadOneMap = document.querySelector(".road-one");

roadOneMap.appendChild(mainCharacter);
mainCharacter.classList.add("main-character");

roadOneMap.style.position = "relative";
mainCharacter.style.position = "absolute";
mainCharacter.style.top= "11rem";
mainCharacter.style.left= "21rem";
mainCharacter.style.width= "10rem";
mainCharacter.style.height= "10rem";
mainCharacter.style.backgroundImage= "url('../assets/character/Main.png')";
mainCharacter.style.backgroundSize= "contain";
mainCharacter.style.backgroundRepeat= "no-repeat";
mainCharacter.style.transform= "scale(-1,1)";




// const positionOne = {
//     width: "12rem",
//     height: "12rem",
// }


//base pose
mainCharacter.style.animation = "basePose 1s infinite linear alternate";






const handleProjectClick  =()=>{

    mainCharacter.style.left= "24rem";
    // mainCharacter.style.backgroundImage= "url('../assets/character/Main_2.png')";
    mainCharacter.style.animation = "handPointer 2s infinite linear alternate";

}

pointerOne.addEventListener("click", handleProjectClick);




