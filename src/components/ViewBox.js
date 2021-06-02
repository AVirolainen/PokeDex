import './ViewBox.css';
import sandshrew from "../assets/po/sandshrew.jpg"
import bulbasaur from "../assets/po/bulbasaur.jpg"

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: "45px",
      width: '25ch',
      
    },
  },
  button:{
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      padding: "10px 0",
    },
  },
}));

const ViewBox = ()=>{
    const classes = useStyles();
    return (
        <div className="viewBox">
            <div className="boxWrapper">
                <div className="boxImage">
                    <img src={sandshrew} alt="logo"/>
                    <div className={classes.root}>
                        <Button variant="contained">
                            Show random Pokemon
                        </Button>
                    </div>
                </div>
                <div className="boxImage">
                    <img src={bulbasaur} alt="logo"/>
                    <div>Enter the name of Pokemon</div>
                    <div className={classes.button}>
                        <TextField id="outlined-basic" variant="outlined" />
                    </div>
                    <div className={classes.button}>
                        <Button variant="contained">
                            Show info
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ViewBox;