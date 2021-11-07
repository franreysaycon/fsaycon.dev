/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react"
import stitches from "../stitches"
import { Lightbox } from "react-modal-image"

interface ImageT {
  src: string
  alt: string
}

const Container = stitches.styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  margin: "$rg 0",
})

const Img = stitches.styled("img", {
  "&:hover": {
    cursor: "pointer",
  },
})

const Image = ({ src, alt }: ImageT) => {
  const [openModal, setOpenModal] = useState(false)
  const [actualSrc, widthStr] = src.split("?")
  const width = +widthStr.split("=")[1]

  return (
    <>
      <Container
        css={{ "> img": { width: `100%`, "@bp2": { width: `${width}%` } } }}
      >
        <Img src={actualSrc} alt={alt} onClick={() => setOpenModal(true)} />
      </Container>
      {openModal && (
        <Lightbox
          medium={actualSrc}
          large={actualSrc}
          alt={alt}
          onClose={() => setOpenModal(false)}
          imageBackgroundColor={stitches.theme.colors.white}
          hideZoom={true}
        />
      )}
    </>
  )
}
export default Image
