import { GetStaticProps } from "next"
import React from "react"
import Fold from "../components/Fold"
import Header from "../components/Header"
import Page from "../components/Page"
import stitches from "../stitches"
import getAllPostPreviews from "../utils/getAllPostPreviews"
import Cube from "../img/cube.png"
import Image from "next/image"

const Hero = stitches.styled(Fold, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "25rem",
  fontSize: "$lg",
  fontFamily: "$quattrocentroSans",
  flexDirection: "column",
  textAlign: "center",
  lineHeight: "0.95",
})

const hoverAnimation = stitches.keyframes({
  "0%": { transform: "translate(0px, 0px)", opacity: 1 },
  "100%": { transform: "translate(0px, 30px)", opacity: 0.8 },
})

const CubeContainer = stitches.styled("div", {
  display: "block",
  width: "15rem",
  height: "15rem",
  animation: `${hoverAnimation} 1s ease-out 0s alternate infinite none running`,
})

const Homepage = ({ previews }) => {
  return (
    <Page>
      <Hero>
        <CubeContainer>
          <Image
            src={Cube}
            alt="Floating cube in hero section"
            width="100%"
            height="100%"
            layout="responsive"
            loading="eager"
          />
        </CubeContainer>
        <Header.h1>Adventures with code.</Header.h1>
        <span>Franrey Anthony S. Saycon</span>
      </Hero>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const previews = getAllPostPreviews()

  return {
    props: {
      previews,
    },
  }
}

export default Homepage
