import { createStitches } from "@stitches/react"

const stitches = createStitches({
  media: {
    bp1: "(min-width: 320px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  theme: {
    colors: {
      white: "#F8F4F9",
      orange: "#EE9C0F",
      black: "#373737",
      purple: "#814D97",

      // elements
      bg: "$white",
      header: "$white",
      headerText: "$black",
      text: "$black",
      shadow: "$black",
      mtag: "$orange",
      underline: "$orange",
      footer: "$white",
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
    zIndices: {
      hide: -1,
      auto: "auto",
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
    transitions: {},
  },
})

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
  h1: { margin: 0 },
  h2: { margin: 0 },
  h3: { margin: 0 },
  h4: { margin: 0 },
  h5: { margin: 0 },
  h6: { margin: 0 },
  "@font-face": [
    {
      fontFamily: "Abril Fatface",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 400,
      src: `
      local('Abril Fatface Regular '),
      local('Abril Fatface-Regular'),
      url('/fonts/abril-fatface/abril-fatface-latin-400.woff2') format('woff2'),
      url('/fonts/abril-fatface/abril-fatface-latin-400.woff') format('woff');
    `,
    },
    {
      fontFamily: "Quattrocento Sans",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 400,
      src: `
      local('Quattrocento Sans Regular '),
      local('Quattrocento Sans-Regular'),
      url('/fonts/quattrocento-sans/quattrocento-sans-latin-400.woff2') format('woff2'),
      url('/fonts/quattrocento-sans/quattrocento-sans-latin-400.woff') format('woff');
    `,
    },
    {
      fontFamily: "Quattrocento Sans",
      fontStyle: "italic",
      fontDisplay: "swap",
      fontWeight: 400,
      src: `
      local('Quattrocento Sans Regular '),
      local('Quattrocento Sans-Regular'),
      url('/fonts/quattrocento-sans/quattrocento-sans-latin-400italic.woff2') format('woff2'),
      url('/fonts/quattrocento-sans/quattrocento-sans-latin-400italic.woff') format('woff');
    `,
    },
    {
      fontFamily: "Quattrocento Sans",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 700,
      src: `
      local('Quattrocento Sans Regular '),
      local('Quattrocento Sans-Regular'),
      url('/fonts/quattrocento-sans/quattrocento-sans-latin-700.woff2') format('woff2'),
      url('/fonts/quattrocento-sans/quattrocento-sans-latin-700.woff') format('woff');
    `,
    },
    {
      fontFamily: "Quattrocento Sans",
      fontStyle: "italic",
      fontDisplay: "swap",
      fontWeight: 700,
      src: `
      local('Quattrocento Sans Regular '),
      local('Quattrocento Sans-Regular'),
      url('/fonts/quattrocento-sans/quattrocento-sans-latin-700italic.woff2') format('woff2'),
      url('/fonts/quattrocento-sans/quattrocento-sans-latin-700italic.woff') format('woff');
    `,
    },
  ],
})

globalStyles()

export default stitches
