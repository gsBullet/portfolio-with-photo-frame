import React from 'react'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import { Outlet } from 'react-router-dom'

const FrontentLayouts = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default FrontentLayouts
