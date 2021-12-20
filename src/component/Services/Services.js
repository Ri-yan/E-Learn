import React from "react";
import './Services.css';
import Scover from './Scover.svg';
import ServiceList from "./ServiceCatagories/ServiceList/ServiceList";
// import SearchBox from "./SearchServices/SearchBox";
const Services=()=>{
    
    return(
        <div className="Services">
            {/* <div className="services-para">
                We are working day to day to add more and more resouces to our website and we will try our best to improve our services and provide a rich user experience.
            </div>
             */}
            <div className="services-cover">
                <div className="services-cover-para">
                <div>We are working day to day to add more and more resouces to our website and we will try our best to improve our services and provide a rich user experience.</div>
                <div style={{'padding-top':'25px'}}>Choose from your desired catagories of technical fields.</div>
                </div>
                <img src={Scover} alt="" className="services-cover-img" />
            </div>
            {/* <SearchBox/> */}
            <ServiceList/>
        </div>
    );
}
export default Services;