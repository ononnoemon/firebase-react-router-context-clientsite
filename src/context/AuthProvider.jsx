import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
//import auth from '../Firebase/firebaseinit'
import React, { createContext,  useState } from 'react'
import { app } from "../Firebase/firebaseinit";

export const AuthContext=createContext(null)

export default function AuthProvider({children}) {
    const auth = getAuth(app);
    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userInfo={user,loading,createUser,signIn}
  return (
    <AuthContext.Provider value={userInfo} >
        {children}
    </AuthContext.Provider>
  )
}
