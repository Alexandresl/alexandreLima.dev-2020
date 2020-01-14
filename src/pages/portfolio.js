import React from "react"
import { Link } from "gatsby"

const PortfolioPage = () => (
  <>
    <h1>Portfolio Page</h1>
    <ul>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" activeStyle={{ color: "red" }}>
          About
        </Link>
      </li>
      <li>
        <Link to="/portfolio" activeStyle={{ color: "red" }}>
          Portfolio
        </Link>
      </li>
    </ul>
  </>
)

export default PortfolioPage
