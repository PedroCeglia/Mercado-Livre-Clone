// Import Database Reference
import {database} from '../../FirebaseConfig'

// Import Database Api`s
import {onValue, ref, set, update} from '@firebase/database'

// Create User In Database
export function createUserInDatabase(email, id){
    set(ref(database,`usuarios/${id}`),{
        id:id,
        email:email
    })
}

// Set User Name
export function setUserNameDatabase(name, id){
    update(ref(database,`usuarios/${id}`),{
        nome:name
    })
}

// Set user Foto
export function setUserFotoInDatabse(url, id){
    update(ref(database,`usuarios/${id}`),{
        foto:url
    })
}

// Get User By ID
export function getUserById(id, setUser){
    onValue(ref(database,`usuarios/${id}`), snapshot => {
        if(snapshot.exists()){
            setUser(snapshot.val())
        }
    })
}