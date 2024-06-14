circles = document.getElementsByClassName

var colorsetup = function() {
    document.getElementById("top").style.background = "rgb(224,224,224)";

    for ( var i=0 ; i<boxes.length , i++)
    {
        boxes[i].style.display = "flex";
        boxes[i].style.backgroundColor = generatecolor();
    }
}

function generatecolor() {

    var a = Math.floor(Math.random())
}