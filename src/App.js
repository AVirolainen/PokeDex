import './App.css';
import ViewBox from "./components/ViewBox"
import logo from "./assets/pokedex_logo.png"

import { connect } from 'react-redux'


function App(props) {
  const { name, surname, age } = props.user
  console.log(name)
  return (
      <div className="App">      
        <img className="logo" src={logo} alt="logo"/>
        <ViewBox name={name} surname={surname} age={age}/>
      </div>
  );
}

function mapStateToProps (state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(App)
