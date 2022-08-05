const reprobados = require('./reprobados');

test('Aprobados debe devolver 2', () => {
    expect(reprobados([7, 4, 6, 7, 4, 8, 9, 10])).toBe(2);
})

test('Aprobados debe devolver 3', () => {
    expect(reprobados([7, 4, 6, 7, 4, 8, 9, 5, 10])).toBe(3);
})

test('Aprobados debe devolver 4', () => {
    expect(reprobados([7, 4, 6, 7, 4, 8, 5, 4, 9, 10])).toBe(4);
})

test('Aprobados debe devolver 5', () => {
    expect(reprobados([7, 4, 6, 2, 7, 5, 4, 4, 8, 9, 10])).toBe(5);
})