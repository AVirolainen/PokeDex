import {useEffect, useState} from "react"
import "./RandomPage.css"
import pokeball from "../assets/pokeball.png"

import InfoComponent from "./InfoComponent"

import Pokedex from 'pokedex-promise-v2'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const RandomPage = ()=> {
  const P = new Pokedex();
  const [request, setRequest] = useState(false)

  const [info, setInfo] = useState({name: "", sprites:{front_default:""}, types:[{type:""}]})
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
              <div className="pokemonTitle">
                #{info.order} {capitalizeFirstLetter(info.name)}
                <img src={info.sprites.front_default} alt="pic" className="smallPic" />
              </div> 
            </div>
            
          </div>  

          <InfoComponent info={info}/>
          
      </div>
  );
}

export default RandomPage;

