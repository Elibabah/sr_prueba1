const menorCalif = require('./calif-mas-baja')

test('Calificacion menor debe devolver 4', () => {
    expect(menorCalif([7, 4, 6, 7, 4, 8, 9, 8, 10, 10])).toBe(4);
})