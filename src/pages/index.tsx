import { GetStaticProps } from "next"
import React from "react"
import Page from "../common/Page"
import getAllPostPreviews from "../utils/getAllPostPreviews"
import { BlogPreview } from "../utils/blog"
import Head from "next/head"
import Hero from "../Homepage/Hero"
import Previews from "../Homepage/Previews"

interface HomepageT {
  previews: BlogPreview[]
}

const Homepage = ({ previews }: HomepageT) => {
  return (
    <Page>
      <Head>
        <title>FSAYCON.DEV: Adventures with code</title>
      </Head>
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
