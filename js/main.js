'use strict';

// Searcher code:
let characterElement = document.querySelector('#character');
const buttonSearcher = document.querySelector('#btn');
let dataElement = document.querySelector('#data'); 
let dataFull = '';
let selectOption = document.querySelector('#list');
let image =  document.querySelector('#img');

function handlerSelector () {
    dataElement.innerHTML = 'Cargando items... Por favor, espere.'; 
    fetch(`https://swapi.co/api/${selectOption.value}/?search=${characterElement.value}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        let totalData = data.results;
        
        dataElement.innerHTML = '';
        dataFull = '';
        if (selectOption.value === 'people'){
            for (let person of totalData){
                let personContent = `<li>Nombre:${person.name}, Género: ${person.gender}, Número de películas: ${person.films.length}</li>`;
                dataFull += personContent}
                dataElement.innerHTML = dataFull;
        } else if (selectOption.value === 'films'){
            for (let films of totalData){
                let filmsContent = `<li>Título:${films.title}, Director: ${films.director}, Productor: ${films.producer}</li>`;
                dataFull += filmsContent}
                dataElement.innerHTML = dataFull;
        } else if (selectOption.value === 'planets'){
            for (let planets of totalData){
                let planetsContent = `<li>Nombre del planeta:${planets.name}, Población: ${planets.population}, Gravedad: ${planets.gravity}</li>`;
                dataFull += planetsContent}
                dataElement.innerHTML = dataFull;
        } else if (selectOption.value === 'species'){
            for (let species of totalData){
                let speciesContent = `<li>Especie:${species.name}, Idioma: ${species.language}</li>`;
                dataFull += speciesContent}
                dataElement.innerHTML = dataFull;
        } else if (selectOption.value === 'starships'){
            for (let starships of totalData){
                let starshipsContent = `<li>Nombre:${starships.name}, Precio en créditos$:${starships.cost_in_credits} , Pasajeros: ${starships.passengers}</li>`;
                dataFull += starshipsContent}
                dataElement.innerHTML = dataFull;
        } else if (selectOption.value === 'vehicles'){
            for (let vehicles of totalData){
                let vehiclesContent = `<li>Nombre:${vehicles.name}, Precio en créditos$:${vehicles.cost_in_credits} , Pasajeros: ${vehicles.passengers}</li>`;
                dataFull += vehiclesContent}
                dataElement.innerHTML = dataFull;
        }
    });
};

function reset () {
    let dataElement = document.querySelector('#data');
    dataElement.innerHTML = '  ';
}

buttonSearcher.addEventListener('click', handlerSelector);
selectOption.addEventListener('change', reset);


// Audio code:
let x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 

playAudio()


// Starts code:
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });