const reprobados = (data) => {
    let arrayReprobados = data.filter(menos6 => menos6 <= 5)
    let totalRep = arrayReprobados.length
    return totalRep
}

module.exports = reprobados;