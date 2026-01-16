import { useState } from 'react'
import Nav from './parts/Nav'
import Home from './parts/Home'
import Skills from './parts/Skills'


function App() {
 

  return (
    <div className='h-screen w-screen text-white overflow-x-hidden scrollbar-hide overflow-y-scroll bg-black '>
      <Nav />
      <Home />
      <Skills/>
  

    </div>
  )
}

export default App
