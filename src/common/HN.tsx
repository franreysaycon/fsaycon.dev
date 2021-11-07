import { StyledComponent } from "@stitches/react/types/styled-component"
import stitches from "../stitches"

const H1 = stitches.styled("h1", {
  fontSize: "$lg",
  fontFamily: "$abrilFatface",
  color: "$headerText",
  lineHeight: "1",
})

const H2 = stitches.styled("h2", {
  fontSize: "$md",
  fontFamily: "$abrilFatface",
  color: "$headerText",
  lineHeight: "1",
})

const H3 = stitches.styled("h3", {
  fontSize: "$rg",
  fontFamily: "$abrilFatface",
  color: "$headerText",
  lineHeight: "1",
})

const H4 = stitches.styled("h4", {
  fontSize: "$sm",
  fontFamily: "$abrilFatface",
  color: "$headerText",
  lineHeight: "1",
})

const H5 = stitches.styled("h5", {
  fontSize: "$xs",
  fontFamily: "$abrilFatface",
  color: "$headerText",
  lineHeight: "1",
})

const H6 = stitches.styled("h6", {
  fontSize: "$xxs",
  fontFamily: "$abrilFatface",
  color: "$headerText",
  lineHeight: "1",
})

const HN: Record<string, StyledComponent<any>> = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
}

export default HN
