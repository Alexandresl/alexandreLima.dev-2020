import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

const Brand = () => {
  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <div className="Brand-Wrapper">
      <Avatar />
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{author}</p>
    </div>
  )
}

export default Brand
