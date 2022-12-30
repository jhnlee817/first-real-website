var modal = document.querySelector(".popup-video");
var btn = document.querySelector(".video");
var span = document.querySelector(".close");

btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal2 = document.querySelector(".popup-video2");
var btn2= document.querySelector(".video2");
var span2 = document.querySelector(".close2");

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
   modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal3 = document.querySelector(".popup-video3");
var btn3 = document.querySelector(".video3");
var span3 = document.querySelector(".close3");

btn3.onclick = function() {
    modal3.style.display = "block";
}
span3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



