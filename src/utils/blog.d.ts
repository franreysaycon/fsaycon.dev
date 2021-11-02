import { MDXRemoteSerializeResult } from "next-mdx-remote"

export interface BlogMatterData {
  title: string
  tags: string[]
  description: string
  date: string
  img: string
}

export interface BlogPreview {
  matterData: BlogMatterData
  slug: string
}

export interface BlogPost {
  matterData: BlogMatterData
  content: MDXRemoteSerializeResult<Record<string, unknown>>
}
