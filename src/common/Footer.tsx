import React from "react"
import stitches from "../stitches"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { FaRocket } from "react-icons/fa"

const Container = stitches.styled("footer", {
  display: "block",
  width: "100%",
})

const MarginContainer = stitches.styled("div", {
  display: "flex",
  maxWidth: "1200px",
  padding: "$rg",
  width: "100%",
  margin: "0px auto",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  fontFamily: "$quattrocentroSans",
  fontSize: "$sm",
})

const IconContainer = stitches.styled("div", {
  display: "inline-block",
  marginTop: "$xs",
  "> *": {
    "&:hover": {
      cursor: "pointer",
    },
    "+ *": {
      "margin-left": "$sm",
    },
  },
  "> a": {
    color: "inherit",
    "&:visited": {
      color: "inherit",
    },
  },
})

const Footer = () => (
  <Container>
    <MarginContainer>
      <div>
        Made with NextJS + Stitches. <FaRocket color="#EE9C0F" size="15px" />
      </div>
      <strong>Want to reach out to me?</strong>
      <IconContainer>
        <a
          href="https://www.linkedin.com/in/fssaycon/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size="30px" />
        </a>
        <a
          href="https://github.com/franreysaycon"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size="30px" />
        </a>
        <a href="mailto:me@fsaycon.dev" target="_top">
          <MdEmail size="30px" />
        </a>
      </IconContainer>
    </MarginContainer>
  </Container>
)

export default Footer
