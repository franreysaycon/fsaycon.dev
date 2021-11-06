import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { MDXRemote } from "next-mdx-remote"
import HN from "../../common/HN"
import getPostBySlug from "../../utils/getPostBySlug"
import { ParsedUrlQuery } from "querystring"
import getAllSlugs from "../../utils/getAllSlugs"
import Head from "next/head"
import { BlogPost } from "../../utils/blog"
import Page from "../../common/Page"
import Fold from "../../common/Fold"
import stitches from "../../stitches"
import Image from "../../Blog/Image"

type BlogPageT = BlogPost

interface BlogPageParams extends ParsedUrlQuery {
  slug: string
}

const components = { ...HN, img: Image }

const Duration = stitches.styled("span", {
  fontStyle: "italic",
})

const Author = stitches.styled("span", {
  fontWeight: "bold",
})

const Container = stitches.styled(Fold, {
  marginTop: "$rg",
  "> *": {
    "+ *": {
      marginTop: "$xxs",
    },
  },
})

const BlogPage = ({ content, matterData }: BlogPageT) => (
  <Page>
    <Head>
      <title>FSAYCON.DEV: {matterData.title}</title>
    </Head>
    <Container>
      <HN.h2>{matterData.title}</HN.h2>
      <div>
        <Author>by Franrey Saycon</Author> - {matterData.date} (&nbsp;
        <Duration>{matterData.duration} read</Duration> )
      </div>
      <article>
        <MDXRemote {...content} components={components} />
      </article>
    </Container>
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
