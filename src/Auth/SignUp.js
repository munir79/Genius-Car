import React from 'react';
import log from '../assets/images/login/login.svg'

const SignUp = () => {
    const handleSignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
      const password=form.password.value;
      console.log(email,password);
    }
    return (
        <div className="hero min-h-screen bg-base-200 border-2 w-full">
        <div className="hero-content flex-col lg:flex-row grid gap-20 md:grid-cols-2 lg:grid-cols-2">
          <div className="h-18">
             <img className='w-3/4' src={log} alt="" />
           
          </div> 
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold ml-10 mt-5 text-orange-300">Login now!</h1>
            <div className="card-body">
              <form  onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a  href="/"  className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Login</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;