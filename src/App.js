import React from 'react'
import Main from './components/Main'
import { Route,Routes } from 'react-router-dom'
import Signin from './components/Signin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signin></Signin>}></Route>
        <Route path='/main' element={<Main></Main>}></Route>
      </Routes>
      
      
      
    </div>
  )
}

export default App