import React from 'react'

const Project = ({ project }) => {
  return (
    <a href={project.link} target='__blank' className='Project'>
      <video 
        loop
        muted
        playsInline
        onMouseOver={e => e.target.play()}
        onMouseOut={e => e.target.pause()}
        className='project--video'>
          <source src={project.img} type="video/webm" />
      </video>

      <h4>{project.title}</h4>
    </a>
  )
}

export default Project
