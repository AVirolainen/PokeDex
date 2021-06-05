import "./InfoComponent.css"
import logo from "../assets/pokemon_logo.png"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const InfoComponent =(props)=> {
    const info = props.info
    return (
        <div className="infoComponent">      
            <img className="pokemonLogo" src={logo} alt="logo" />
            <din className="infoBox">
                Type: {info.types.map(item=>{
                    if(info.types.length < 1 || item == info.types[info.types.length-1]){
                        return capitalizeFirstLetter(item.type.name)
                    }
                    return capitalizeFirstLetter(item.type.name) + ", "
                })}
            </din>
        </div>
        
    );
  }
  
  export default InfoComponent;