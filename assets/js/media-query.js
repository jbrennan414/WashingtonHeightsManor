const newElement = document.getElementById('nav');

newElement.onclick = function() {
    console.log('clicked');
};

function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}