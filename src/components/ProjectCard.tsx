import React from 'react'

import Heading from './Heading'
import LinkCard from './LinkCard'
import { ProjectSummary } from '../app/types'

interface ProjectCardProps {
  project: ProjectSummary
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = (props) => {
  const { project } = props

  return (
    <li>
      <LinkCard
        to={`/projects${project.fields.slug}`}
        cover={project.frontmatter.cover}
        moreCopy="See more"
      >
        <Heading level={2}>{project.frontmatter.title}</Heading>
        <p className="my-2">
          {project.frontmatter.startDate}&mdash;
          {project.frontmatter.endDate || 'Present'}
        </p>
        <p>{project.excerpt}</p>
      </LinkCard>
    </li>
  )
}

export default ProjectCard
