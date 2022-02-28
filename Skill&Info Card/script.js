let show = document.querySelector("#arr1");
let closed = document.querySelector("#cross");
let info = document.querySelector (".backface")




show.onclick = function () {
    show.style.display = "none";
    closed.style.display = "block";
    info.style.transform = "translate(0, 0)"
}



closed.onclick = function () {
    show.style.display = "block";
    closed.style.display = "none";
    info.style.transform = "translate(-285px, -290px)"
}