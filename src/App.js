import './App.css';
import ViewBox from "./components/ViewBox"
import logo from "./assets/pokedex_logo.png"

import { connect } from 'react-redux'


function App(props) {


  return (
      <div className="App">      
        <img className="logo" src={logo} alt="logo"/>
        <ViewBox info={props.info}/>
      </div>
  );
}



export default App
