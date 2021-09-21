import React from 'react'

const Project = ({ project }) => {
  return (
    <div className='Project'>
      <img src={project.img} alt={project.imgDescription} className='project--image' />
      <h4>{project.title}</h4>
    </div>
  )
}

export default Project
