const aprobados = (data) => {
    let arrayAprobados = data.filter(plus6 => plus6 >= 6)
    let totalAp = arrayAprobados.length
    return totalAp
}
module.exports = aprobados;