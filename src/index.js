import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Pokedex from 'pokedex-promise-v2'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const P = new Pokedex();

P.getPokemonByName(getRandomInt(1, 600)) 
.then(function(response) {
  console.log(response);

  render(response)

})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});

const render =(info)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App info={info}/>
    </React.StrictMode>
  ,
  document.getElementById('root')
  );

}






