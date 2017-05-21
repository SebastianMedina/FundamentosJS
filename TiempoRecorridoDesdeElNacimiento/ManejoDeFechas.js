const nacimiento = new Date(1993, 7, 25) //Fecha de nacimiento, la fecha se dispone de la siguiente manera (YY/MM-1/DD)
const hoy = new Date() //Fecha de hoy
const tiempo = hoy - nacimiento //Tiempo que ha pasado desde la fecha de nacimiento hasta hoy en milisegundos
const tiempoSegundos = tiempo / 1000 //Conversion de la constante "tiempo" a segundos
const tiempoMin = tiempoSegundos / 60 //Conversion de la constante "tiempoSegundos" a minutos
const tiempoHoras = tiempoMin / 60 //Conversion de la constante "tiempoMin" a horas
const tiempoDias = tiempoHoras / 24 //Conversion de la constante "tiempoHoras" a dias
const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate()) //Calculo del proximo cumpleaños
const diasSemana = [ //Arreglo de los dias de la semana [0, 1, 2, 3, 4, 5, 6]
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado'
]
console.log(diasSemana[proximoCumple.getDay()]) //Se obtiene del dia de la semana del proximo cumpleaños
