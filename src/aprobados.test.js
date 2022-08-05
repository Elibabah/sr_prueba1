const aprobados = require('./aprobados');

test('Aprobados debe devolver 6', () => {
    expect(aprobados([7, 4, 6, 7, 4, 8, 9, 10])).toBe(6);
})

test('Aprobados debe devolver 8', () => {
    expect(aprobados([7, 4, 6, 7, 4, 8, 9, 8, 10, 10])).toBe(8);
})

test('Aprobados debe devolver 9', () => {
    expect(aprobados([7, 4, 6, 7, 4, 9, 8, 9, 8, 10, 10])).toBe(9);
})

test('Aprobados debe devolver 10', () => {
    expect(aprobados([7, 4, 6, 7, 4, 9, 8, 9, 8, 10, 10, 8])).toBe(10);
})