import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = (props) => {
    console.log(props);
    const {img,name,price,_id}=props.service;

    return (
       
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-6 mb-8 border-2 ">
  <div className='m-7'> 
    <img src={img} alt="" />
  </div>
  <div className="card-body">
    <h2 className="card-title text-green-600 "> Product Name:{name}</h2>
    <h3> Price:{price}</h3>
   
    <div className="card-actions justify-center">
   <Link to={`/out/${_id}`}>
    
   <button className="btn btn-primary">Buy Now</button>
   </Link>
    
    </div>
  </div>
</div>
        
    );
};

export default ServicesCard;