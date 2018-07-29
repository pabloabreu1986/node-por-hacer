
const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crear, listar, actualizar, eliminar} = require('./por-hacer/por-hacer');



switch (argv._[0]) {
    case 'crear':
        console.log(`Creando Tarea...`.green);
        let tarea = crear(argv.description);
        console.log(`Tarea creada con éxito: `.green, tarea.description);
        console.log('Estado: '.white + 'No completada'.red);
        break;
    case 'eliminar':
        let t = eliminar(argv.description);
        if (t) {
            console.log(`Tarea Eliminada:`.magenta, argv.description);            
        } else {
            console.log(`La tarea: ${argv.description.red} no existe`);            
        }
        break;
    case 'actualizar':
        let act = actualizar(argv.description, argv.completado);
        if (act) {
            console.log(`Tarea Actualizada:`.magenta, argv.description);            
        } else {
            console.log(`La tarea: ${argv.description.red} no existe`);            
        }
        break;
    case 'listar':
        console.log(`Listar TODOs...`.blue);
        let lista = listar();
        console.log('=============Por Hacer=============='.green);

        for (const item of lista) {
            console.log(`      *  Tarea: ${item.description}`);
            console.log(`      *  Estado: ${(item.completado)?'Completado'.green:'Por hacer'.red}`);
        }

        console.log('===================================='.green);
        
        break;
    default:
    console.log(`Comando no reconocido..!!`.red);
        break;
}