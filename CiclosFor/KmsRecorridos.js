const nombre = 'Sebas'
const dias = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
]

function correr() {
  const min = 5
  const max = 15
  return Math.round(Math.random() * (max - min)) + min
}
let totalKms = 0
const length = dias.length

for (let i = 0; i < length; i++) {
  const kms = correr()
  totalKms += kms
  console.log(`El dia ${dias[i]} ${nombre} corrio ${kms} kms`)
}
const promedopKms = totalKms / length
console.log(`En promedio ${nombre} corrio ${promedopKms.toFixed(2)} kms`);
