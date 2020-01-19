import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"
import Nav from "../Nav"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <div class="navbar-fixed">
        <Nav />
      </div>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
