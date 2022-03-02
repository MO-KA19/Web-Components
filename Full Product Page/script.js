// Mobile aside
let menu = document.getElementById("burger");
let closed = document.getElementById("close");
let aside = document.querySelector("aside");
let main = document.querySelector("main")

menu.onclick = function () {
    menu.style.display = "none";
    aside.style.transform = "translate(-70px, -160px)"
    aside.style.zIndex = "10"
    main.style.zIndex = "-5"
}


closed.onclick = function () {
    aside.style.transform = "translate(-345px, -160px)"
    menu.style.display = "block";
    aside.style.zIndex = "-10"
    main.style.zIndex = "5"
}





// Images Slider
let activeImg = document.querySelector(".active");
let miniImg = document.querySelectorAll(".thumbs img")
let thumbImge = Array.from (miniImg);
let length = thumbImge.length;

for (let i=0; i < length; i++) {
    thumbImge[i].onclick = function () {
        let miniSrc = thumbImge[i].getAttribute("src")
        activeImg.setAttribute("src",miniSrc)
    }
}





// Product Counter
let plus = document.querySelector(".plus");
let min = document.querySelector(".min");
let num = document.querySelector("#cinp");
let value = num.value

plus.onclick = function () {
    let beInt = Number(value)
    value = beInt
    value +=1
    num.value = value
    
    if (value > 0) {
        min.style.display = "inline"
    }
}


min.onclick = function () {
    let beInt = Number(value)
    value = beInt
    value -=1
    num.value = value

    if (value === 0) {
        min.style.display = "none"
    }
}



// Multiplication function for later
function Multiplication (num1,num2) {
    const res = num1 * num2
    return res
}



// show the cart
let cartIco = document.querySelector(".cart")
let shopCard = document.querySelector(".card");

cartIco.onclick = function () {
    shopCard.style.display = 'block'
}




// Hide the Cart 
let cclosed = document.querySelector("#Cclose")
let cout = document.querySelector(".Cout")
cclosed.onclick = function () {
    shopCard.style.display = "none"
}




// Adding to cart
let addToCart = document.querySelector(".container button");
let nothing = document.querySelector(".card h1");
let prodcutName = document.querySelector(".container h1");
let Cquant = document.querySelector(".Cquant")


let img = document.querySelector(".cardImg");
let calc = document.querySelector("#price")
let ord = document.querySelector("#order")
let total = document.querySelector("#total")


addToCart.onclick = function () {
    img.style.display = "block";
    Cquant.style.display = "flex";
    cout.style.display = "block";
    trashBasket.style.display = "block"

    nothing.innerHTML = prodcutName.innerHTML;
    calc.innerHTML = document.querySelector(".price h2").innerHTML
    ord.innerHTML = num.value

    let price =  calc.innerHTML
    let quantiti =  ord.innerHTML

    let result = Multiplication(price,quantiti)
    total.innerHTML = result+"$"
}




// Delete from cart 
let trashBasket = document.querySelector("#del");
let order = document.querySelector("#order")

trashBasket.onclick = function () {
    let priceDel =  calc.innerHTML
    order.innerHTML -=1;
    
    if (order.innerHTML === "0") {
        trashBasket.style.display = "none"
    }

    let resDel = Multiplication(priceDel,order.innerHTML)
    total.innerHTML = resDel+"$"
}
