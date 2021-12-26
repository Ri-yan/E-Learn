import React from "react";
import './Welcome.css';

const Welcome=({onRouteChange})=>{
    return(
        <div className="cover">
            <div className='container'>
            <h1 className='cover-title'>Dive into the world of learning.</h1>
            <button className='' onClick={()=>{window.scroll({
  top: 600,
  left: 0,
  behavior: 'smooth'
});}}>Click Here</button>
        </div>
        </div>
    );
}
export default Welcome;