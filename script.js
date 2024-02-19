const circleButton = document.querySelector(".circle-button");
let darkModeItems = document.querySelectorAll("body,h2,.circle-button")

circleButton.addEventListener("click",function(){
    darkModeItems.forEach((darkItem) => {
        darkItem.classList.toggle("active");
    }) 
});