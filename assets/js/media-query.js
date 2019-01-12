const newElement = document.getElementById('nav');

newElement.onclick = function() {
    console.log('clicked');
};

window.onload = function() {
    width = window.innerWidth;
};

window.onload();

if (width <= 600) {
    console.log('man thats a small screen');
} else {
    console.log('WHOA WHAT A BIG SCREEN')
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}