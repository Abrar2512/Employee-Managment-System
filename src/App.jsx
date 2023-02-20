import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './componant/Navbar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import LoginOnly from './pages/LoginOnly'
import { Register } from './pages/Register'
import ViewTable from './pages/ViewTable'
export const Context = createContext()
const App = () => {
  const [auth, setAuth] = useState(false)
  const [data, setData] = useState()
  return <Context.Provider value={{ auth, setAuth, data, setData }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chart' element={<ViewTable />} />
        <Route path='/dash' element={<LoginOnly compo={<Dashboard />} />} />
      </Routes>
    </BrowserRouter>
  </Context.Provider>
}

export default App