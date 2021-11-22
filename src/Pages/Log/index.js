import React, {useState} from 'react'
import './style.css'

// Import AuthApi
import { singInUser, createUser } from '../../Firebase/API/AuthApi'

export default function Log(){

    // Sing-In User
    const [inputSName, setInputSName] = useState("")
    const [inputSEmail, setInputSEmail] = useState("")
    const [inputSPassword, setInputSPassword] = useState("")
    function create(){
        if(inputSName.length >= 4){
            if(inputSEmail.indexOf('@') > -1){
                if(inputSPassword.length > 6){
                    createUser(inputSName, inputSEmail, inputSPassword)
                } else{
                    alert("A Senha Precisa Ter Mais De 6 Digitos")
                }
            }else{
                alert("Digite Um Email Valido")
            }
        }else{
            alert("O Nome Deve Ter Mais De 3 Letras")
        }
    }
    // Log-In User
    const [inputLEmail, setInputLEmail] = useState("")
    const [inputLPassword, setInputLPassword] = useState("")
    function login(){
        if(inputLEmail.indexOf('@') > -1 ){
            if(inputLPassword.length > 6){
                singInUser(inputLEmail, inputLPassword)
            } else{
                alert('A Senha Precisa ter no Minimo 6 Digitos')
            }
        }else{
            alert('Preencha um Email Que Seja Valido')
        }
    }

    return(
        <div className='container-log'>
            <div className='container-header-log'>
                <img src='../assets/logo.png'/>
            </div>
            <div className='content-log'>
                <div className='container-sing-in'>
                    <h2>Sing-In</h2>
                    <input type='text' placeholder='ex ...Maria' 
                        value={inputSName} onChange={text => setInputSName(text.target.value)}/>
                    <input type='email' placeholder='ex ...@gmail' 
                        value={inputSEmail} onChange={text => setInputSEmail(text.target.value)}/>
                    <input type='password' placeholder='ex ...123Maria@' 
                        value={inputSPassword} onChange={text => setInputSPassword(text.target.value)}/>
                    <button onClick={create}>Sing-In</button>
                </div>
                <div className='log-in-container none'>
                    <h2>Log-In</h2>
                    <input type='email' placeholder='ex ...@gmail' 
                        value={inputLEmail} onChange={text => setInputLEmail(text.target.value)}/>
                    <input type='password' placeholder='ex ...123Maria@' 
                        value={inputLPassword} onChange={text => setInputLPassword(text.target.value)}/>
                    <button onClick={login}>Sing-In</button>
                </div>
            </div>
        </div>
    )
}