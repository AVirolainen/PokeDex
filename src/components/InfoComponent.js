import "./InfoComponent.css"
import logo from "../assets/pokemon_logo.png"

import genPic from "./types.js" 


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const InfoComponent =(props)=> {
    const info = props.info
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
            </div>

        </div>
        
    );
  }
  
  export default InfoComponent;

