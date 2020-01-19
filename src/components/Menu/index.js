import React from "react"
import { Link } from "gatsby"

import * as S from "./styled"

const Menu = () => (
  <>
    <Link to="/" data-target="mobile-demo" className="right sidenav-trigger">
      <i class="material-icons">menus</i>
    </Link>
    <ul className="right hide-on-med-and-down">
      <li>
        <S.NavbarLink to="/">Home</S.NavbarLink>
      </li>
      <li>
        <S.NavbarLink to="/about">Sobre mim</S.NavbarLink>
      </li>
      <li>
        <S.NavbarLink to="/portfolio">Portfolio</S.NavbarLink>
      </li>
    </ul>
  </>
)

export default Menu
