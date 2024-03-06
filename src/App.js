import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import Deals from './Components/Deals'
import Header from './Components/Header'
import Toolsoption from './Components/Toolsoption'
import Menu from './Components/Menu'
import Product from './Components/Product'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Toolsoption/>
      <Menu/>
      <Product/>
      <Deals/>
      <Signup/>
      <Footer/>
    </div>
  )
}

export default App