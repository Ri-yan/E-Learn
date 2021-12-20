import React from 'react'; 
import './ServiceCard.css'
 const ServiceCard = ({name,email,id,link,onRouteChange}) => {
 	return (
		 		<div className='ServiceCard' onClick={()=>onRouteChange('service-route')}>
					<img className='service-logo' alt='not available' src={link} />
		 			<h4 className='service-name'>{name}</h4>
					<span className='service-line'></span>
		 		</div>
 			)
 }
 export default ServiceCard;