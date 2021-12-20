import React,{useState,useEffect} from "react";
import {menuitems} from './menuitems';
// import Hamburger from './Hamburger/Hamburger.js'
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
{/* <i className={click ? 'fa fa-times':'fas fa bars'}><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-mobile-application-hamburger-menu-setting-interface-basic-shadow-tal-revivo.png"/></i> */}
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