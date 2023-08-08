import React, { createContext, useState } from 'react';
import app from '../Firebas/Firebase.init';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
export const AuthContext=createContext();
const auth=getAuth(app);

const UserContext = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
   const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
   }
   const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
   }


    const AuthInfo={

        user,loading,createUser,login
    };
    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;