const reprobados = require('./reprobados');

test('Aprobados debe devolver 2', () => {
    expect(reprobados([7, 4, 6, 7, 4, 8, 9, 10])).toBe(2);
})