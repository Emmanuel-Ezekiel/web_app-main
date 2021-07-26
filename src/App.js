import './App.css'
import React from 'react'
import Newhome from './pages/Newhome'
import Body from './pages/body'
import Space from './pages/space'
import Footer from './pages/footer'

export default function App () {
  return (
    <div>
     <Newhome />
     <Space />
     <Body />
     <Space />
     <Footer/>
    </div>
  )
}
