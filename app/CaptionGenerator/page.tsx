import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import CcGenerator from '../components/1ccGenerator'

const Page = () => {
  return (
    <div className=" bg-custom-bodyBg">
    <Navbar/>
    <CcGenerator/>
    <Footer/>
    </div>
  )
}

export default Page