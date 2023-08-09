import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Out = () => {
    const {name,price,_id}=useLoaderData();
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const phone=form.phone.value;
        const msg=form.messege.value;

        const order={
            service:_id,
            serviceName:name,price,
    
            customer:name,email,phone,msg
          
    
        }
        
       
    }
   
    return (
        <div >
                <p> Place order For {name}</p>
           <form onSubmit={handleSubmit} >
        
            <input type="text" name='name' placeholder='enter your name' /><br />
            <input type="email" name="email" id=""  placeholder='enter your email'/><br />
            <input type="text" name='phone' placeholder='enter your Phone Number' /><br />
            <input type="text" name='messege' placeholder='write a message'/><br />
            <button type="submit">Place Order </button>
           </form>
        </div>
    );
};

export default Out;