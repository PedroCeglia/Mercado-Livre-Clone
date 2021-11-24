import React from 'react'
import './style.css'

// Import React Router
import { Outlet } from 'react-router'

// Import Widgets
import Header from './Header'

export default function Home(){
    return(
        <div className='home-container'>
            <Header/>
            <div className='outlet-container'>
               <Outlet/>  
            </div>
           
        </div>
    )
}