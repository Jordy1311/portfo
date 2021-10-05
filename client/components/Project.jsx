import React from 'react'

const Project = ({ project }) => {
  return (
    <a href={project.link} target='__blank' className='Project'>
      <img src={project.img} alt={project.imgDescription} className='project--image' />
      <h4>{project.title}</h4>
    </a>
  )
}

export default Project
