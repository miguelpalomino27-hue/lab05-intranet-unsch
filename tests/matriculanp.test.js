const { validarCreditos } =
require('../src/matricula/matriculanp');

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

    test('TC-MAT-002 Matricula con 23 creditos invalido', () => {

        // ARRANGE
        const creditos = 23;

        // ACT
        const resultado =
            validarCreditos(creditos);

        // ASSERT
        expect(resultado.exito)
            .toBe(false);

    });

});