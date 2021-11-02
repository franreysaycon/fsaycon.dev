import React from "react"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import { Box } from "../mdx-components"
import path from "path"
import fs from "fs"

const Home = ({ source, data }) => (
  <MDXRemote {...source} components={{ Box }} />
)

export const getStaticProps = async () => {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), "src/mdx/index.mdx"),
    "utf8"
  )
  const { data, content } = matter(fileContents)

  const source = await serialize(content, { scope: data })

  return {
    props: {
      data,
      source,
    },
  }
}

export default Home
