let body = document.querySelector("body");
function checkWeather () {

let temp = document.querySelector("#temperature");
let temperature = temp.value;
if(temperature>=10 && temperature<20){
    body.style.backgroundColor = "lightblue"
    console.log("it feels cold today");
} else if (temperature>=20 && temperature<30) {
    console.log("it warm amd sunny");
    body.style.backgroundColor = "orange";
} else if (temperature > 30) {
    console.log("i am burning");
    body.style.backgroundColor = "orange";
} else if (temperature < 10){
    console.log("it is absolutely freezin! (british accent)");
    body.style.backgroundColor = "gray";
}
}