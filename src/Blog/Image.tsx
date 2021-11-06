/* eslint-disable @next/next/no-img-element */
import React from "react"
import stitches from "../stitches"

interface ImageT {
  src: string
  alt: string
}

const Container = stitches.styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
})

const Img = stitches.styled("img", {})

const Image = ({ src, alt }: ImageT) => {
  const [actualSrc, widthStr] = src.split("?")
  const width = +widthStr.split("=")[1]

  return (
    <Container
      css={{ "> img": { width: `100%`, "@bp2": { width: `${width}%` } } }}
    >
      <Img src={actualSrc} alt={alt} />
    </Container>
  )
}
export default Image
