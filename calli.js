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
}





// var modal = document.getElementById("video-modal");
// var btn = document.getElementById("modal-button");
// var span = document.getElementsByClassName("modal-close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }