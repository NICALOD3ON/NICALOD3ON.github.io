const myHeading = document.querySelectorAll("p");
console.log(myHeading);
// console.log(myHeading.textContent.Context);
// myHeading.textContent = "new paragraph";
// myHeading.style.backgroundColor = "pink";

// for (let i = 0; i<3; i++);
// {
//     myHeading[i].textContent = "new" + i;
//     myHeading[i].style.backgroundColor = "pink";
// }

// myHeading.forEach(changeMe);
// function changeMe(item){
//     // item.style.backgroundColor = "pink";
//     item.classList.add("pink-box")
// }

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", chooseTopic);

function toggleMe()
{
    const myImage = document.querySelector("#my-image");
    console.log(myImage.dataset.catname);
    myImage.classList.toggle("round");
    myButton.textContent = myImage.dataset.catname;
}

function chooseTopic() {
    const myPara = document.querySelectorAll("p");
    console.log(myPara);
    myPara.forEach(displayTopic);
     function displayTopic(item){
         if(item.dataset.topic === "game"){
            item.classList.add("pink-box");
    } else if (item.dataset.topic === "sound"){
        item.classList.add("coral-box");
    } else if (item.dataset.topic === "web"){
        item.classList.add("green-box");
    }
{
    
}
}
}

const myTitle = document.querySelector("h1");
myTitle.textContent = "I am a new Heading";
let course = "OART1013";
const myImage = document.querySelector("#my-image")
myTitle.innerHTML = `I am a <span class="pink-box">new ${myImage.dataset.catname} </span>`;

myImage.addEventListener("mouseover", makeItRound);
myImage.addEventListener("mouseout", makeItSquare);

function makeItRound(){
    myImage.classList.add("round");
}

function makeItSquare(){
    myImage.classList.remove("round");
}