import { BlogMatterData, BlogPreview } from "./blog"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const getAllPostPreviews = (): BlogPreview[] => {
  const postsDir = path.join(process.cwd(), "src", "posts")
  const posts = fs.readdirSync(postsDir)

  return posts.map((post) => {
    const mdxFile = fs.readFileSync(path.join(postsDir, post))
    const { data } = matter(mdxFile)
    const slug = `/blog/${post.replace(".mdx", "")}`

    const matterData = {
      ...(data as BlogMatterData),
      tags: data.tags ? data.tags.split(",") : [],
      smPreviewImage: `${slug}/preview.png`,
    }

    return {
      matterData,
      slug,
    }
  })
}

export default getAllPostPreviews
