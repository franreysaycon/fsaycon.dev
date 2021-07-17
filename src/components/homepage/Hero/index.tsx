import MarginBox from "atoms/MarginBox"
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import HeroImage from "./HeroImage"
import Box from "./Box"

const HeroBox = styled(Box)`
  flex-grow: 1.2;
  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    align-items: flex-end;
  }
`

const Header = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.staatchiles};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
`

const SubHeader = styled(motion.h2)`
  position: relative;
  top: -8px;
  font-family: ${({ theme }) => theme.fonts.staatchiles};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
`

const Detail = styled(motion.p)`
  margin-top: ${({ theme }) => theme.spaces[2]};
  font-family: ${({ theme }) => theme.fonts.barlow};
  text-align: center;
  max-width: 20rem;

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    text-align: left;
    max-width: none;
  }
`

const Container = styled(MarginBox)`
  margin-top: calc(${({ theme }) => theme.spaces[2]} + 3rem);

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: calc(${({ theme }) => theme.spaces[5]} + 3rem);
  }
`

const DetailBox = styled(Box)`
  display: flex;
`

const Hero: React.FC = () => (
  <Container>
    <HeroBox>
      <HeroImage />
    </HeroBox>
    <DetailBox>
      <Header
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Franrey Saycon
      </Header>
      <SubHeader
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Software Engineer / Architect • Team Lead
      </SubHeader>
      <Detail
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Solving problems with code. 
        <br />
        Sharing and gaining knowledge with and from the community.
      </Detail>
    </DetailBox>
  </Container>
)

export default Hero
