const {
    validarCreditos,
    validarCruceHorario
} = require('../src/matricula/validarCreditos');

describe('TC-MAT-011', () => {

    test('Cruce de horarios invalido', () => {

        // ARRANGE
        const hayCruce = true;

        // ACT
        const resultado =
            validarCruceHorario(hayCruce);

        // ASSERT
        expect(resultado.exito)
            .toBe(false);

    });

});