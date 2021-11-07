import React from "react"
import Head from "next/head"

interface MetaHeadProps {
  title: string
  description: string
  link: string
  previewImage: string
}

const MetaHead: React.FC<MetaHeadProps> = ({
  title,
  description,
  link,
  previewImage,
}) => (
  <Head>
    <title key="title">{title}</title>
    <meta name="title" content={title} key="meta-title" />
    <meta name="description" content={description} key="description" />
    <meta name="robots" content="index, follow" key="robots" />

    <meta property="og:type" content="article" key="og:type" />
    <meta property="og:title" content={title} key="og:title" />
    <meta
      property="og:description"
      content={description}
      key="og:description"
    />
    <meta
      property="og:image"
      content={`https://fsaycon.dev/${previewImage}`}
      key="og:image"
    />
    <meta
      property="og:image:alt"
      content="Fantasy drawing of Franrey Saycon in a sci-fi mechanic suit solving a cosmic rubix cube."
      key="og:image:alt"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} key="twitter:title" />
    <meta
      name="twitter:description"
      content={description}
      key="twitter:description"
    />
    <meta
      name="twitter:image"
      content={`https://fsaycon.dev/${previewImage}`}
      key="twitter:image"
    />
    <meta
      name="twitter:image:alt"
      content="Fantasy drawing of Franrey Saycon in a sci-fi mechanic suit solving a cosmic rubix cube."
      key="twitter:image:alt"
    />

    <meta property="og:url" content={link} key="og:url" />
    <meta
      property="og:site_name"
      content="FSAYCON.DEV - Personal Website of Franrey Saycon"
      key="og:site_name"
    />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="canonical" href={link} />
  </Head>
)

export default MetaHead
