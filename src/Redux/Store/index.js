// Import Redux
import { createStore } from "redux";

const INITIAL_STATE = {
    user:{
        exist:false,
        user:{}        
    }
}

function reducer(state = INITIAL_STATE, action){
    if(action.type === 'SET_USER'){
        if(action.user != null){
            console.log(action.user)
            return{...state, user:action.user}
        }
    }
    return state
}

const store = createStore(reducer)

// Export To index.js
export default store
