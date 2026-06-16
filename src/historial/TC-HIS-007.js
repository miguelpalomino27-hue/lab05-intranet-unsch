const generarHistorial = (tieneRegistros) => {

    if (tieneRegistros) {
        return {
            exito: true
        };
    }

    return {
        exito: false
    };

};

module.exports = {
    generarHistorial
};