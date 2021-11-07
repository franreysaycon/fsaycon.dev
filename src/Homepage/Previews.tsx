import React from "react"
import Fold from "../common/Fold"
import stitches from "../stitches"
import { BlogPreview } from "../utils/blog"
import Link from "next/link"
import MainTag from "./MainTag"
import HN from "../common/HN"

interface PreviewT {
  previews: BlogPreview[]
}

const zoomAppear = stitches.keyframes({
  "0%": { transform: "scale(0.9)", opacity: 0 },
  "100%": { transform: "scale(1)", opacity: 1 },
})

const PreviewContainer = stitches.styled(Fold, {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
  gridAutoRows: "1fr",
  columnGap: "$rg",
  rowGap: "$rg",
  marginBottom: "$lg",
})

const Preview = stitches.styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "15rem",
  boxShadow: "1px 1px 5px rgba(0,0,0,0.5)",
  fontFamily: "$quattrocentroSans",
  textAlign: "justify",
  padding: "$rg",
  lineHeight: "0.95",
  "> *": {
    "+ *": {
      marginTop: "$sm",
    },
  },
  "&:hover": {
    cursor: "pointer",
    transform: "translate(0px, -20px)",
  },
  transition: "transform 0.2s linear",
  animation: `${zoomAppear} 0.2s ease-in`,
})

const TagContainer = stitches.styled("div", {
  marginTop: "auto",
  fontSize: "$sm",
  "> span": {
    "+ span": {
      marginLeft: "$xxs",
    },
  },
})

const Previews = ({ previews }: PreviewT) => (
  <PreviewContainer>
    {previews.map(({ matterData, slug }) => (
      <Link key={slug} href={slug} passHref>
        <Preview>
          <MainTag tag={matterData.mtag} />
          <HN.h3>{matterData.title}</HN.h3>
          <span>{matterData.description}</span>
          <TagContainer>
            <strong>Tags:&nbsp;</strong>
            {matterData.tags.join(", ")}
          </TagContainer>
        </Preview>
      </Link>
    ))}
  </PreviewContainer>
)

export default Previews
