import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const[loading , setLoading] = useState(true)
    const[user, setUser] = useState()
   

    const createUserByEmail = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }    
    const userSignInwithProvider = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    const signInWithEmail =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])


    const  profileupdate = (userProfile)=>{
        return updateProfile( auth.currentUser, userProfile)
    }

    const authInfo={
        user,
        loading,
        setLoading,
        createUserByEmail,
        userSignInwithProvider,
        signInWithEmail,
        profileupdate,
        logOut
    }
    return (
         <AuthContext.Provider value = {authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;