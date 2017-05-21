class Toggable {
  constructor(el) {
    //Iniciar el estado interno
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = false
    this.onClick = this.onClick.bind(this)
    this.el.addEventListener('click', this.onClick)
  }
  onClick(ev) {
    //Cambiar el estado interno (ON-OFF/OFF-ON)
    //Llamar a toggelText
    this.activated = !this.activated
    this.toggleText()
  }
  toggleText() {
    //Cambiar el texto
    this.el.innerHTML = this.activated ? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)
