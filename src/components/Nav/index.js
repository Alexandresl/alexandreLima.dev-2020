import React from "react"
import Brand from "../brand"

import * as S from "./styled"
import Menu from "../Menu"

const Nav = () => (
  <S.Nav>
    <div class="nav-wrapper">
      <Brand></Brand>
      <Menu></Menu>
    </div>
  </S.Nav>
)

export default Nav
