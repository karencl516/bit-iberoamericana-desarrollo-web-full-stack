/* CALLBACKS */
function saludar(CALLBACKS) {
    console.log('hola');
    CALLBACKS()
}

function despedir(CALLBACKS) {
    console.log('chao')
}

//saludar(despedir)

/*SIMULA PROMESAS */
function simulaPromesa(num) {
 if(true) {
     console.log('si cumple condicion')
 } else {
     console.log('no se cumple la condicion');
 }
}

//simulaPromesa();

/* PROMESA */

const promesa = new Promise(function (resolve, reject)){
   // console.log('inicio trabajo...')
    if (true) {
        resolve('todo salio bien');// then
    } else {
        reject('algo salio mal')// catch
    }
}

promesa.then('success').catch('fail')

/* API
1. Browser API
2. Third API
3. Own API
*/

