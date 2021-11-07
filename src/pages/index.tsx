import { GetStaticProps } from "next"
import React from "react"
import Page from "../common/Page"
import getAllPostPreviews from "../utils/getAllPostPreviews"
import { BlogPreview } from "../utils/blog"
import Hero from "../Homepage/Hero"
import Previews from "../Homepage/Previews"
import MetaHead from "../common/MetaHead"

interface HomepageT {
  previews: BlogPreview[]
}

const Homepage = ({ previews }: HomepageT) => {
  return (
    <Page>
      <MetaHead
        title="FSAYCON.DEV: Adventures with code"
        description="Hi there, I'm Franrey Saycon. I'm a software engineer specializing in architecting solutions and building website/mobile apps."
        link="https://fsaycon.dev/"
        previewImage="homepage-preview.png"
      />
      <Hero />
      <Previews previews={previews} />
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
