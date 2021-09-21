import React from 'react'

const ProjectsLang = ({ tool }) => {
  return (
    <div className='ProjectLang'>
      <img src={tool.img} alt={tool.name} className='projectlang--image' />
      <h4>{tool.name}</h4>
    </div>
  )
}

export default ProjectsLang
