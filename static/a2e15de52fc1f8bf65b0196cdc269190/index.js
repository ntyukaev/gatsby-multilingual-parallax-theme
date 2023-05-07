/** @jsx jsx */
import { jsx, get } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import { Global } from '@emotion/react'
import { Parallax } from '@react-spring/parallax'
import Hero from '../components/Hero'
import Projects from '../components/projects'
import About from '../components/about'
import Contact from '../components/contact'
import ThemeSelector from '../components/theme-selector'
import LanguageSelector from '../components/language-selector'

const IndexPage = ({ data }) => {
  const sections = data.sections.nodes.reduce(
    (acc, cur) => {
      if (Object.prototype.hasOwnProperty.call(acc, cur.name)) {
        acc[cur.name] = cur.childMarkdownRemark.html
      }
      return acc
    },
    { hero: '', about: '', contact: '' }
  )
  return (
    <>
      <Global
        styles={(t) => ({
          '*': {
            boxSizing: 'inherit',
            '&:before': {
              boxSizing: 'inherit'
            },
            '&:after': {
              boxSizing: 'inherit'
            }
          },
          html: {
            fontSize: '18px',
            WebkitTextSizeAdjust: '100%'
          },
          img: {
            borderStyle: 'none'
          },
          pre: {
            fontFamily: 'monospace',
            fontSize: '1em'
          },
          '[hidden]': {
            display: 'none'
          },
          '::selection': {
            backgroundColor: get(t, 'colors.primary'),
            color: get(t, 'colors.background')
          }
        })}
      />
      <Parallax pages={5}>
        <Hero content={sections.hero} offset={0} factor={1} />
        <Projects offset={1} factor={2} />
        <About content={sections.about} offset={3} factor={1} />
        <Contact content={sections.contact} offset={4} factor={1} />
      </Parallax>
      <div
        sx={{
          position: 'fixed',
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          px: 30,
          py: 15
        }}
      >
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <ThemeSelector />
          <LanguageSelector />
        </div>
      </div>
    </>
  )
}

IndexPage.propTypes = {
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
    sections: allFile(
      filter: {
        relativeDirectory: { eq: $language }
        sourceInstanceName: { eq: "sections" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          html
        }
        name
      }
    }
  }
`

export const Head = () => <Seo />

export default IndexPage
