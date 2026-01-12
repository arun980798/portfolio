import React from 'react'
import Whitelogo from '../component/Whitelogo'

const Nav = () => {
  return (
    <div className='flex bg-[#222222] items-center  justify-around'>
     <div id="left" className=' scale-75 '>
      <Whitelogo />
     </div>
     <div id="right" className='items-center flex text-[0.8rem] font-semibold p-0 gap-[2.5rem] group  '>
      <a href="#" className='font-semibold  active:scale-75  transition duration-300 group-hover:opacity-80  hover:bg-gradient-to-br from-[#FF8660] to-[#9A33FF] bg-clip-text hover:opacity-100  hover:text-transparent  '>Home</a>
      <a href="#" className='font-semibold  active:scale-75  transition duration-300 group-hover:opacity-80  hover:bg-gradient-to-br from-[#FF8660] to-[#9A33FF] bg-clip-text hover:opacity-100  hover:text-transparent  '>Projects</a>
      <a href="#" className='font-semibold  active:scale-75  transition duration-300 group-hover:opacity-80  hover:bg-gradient-to-br from-[#FF8660] to-[#9A33FF] bg-clip-text hover:opacity-100  hover:text-transparent  '>Experience</a>
      <a href="#" className='font-semibold  active:scale-75  transition duration-300 group-hover:opacity-80  hover:bg-gradient-to-br from-[#FF8660] to-[#9A33FF] bg-clip-text hover:opacity-100  hover:text-transparent  '>Contact</a>
     </div>
      
    </div>
  )
}

export default Nav
