// Selecting size
let size = document.querySelectorAll(".size > span");
let nums = Array.from(size)
let length = size.length;
let count = 0;

for (let i=0; i < length; i++) {
    size[i].onclick = function () {
        let element = size[i];
        count +=1
        

        if (element.classList.contains("active")) {
            element.classList.remove("active");
            nums.push(element);

            for (let j=0; j < nums.length; j++) {
                nums[j].style.pointerEvents = "unset";
            }
        }


        else {
            element.classList.add("active");
            nums.splice(nums.indexOf(element),1);
            console.log(nums);
            
            
            for (let j=0; j < nums.length; j++) {
                nums[j].style.pointerEvents = "none";
            }
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
