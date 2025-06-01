import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log('in user context',user);
    
  return (
    <UserContext.Provider value={{user, setUser }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider