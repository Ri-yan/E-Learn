import React,{useState} from "react";
import './Hamburger.css';


const Hamburger=()=>{
    const [hamactive,setHamActive] = useState(false);
    const handleHam=()=>setHamActive(!hamactive);
    return(		
        <div className={hamactive?'hamburger active':'hamburger'} onClick={()=>handleHam()}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
        );
       
    }
    export default Hamburger;