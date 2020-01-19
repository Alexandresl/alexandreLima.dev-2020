import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import * as S from "./styled"

const Brand = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <S.BrandLogo href="#!" className="left">
      <S.Brand>
        <Avatar />
        <div class="author">{author}</div>
      </S.Brand>
    </S.BrandLogo>
  )
}

export default Brand
