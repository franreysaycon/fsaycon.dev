import React from "react"
import Fold from "../common/Fold"
import stitches from "../stitches"
import HN from "../common/HN"

const appear = stitches.keyframes({
  "0%": { transform: "translate(0px, 30px)", opacity: 0 },
  "100%": { transform: "translate(0px, 0px)", opacity: 1 },
})

const Container = stitches.styled(Fold, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "20rem",
  fontSize: "$lg",
  fontFamily: "$quattrocentroSans",
  flexDirection: "column",
  textAlign: "center",
  lineHeight: "0.95",
  "> *": {
    animation: `${appear} 0.5s ease-in`,
    "+ *": {
      marginTop: "$sm",
    },
  },
  marginBottom: "$lg",
})

const hoverAnimation = stitches.keyframes({
  "0%": { transform: "translate(0px, 0px)", opacity: 1 },
  "100%": { transform: "translate(0px, 30px)", opacity: 0.8 },
})

const CubeContainer = stitches.styled("div", {
  display: "block",
  width: "12rem",
  height: "12rem",
  animation: `${hoverAnimation} 1s ease-in 0s alternate infinite none running`,
})

const Hero = () => (
  <Container>
    <CubeContainer>
      <img
        // @ts-ignore
        src={import("../img/cube.png")}
        alt="Floating cube in hero section"
        width="100%"
        height="100%"
      />
    </CubeContainer>
    <HN.h1>Adventures with code</HN.h1>
    <span>Franrey Anthony S. Saycon</span>
  </Container>
)

export default Hero
