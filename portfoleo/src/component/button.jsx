import React from 'react'

const button = (props) => {
  return (
    <div>
      <button className=' bg-white border-2 border-white  group-hover:opacity-10  group-hover:scale-95  hover:opacity-100 text-[#161513] px-[0.8rem] text-[0.9rem] font-semibold  py-[0.4rem] rounded-4xl hover:scale-105 transform duration-200 active:scale-95 capitalize  '>{props.button}</button>
    </div>
  )
}

export default button
