class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }
  //ARROW FUNCTIO PARA USAR LA PALABRA "THIS"
  listarAmigos() {
    this.amigos.forEach((amigo) => {
      console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
    })
  }
}
const sebas = new Persona('Sebas', ['David', 'Ivan', 'Pablo'])
