import React from 'react'

import { ProjectSummary } from '../app/types'
import CardLayout from './CardLayout'
import ProjectCard from './ProjectCard'

interface ProjectCardsProps {
  projects: ProjectSummary[]
}

const ProjectCards: React.FunctionComponent<ProjectCardsProps> = (props) => (
  <CardLayout>
    {props.projects.map((project) => (
      <ProjectCard key={project.fields.slug} project={project} />
    ))}
  </CardLayout>
)

export default ProjectCards
