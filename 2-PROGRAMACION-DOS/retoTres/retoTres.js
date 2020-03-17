'use strict';

var tipoDeFruta = "";
var precioDeCadaFruta = 0;
var kilosDeFruta = 0;
var total1 = 0;
var total2 = 0;
var total3 = 0;
var totalFinal = 0;

tipoDeFruta = prompt("Ingrese el tipo de fruta: ");
kilosDeFruta = prompt(parseInt("Ingrese los kilos de fruta: "));
precioDeCadaFruta = prompt(parseInt("Ingrese el valor por kilo: "));

total1 = kilosDeFruta * precioDeCadaFruta;
total2 = kilosDeFruta * precioDeCadaFruta;
total3 = kilosDeFruta * precioDeCadaFruta;

totalFinal = total1 + total2 + total3;
function totalFinal(tipoDeFruta, kilosDeFruta, precioDeCadaFruta) {  

if (tipoDeFruta === kiwis && kilosDeFruta === 2 && precioDeCadaFruta === 5){
     return("el precio final es: +total1");
}else if (tipoDeFruta === perasconferencia && kilosDeFruta === 3 && precioDeCadaFruta === 2){
    return("el precio final es: +total2");
}else if (tipoDeFruta === uvas && kilosDeFruta === 0.5 && precioDeCadaFruta === 4){
    return("el precio final es: +total3");
}else{
    return("los datos ingresados no son correctos");
}
}

console.log("El precio de todo es: " +totalFinal);