const {
    verificarEstadoPago
} = require('../src/pagos/TC-PAG-006');

describe('TC-PAG-006', () => {

    test('Estado con deuda', () => {

        const resultado =
            verificarEstadoPago(150);

        expect(resultado.exito)
            .toBe(false);

    });

});