const mayorCalif = require('./calif-mas-alta');

test('Calificacion mayor debe devolver 10', () => {
    expect(mayorCalif([7, 4, 6, 7, 4, 8, 9, 8, 10, 10])).toBe(10);
})

test('Calificacion mayor debe devolver 9', () => {
    expect(mayorCalif([7, 4, 6, 7, 4, 8, 9, 8])).toBe(9);
})

test('Calificacion mayor debe devolver 8', () => {
    expect(mayorCalif([7, 4, 6, 7, 4, 8, 8])).toBe(8);
})

test('Calificacion mayor debe devolver 7', () => {
    expect(mayorCalif([7, 4, 6, 7, 4])).toBe(7);
})