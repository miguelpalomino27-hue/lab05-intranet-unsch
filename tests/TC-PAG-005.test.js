const {
    verificarEstadoPago
} = require('../src/pagos/TC-PAG-005');

describe('TC-PAG-005', () => {

    test('Estado solvente', () => {

        const resultado =
            verificarEstadoPago(0);

        expect(resultado.exito)
            .toBe(true);

    });

});