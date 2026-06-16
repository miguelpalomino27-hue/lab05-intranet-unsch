const {
    generarConstancia
} = require('../src/pagos/TC-PAG-012');

describe('TC-PAG-012', () => {

    test('Moroso no puede generar documentos', () => {

        const resultado =
            generarConstancia(true);

        expect(resultado.exito)
            .toBe(false);

    });

});