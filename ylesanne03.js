// ylesanne03.js
// Alari Laine
// 28.01.2026

//S6idu aeg ja kaugus
let kaugus = 200; //km
let kmh = 55;

let aeg = kaugus / kmh;
console.log("S6idu aeg on u " + Math.round(aeg) + " tundi.");

//Postituse kuvamine

let postitusi = 137;
let postitusilehel = 10;

let lehte = postitusi / postitusilehel;
let viimaneleht = postitusi % postitusilehel;
console.log("Lehti on " + Math.ceil(lehte) + " ja viimasel lehel " + viimaneleht + " postitust.");

//Serveri tookulu

let voimsus = 400; //vatti
let elekterihind = 9.69 //senti kWh

let voolutarb = voimsus / 1000; 
let tookulu = voolutarb * elekterihind;
console.log("Serveri tookulu on " + tookulu.toFixed(2) + " euri tunnis.");