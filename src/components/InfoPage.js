import {useEffect, useState} from "react"

import axios from 'axios';
import RandomPage from "./RandomPage";

const InfoPage =(props)=> {
    const pokemonName = props.info

    const [pokeInfo, setPokeInfo] = useState(undefined)

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(res => {
          const info = res.data;
          console.log(info)
          setPokeInfo(info)
        })
    }, [pokemonName])

    if(!pokeInfo){
        return(<div>
            Loading
        </div>)
    }
    return (
        <RandomPage info={pokeInfo} />
    );
  }
  
  export default InfoPage;