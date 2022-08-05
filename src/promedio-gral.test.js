const promedioGral = require('./promedio-gral')

test("PromedioGral debe devolver 6.875", () => {
    expect(promedioGral([7, 4, 6, 7, 4, 8, 9, 10])).toBe(6.875)
})