import React from 'react'

const Home = () => {
  return (
    <div className='w-screen px-[5rem] py-[3rem] flex justify-center items-center'>
      <div id="cover" className=' flex flex-col justify-center items-center gap-[2rem] '>
        <div id="avtar" className=' bg-gradient-to-r from-[#FF8660] to-[#8000FF] rounded-full 1/1 overflow-hidden w-[6rem] h-[6rem]'>
          <img src="/Avatar.png" className='h-full w-full ' alt="" />
        </div>
        <h1 id="titel" className=' text-[2.6rem] uppercase font-extrabold   '> frontend <span className=' " bg-gradient-to-r from-[#FF8660] to-[#8000FF]  bg-clip-text text-transparent' >developer</span> </h1>
        <div id="effect " className=' relative  '>
          <div id="whitetext" className=' absolute  '>
            <p id="aboutme" className='font-medium text-gray-400  text-[0.9rem] text-center   '>I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform.</p>

          </div>
          <div id="colortext " className=' bg-gradient-to-r from-[#FF8660] to-[#8000FF]  bg-clip-text text-transparent'>
            <p id="aboutme" className='font-medium   text-[0.9rem] text-center   '>I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform.</p>

          </div>
        </div>
        
        <div id="button" className=' flex gap-3 group  '>
          <button className=' bg-white border-2 border-white  group-hover:opacity-20  group-hover:scale-95  hover:opacity-100 text-[#161513] px-[0.8rem] text-[0.9rem] font-semibold  py-[0.4rem] rounded-4xl hover:scale-105 transform duration-75  capitalize  '>about me </button>
          <button className=' bg-transparent border-2 border-white group-hover:opacity-20  group-hover:scale-95  hover:opacity-100  text-white px-[0.8rem] text-[0.9rem] font-semibold  py-[0.4rem] rounded-4xl hover:scale-105 transform duration-75  capitalize  '>Download CV</button>
        </div>





      </div>

    </div>
  )
}

export default Home
