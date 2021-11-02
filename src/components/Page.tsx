import React from "react"
import stitches from "../stitches"

const Container = stitches.styled("div", {
  display: "block",
  minHeight: "100vh",
})

const Page: React.FC = ({ children }) => <Container>{children}</Container>

export default Page
