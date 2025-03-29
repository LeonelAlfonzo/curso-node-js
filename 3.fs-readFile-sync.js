const fs = require ('node:fs')

console.log ('Leyendo el primer archivo...')
const text = fs.readFileSync ('./archivo.txt', 'utf-8')
console.log ('Primer Texto: ', text)

console.log ('---> Hacer cosas mientras lee el archivo')

console.log ('')
console.log ('Leyendo el segundo archivo...')
const secondtext = fs.readFileSync ('./archivo.txt', 'utf-8')
console.log ('Primer Texto: ', secondtext)