const sebas = {
  nombre: 'Sebas',
  apellido: 'Medina'
}

function saludar(veces, uppercase) {
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = uppercase ? str.toUpperCase() : str
  for (let i = 0; i < veces; i++) {
    console.log(str);
  }
}

saludar.call(sebas, 5, true)
//Tiene el mismo resultado si se aplica "APPLY" de la siguiente manera
// saludar.apply(sebas, [5, true])
