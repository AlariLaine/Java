// ylesanne06.js
// Alari Laine
// 29.01.2026

//Positiivne või negatiivne

let number = prompt("Sisesta number:");

switch (true) {
  case (number > 0):
    console.log("Number on positiivne.");
    break;
  case (number < 0):
    console.log("Number on negatiivne.");
    break;
  case (number == 0):
    console.log("Number on null.");
    break;
  default:
    console.log("See pole arv.");
}


//Restoran

let mituinimest = prompt("Mitu inimest?");

switch (true) {
  case (mituinimest == 1 || mituinimest == 2):
    console.log("Valige laud kahele.");
    break;
  case (mituinimest == 3 || mituinimest == 4):
    console.log("Valige laud neljale.");
    break;
  case (mituinimest == 5 || mituinimest == 6):
    console.log("Valige laud kuuele.");
    break;
  case (mituinimest > 6):
    console.log("Valige suurem laud.");
    break;
    default: 
    console.log("Palun sisesta kehtiv arv.");
}

