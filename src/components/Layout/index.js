import React from "react"
import PropTypes from "prop-types"
import Brand from "../brand"

import styled from "styled-components"
import GlobalStyles from "../../styles/global"

const LayoutWrapper = styled.section`
  display: block;
`

const LayoutMain = styled.main`
  background: #465881;
  min-height: 100vh;
  padding: 0;
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <nav>
        <Brand />
      </nav>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
