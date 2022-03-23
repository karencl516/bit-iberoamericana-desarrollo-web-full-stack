const nombre = 'karen' //string
const apellido = 'cañon'
const edad = 23
const anios = 2;//number


//ejemplo de concatenacion
let resultado = nombre + apellido + 'tiene ' + edad + ' años y dentro de ' + anios + 'años tendra ' + (anios+edad);
console.log(resultado);

/* operadores aritmeticos */

//modulo, resto
const num1 = 10;
const num2 = 3;

resultado = num1 % num2
console.log(resultado)
// console.log(resultado)

const a = '10';
const b = 10;

resultado = a == b;
console.log(resultado);
resultado = a === b
console.log(resultado)

// operadores de incremento

let x = 1
x++
console.log(x);


/*ciclo*/
//console.log('antes de ...')
//while () {console.log('siempre se cumple la condicion')}//

let num = 0

/*while (num < 11 ) {
  console.log(num);
  num ++;
}
console.log('despues de ...')

num = 0

do {
  console.log('se ejecuto');num+;
} while (false)

/* ejemplos */
num = 1
/*while (num < 11) {
  console.log('num, num')
  const resto = num % 2;
  console.log('resto', resto)
  console.log(num + '% 2 = ' + resto)
  num++
}

alert('hello, world');
resultado = confirm('Acepta los termino y condiciones ?')
console.log(resultado);
prompt()