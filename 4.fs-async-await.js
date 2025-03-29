const {readFile} = require ('node:fs/promises')

//IIFE 
;(
    async()=> {
        console.log ('Leyendo el primer archivo...')
        const text =  await readFile ('./archivo.txt', 'utf-8')
        console.log ('primer texto: ', text)
        console.log ('---> Hacer cosas mientras lee el archivo')


        console.log ('Leyendo el segundo archivo...')
        const secondtext = await readFile ('./archivo2.txt', 'utf-8')
        console.log ('segundo texto: ', secondtext)
    
    }
)()

