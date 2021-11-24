import React from 'react'

// Import React Router Dom
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

// Import Pages
import Home from '../Pages/Home'
import Erro from '../Pages/Erro'
import Log from '../Pages/Log'
import Vender from '../Pages/Home/Vender'
import Main from '../Pages/Home/Main'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/log' element={<Log/>}/>
                <Route path='/' element={<Home/>}>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/vender' element={<Vender/>}/>
                </Route>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}