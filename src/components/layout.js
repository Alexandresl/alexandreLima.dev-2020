import React from "react"
import PropTypes from "prop-types"
import Brand from "./Brand"

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <Brand></Brand>
      </nav>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
