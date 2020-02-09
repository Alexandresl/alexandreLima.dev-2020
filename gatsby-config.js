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
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
    author: `Alexandre Lima`,
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
        api_url: "./test.json",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "hi@akzhy.com",
        phone: "000-000-0000",
        address: "1234 \nLocation \nLocation"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
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
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
