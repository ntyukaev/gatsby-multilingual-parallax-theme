/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { useI18next } from 'gatsby-plugin-react-i18next'

const LanguageSelector = ({ languages }) => {
  const { language, languages: allLanguages, changeLanguage } = useI18next()
  const options = languages || allLanguages
  return (
    <>
      {options?.length > 1 && (
        <select
          sx={{
            color: 'primary',
            background: 'transparent',
            cursor: 'pointer',
            border: 'none',
            fontSize: '1em',
            outline: 'none'
          }}
          defaultValue={language}
          onChange={(e) => {
            e.preventDefault()
            changeLanguage(e.target.value)
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </>
  )
}

LanguageSelector.propTypes = {
  languages: PropTypes.array
}

export default LanguageSelector
