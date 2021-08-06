import "./InfoComponent.css"
import logo from "../assets/pokemon_logo.png"

import { useEffect, useState } from "react";

import genPic from "./types.js" 

import axios from "axios";


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const InfoComponent =(props)=> {
    const info = props.info
    const url = `https://pokeapi.co/api/v2/pokemon-species/${info.name}/`

    const [infoText, setInfoText] = useState(" ")

    const fetchData = async () => {
        const result = await axios(url);

        setInfoText(result.data.flavor_text_entries[0].flavor_text)
        console.log(result.data.flavor_text_entries[0].flavor_text);
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return (
        <div className="infoComponent">      
            <img className="pokemonLogo" src={logo} alt="logo" />
            <div className="infoBox">
            Type:
                <div className="typesWrapper">
                    {info.types.map(item=>{
                        return (<div>
                                    {capitalizeFirstLetter(item.type.name)}
                                    {genPic(item.type.name)}
                                </div>)
                        }
                    )}
                </div>
                <div className="bodyText">
                    {infoText}
                </div>
            </div>


        </div>
        
    );
  }
  
  export default InfoComponent;

