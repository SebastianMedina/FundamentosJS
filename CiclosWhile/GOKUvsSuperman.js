let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

const gokuSigueVivo = () => vidaGoku > 0

let round = 0

while (ambosSiguenVivos()) {
  round++

  console.log(`Round ${round}`);

  const golpeGoku = calcularGolpe()
  const golpeSuperman = calcularGolpe()

  if (golpeGoku > golpeSuperman) { //Ataca Goku
    console.log(`Goku ataca a SuperMan con un golpe de ${golpeGoku}`);
    vidaSuperman -= golpeGoku
    console.log(`Superman queda con ${vidaSuperman} de vida`);
  } else { //Ataca Superman
    console.log(`SuperMan ataca a Goku con un golpe de ${golpeSuperman}`);
    vidaGoku -= golpeSuperman
    console.log(`Goku queda con ${vidaGoku} de vida`);
  }
}
if (gokuSigueVivo()) {
  console.log(`Goku gano la pelea, su vida es de ${vidaGoku}`);
} else {
  console.log(`SuperMan gano la pelea, su vida es de ${vidaSuperman}`);
}
