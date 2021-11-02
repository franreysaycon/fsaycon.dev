import { styled } from "../stitches"

const H1 = styled("h1", {
  fontSize: "$xxl",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const H2 = styled("h2", {
  fontSize: "$xl",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const H3 = styled("h3", {
  fontSize: "$lg",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const H4 = styled("h4", {
  fontSize: "$md",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const H5 = styled("h5", {
  fontSize: "$rg",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const H6 = styled("h6", {
  fontSize: "$sm",
  fontFamily: "$abrilFatface",
  color: "$header",
  margin: 0,
})

const Header = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
}

export default Header
