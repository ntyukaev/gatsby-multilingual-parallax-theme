# Gatsby Multilingual Parallax Theme

<p align="center">
<img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width=150 height=150 />
</p>

Multilingual blog website with parallax landing page.

## Demo

* [Demo Website](https://ntyukaev.github.io/gatsby-multilingual-parallax-theme/)

This theme is inspired by the following Gatsby themes:

* [Gatsby Starter Portfolio: Cara](https://github.com/LekoArts/gatsby-starter-portfolio-cara)
* [Gatsby's blog starter](https://github.com/gatsbyjs/gatsby-starter-blog)

## Features

* Landing page with beautiful parallax effects.
* Blog posts can be written in multiple languages.
* Support for code syntax highlighting.
* Light/Dark color modes.
* i18n support

## Quick Start

1.  **Clone the repository**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#gatsby-cli)) to create a new site, specifying the blog starter.

    ```shell
    git clone https://github.com/ntyukaev/gatsby-multilingual-parallax-theme.git my-blog
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-blog
    yarn
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).

## Language configuration

The `gatsby-config.js` file provides example configuration for English and French languages.
For more details, refer to the [gatsby-plugin-react-i18next](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/) documentation page.


## Adding content

The website uses markdown for authoring content.
The theme is preconfigured to search the content in specific folders:

* `./src/posts/<lang>/`: This folder contains blog posts for different languages.
Multi-language posts should have the same name.
For example, `./src/posts/en/post_1.md` and `./src/posts/fr/post_1.md`
* `./src/content/<lang>/`: The content for `about` and `contact` pages in different languages.
* `./src/sections/<lang>/`: This folder contains content for sections on the landing page.
* `./locales`: The folder contains i18n localization configuration for website elements.
