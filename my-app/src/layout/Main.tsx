import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Cart, History, Delivery} from '../pages';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/delivery' element={<Delivery/>} />
      </Routes>
    </Router>
  )
}

export default Main