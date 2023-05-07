/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import { Link, Trans } from 'gatsby-plugin-react-i18next'

const ProjectCard = ({ link, title, children, preview, updated }) => (
  <Link
    to={link}
    sx={{
      display: 'block',
      width: '100%',
      color: 'primary',
      boxShadow: 'lg',
      position: 'relative',
      textDecoration: 'none',
      borderRadius: 'lg',
      background: 'divider',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 'xl'
      }
    }}
  >
    <img
      sx={{
        display: 'block',
        width: '100%',
        height: '10rem',
        objectFit: 'cover'
      }}
      src={preview}
      alt={preview}
    />
    <div sx={{ padding: 4 }}>
      <h3
        sx={{
          textTransform: 'uppercase',
          letterSpacing: 'wide',
          fontWeight: 'medium',
          lineHeight: 1
        }}
      >
        {title}
      </h3>
      <p
        sx={{
          p: {
            color: 'white',
            margin: 0
          }
        }}
      >
        {children}
      </p>
      <div sx={{ textAlign: 'right' }}>
        <Trans>updated at</Trans>: {format(new Date(updated), 'dd/MM/yyyy')}
      </div>
    </div>
  </Link>
)

ProjectCard.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  preview: PropTypes.string,
  updated: PropTypes.string
}

export default ProjectCard
