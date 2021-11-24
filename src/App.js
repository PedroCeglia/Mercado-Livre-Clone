import React, {useState, useEffect, useCallback} from 'react'
import './app.css'

// Import React Redux
import { connect} from 'react-redux'

// Import AuthApi
import {listenerUserLog} from './Firebase/API/AuthApi'

// Import DatabaseApi
import {getUserById} from './Firebase/API/DatabaseApi'

// Import Rotas
import Rotas from './Rotas';

function App({dispatch}){

  // Get User Databse
  const [userAuth, setUserAuth] = useState()
  const [userDatabase, setUserDatabase] = useState()
  useEffect(()=>{
    listenerUserLog(setUserAuth)
  },[])
  useEffect(()=>{
    if(userAuth != null){
      getUserById(userAuth.uid, setUserDatabase)
    }
  },[userAuth])

  // Set User In Redux
  const setUserInRedux = useCallback((exist)=>{
    if(exist !== false){
      return {
        type:'SET_USER',
        user:{
          exist:true,
          user:userDatabase
        }
      }      
    } else {
      return {
        type:'SET_USER',
        user:{
          exist:false,
          user:{}
        }
      }
    }
  },[userDatabase])

  useEffect(()=>{
      if(userDatabase != null){
        dispatch(setUserInRedux(true))
      }else{
        dispatch(setUserInRedux(false))
      } 
  },[userDatabase,setUserInRedux, dispatch])

  return (
      <Rotas/>      
  );
}

export default connect()(App);
