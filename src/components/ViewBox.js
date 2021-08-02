import './ViewBox.css';
import sandshrew from "../assets/po/sandshrew.jpg"
import bulbasaur from "../assets/po/bulbasaur.jpg"

import TextField from '@material-ui/core/TextField';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import RandomPage from "./RandomPage"
import InfoPage from "./InfoPage"

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ViewBox = (props)=>{

    return (
        <Router>
            <div className="viewBox">
            <Switch>
                <Route exact path="/">
                
                <div className="boxWrapper">

                <Carousel showThumbs={false} dynamicHeight={false} width={600} showStatus={false} autoPlay={true} infiniteLoop={true} showArrows={false}>

                <div className="boxImage">
                    <img src={sandshrew} alt="logo"/>
                    
                        <Link to="/random" style={{ textDecoration: 'none' }}>
                        <div className="route-button random">
                                Show random Pokemon   
                            </div>
                        </Link>
            
                </div>


                <div className="boxImage">
                    <img src={bulbasaur} alt="logo"/>
                    <div className="wrapper">
                        <div className="outlined-basic">
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        
                            <Link to="/info" style={{ textDecoration: 'none' }}>
                              <div>

                                  <div className="route-button">
                                    Show info
                                  </div>

                              </div>
                            </Link>
                          
                    </div>
                </div>

                </Carousel>


                </div>

                </Route>
                <Route path="/random" render={()=><RandomPage info={props.info}/>}/>
                <Route path="/info" component={InfoPage} />
            </Switch>
            </div>
        </Router>
    );
}

export default ViewBox;