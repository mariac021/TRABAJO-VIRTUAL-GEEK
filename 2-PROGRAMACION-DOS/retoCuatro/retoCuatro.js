var personas = "";
var totalCuenta = 0;
var TotalAPagar = 0;


personas = prompt("Ingrese su nombre");
totalCuenta = prompt(parseInt("Ingrese el total de la cuenta"));

function TotalAPagar(personas, totalCuenta) {

    if (personas === "Ana" && totalCuenta === 128) {
        TotalAPagar = (totalCuenta/9)+2;
        
    }else if (personas !== "Ana" && totalCuenta === 128){
        TotalAPagar = totalCuenta/9;
    }else{
        return("Ingresó datos incorrectos")
    }
    
}
console.log(personas+" "+"debes pagar"+" "+TotalAPagar);