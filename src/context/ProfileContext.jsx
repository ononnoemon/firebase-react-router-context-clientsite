import React, { Children, createContext } from 'react'

export const ProfileData=createContext()

export default function ProfileContext({children}) {
    
    const userData={name:'Emsu',age:30}
  return (
    <ProfileData.Provider value={userData}>
        {children}
    </ProfileData.Provider>
  )
}
