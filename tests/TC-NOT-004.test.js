const {
    consultarNotas
} = require('../src/notas/TC-NOT-004');

describe('TC-NOT-004', () => {

    test('Consulta de notas sin registros', () => {

        const resultado =
            consultarNotas('2025-II');

        expect(resultado.exito)
            .toBe(false);

    });

});