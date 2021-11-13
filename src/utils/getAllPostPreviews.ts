import { BlogMatterData, BlogPreview } from "./blog"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import moment from "moment"

const sortMoment = (date1: string, date2: string): number =>
  moment(date1, "YYYY-MM-DD") > moment(date2, "YYYY-MM-DD") ? -1 : 1

const getAllPostPreviews = (): BlogPreview[] => {
  const postsDir = path.join(process.cwd(), "src", "posts")
  const posts = fs.readdirSync(postsDir)

  return posts
    .map((post) => {
      const mdxFile = fs.readFileSync(path.join(postsDir, post))
      const { data } = matter(mdxFile)
      const slug = `/blog/${post.replace(".mdx", "")}`

      const matterData = {
        ...(data as BlogMatterData),
        tags: data.tags ? data.tags.split(",") : [],
      }

      return {
        matterData,
        slug,
      }
    })
    .sort((blogA, blogB) =>
      sortMoment(blogA.matterData.date, blogB.matterData.date)
    )
}

export default getAllPostPreviews
