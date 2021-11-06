import React from "react"
import stitches from "../stitches"

const Container = stitches.styled("main", {
  display: "block",
  minHeight: "100vh",
  fontFamily: "$quattrocentroSans",
})

const Page: React.FC = ({ children }) => <Container>{children}</Container>

export default Page
