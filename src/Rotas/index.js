import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1>Intro</h1>}/>
                <Route path='/log' element={<h1>Cadastro/Login</h1>}/>
                <Route path='/home' element={<h1>Home</h1>}></Route>
                <Route path='*' element={<h1>404 Erro</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}