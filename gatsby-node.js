const path = require('path')
const postsTemplate = path.resolve(`${__dirname}/src/templates/blog-post.js`)

const getPostUrl = (slug) => path.join('/posts', slug, '/')

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `type Frontmatter {
      preview: String
      previewImageUrl: String
      title: String!
      description: String
    }`,
    `type Fields {
      updated: Date
      sourceInstanceName: String
      language: String
      path: String
    }`,
    `type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }`
  ]
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Frontmatter: {
      previewImageUrl: {
        type: 'String',
        resolve: async ({ preview }, args, context, info) => {
          const previewImage = preview || 'default.jpeg'
          const node = await context.nodeModel.findOne({
            type: 'File',
            query: {
              filter: {
                sourceInstanceName: {
                  eq: 'preview'
                },
                relativePath: {
                  eq: previewImage
                }
              }
            }
          })
          const publicURL = await context.nodeModel.getFieldValue(
            node,
            'publicURL'
          )
          return publicURL
        }
      }
    }
  }
  createResolvers(resolvers)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type !== 'MarkdownRemark') {
    return
  }
  const fileNode = getNode(node.parent)
  const { sourceInstanceName, relativeDirectory, name, changeTime } = fileNode

  createNodeField({
    node,
    name: 'sourceInstanceName',
    value: sourceInstanceName
  })

  createNodeField({
    node,
    name: 'updated',
    value: changeTime
  })

  createNodeField({
    name: 'language',
    node,
    value: relativeDirectory || 'en'
  })

  if (sourceInstanceName === 'posts') {
    createNodeField({
      name: 'path',
      node,
      value: getPostUrl(name)
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          fields {
            path
            language
            sourceInstanceName
          }
          frontmatter {
            title
          }
        }
      }
      allLocale {
        nodes {
          language
        }
      }
    }
  `)
  const posts = result.data.allMarkdownRemark.nodes.filter(
    (post) => post.fields.sourceInstanceName === 'posts'
  )

  const languages = result.data.allLocale.nodes.map(({ language }) => language)

  const postLanguagesMap = posts.reduce((acc, cur) => {
    const { fields } = cur
    if (!Object.prototype.hasOwnProperty.call(acc, fields.path)) {
      acc[fields.path] = []
    }
    if (acc[fields.path].includes(fields.language)) {
      throw new Error(
        `There exists two posts with name=${fields.path} and lang=${fields.language}.
       Posts with equal "name" values must have different "language" values.`
      )
    }
    if (!languages.includes(fields.language)) {
      throw new Error(`
      You didn't provide configuration for language=${fields.language} in "gatsby-config.js"
      `)
    }
    acc[fields.path].push(fields.language)
    return acc
  }, {})

  const langPostsMap = posts.reduce((acc, cur) => {
    const { fields } = cur
    if (!Object.prototype.hasOwnProperty.call(acc, fields.language)) {
      acc[fields.language] = []
    }
    acc[fields.language].push({
      ...cur
    })
    return acc
  }, {})

  Object.values(langPostsMap).forEach((posts) => {
    posts.forEach((post, index) => {
      const previous = posts[index - 1]
      const next = posts[index + 1]
      const { id, fields } = post
      createPage({
        path: path.join('/', fields.language, fields.path, '/'),
        component: postsTemplate,
        context: {
          id,
          languages: postLanguagesMap[fields.path],
          previous,
          next
        }
      })
    })
  })
}
