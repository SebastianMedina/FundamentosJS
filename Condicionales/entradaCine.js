const starWars7 = 'Star Wars: El despertar de la fuerza';
const pgStarWars7 = 13;

const nameSebas = 'Sebas';
let ageSebas = 23;

const nameSanti = 'Sanit';
let ageSanti = 12;

function canWatchStarWars7(name, age, isWithAdult = false) {
  if (age >= pgStarWars7) {
    alert(`${name} puede pasar a ver ${starWars7}`);
  } else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7}.
      Aunque su edad es ${age}, se encuentra acompañado/a por un adulto.`)
  } else {
    alert(`${name} no puede pasar a ver ${starWars7}.
    Tiene ${age} años y necesita tener ${pgStarWars7}`)
  }
}
canWatchStarWars7(nameSebas, ageSebas);
canWatchStarWars7(nameSanti, ageSanti, true);
