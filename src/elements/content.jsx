/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { ParallaxLayer } from '@react-spring/parallax'

const Content = ({ speed, offset, children, className = '', factor = 1 }) => (
  <ParallaxLayer
    sx={{
      padding: [3, 4, 4, 5],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    }}
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

Content.propTypes = {
  speed: PropTypes.number,
  offset: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  factor: PropTypes.number
}

export default Content
