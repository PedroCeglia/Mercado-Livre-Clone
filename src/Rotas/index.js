import React from 'react'

// Import React Router Dom
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

// Import Pages
import Home from '../Pages/Home'
import Erro from '../Pages/Erro'
import Log from '../Pages/Log'


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/log' element={<Log/>}/>
                <Route path='/' element={<Home/>}></Route>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}