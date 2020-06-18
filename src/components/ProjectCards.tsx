/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import { ProjectSummary } from '../app/types'

import * as styleRefs from './ProjectCards.treat'
import LinkCard from './LinkCard'
import CardLayout from './CardLayout'

interface ProjectCardProps {
  project: ProjectSummary
}

function ProjectCard(props: ProjectCardProps) {
  const styles = useStyles(styleRefs)
  const { project } = props

  return (
    <li>
      <LinkCard
        to={`/projects${project.fields.slug}`}
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

const ProjectCards = (props: ProjectCardsProps) => (
  <CardLayout>
    {props.projects.map(project => (
      <ProjectCard key={project.fields.slug} project={project} />
    ))}
  </CardLayout>
)

export default ProjectCards
