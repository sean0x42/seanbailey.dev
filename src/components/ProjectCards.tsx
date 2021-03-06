import React from 'react'

import CardLayout from './CardLayout'
import LinkCard from './LinkCard'
import { ProjectSummary } from '../app/types'

interface ProjectCardsProps {
  projects: ProjectSummary[]
}

const ProjectCards: React.FunctionComponent<ProjectCardsProps> = (props) => (
  <CardLayout>
    {props.projects.map((project) => {
      const { cover, title, startDate, endDate } = project.frontmatter

      return (
        <li key={project.fields.slug}>
          <LinkCard
            to={`/projects${project.fields.slug}`}
            cover={cover}
            coverBg="bg-grey-900 dark:bg-grey-800"
            title={title}
            date={`${startDate} - ${endDate ?? 'Present'}`}
            copy={project.excerpt}
            more="See more"
          />
        </li>
      )
    })}
  </CardLayout>
)

export default ProjectCards
