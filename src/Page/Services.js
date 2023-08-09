import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setService(data));
    } ,[])
    return (
        <div>
         <div className='text-center'>
            <h5> Total Product :{service.length}</h5>
         <p className='font-bold text-2xl text-orange-600'>Services</p>
          <h2 className='font-semi-bold text-5xl'> Our Services Area </h2>
          <p>There are many variations of passage of Available, But the majority Have <br /> Suffered Altaration in some form 
         </p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         {
            service.map(service=><ServicesCard  key={service._id} service={service} ></ServicesCard>)
         }
         </div>
         </div>
        </div>
    );
};

export default Services;