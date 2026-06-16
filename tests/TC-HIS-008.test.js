const {
    generarHistorial
} = require('../src/historial/TC-HIS-008');

describe('TC-HIS-008', () => {

    test('Historial academico sin registros', () => {

        const resultado =
            generarHistorial(false);

        expect(resultado.exito)
            .toBe(false);

    });

});