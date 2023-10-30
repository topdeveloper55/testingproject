import { useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./SmallMenuBar.css";
const menuTitle = [
    "30-DAY STATISFACTION GUARANTEE",
    "FREE DELIVERY ON ORDERS OVER $40.00",
    "50.000+ HAPPY CUSTOMERS",
    "100% MONEY BACK GUARANTEE"
];

const icons = [
    "header-logo-1",
    "header-logo-2",
    "",
    "header-logo-4"
];

const prevArrow = "<";
const nextArrow = ">";

const SmallMenuBar = () => {
    const [numOfMenu, setNumOfMenu] = useState(0);
    const prevClick = () => {
        if(numOfMenu > 0)setNumOfMenu(numOfMenu - 1);
    }
    const nextClick = () => {
        if(numOfMenu < 3)setNumOfMenu(numOfMenu + 1);
    }
    return(
        <>
            <div className="small-menubar">
                <button onClick={prevClick} style={{cursor:'pointer', borderWidth:'0px', fontSize:'20px', backgroundColor:'transparent', color:'white'}} disabled={numOfMenu === 0 && true}>{prevArrow}</button>
                {
                    menuTitle.map((item, index) => {
                        if(index === numOfMenu)
                            return <div key = {index} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                {
                                    index === 2 ? <FavoriteBorderOutlinedIcon/> : <img src={`/assets/${icons[index]}.png`} alt={index}></img>
                                }
                                <p style={{marginLeft:'1vw', fontSize:'12px'}}>{item}</p>
                            </div>
                    }) 
                }
                <button onClick={nextClick} style={{cursor:'pointer', borderWidth:'0px', fontSize:'20px', backgroundColor:'transparent', color:'white'}} disabled={numOfMenu === 3 && true}>{nextArrow}</button>
            </div>
        </>
    )
}

export default SmallMenuBar;