import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Brand = () => (
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, description, author },
      },
    }) => (
      <div className="Brand-Wrapper">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p>{author}</p>
      </div>
    )}
  />
)

export default Brand
