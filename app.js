
const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crear} = require('./por-hacer/por-hacer');



switch (argv._[0]) {
    case 'crear':
        console.log(`Creando Tarea...`.green);
        let tarea = crear(argv.description);
        console.log(`Tarea creada con éxito: `.green, tarea.description);
        console.log('Estado: '.white + 'No completada'.red);
        break;
    case 'actualizar':
        console.log(`Actualizar TODO...`.magenta);
        break;
    case 'listar':
        console.log(`Listar TODOs...`.blue);
        break;

    default:
    console.log(`Comando no reconocido..!!`.red);
        break;
}