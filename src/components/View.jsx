import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import CoffeeCard from './CoffeeCard'

export default function View() {
    const coffes=useLoaderData()
  //  console.log(coffes)
  return (
    <div>
        <h1>Hot Hot Coffee</h1>
        <div className='grid grid-cols-2 gap-4'>
        {
            coffes.map(coffes=>(<CoffeeCard key={coffes._id} coffee={coffes}>
                
            </CoffeeCard>))
        }
        </div>
    </div>
  )
}


export const coffeeLoader =async () => {
    const res=await fetch("http://localhost:3000/coffees")
    return res.json()
}
  