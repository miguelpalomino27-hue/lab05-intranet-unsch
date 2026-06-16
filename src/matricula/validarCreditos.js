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

const validarCruceHorario = (hayCruce) => {

    if (hayCruce) {
        return {
            exito: false,
            mensaje: 'Cruce de horarios'
        };
    }

    return {
        exito: true
    };

};

module.exports = {
    validarCreditos,
    validarCruceHorario
};