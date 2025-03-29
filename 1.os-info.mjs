const os = require ('node:os')

console.log ('informaciona del sistema opertivo: ')
console.log('___________________')

console.log ('Nombre del sistema operativo: ', os.platform())
console.log('Version del sistema operativo: ', os.release())
console.log('Aquitectura del sistema operativo: ', os.arch())
console.log('CPUs: ' ,os.cpus(), ) //vamos a poder escaler procesos en Node
console.log('Memoria Libre: ', os.freemem() / 1024 / 1024)
console.log('Memoria Total: ', os.totalmem() / 1024 / 1024 )
console.log('uptime:', os.uptime() /60 /60)