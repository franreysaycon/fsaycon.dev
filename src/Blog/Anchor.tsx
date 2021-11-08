import React from "react"
import stitches from "../stitches"

interface AnchorT {
  children: string
  href: string
}

const A = stitches.styled("a", {
  fontFamily: "inherit",
  fontSize: "inherit",
  color: "$purple",
  "&:visited": {
    color: "$purple",
  },
})

const Anchor = ({ children, href }: AnchorT) => {
  return <A href={href}>{children}</A>
}

export default Anchor
