const {
    consultarNotas
} = require('../src/notas/consultarNotas');

describe('TC-NOT-003', () => {

    test('Consulta de notas 2026-I', () => {

        const resultado =
            consultarNotas('2026-I');

        expect(resultado.exito)
            .toBe(true);

    });

});