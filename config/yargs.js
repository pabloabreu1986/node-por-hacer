const optsC = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
};

const optsL = {
    all: {
        alias: 'a',
        desc: 'Lista todas las tareas'
    }
};

const optsA = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completed: {
        alias: 'c',
        default: true
    }
};

const argv = require('yargs')
            .command('crear','Crea una tarea por hacer (TODO)...', optsC)
            .command('listar','Imprime la lista de tareas por hacer...', optsL)
            .command('actualizar','Actualiza una tarea por hacer...', optsA)
            .help()
            .argv;

module.exports = {
    argv
}