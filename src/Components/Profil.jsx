import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'


function Profil() {
    const {user} = useContext(UserContext)

    if(!user){return(
        <h1>please login</h1>
    )}
    
    else{return(
        <h1>{user.Username}</h1>
    )}
}

export default Profil