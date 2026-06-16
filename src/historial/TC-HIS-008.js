const generarHistorial = (tieneRegistros) => {

    if (!tieneRegistros) {
        return {
            exito: false
        };
    }

    return {
        exito: true
    };

};

module.exports = {
    generarHistorial
};