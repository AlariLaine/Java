// ylesanne05.js
// Alari Laine
// 29.01.2026

//temperatuur

let temp = -100;

if (temp > 25) {
    console.log("Vaga kuum ilm.");
} else if (temp >= 15) {
    console.log("monus temperatuur.");
} else if (temp < 15) {
    console.log("jahe ilm.");
}

//kasutajanime kontroll

let admin = "admin";

let administraator = (admin === "admin") ? "Tere, administraator!" : "Tere, külaline!";
console.log(administraator);

//pileti kontroll

let tuup = prompt("Kas taispilet voi sooduspilet:");
let vanus = prompt("Kui vana sa oled:");

if (tuup === "taispilet" && vanus < 18) {
    console.log("Sinu pilet on 10 eurot.");
} else if (tuup === "taispilet" && vanus >= 18 && vanus < 65) {
    console.log("Sinu pilet on 20 eurot.");
} else if (tuup === "taispilet" && vanus >= 65) {
    console.log("Sinu pilet on 15 eurot.");
} else if (tuup === "sooduspilet" && vanus < 18) {
    console.log("Sinu pilet on 8 eurot.");
} else if (tuup === "sooduspilet" && vanus >= 65) {
    console.log("Sinu pilet on 8 eurot.");
} else if (tuup === "sooduspilet" && vanus >=18 && vanus < 65) {
    console.log("Sinu pilet on 15 eurot.");
} else {
    console.log("Tekkis viga.");
}