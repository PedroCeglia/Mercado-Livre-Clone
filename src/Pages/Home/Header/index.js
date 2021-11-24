import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Router
import { useLocation, useNavigate } from 'react-router'

export default function Header(){

    // Get Navigate
    const navigate = useNavigate()

    // Get Location
    const location = useLocation()
    // Set Src Diretory Images
    const [srcDiretory, setSrcDirectory] = useState('')
    useEffect(()=>{
        if(location.pathname != null){
            const listSplit = location.pathname.split('/')
            let x = 0
            setSrcDirectory('')
            while(x <= listSplit.length-2){
                if(x !== listSplit.lenght-2){
                    setSrcDirectory( s =>  s +"../" )
                }
                x++
            }        
        }   
    },[location.pathname])

    return(
        <header className='header-home'>
            <img onClick={()=>{if(location.pathname != '/'){navigate('/')}}} className='logo' src={srcDiretory + 'assets/logo.png'} alt='Logo Icon'/>
            <div className='menu-input-container'>    
                <div className='input-area'>
                    <label><img src={srcDiretory + 'assets/search.png'} alt='Search Icon'/></label>
                    <input type='text' placeholder='Pesquisar'/>
                </div>
                <nav className='menu-area'>
                    <ul>
                        <li><button>Categorias</button></li>
                        <li><button>Promoções</button></li>
                        <li><button>Histórico</button></li>
                        <li><button onClick={()=>{if(location.pathname != '/vender'){navigate('/vender')}}}>Vender</button></li>
                    </ul>
                </nav>
            </div>
            <div className='right-area'>
                <button>Crie sua conta</button>
                <button>Entre</button>
                <button>Compras</button>
                <img src={srcDiretory + 'assets/carrinho.png'} alt='Carrinho Icon' title='Carrinho de Compras'/>
            </div>
        </header>
    )
}