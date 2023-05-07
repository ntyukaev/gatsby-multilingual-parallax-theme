/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Trans, Link } from 'gatsby-plugin-react-i18next'
import { format } from 'date-fns'
import LanguageSelector from './language-selector'
import Bio from './bio'
import ThemeSelector from './theme-selector'

const Layout = ({ title, children, languages, updated }) => {
  return (
    <div
      sx={{
        maxWidth: ['1', '10/12', '9/12', '3/4', '1/2'],
        margin: '0 auto',
        py: 40
      }}
    >
      <header>
        <nav
          sx={{
            display: 'flex',
            gridGap: '15px',
            alignItems: 'end',
            flexDirection: ['column', 'column', 'column', 'row'],
            justifyContent: 'space-between'
          }}
        >
          <div
            sx={{
              display: 'grid',
              textAlign: 'right',
              gridGap: '15px',
              gridTemplateColumns: [
                'auto',
                'auto',
                'auto',
                'auto auto auto auto'
              ]
            }}
          >
            <Link to="/">
              <Trans>Home</Trans>
            </Link>
            <Link to="/about">
              <Trans>About</Trans>
            </Link>
            <Link to="/projects">
              <Trans>Projects</Trans>
            </Link>
            <Link to="/contact">
              <Trans>Contact</Trans>
            </Link>
          </div>
          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeSelector />
            <LanguageSelector languages={languages} />
          </div>
        </nav>
        <h1>{title}</h1>
        {updated && (
          <div sx={{ textAlign: 'right' }}>
            <b>
              <Trans>updated at</Trans>:{' '}
              {format(new Date(updated), 'dd/MM/yyyy')}
            </b>
          </div>
        )}
        <hr />
      </header>
      <main>{children}</main>
      <hr />
      <footer>
        <Bio />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  languages: PropTypes.array,
  updated: PropTypes.string
}

export default Layout
