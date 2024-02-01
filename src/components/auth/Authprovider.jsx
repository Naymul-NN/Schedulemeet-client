"use client"

import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import auth from "./firebase.config";
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setuser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const userLogin=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut = () =>{
    setLoading(true)
    signOut(auth)
   }

   const googleLogin =(provider)=>{
    return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setuser(currentUser)
            setLoading(false)
          })
          return  () =>{
            unSubscribe()
          }
       },[])

   const authinfo = {
             user,
             loading,
             createUser,
             userLogin,
             logOut,
             googleLogin,
   }


    return (
        <AuthContext.Provider value={authinfo}>
            {children}    
        </AuthContext.Provider >
    );
};

export default AuthProvider;