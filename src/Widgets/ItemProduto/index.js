import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Router
import {useLocation} from 'react-router'

export default function ItemProduto(){

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
        <div className='container-item-produto'>
            <img src={srcDiretory + 'assets/perfil.png'} alt='Produto Main'/>
            <div>
                <p>Nome do Produto dsdsdsdsd descricão</p>
                <span className='preco'>R$ 70</span>
                <span className='parcelas'>Em 12x sem juros</span>
                <span className='frete'>Frete Gratis</span>                
            </div>
        </div>
    )
}