import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { MDXRemote } from "next-mdx-remote"
import Header from "../../components/Header"
import getPostBySlug from "../../utils/getPostBySlug"
import { ParsedUrlQuery } from "querystring"
import getAllSlugs from "../../utils/getAllSlugs"

interface BlogPageParams extends ParsedUrlQuery {
  slug: string
}

const components = { ...Header }

const BlogPage = ({ content }) => {
  return <MDXRemote {...content} components={components} />
}

export const getStaticProps: GetStaticProps<unknown, BlogPageParams> = ({
  params,
}) => {
  const mdxPost = getPostBySlug(params.slug)

  return {
    props: {
      ...mdxPost,
    },
  }
}

export const getStaticPaths: GetStaticPaths<BlogPageParams> = () => {
  const slugs = getAllSlugs()
  const paths = slugs.map((slug) => ({
    params: { slug },
  }))
  return { paths, fallback: false }
}

export default BlogPage
