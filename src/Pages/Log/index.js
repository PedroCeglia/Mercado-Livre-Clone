import React, {useState} from 'react'
import './style.css'

// Import AuthApi
import { logInUser, createUser } from '../../Firebase/API/AuthApi'

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
                logInUser(inputLEmail, inputLPassword)
            } else{
                alert('A Senha Precisa ter no Minimo 6 Digitos')
            }
        }else{
            alert('Preencha um Email Que Seja Valido')
        }
    }

    // Change The Container Ative (LogIn/SingIn)
    function togglerContainers(){
        const singIn = document.querySelector('.container-log .content-log .container-sing-in')
        const logIn = document.querySelector('.container-log .content-log .container-log-in')
        singIn.classList.toggle('none')
        logIn.classList.toggle('none')
    }

    return(
        <div className='container-log'>
            <div className='container-header-log'>
                <img src='../assets/logo.png'/>
            </div>
            <div className='content-log'>
                <div className='container-sing-in'>
                    <h2>Sing-In</h2>
                    <input type='text' placeholder='Nome' 
                        value={inputSName} onChange={text => setInputSName(text.target.value)}/>
                    <input type='email' placeholder='Email' 
                        value={inputSEmail} onChange={text => setInputSEmail(text.target.value)}/>
                    <input type='password' placeholder='Senha' 
                        value={inputSPassword} onChange={text => setInputSPassword(text.target.value)}/>
                    <button onClick={create}>Sing-In</button>
                    <button className='change-container' onClick={togglerContainers}>Já tem conta?</button>
                </div>
                <div className='container-log-in none'>
                    <h2>Log-In</h2>
                    <input type='email' placeholder='Email' 
                        value={inputLEmail} onChange={text => setInputLEmail(text.target.value)}/>
                    <input type='password' placeholder='Senha' 
                        value={inputLPassword} onChange={text => setInputLPassword(text.target.value)}/>
                    <button onClick={login}>Sing-In</button>
                    <button className='change-container' onClick={togglerContainers}>Não tem uma conta?</button>
                </div>
            </div>
        </div>
    )
}