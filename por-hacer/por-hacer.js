const fs = require('fs');

const listXhacer = [];

const crear = (description) => {

    let porHacer = {
        description,
        completado: false
    };

    listXhacer.push(porHacer);

    return porHacer;
}

const upsert = (tarea) => {
    let listXhacer = [];


}

module.exports = {
    crear
}