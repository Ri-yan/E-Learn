import React from "react";
import './Cover.css';

const Cover=({onRouteChange})=>{
    return(
        <div className="cover">
            <div className='container'>
            <h1 className='cover-title'>Dive into the world of learning.</h1>
            <button className=''onClick={()=>{window.scroll({
  top: 600,
  left: 0,
  behavior: 'smooth'
});}}>Click Here</button>
        </div>
        </div>
    );
}
export default Cover;