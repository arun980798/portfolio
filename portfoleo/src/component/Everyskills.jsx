import React from 'react'

const Everyskills = (props) => {
  return (
    <div className='border-2 border-white p-4 flex flex-col justify-between items-center'>
      <img src={props.data.addres} alt="" className='1/2  w-[4rem]' />
      <h1>{props.data.title}</h1>
  
    </div>
  )
}

export default Everyskills
