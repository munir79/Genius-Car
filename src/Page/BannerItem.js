import React from 'react';
import './Ban.css'

const BannerItem = ({slide}) => {
    // console.log(props);
    const{image,id,next,prev}=slide;
    
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='img-gradient'>
        <img src={image} alt='' className="w-83 rounded-xl h-85" />
        </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
           <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
           <a href={`#slide${next}`} className="btn btn-circle">❯</a>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
           <h1 className='text-6xl font-bold text-white'> Afordable <br />
           price car for <br />
           Servicing</h1>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-24  w-2/5 top-1/2">
           <h1 className='text-xl  text-white'> There are many variations of passage of Available,But the majority Have Suffered Altaration in some form  </h1>
         </div>
         <div className="absolute flex justify-start transform -translate-y-1/2 left-24  w-2/5 top-3/4">
         <button className="btn btn-warning mr-5">Warning</button>
         <button className="btn btn-outline btn-primary">Primary</button>
         </div>
       </div> 
       
    );
};

export default BannerItem;