import styled from "styled-components"
import { Link } from "gatsby"

export const BrandWrapper = styled.section`
  background-color: #1b2a49;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const BrandLInk = styled(Link)`
  color: #00909e;

  &:hover {
    color: orange;
  }
`
