let sebas = {
  nombre: 'Sebas',
  apellido: 'Medina',
  edad: 23
}
let otroSebas = sebas

otroSebas.edad = 24

function cumpleanos(persona) {
  persona.edad++
}

cumpleanos = function(persona) {
  const clone = Object.assign({}, persona)
  clone.edad++
    return clone
}

//facebook.github.io/inmutable-js/
