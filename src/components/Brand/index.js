import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Brand = () => (
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, description, author },
      },
    }) => (
      <div className="Brand-wrapper">
        <img
          src="../src/images/logo.png"
          alt="Alexandre Lima - Desenvolvedor Web e Mobile"
        />
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p>{author}</p>
      </div>
    )}
  />
)

export default Brand
