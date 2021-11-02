import { createStitches } from "@stitches/react"

export const { styled, css, globalCss, getCssText } = createStitches({
  media: {
    bp1: "(min-width: 320px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  theme: {
    colors: {
      bg: "#DEE4E7",
      header: "#373737",
    },
    space: {
      xxs: "0.422rem",
      xs: "0.563rem",
      sm: "0.75rem",
      rg: "1rem",
      md: "1.33rem",
      lg: "1.77rem",
      xl: "2.369rem",
      xxl: "3.157rem",
    },
    fontSizes: {
      xxs: "0.422rem",
      xs: "0.563rem",
      sm: "0.75rem",
      rg: "1rem",
      md: "1.33rem",
      lg: "1.77rem",
      xl: "2.369rem",
      xxl: "3.157rem",
    },
    fonts: {
      abrilFatface: "Abril Fatface, serif",
      quattrocentroSans: "Quattrocento Sans, sans-serif",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
})
