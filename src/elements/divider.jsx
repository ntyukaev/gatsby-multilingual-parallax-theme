/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { ParallaxLayer } from '@react-spring/parallax'

const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = '',
  fill = '',
  clipPath = '',
  children = null,
  className = ''
}) => (
  <ParallaxLayer
    sx={{
      position: 'absolute',
      width: 'full',
      height: 'full',
      background: bg,
      backgroundColor: bg,
      '#contact-wave': {
        color: fill,
        fill: 'currentColor'
      },
      clipPath
    }}
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

Divider.propTypes = {
  speed: PropTypes.number,
  offset: PropTypes.number,
  factor: PropTypes.number,
  bg: PropTypes.string,
  fill: PropTypes.string,
  clipPath: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

export default Divider
