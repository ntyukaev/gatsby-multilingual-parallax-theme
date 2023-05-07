/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import Sun from '../icons/sun'
import Moon from '../icons/moon'

const ThemeSelector = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  const handleThemeChange = () => {
    const next = isDark ? 'light' : 'dark'
    document.querySelector('html').className = `theme-ui-${next}`
    setColorMode(next)
  }
  return (
    <div
      onClick={handleThemeChange}
      onKeyDown={handleThemeChange}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1.875em',
        height: '1.875em',
        color: 'primary'
      }}
    >
      {isDark ? <Moon /> : <Sun />}
    </div>
  )
}

export default ThemeSelector
