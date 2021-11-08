import React from "react"
import { CopyBlock, zenburn } from "react-code-blocks"

interface CodeT {
  className: string
  children: string
}

const Code = ({ className, children }: CodeT) => {
  const language =
    className?.split("-")[0] === "language"
      ? className.split("-")[1]
      : "javascript"

  return (
    <CopyBlock
      text={children}
      showLineNumbers={true}
      language={language}
      theme={zenburn}
      copy={true}
      wrapLines={true}
      codeBlock={true}
    />
  )
}

export default Code
