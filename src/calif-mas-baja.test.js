const menorCalif = require('./calif-mas-baja')

test('Calificacion menor debe devolver 4', () => {
    expect(menorCalif([7, 4, 6, 7, 4, 8, 9, 8, 10, 10])).toBe(4);
})

test('Calificacion menor debe devolver 5', () => {
    expect(menorCalif([7, 6, 7, 5, 8, 9, 8, 5, 10, 10])).toBe(5);
})

test('Calificacion menor debe devolver 3', () => {
    expect(menorCalif([7, 4, 6, 7, 3, 4, 8, 9, 8, 10, 10])).toBe(3);
})

test('Calificacion menor debe devolver 1', () => {
    expect(menorCalif([7, 4, 6, 1, 7, 4, 8, 9, 8, 10, 10])).toBe(1);
})