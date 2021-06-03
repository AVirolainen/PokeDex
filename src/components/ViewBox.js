import './ViewBox.css';
import sandshrew from "../assets/po/sandshrew.jpg"
import bulbasaur from "../assets/po/bulbasaur.jpg"

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import RandomPage from "./RandomPage"
import InfoPage from "./InfoPage"

import Pokedex from 'pokedex-promise-v2'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: "15px",
      
      
    },
  },
  button:{
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const ViewBox = ()=>{
    const classes = useStyles();

    var P = new Pokedex();

    P.getPokemonByName('eevee') // with Promise
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });

    return (
        <Router>
            <div className="viewBox">
            <Switch>
                <Route exact path="/">
                
                <div className="boxWrapper">
                    <div className="boxImage">
                        <img src={sandshrew} alt="logo"/>
                        
                            <Link to="/random">
                            <div className={classes.root}>
                                <Button variant="contained">
                                    Show random Pokemon
                                </Button>
                              </div>
                            </Link>
              
                    </div>
                    <div className="boxImage">
                        <img src={bulbasaur} alt="logo"/>
                    <div className="wrapper">
                        <div className={classes.button}>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        
                            <Link to="/info">
                            <div className={classes.root}>
                                <Button variant="contained">
                                    Show info
                                </Button>
                                </div>
                            </Link>
                          
                    </div>
                    </div>

                    
                </div>

                </Route>
                <Route path="/random" component={RandomPage} />
                <Route path="/info" component={InfoPage} />
            </Switch>
            </div>
        </Router>
    );
}

export default ViewBox;