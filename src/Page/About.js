import React from 'react';
import parts from '../assets/images/about_us/parts.jpg'
import person from '../assets/images/about_us/person.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 m-5 mr-0 ml-1 border-2 border-lime-700 ">
        <div className="hero-content  flex-col lg:flex-row">
         <div className='w-1/2 relative '>
         <img src={person}  alt='' className="max-w-sm h-full  rounded-lg shadow-2xl" />
         <img src={parts}  alt='' className="  absolute max-w-sm right-12 width-3/5 h-3/4 top-1/2 rounded-lg shadow-2xl" />
       
         </div>
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;