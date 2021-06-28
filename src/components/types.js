import bugPic from "../assets/types/bug.svg"
import darkPic from "../assets/types/dark.svg"
import dragonPic from "../assets/types/dragon.svg"
import electricPic from "../assets/types/electric.svg"
import fairyPic from "../assets/types/fairy.svg"
import fightingPic from "../assets/types/fighting.svg"
import flyingPic from "../assets/types/flying.svg"
import firePic from "../assets/types/fire.svg"
import ghostPic from "../assets/types/ghost.svg"
import grassPic from "../assets/types/grass.svg"
import groundPic from "../assets/types/ground.svg"
import icePic from "../assets/types/ice.svg"
import normalPic from "../assets/types/normal.svg"
import poisonPic from "../assets/types/poison.svg"
import psychicPic from "../assets/types/psychic.svg"
import rockPic from "../assets/types/rock.svg"
import steelPic from "../assets/types/steel.svg"
import waterPic from "../assets/types/water.svg"

const genPic =(x)=>{
	switch(x){
		case "bug":
			return (<div style={{backgroundColor: "#92BC2C", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #92BC2C"}}>
						<img src={bugPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "fairy":
			return (<div style={{backgroundColor: "#EE90E6", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #EE90E6"}}>
						<img src={fairyPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "dark":
			return (<div style={{backgroundColor: "#595761", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #595761"}}>
						<img src={darkPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "dragon":
			return (<div style={{backgroundColor: "#0C69C8", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #0C69C8"}}>
						<img src={dragonPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "electric":
			return (<div style={{backgroundColor: "#F2D94E", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #F2D94E"}}>
						<img src={electricPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "fighting":
			return (<div style={{backgroundColor: "#D3425F", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #D3425F"}}>
						<img src={fightingPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "ghost":
			return (<div style={{backgroundColor: "#5F6DBC", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #5F6DBC"}}>
						<img src={ghostPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "grass":
			return (<div style={{backgroundColor: "#5FBD58", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #5FBD58"}}>
						<img src={grassPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "ground":
			return (<div style={{backgroundColor: "#DA7C4D", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #DA7C4D"}}>
						<img src={groundPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "ice":
			return (<div style={{backgroundColor: "#75D0C1", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #75D0C1"}}>
						<img src={icePic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "normal":
			return (<div style={{backgroundColor: "#A0A29F", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #A0A29F"}}>
						<img src={normalPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "poison":
			return (<div style={{backgroundColor: "#B763CF", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #B763CF"}}>
						<img src={poisonPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "psychic":
			return (<div style={{backgroundColor: "#FA8581", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #FA8581"}}>
						<img src={psychicPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "rock":
			return (<div style={{backgroundColor: "#C9BB8A", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #C9BB8A"}}>
						<img src={rockPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "steel":
			return (<div style={{backgroundColor: "#5695A3", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #5695A3"}}>
						<img src={steelPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "water":
			return (<div style={{backgroundColor: "#539DDF", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #539DDF"}}>
						<img src={waterPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "flying":
			return (<div style={{backgroundColor: "#A1BBEC", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #A1BBEC"}}>
						<img src={flyingPic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
		case "fire":
			return (<div style={{backgroundColor: "#FBA54C", height: "100px", width: "100px", borderRadius: "100%", boxShadow:"0 0 20px #FBA54C"}}>
						<img src={firePic} style={{height: "60px", width: "60px", marginTop: "20px"}}/>
					</div>)
			break
	}

}

export default genPic