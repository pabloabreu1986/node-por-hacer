const fs = require('fs');

let listXhacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listXhacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
      });
}

const cargarDB = () => {

    try {
        listXhacer = require('../db/data.json');        
    } catch (error) {
        listXhacer = [];
    }
}

const crear = (description) => {
    cargarDB();

    let porHacer = {
        description,
        completado: false
    };

    listXhacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const listar = ()=>{

    cargarDB();

    return listXhacer;
}

const actualizar = (description, completado = true) => {
    cargarDB();
    let index = listXhacer.findIndex(tarea => tarea.description === description);
    if (index >= 0) {
        listXhacer[index].completado = true;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const eliminar = (description) => {
    cargarDB();    
    let index = listXhacer.findIndex(tarea => tarea.description === description);

    if (index >= 0) {
        listXhacer = listXhacer.filter(tarea => tarea.description !== description);
        guardarDB();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crear,
    listar,
    actualizar,
    eliminar
}