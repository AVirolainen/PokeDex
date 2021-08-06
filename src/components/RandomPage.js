import {useEffect, useState} from "react"
import "./RandomPage.css"
import pokeball from "../assets/pokeball.png"
import InfoComponent from "./InfoComponent"


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const RandomPage =(props)=> {
  const [pic, setPic] = useState(" ")

  return (
      <div className="randomPage">
          <div className="infoPicture">
            
            <img src={props.info.sprites.other["official-artwork"]["front_default"]} alt="pic" className="pokemonImage"/>
            <div className="pokemonName">
              <div className="pokemonTitle">
                #{props.info.order} {capitalizeFirstLetter(props.info.name)}
                <img src={props.info.sprites.front_default} alt="pic" className="smallPic" />
              </div> 
            </div>
            
          </div>  

          <InfoComponent info={props.info}/>
          
      </div>
  );
}

export default RandomPage;

