const {
    generarHistorial
} = require('../src/historial/TC-HIS-007');

describe('TC-HIS-007', () => {

    test('Historial academico disponible', () => {

        const resultado =
            generarHistorial(true);

        expect(resultado.exito)
            .toBe(true);

    });

});