const fs = require ('node:fs')

console.log ('Leyendo el primer archivo...')
const text = fs.readFile ('./archivo.txt', 'utf-8', (err, text) => { //ejecutas este callback
    console.log('primer texto: ', text)
})

console.log ('---> Hacer cosas mientras lee el archivo')

console.log ('')
console.log ('Leyendo el segundo archivo...')
const secondtext = fs.readFile ('./archivo2.txt', 'utf-8', (errr, text) => {
    console.log('segundo texto', text)
})

console.log (secondtext)