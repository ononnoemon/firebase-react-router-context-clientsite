import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import GoogleBtn from './GoogleBtn'
import { LoginForm } from './LoginForm'
import AddCoffee from './AddCoffee'
import { ProfileData } from '../context/ProfileContext'
export default function Home() {
  const data=useContext(ProfileData)
  console.log('Context Data',data)
  
  return (
    <div>
       <LoginForm />
       <GoogleBtn />
    </div>
  )
}
