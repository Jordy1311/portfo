import React from 'react'

import Project from './Project'
import ProjectsLang from './ProjectsLang'

import data from '../data.js'

const Projects = () => {
  const { projectsData, langsData } = data

  return (
    <div id='Projects'>
      <h1>projects</h1>
      <div className="projects--projects-group">
        {projectsData.map(project => <Project key={project.title} project={project} />)}
      </div>
      <h1>tools & langs</h1>
      <div className="projects--langs-group">
        {langsData.map(tool => <ProjectsLang key={tool.name} tool={tool} />)}
      </div>
    </div>
  )
}

export default Projects
