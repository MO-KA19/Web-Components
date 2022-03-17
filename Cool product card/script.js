// Selecting size
let size = document.querySelectorAll(".size > span");
let length = size.length;
count = 0;


for (let i=0; i < length; i++) {
    size[i].onclick = function () {

        count +=1
        size[i].classList.toggle("disactive");
        size[i].classList.toggle("active");

        if (size[i].classList.contains("disactive")) {
            count -=1
        }
        
            
    }
}






// Add to cart
let btn = document.querySelector('button');
let cart = document.querySelector("#cart");
let quant = document.querySelector("small");


btn.onclick = function () {
    if (count > 0) {
        quant.innerHTML = count;
        cart.style.display = "block";
        quant.style.display = "block"

    }
}