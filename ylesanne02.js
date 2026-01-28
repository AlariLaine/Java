// ylesanne02.js
// Alari Laine
// 27.01.2026

let tund = 2;
let minut = 38;
let sekund = 59;

let aeg = tund+":" +minut+":"+sekund+"pm";
console.log(aeg);

const tsitaat = '"To be, or not to be, that is the question. - William Shakespeare"';


let string=tsitaat;

console.log(string);

const perenimi="Jüri";
const eesnimi="Jurakas";
console.log("Jyri Jurakas nimetähed on: "+ perenimi.charAt(0) + "." + perenimi.charAt(0) + ".");

let nimi="Perenimi,Eesnimi";
console.log(nimi.split(",")[1]);
console.log(nimi.split(",")[0].toUpperCase());
console.log("Perenimi pikkus on " + nimi.split(",")[0].length + " tähte");

let email="annamusi@gmail.com";
console.log(email.replaceAll("gmail", "hotmail"));

let andmerida="1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175"
console.log(andmerida.split(",")[5] + " ja " + andmerida.split("@")[0].split(",")[3]);