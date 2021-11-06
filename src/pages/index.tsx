import { GetStaticProps } from "next"
import React from "react"
import Fold from "../common/Fold"
import HN from "../common/HN"
import Page from "../common/Page"
import stitches from "../stitches"
import getAllPostPreviews from "../utils/getAllPostPreviews"
import Cube from "../img/cube.png"
import Image from "next/image"
import { BlogPreview } from "../utils/blog"
import MainTag from "../Homepage/MainTag"
import Head from "next/head"
import Link from "next/link"

const appear = stitches.keyframes({
  "0%": { transform: "translate(0px, 30px)", opacity: 0 },
  "100%": { transform: "translate(0px, 0px)", opacity: 1 },
})

const zoomAppear = stitches.keyframes({
  "0%": { transform: "scale(0.9)", opacity: 0 },
  "100%": { transform: "scale(1)", opacity: 1 },
})

const Hero = stitches.styled(Fold, {
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

const TagContainer = stitches.styled("div", {
  marginTop: "auto",
  fontSize: "$sm",
  "> span": {
    "+ span": {
      marginLeft: "$xxs",
    },
  },
})

interface HomepageT {
  previews: BlogPreview[]
}

const Homepage = ({ previews }: HomepageT) => {
  return (
    <Page>
      <Head>
        <title>FSAYCON.DEV: Adventures with code</title>
      </Head>
      <Hero>
        <CubeContainer>
          <Image
            src={Cube}
            alt="Floating cube in hero section"
            width="100%"
            height="100%"
            layout="responsive"
            loading="eager"
            placeholder="blur"
          />
        </CubeContainer>
        <HN.h1>Adventures with code</HN.h1>
        <span>Franrey Anthony S. Saycon</span>
      </Hero>
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
