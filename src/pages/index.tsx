import { GetStaticProps } from "next"
import React from "react"
import getAllPostPreviews from "../utils/getAllPostPreviews"

const Homepage = ({ previews }) => {
  return <></>
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
