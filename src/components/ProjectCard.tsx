import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import { ProjectSummary } from '../app/types'
import LinkCard from './LinkCard'
import * as styleRefs from './ProjectCards.treat'

interface ProjectCardProps {
  project: ProjectSummary
}

const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  const styles = useStyles(styleRefs)
  const { project } = props

  return (
    <li>
      <LinkCard
        to={`/projects${project.fields.slug}`}
        cover={project.frontmatter.cover}
        moreCopy="See more"
      >
        <h3 className={styles.title}>{project.frontmatter.title}</h3>
        <p className={styles.date}>
          {project.frontmatter.startDate}&mdash;
          {project.frontmatter.endDate || 'Present'}
        </p>
        <p>{project.excerpt}</p>
      </LinkCard>
    </li>
  )
}

export default ProjectCard
