let button = document.querySelector("button");
let result = document.querySelector(".result");
let araujo = document.querySelector(".Araujo");
let gavi = document.querySelector(".Gavi");
let lewa = document.querySelector(".Lewa");
let pedri = document.querySelector(".Pedri");

button.onclick = function() {
    let Answer1 = Number(document.querySelector(".Answer1").value);
    let Answer2 = document.querySelector(".Answer2").value;
    console.log(Answer1);

    if (Answer1 > 0 && Answer1 < 5 && Answer2 === "happy and calm") {
        result.innerHTML = "You are happy and calm and you are Pedri.";
        pedri.style.display = "block";
    } else if (Answer1 > 0 && Answer1 < 5 && Answer2 === "angry and playful") {
        result.innerHTML = " You are angry and playful and you are Araujo.";
        araujo.style.display = "block";
    } else if (Answer1 > 5 && Answer1 < 11 && Answer2 === "angry and playful") {
        result.innerHTML = " You are angry and playful and you are Gavi!.";
        gavi.style.display = "block";
    } else if (Answer1 > 5 && Answer1 < 11 && Answer2 === "happy and calm") {
        result.innerHTML = " You are happy and calm and you are Lewandoski.";
        lewa.style.display = "block";
    }

};