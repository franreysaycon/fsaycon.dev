import React from "react"
import stitches from "../stitches"
import "typeface-abril-fatface"
import "typeface-quattrocento-sans"

const globalStyles = stitches.globalCss({
  "*": { boxSizing: "border-box" },
  "*:after": { boxSizing: "border-box" },
  "*:before": { boxSizing: "border-box" },
  body: { margin: 0, padding: 0, backgroundColor: "$bg" },
  html: {
    "@initial": { fontSize: "16px" },
    "@bp1": { fontSize: "calc(16px + 6 * ((100vw - 320px) / 704))" },
    "@bp3": { fontSize: "24px" },
  },
})

const MyApp = ({ Component, pageProps }) => {
  globalStyles()

  return <Component {...pageProps} />
}

export default MyApp
