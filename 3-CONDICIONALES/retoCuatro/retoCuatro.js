var edad = 0;

edad = prompt("Ingrese la edad de su perro en años de humano: ");

if (edad == 1) {
    alert('tiene 15 años')
  } else if (edad == 2) {
    alert("Tiene "+(15+9));
  } else if (edad >= 3) {
      alert("Tiene "+(15+9+(edad*3)));
    
  } else {
    console.log('El numero es invalido')
  }