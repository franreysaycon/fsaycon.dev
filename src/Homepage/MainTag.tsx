import React from "react"
import stitches from "../stitches"
import { MTag } from "../utils/blog"

interface MainTagT {
  tag: MTag
}

const TagContainer = stitches.styled("span", {
  backgroundColor: "$mtag",
  padding: "$xxs",
  borderRadius: "5px",
  fontFamily: "$quattrocentroSans",
  textTransform: "uppercase",
  fontSize: "$xs",
  fontWeight: "bold",
  width: "fit-content",
})

const MainTag = ({ tag }: MainTagT) => <TagContainer>{tag}</TagContainer>

export default MainTag
