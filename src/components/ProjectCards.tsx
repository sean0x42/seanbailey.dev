/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import { ProjectSummary } from '../app/types'
import * as styleRefs from './ProjectCards.treat'
import LinkCard from './LinkCard'

interface ProjectCardProps {
  project: ProjectSummary
}

function ProjectCard(props: ProjectCardProps) {
  const styles = useStyles(styleRefs)
  const { project } = props

  return (
    <li>
      <LinkCard
        to={`/projects/${props.project.frontmatter.slug}`}
        fluidImage={project.frontmatter.cover.childImageSharp.fluid}
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

interface ProjectCardsProps {
  projects: ProjectSummary[]
}

function ProjectCards(props: ProjectCardsProps) {
  const styles = useStyles(styleRefs)

  return (
    <ul className={styles.cardWrapper}>
      {props.projects.map(project => (
        <ProjectCard key={project.frontmatter.slug} project={project} />
      ))}
    </ul>
  )
}

export default ProjectCards
