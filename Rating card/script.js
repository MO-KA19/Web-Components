let btn = document.querySelector("button");
let mainContainer = document.querySelector(".container");
let otherContainer = document.querySelector(".container2");
let rate = document.querySelectorAll("ul > li");
let nums  = Array.from(rate);
let userRate = document.getElementById("user-rate");



for (let i = 0; i < rate.length; i++) {
    rate[i].onclick = function() {
        let value = rate[i].innerHTML;
        let element = rate[i];
        userRate.innerHTML = value;



        if (element.classList.contains("active")) {
            element.classList.remove("active");
            let append = nums.push(element);
            value = 0;

            for (let j=0; j < nums.length; j++) {
                nums[j].style.pointerEvents = "unset";
            }
        }
        

        else {
            element.classList.add("active");
            let removed = nums.splice(nums.indexOf(element),1);
            console.log(nums);
            
            
            for (let j=0; j < nums.length; j++) {
                nums[j].style.pointerEvents = "none";
            }
        }


        if (Number(value) > 0) {
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
            btn.toggleAttribute("disabled");
        }

        else {
            btn.style.opacity = ".5";
            btn.style.cursor = "not-allowed";
            btn.toggleAttribute("disabled");
        }
    }
}



btn.onclick = function () {
    mainContainer.style.display = "none";
    otherContainer.style.display = "block";
}