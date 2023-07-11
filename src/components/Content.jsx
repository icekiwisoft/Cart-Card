import React from 'react'
import Headline from './pages/Headline'
import Cardsection from './pages/Cardsection'
import Footer from './pages/Footer'

const Content = () => {
  return (
    <>
    <div className=' m-0 p-0 w-[80vw]'>
        <Headline/>
        <Cardsection/>
        <Footer/>
    </div> 
    </>
  )
}

export default Content