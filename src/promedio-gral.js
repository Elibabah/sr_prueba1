const promedioGral = (data) => {
    let alumnos = data.length;
    let sumaPormedioGeneral = data.reduce((a, b) => a + b, 0)
    return sumaPormedioGeneral / alumnos
}

module.exports = promedioGral;