import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Contact = ({ data }) => {
  return (
    <Layout title={data.content.childMarkdownRemark.frontmatter.title}>
      <article
        dangerouslySetInnerHTML={{
          __html: data.content.childMarkdownRemark.html
        }}
      ></article>
    </Layout>
  )
}

Contact.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    content: file(
      relativeDirectory: { eq: $language }
      sourceInstanceName: { eq: "content" }
      name: { eq: "contact" }
    ) {
      childMarkdownRemark {
        html
        frontmatter {
          title
        }
      }
    }
  }
`

export const Head = () => <Seo />

export default Contact
