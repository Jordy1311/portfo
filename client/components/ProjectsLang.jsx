import React from 'react'

const ProjectsLang = ({ tool }) => {
  return (
    <a href={tool.link} target='__blank' className='ProjectLang'>
      <img src={tool.img} alt={tool.name} className='projectlang--image' />
      <h4>{tool.name}</h4>
    </a>
  )
}

export default ProjectsLang
