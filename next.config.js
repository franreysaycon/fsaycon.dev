const withOptimizedImages = require("next-optimized-images")

module.exports = withOptimizedImages({
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
})
