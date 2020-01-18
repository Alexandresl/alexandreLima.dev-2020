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
    <S.BrandWrapper>
      <S.BrandLInk>
        <Avatar />
        <p>{author}</p>
      </S.BrandLInk>
    </S.BrandWrapper>
  )
}

export default Brand
