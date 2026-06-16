const { validarCreditos } =
require('../src/matricula/matricula');

describe('Modulo Matricula UNSCH', () => {

    test('TC-MAT-001 Matricula con 22 creditos valido', () => {

        // ARRANGE
        const creditos = 22;

        // ACT
        const resultado =
            validarCreditos(creditos);

        // ASSERT
        expect(resultado.exito)
            .toBe(true);

    });

});