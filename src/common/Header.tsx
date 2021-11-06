import React, { useEffect, useState } from "react"
import stitches from "../stitches"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"

const Logo = stitches.styled("span", {
  fontFamily: "$abrilFatface",
  fontSize: "$rg",
  "&:hover": {
    cursor: "pointer",
  },
})

const Container = stitches.styled("header", {
  position: "sticky",
  display: "block",
  width: "100%",
  top: 0,
  backgroundColor: "$header",
  transition: "box-shadow 0.5s ease-in",
  zIndex: "$sticky",
})

const MarginContainer = stitches.styled("div", {
  display: "flex",
  maxWidth: "1200px",
  padding: "$rg",
  width: "100%",
  margin: "0px auto",
  justifyContent: "space-between",
  alignContent: "center",
})

const Navigation = stitches.styled("nav", {
  display: "flex",
  width: "10rem",
  justifyContent: "space-evenly",
})

const NavItem = stitches.styled("span", {
  display: "inline-flex",
  alignItems: "center",
  fontFamily: "$quattrocentroSans",
  fontSize: "$sm",
  borderBottom: "3px solid $bg",
  "&:hover": {
    cursor: "pointer",
    borderBottom: "3px solid $underline",
  },
  transition: "border-bottom-color 0.2s ease-in",
  "> a": {
    textDecoration: "none",
    color: "inherit",
    ":visited": {
      color: "inherit",
    },
  },
  variants: {
    status: {
      visited: {
        borderBottom: "3px solid $underline",
      },
    },
  },
})

const Header = () => {
  const [showSticky, setShowSticky] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const updateSticky = () => {
      if (window.pageYOffset > 5) {
        setShowSticky(true)
      } else {
        setShowSticky(false)
      }
    }
    window.addEventListener("scroll", updateSticky, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateSticky)
    }
  }, [setShowSticky])

  return (
    <Container
      css={showSticky ? { boxShadow: "0 4px 2px -2px rgba(0,0,0,0.1)" } : {}}
    >
      <MarginContainer>
        <Link href="/" passHref>
          <Logo>&lt; fsaycon.dev /&gt;</Logo>
        </Link>
        <Navigation>
          <NavItem status={router.pathname === "/" ? "visited" : null}>
            <Link href="/">Home</Link>
          </NavItem>
          <NavItem>
            <a
              href="https://github.com/franreysaycon"
              target="_blank"
              rel="noreferrer"
            >
              Who Am I?
            </a>
          </NavItem>
        </Navigation>
      </MarginContainer>
    </Container>
  )
}

export default Header
