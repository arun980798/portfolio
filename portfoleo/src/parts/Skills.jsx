import React from 'react'
import Everyskills from '../component/Everyskills'

const Skills = () => {
  

    let skills = [
      { addres: "/html.png", title: "html" },
    { addres: "/css.png", title: "css" },
    { addres: "/scss.png", title: "scss" },
    { addres: "/js.png", title: "js" },
  
    ]
  return (
    <div className='flex justify-center flex-col items-center gap-5'>
      <h1>Skills</h1>
    <div id="allskills" className=' flex flex-wrap gap-3 '>
    {
      skills.map((e)=>{
        return <Everyskills data ={e}/>
      })
    }
    </div>
      
    </div>
  )
}

export default Skills
