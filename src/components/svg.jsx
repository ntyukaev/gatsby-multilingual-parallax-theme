/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'
import { hidden } from '../styles/utils'

const viewBox = {
  triangle: '0 0 30 30',
  circle: '0 0 30 30',
  arrowUp: '0 0 30 42',
  upDown: '0 0 30 44.58',
  box: '0 0 30 30',
  hexa: '0 0 30 30',
  cross: '0 0 100 100'
}

const Svg = ({
  stroke = false,
  color = '',
  width,
  icon,
  left,
  top,
  hiddenMobile = false
}) => (
  <svg
    sx={{
      position: 'absolute',
      stroke: stroke ? 'currentColor' : 'none',
      fill: stroke ? 'none' : 'currentColor',
      display: hiddenMobile ? hidden : 'block',
      color,
      width,
      left,
      top
    }}
    viewBox={viewBox[icon]}
  >
    <use href={withPrefix(`/icons.svg#${icon}`)} />
  </svg>
)

Svg.propTypes = {
  stroke: PropTypes.bool,
  color: PropTypes.any,
  width: PropTypes.any,
  icon: PropTypes.string,
  left: PropTypes.any,
  top: PropTypes.any,
  hiddenMobile: PropTypes.bool
}

export default Svg
