let edad;
let flag = false;

do{
    edad = prompt('Ingrese su Edad');
    console.log(edad)

    edad = parseInt(edad)
    console.log(edad)

    if (isNaN(edad)) {
        alert('Por favor ingrse su edad');
    } else if (edad > 0 || edad > 100) {
        alert('por favor ingresa tu edad');
    } else { flag = true}
    }
} while (!flag)


//const edad = prompt('Ingrese su Edad')
//console.log(typeof edad)

/*function esMayorDeEdad(x) {
   // if(x>=18){
        return true
    } else {
        return false
    }
}

/*const resultado = esMayorDeEdad(edad);
console.log(resultado);