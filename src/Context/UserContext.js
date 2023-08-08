import React, { createContext, useState } from 'react';
import app from '../Firebas/Firebase.init';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
export const AuthContext=createContext();
const auth=getAuth(app);

const UserContext = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
   const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
   }


    const AuthInfo={

        user,loading,createUser
    };
    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;