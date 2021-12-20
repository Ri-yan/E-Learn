import React,{useState} from "react";
import ServiceCard from '../ServiceCard/ServiceCard';
import {ServiceData} from '../ServiceData';
import './ServiceList.css'
const ServiceList = () => {
  const [searchTerm,setSearchTerm] = useState('');
  return (
    <div>
      <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search services'
        onChange={event=>{
          setSearchTerm(event.target.value);
          }}      />
    </div>
    <div className='ServiceList'>
      {
        ServiceData.filter((val)=>{
          if(searchTerm===""){
            return val;
          }else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val;
          }
          else return null;
        }).map((val, i) => {
          return (
            <ServiceCard
              key={i}
              id={val.id}
              name={val.name}
              link={val.link}
              />
          );
        })
      }
    </div>
    </div>
  );
}

export default ServiceList;