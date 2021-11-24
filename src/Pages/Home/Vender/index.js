import React from 'react'
import './style.css'

// Import React Redux
import { connect } from 'react-redux'

 function Vender({user, userExist}){

    return(
        <div className='vender-container'>
            <div className='vender-content'>
                <div className='images-area'>
                    <label htmlFor='add-post-input-id'><img src='../assets/add-post.png' alt='add-image-icon'/></label>
                    <input className='file' type='file' id='add-post-input-id'/>
                    <div className='images-choice'></div>
                </div>
                <div className='text-area'>
                    <input type='text' placeholder='Nome do Produto'/>
                    <input type='number' placeholder='Preço do Produto'/>
                    <input type='text' placeholder='Descrição'/>
                    <button>Criar produto</button>
                </div>
            </div>
        </div>
    )
}

export default connect(state =>({user:state.user.user,userExist:state.user.exist}))(Vender)