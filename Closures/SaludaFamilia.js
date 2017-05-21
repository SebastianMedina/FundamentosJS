//funcion externa
function saludarFamilia(apellido) {
  //Funcion interna
  return function saludarMiembroDeFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}`);
  }
}
const saludarGomez = saludarFamilia('Gomez')
const saludarPerez = saludarFamilia('Perez')
const saludarRomero = saludarFamilia('Romero')

saludarGomez('Pedro')
saludarGomez('Juan')
saludarGomez('Laura')
saludarGomez('Monica')

saludarPerez('Dario')
saludarPerez('Martin')
saludarPerez('Julieta')

saludarRomero('Jorge')
