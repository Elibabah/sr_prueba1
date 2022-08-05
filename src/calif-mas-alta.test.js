const mayorCalif = require('./calif-mas-alta');

test('Calificacion mayor debe devolver 10', () => {
    expect(mayorCalif([7, 4, 6, 7, 4, 8, 9, 8, 10, 10])).toBe(10);
})