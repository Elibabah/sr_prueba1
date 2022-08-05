const promedioGral = require('./promedio-gral')

test("PromedioGral debe devolver 6.875", () => {
    expect(promedioGral([7, 4, 6, 7, 4, 8, 9, 10])).toBe(6.875)
})

test("PromedioGral debe devolver 6.75", () => {
    expect(promedioGral([7, 4, 6, 7, 4, 8, 10, 8])).toBe(6.75)
})

test("PromedioGral debe devolver 6.375", () => {
    expect(promedioGral([7, 4, 6, 7, 4, 8, 10, 5])).toBe(6.375)
})

test("PromedioGral debe devolver 6.5", () => {
    expect(promedioGral([7, 4, 6, 9, 10, 5, 7, 4, 8, 5])).toBe(6.5)
})