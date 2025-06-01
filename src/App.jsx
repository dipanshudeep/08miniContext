import { useState } from 'react'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profil from './Components/Profil'
import Login from './Components/Login'

function App() {


  return (
    <UserContextProvider>
      <h1>react context is coming you are in app </h1>
      <Login/>
      <Profil/>
    </UserContextProvider>
  )
}

export default App
