/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'
import Seo from '../components/seo'
import Layout from '../components/layout'

const PageTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { html, frontmatter, fields } = markdownRemark
  const { previous, next, languages } = pageContext
  return (
    <Layout
      updated={fields.updated}
      title={frontmatter.title}
      languages={languages}
      path={fields.path}
    >
      <article
        sx={{ textAlign: 'justify' }}
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <section
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: html }}
        ></section>
      </article>
      <nav>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.path} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.path} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export const Head = () => <Seo />

export default PageTemplate

export const query = graphql`
  query ($id: String!, $language: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
      fields {
        updated
        path
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
