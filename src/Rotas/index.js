import React from 'react'

// Import React Router Dom
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

// Import Pages
import Home from '../Pages/Home'
import Erro from '../Pages/Erro'
import Log from '../Pages/Log'
import Intro from '../Pages/Intro'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Intro/>}/>
                <Route path='/log' element={<Log/>}/>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}