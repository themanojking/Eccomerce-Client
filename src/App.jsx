import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import FoodCard from './Components/FoodCard'
import CartPage from './Pages/CartPage'

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
