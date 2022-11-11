let AQSH = 11000.34;
let EURO = 12354.03;
let bilet = AQSH * 500;
let mehmonxona = AQSH * 250;
let muzey = EURO * 120;
let jami = bilet + mehmonxona + muzey;
alert ("Assalomu alaykum saytimizga xush kelibsiz!!!");
console.log("Assalomu alaykum saytimizga xush kelibsiz!!!");
let results = prompt ("Summangizni kiriting: ")
if (results >= jami){
  alert ("Oq yo’l, Alisher!");
  console.log("Oq yo’l, Alisher!");
}
else {
  alert (`Alisher ${jami-results} so'm  pul toplashiz kerak bu summangiz dollarda ${((jami-results)/11000.34).toFixed(1)}AQSH va euroda ${((jami-results )/12354.03).toFixed(1)
} EURO bo'ladi`);
  console.log(`Alisher ${jami-results} so'm  pul toplashiz kerak bu summangiz dollarda ${((jami-results)/11000.34).toFixed(1)}AQSH va euroda ${((jami-results )/12354.03).toFixed(1)
} EURO bo'ladi`);
}