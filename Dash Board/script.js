let btn = document.querySelector(".cir");
let body = document.querySelector("body");
let media = document.querySelectorAll(".media");
let boxes = document.querySelectorAll(".box");

let headers = [
    document.querySelector(".titel"),
    document.querySelector(".mode")
];

let col1_h2 = document.querySelectorAll(".col-1 h2");
let col1_h3 = document.querySelectorAll(".col-1 h3");
let enabled = false;

btn.onclick = function () {
    
    if (enabled === false) {
        enabled = true;
    }

    else {
        enabled = false;
    }


    btn.classList.toggle("btn-tog");
    body.classList.toggle("body-dark");
    
    if (enabled === true) {
        btn.style.backgroundColor = "#1D2029";
    }

    else {
        btn.style.backgroundColor = "#ffffff";
    }


    for (let i = 0; i < media.length; i++) {
        media[i].classList.toggle("dark");
    }


    for (let j = 0; j < headers.length; j++) {
        headers[j].classList.toggle("headers-dark");
    }


    for (let k = 0; k < boxes.length; k++) {
        boxes[k].classList.toggle("dark");
    }


    for (let n = 0; n < col1_h2.length; n++) {
        if (enabled === true) {
            col1_h2[n].style.color = "#8D96BD";
        }

        else {
            col1_h2[n].style.color = "#5E6171";
        }
    }


    for (let x = 0; x < col1_h3.length; x++) {
        if (enabled === true) {
            col1_h3[x].style.color = "white";
        }

        else {
            col1_h3[x].style.color = "black";
        }
    }
    
    
}