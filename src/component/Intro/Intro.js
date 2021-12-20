import React,{useState} from "react";
import './Intro.css';
// import c1 from "./c1.svg"
import c2 from "./c2.svg"
import c3 from "./c3.svg"
import c4 from "./c4.svg"
import c5 from "./c5.svg"
import c0 from "./c0.svg"


const Intro=({onRouteChange})=>{
    const[tile1,setshowTile1]=useState(false);
    const[tile2,setshowTile2]=useState(false);
    const[tile3,setshowTile3]=useState(false);
    const[tile4,setshowTile4]=useState(false);
    const ShowTile=()=>{
       if(window.scrollY>=600){
           setshowTile1(true);
       } else{
           setshowTile1(false);
       }
        if(window.scrollY>=800){
            setshowTile2(true);
        } else{
            setshowTile2(false);
        }
        if(window.scrollY>=1100){
            setshowTile3(true);
        } else{
            setshowTile3(false);
        }
         if(window.scrollY>=1300){
             setshowTile4(true);
         } else{
             setshowTile4(false);
         }
    }
    window.addEventListener('scroll',ShowTile);
    return(
        <div className="intro" id='info' >
            <h1 style={{'textAlign':'center'}}>What we offering you?</h1>
            <div className="offer-card-section">
                <div className={tile1?'offer-card left-active':'offer-card left'}>
                    <img src={c4} alt="" className="c1" />
                    <div className="card-detail">we offer you learning material from allover the internet.</div>
                </div>
                <div className={tile2?'offer-card right-active':'offer-card right'}>
                    <div className="card-detail">we notify you about latest tech news.</div>
                    <img src={c2} alt="" className="c1" />
                </div>
                <div className={tile3?'offer-card left-active':'offer-card left'}>                    
                <img src={c3} alt="" className="c1" />
                <div className="card-detail">we assist you in solving your problems.</div>
                </div>
                <div className={tile4?'offer-card right-active':'offer-card right'}>                    
                <div className="card-detail">we are always ready to help the innovative minds.</div>
                <img src={c5} alt="" className="c1" />
                </div>
            </div>
            <h1 style={{'textAlign':'center'}}>Expore our Services</h1>
            <div className="service-cover">
                <img src={c0} alt="" className="service-cover-image" />
               <div className="service-cover-detail">
                   we have cataloged some of the most useful links that any new/experienced 
                   developer might need when he/she faced some of the simplest but not easy to solve bugs.
               </div> 
                <h3 className='service-cover-detail'>
                    we collected resource from some of the leading sites like.
                    </h3>
                <div className="sites">
                    <img src="https://d4.alternativeto.net/YhHhnk78SnDRGZSIXEzDtrp-aRzhNL4oBqUG5ns0U_c/rs:fill:70:70:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy93M3NjaG9vbHNfMTQ2MTEucG5n.jpg" alt="" className="sites-image" />
                    <img src="https://d4.alternativeto.net/8Hjmhmu0fA2xpohsXT1Yg1GcKtIB1ZQScL8U50LgamQ/rs:fill:70:70:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9ncmFzc2hvcHBlci0tbGVhcm4tdG8tY29kZV8xMjQ3MzQucG5n.jpg" alt="" className="sites-image" />
                    <img src="https://d4.alternativeto.net/EI-230pe3NvoMs-6OAbgExupON_xAhS8JZluwM1rUOo/rs:fill:70:70:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9jb2RlYXN5XzExMjMzMS5wbmc.jpg" alt="" className="sites-image" />
                    <img src="https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png" alt="" className="sites-image" />
                </div>
            <input type='button' onClick={()=>onRouteChange('services')} className="btn-explore" value='EXPLORE'/>
            </div>
        </div>
    );
}
export default Intro;