import React from "react"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import path from "path"
import fs from "fs"
import Header from "../components/Header"

const components = {
  ...Header,
}

const Home = ({ source, data }) => (
  <MDXRemote {...source} components={components} />
)

export const getStaticProps = async () => {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), "src/posts/index.mdx"),
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
