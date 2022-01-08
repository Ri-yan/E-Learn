import React,{useState,useEffect} from "react";
import {menuitems} from './menuitems';
import './Navigation.css';

const Navigation=({onRouteChange})=>{
    const [hamactive,setHamActive] = useState(false);
    const handleHam=()=>setHamActive(!hamactive);
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const[navbar,setNavbar]=useState(false);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu =()=>setClick(false);
    const showButton=()=>{
        if(window.innerWidth<=960){
            if(hamactive===true){
             setHamActive(false);
            }
            setButton(false);
        }else{
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',showButton);
    const changeBackground=()=>{
       if(window.scrollY>=80){
           setNavbar(true);
       } else{
           setNavbar(false);
       }
    }
    window.addEventListener('scroll',changeBackground);
    return(
        <div className={navbar?'header active':'header'}>
            <div className="NavbarItems">
                <h1 className='navbar-logo'>E-Learn</h1>
                <div className="menu-icon" onClick={handleClick}>
                <div className={button+hamactive?'hamburger active':'hamburger'} onClick={()=>handleHam()}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                </div>
                <ul className={click ?'nav-menu active':'nav-menu'}>
                    
                    {
                        menuitems.map((items,index)=>{
                            return(
                            <li onClick={()=>onRouteChange(items.route)}><a className={items.cName} 
                            href={items.url}
                            onClick={()=>{closeMobileMenu(); handleHam();}}
                            key={index}>
                            {items.title}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
export default Navigation;