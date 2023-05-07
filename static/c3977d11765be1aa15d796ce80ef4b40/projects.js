/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/layout'
import ProjectCard from '../components/project-card'

const Projects = ({ data }) => {
  const { t } = useTranslation()
  return (
    <Layout title={t('Projects')}>
      <section>
        {data?.projects?.nodes?.map(
          ({
            fields: { path, updated },
            frontmatter: { title, description, previewImageUrl }
          }) => (
            <div key={path} sx={{ pt: 3, pb: 3 }}>
              <ProjectCard
                updated={updated}
                preview={previewImageUrl}
                link={path}
                title={title}
              >
                {description}
              </ProjectCard>
            </div>
          )
        )}
      </section>
    </Layout>
  )
}

Projects.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query ($language: String!) {
    projects: allMarkdownRemark(
      filter: {
        fields: {
          language: { eq: $language }
          sourceInstanceName: { eq: "posts" }
        }
      }
    ) {
      nodes {
        fields {
          updated
          language
          path
        }
        frontmatter {
          title
          description
          previewImageUrl
        }
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export const Head = () => <Seo />

export default Projects
