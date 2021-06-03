import {useEffect, useState} from "react"
import "./RandomPage.css"
import pokeball from "../assets/pokeball.png"

import Pokedex from 'pokedex-promise-v2'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const RandomPage = ()=> {
  const P = new Pokedex();
  const [request, setRequest] = useState(false)

  const [info, setInfo] = useState({})
  const [pic, setPic] = useState(" ")

  useEffect(() => {
    P.getPokemonByName(getRandomInt(1, 600)) 
    .then(function(response) {
      console.log(response);
      setInfo(response)
      setPic(response.sprites.other["official-artwork"]["front_default"])
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
  }, [request])


  return (
      <div className="randomPage">
          <div className="infoPicture">
            
            <img src={pic} alt="pic" className="pokemonImage"/>
            <div className="pokemonName">

            </div>
          </div>  
      </div>
  );
}

export default RandomPage;

