//IMPLEMENTANDO PROMESAS

function get(URL) {
  return new Promise((resolve, reject) => {
    const xhr = new XHMLHttpRequest();

    xhr.onreadystatechange = function() {
      const DONE = 4
      const OK = 200
      if (this.readyState === DONE) {
        if (this.status === DONE) {
          //todo OK
          resolve(JSON.parse(this.responseText))
        } else {
          //Hubo error
          reject(new Error(`Se produjo un error al realizar el request: ${this.status}`))
        }
      }
    }
    xhr.open('GET', URL);
    xhr.send(null);
  })
}

function _handleError(err) {
  console.log(`Request failed: ${err}`)
}
let luke

fetch('http://swapi.co/api/people/1/')
  .then(response => response.json())
  .then((json) => {
    luke = json
    return fetch(luke.homeworld)
  })
  .then(response => response.json())
  .then((json) => {
    luke.homewoeld = json
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
  })
  .catch((err => handleError(err)))
