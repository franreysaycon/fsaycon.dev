import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { MDXRemote } from "next-mdx-remote"
import Header from "../../components/Header"
import getPostBySlug from "../../utils/getPostBySlug"
import { ParsedUrlQuery } from "querystring"
import getAllSlugs from "../../utils/getAllSlugs"
import Head from "next/head"
import { BlogPost } from "../../utils/blog"
import Page from "../../components/Page"
import Fold from "../../components/Fold"
import stitches from "../../stitches"

type BlogPageT = BlogPost

interface BlogPageParams extends ParsedUrlQuery {
  slug: string
}

const components = { ...Header }

const Duration = stitches.styled("span", {
  fontStyle: "italic",
})

const Author = stitches.styled("span", {
  fontWeight: "bold",
})

const BlogPage = ({ content, matterData }: BlogPageT) => (
  <Page>
    <Head>
      <title>FSAYCON.DEV: {matterData.title}</title>
    </Head>
    <Fold>
      <Header.h2>{matterData.title}</Header.h2>
      <div>
        <Author>by Franrey Saycon</Author> - {matterData.date} (&nbsp;
        <Duration>{matterData.duration} read</Duration> )
      </div>
      <MDXRemote {...content} components={components} />
    </Fold>
  </Page>
)

export const getStaticProps: GetStaticProps<unknown, BlogPageParams> = async ({
  params,
}) => {
  const mdxPost = await getPostBySlug(params.slug)

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
