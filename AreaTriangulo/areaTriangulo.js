let base = 5;
let height = 7;

// -----FUNCION NORMAL NO ANONIMA----
// function triangelArea(base, height) {
//   return base * height / 2
// }
// -----ARROW FUNCTION----
const triangleArea = (base, height) => base * height / 2
console.log(`El area de un triangulo de base ${base}
y altura ${height} es:  ${triangleArea(base, height)}`);
