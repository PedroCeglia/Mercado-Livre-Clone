import React from 'react'
import './style.css'

export default function Log(){
    return(
        <div className='container-log'>
            <div className='container-header-log'>
                <img src='../assets/logo.png'/>
            </div>
            <div className='content-log'>
                <div className='container-sing-in'>
                    <h2>Sing-In</h2>
                    <input type='text' placeholder='ex ...@gmail' id='id-input-nome-sing-in'/>
                    <input type='email' placeholder='ex ...@gmail' id='id-input-email-sing-in'/>
                    <input type='password' placeholder='ex ...@gmail' id='id-input-senha-sing-in'/>
                    <button>Sing-In</button>
                </div>
                <div className='log-in-container none'>
                    <h2>Log-In</h2>
                    <input type='email' placeholder='ex ...@gmail' id='id-input-email-sing-in'/>
                    <input type='password' placeholder='ex ...@gmail' id='id-input-senha-sing-in'/>
                    <button>Sing-In</button>
                </div>
            </div>
        </div>
    )
}