import { BlogMatterData, BlogPost } from "./blog"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

const getPostBySlug = async (slug: string): Promise<BlogPost> => {
  const postsDir = path.join(process.cwd(), "src", "posts")
  const mdxFile = fs.readFileSync(path.join(postsDir, `${slug}.mdx`))
  const { data, content } = matter(mdxFile)
  const source = await serialize(content, { scope: data })

  const matterData = {
    ...(data as BlogMatterData),
    smPreviewImage: `${slug}/preview.png`,
  }

  return {
    content: source,
    matterData,
  }
}

export default getPostBySlug
