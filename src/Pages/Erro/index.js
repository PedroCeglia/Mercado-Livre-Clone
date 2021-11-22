import React, {useState, useEffect} from 'react'
import './style.css'

// React Router
import { useLocation, useNavigate } from 'react-router'

export default function Erro(){

    // Get Location And History
    const location = useLocation()
    const navigate = useNavigate()

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
        <div className='container-erro'>
            <div className='container-erro-header'>
                <img onClick={()=>{navigate('/')}} src={srcDiretory + '/assets/logo.png'} alt='Logo Icon'/>
            </div>      
            <div className='content-erro'>
                <h1>404 Erro</h1>
                <h2>Page not exist</h2>

                <button onClick={()=>{navigate('/')}}>Back to the Home Page</button>
            </div>      
        </div>
    )
}