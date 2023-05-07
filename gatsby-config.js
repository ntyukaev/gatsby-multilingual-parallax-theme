const siteUrl = 'http://localhost:8000'
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteTitle: 'Gatsby Blog Theme',
    siteTitleAlt: 'Gatsby Blog Theme',
    siteHeadline: 'Gatsby Blog Theme',
    siteUrl,
    siteDescription: 'Gatsby Blog',
    siteLanguage: 'en',
    author: 'ntyukaev',
    social: '',
    siteImage: '/banner.jpg'
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `${__dirname}/src/images/icon.png`
      },
      __key: 'manifest'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'preview',
        path: `${__dirname}/src/preview/`
      },
      __key: 'preview'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      },
      __key: 'posts'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/sections',
        name: 'sections'
      },
      __key: 'sections'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content'
      },
      __key: 'content'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/locales`,
        name: 'locale'
      },
      __key: 'locales'
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale', // name given to `gatsby-source-filesystem` plugin.
        languages: ['en', 'fr'],
        redirect: true,
        defaultLanguage: 'en',
        fallbackLanguage: 'en',
        generateDefaultLanguagePage: true,
        siteUrl,
        trailingSlash: 'always',
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/posts/:uid',
            getLanguageFromPath: true
          }
        ]
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/
                    }
                  }
                }
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              },
              escapeEntities: {}
            }
          }
        ]
      }
    }
  ]
}
