const os = require('node:os');
console.log(`Sistema operativo ${os.platform()}`);
console.log(`Memoria Total ${os.totalmem()}`);