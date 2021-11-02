import { StyledComponent } from "@stitches/react/types/styled-component"
import stitches from "../stitches"

const H1 = stitches.styled("h1", {
  fontSize: "$xxl",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const H2 = stitches.styled("h2", {
  fontSize: "$xl",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const H3 = stitches.styled("h3", {
  fontSize: "$lg",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const H4 = stitches.styled("h4", {
  fontSize: "$md",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const H5 = stitches.styled("h5", {
  fontSize: "$rg",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const H6 = stitches.styled("h6", {
  fontSize: "$sm",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const Header: Record<string, StyledComponent<any>> = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
}

export default Header
