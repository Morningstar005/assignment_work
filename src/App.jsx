import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './utils/authProtection.'
import { Home, Login, Signup } from './pages'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path="/" element={<PrivateRoute element={<Home />} />} />
      </Routes>
      </div>
  )
}

export default App