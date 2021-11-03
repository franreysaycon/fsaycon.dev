import { MDXRemoteSerializeResult } from "next-mdx-remote"

export type MTag =
  | "backend development"
  | "frontend development"
  | "software architecture"
  | "software engineering"
  | "case study"

export interface BlogMatterData {
  title: string
  tags: string[]
  description: string
  date: string
  img: string
  mtag: MTag
}

export interface BlogPreview {
  matterData: BlogMatterData
  slug: string
}

export interface BlogPost {
  matterData: BlogMatterData
  content: MDXRemoteSerializeResult<Record<string, unknown>>
}
