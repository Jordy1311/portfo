import React from 'react'

const Project = ({ project }) => {
  return (
    <a href={project.link} target='__blank' className='Project'>
      <video autoPlay loop muted playsInline className='project--image'>
          <source src={project.img} type="video/webm" />
      </video>

      <h4>{project.title}</h4>
    </a>
  )
}

export default Project
