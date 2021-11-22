// Import Database Reference
import {database} from '../../FirebaseConfig'

// Import Database Api`s
import {ref, set, update} from '@firebase/database'

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