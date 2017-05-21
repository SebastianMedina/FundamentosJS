//FUNCION FIBONACCI CON MEMORIA; GUARDANDO LOS VALORES PREVIAMENTE CALCULADOS

let contadorMemo = 1

function fibonacciMemo(num, memoria = {}) {

  contadorMemo++
  if (memoria[num]) return memoria[num]
  if (num == 1) return 0
  if (num == 2) return 1

  return memoria[num] = fibonacciMemo(num - 1, memoria) + fibonacciMemo(num - 2, memoria)
}

//FUNCION FIBONACCI SIN MEMORIA.

let contadorRec = 1

function fibonacciRecursivo(num, memoria = {}) {

  contadorRec++
  if (num == 1) return 0
  if (num == 2) return 1

  return memoria[num] = fibonacciRecursivo(num - 1) + fibonacciRecursivo(num - 2)
}



//EJECUTAR LA FUNCION FIBONACCI

fibonacci(1) //0
fibonacci(2) //1
fibonacci(3) //1
fibonacci(4) //2
fibonacci(5) //3
fibonacci(6) //5
fibonacci(7) //8
fibonacci(8) //13
