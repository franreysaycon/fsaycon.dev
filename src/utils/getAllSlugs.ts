import path from "path"
import fs from "fs"

const getAllSlugs = (): string[] => {
  const postsDir = path.join(process.cwd(), "src", "posts")
  const posts = fs.readdirSync(postsDir)

  return posts.map((post) => post.replace(".mdx", ""))
}

export default getAllSlugs
