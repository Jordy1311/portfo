import React from 'react'

import Project from './Project'
import ProjectsLang from './ProjectsLang'

const Projects = () => {
  const projects = [
    {
      title: "project 1",
      img: "https://source.unsplash.com/random/800x600",
      imgDescription: "This is a photo of my project"
    },
    {
      title: "project 2",
      img: "https://source.unsplash.com/random/800x600",
      imgDescription: "This is a photo of my project"
    },
    {
      title: "project 3",
      img: "https://source.unsplash.com/random/800x600",
      imgDescription: "This is a photo of my project"
    }
  ]

  const langs = [
    {
      name: "CSS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png"
    },
    {
      name: "Something",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png"
    },
    {
      name: "SOMETHING ELSE",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png"
    }
  ]

  return (
    <div className='Projects'>
      <h1>projects</h1>
      <div className="projects--projects-group">
        {projects.map(project => <Project key={project.title} project={project} />)}
      </div>
      <h1>tools & langs</h1>
      <div className="projects--langs-group">
        {langs.map(tool => <ProjectsLang key={tool.name} tool={tool} />)}
      </div>
    </div>
  )
}

export default Projects
