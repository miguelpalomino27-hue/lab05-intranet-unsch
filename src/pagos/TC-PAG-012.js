const generarConstancia = (esMoroso) => {

    if (esMoroso) {
        return {
            exito: false
        };
    }

    return {
        exito: true
    };

};

module.exports = {
    generarConstancia
};