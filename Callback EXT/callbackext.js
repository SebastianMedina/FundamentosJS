//SOLO SE PUEDE USAR EN OPENCODE.IO
/*PROMESAS
const promise = new Promise (function (resolve, reject) {
  setTimeout (resolve, 1000)
})

promisec
  .then(function () {

})
  .cathc(function (err) {

})
PROMESAS */
function get(URL, callback) {
  const xhr = new XHMLHttpRequest();

  xhr.onreadystatechange = function() {
    const DONE = 4
    const OK = 200
    if (this.readyState === DONE) {
      if (this.status === DONE) {
        //todo OK
        callback(null, JSON.parse(this.responseText))
      } else {
        //Hubo error
        callback(new Error(`Se produjo un error al realizar el request: ${this.status}`))
      }
    }
  }

  xhr.open('GET', URL);
  xhr.send(null);
}

function _handleError(err) {
  console.log(`Request failed: ${err}`)
}

get('http://swapi.co/api/people/1/', function onResponse(err, luke) {
  if (err) return handleError(err)

  get(luke.homeworld, function onHomeworldResponse(err, homeworld) {
    if (err) return handleError(err)

    luke.homewoeld = homeworld
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
  })

})
