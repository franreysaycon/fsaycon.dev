import { GetStaticProps } from "next"
import React from "react"
import Fold from "../components/Fold"
import Header from "../components/Header"
import Page from "../components/Page"
import stitches from "../stitches"
import getAllPostPreviews from "../utils/getAllPostPreviews"
import Cube from "../img/cube.png"
import Image from "next/image"
import { BlogPreview } from "../utils/blog"
import MainTag from "../Homepage/MainTag"
import Head from "next/head"

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
  height: "30rem",
  fontSize: "$lg",
  fontFamily: "$quattrocentroSans",
  flexDirection: "column",
  textAlign: "center",
  lineHeight: "0.95",
  "> *": {
    "+ *": {
      marginTop: "$sm",
    },
  },
  marginBottom: "$lg",
  animation: `${appear} 0.5s ease-in`,
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
  width: "15rem",
  height: "15rem",
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

const Tag = stitches.styled("span", {
  backgroundColor: "$tag",
  padding: "5px",
  borderRadius: "10px",
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
        <Header.h1>Adventures with code.</Header.h1>
        <span>Franrey Anthony S. Saycon</span>
      </Hero>
      <PreviewContainer>
        {previews.map(({ matterData, slug }) => (
          <Preview key={slug}>
            <MainTag tag={matterData.mtag} />
            <Header.h3>{matterData.title}</Header.h3>
            <span>{matterData.description}</span>
            <TagContainer>
              <>Tags:&nbsp;</>
              {matterData.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </TagContainer>
          </Preview>
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
