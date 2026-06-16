const validarCreditos = (creditos) => {

    if (creditos > 22) {
        return {
            exito: false,
            mensaje: 'Exceso de créditos'
        };
    }

    return {
        exito: true,
        mensaje: 'Matrícula válida'
    };

};

module.exports = {
    validarCreditos
};