require("dotenv").config()

const queries = require('./src/utils/algolia_queries')

let siteMetadata = {
    title: `Alexandre Lima - Desenvolvedor Web e Mobile`,
    capitalizeTitleOnHome: true,
    logo: `/images/profile.jpg`,
    icon: `/images/icon.png`,
    searchIcon: `/images/search-icon.svg`,
    titleImage: `/images/wall.jpg`,
    introTag: `DESENVOLVEDOR WEB E MOBILE`,
    description: `Neste site irei escrever sobre programação web e mobile, além de mostrar meu portfolio`,
    author: `Alexandre Lima`,
    siteUrl: `https://alexandrelima.dev/`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "SOBRE MIM",
            url: "/about"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        }
    ],
    footerLinks: [
        {
            name: "GitHub",
            url: "https://github.com/akzhy/gatsby-starter-elemental"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "",
        description: ``,
        mail: "",
        phone: "",
        address: ""
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-plugin-algolia-search`,
            options: {
              appId: process.env.GATSBY_ALGOLIA_APP_ID,
              apiKey: process.env.ALGOLIA_ADMIN_KEY,
              indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
              queries,
              chunkSize: 10000,
              enablePartialUpdates: true,
            },
          },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            name: "uploads"
                        }
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 960,
                            linkImagesToOriginal: false
                        }
                    },
                    `gatsby-remark-lazy-load`,
                    `gatsby-remark-prismjs`
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `uploads`,
                path: `${__dirname}/static/assets/img`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/posts/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Alexandre Lima - Desenvolvedor Web`,
              short_name: `(a)`,
              start_url: `/`,
              background_color: `#171B27`,
              theme_color: `#171B27`,
              display: `minimal-ui`,
              icon: `src/images/icon.png`
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
              
            },
          },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
