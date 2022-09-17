import React, { PropsWithChildren } from "react"
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming"
import {
  Chrome,
  Body,
  Header,
  HeaderItem,
  HeaderItemText,
} from "@zendeskgarden/react-chrome"
import "@zendeskgarden/css-bedrock/dist/index.css"
import { Helmet } from "react-helmet"
import { Logo } from "../components/containers/Logo"
import StyledLink from "../components/elements/StyledLink"
import { Footer } from "../components/containers/Footer"
import { PageName } from "./constant"
import * as style from "./page.module.css"
import styled from "styled-components"

type PageProps = {
  name: PageName
}

const StyledChrome = styled(Chrome)`
  height: auto;
  min-height: 100vh;
`

export default function Page(props: PageProps & PropsWithChildren) {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.name}</title>
        <link rel="canonical" href="http://www.buidangkhoa.com" />
      </Helmet>
      <StyledChrome isFluid={true}>
        <Body>
          <Header isStandalone>
            <HeaderItem hasLogo>
              <Logo />
            </HeaderItem>
            <HeaderItem>
              <StyledLink to="/cv">
                <HeaderItemText>Resume</HeaderItemText>
              </StyledLink>
            </HeaderItem>
            <HeaderItem>
              <StyledLink to="/random">
                <HeaderItemText>Random</HeaderItemText>
              </StyledLink>
            </HeaderItem>
            <HeaderItem>
              <StyledLink to="/games">
                <HeaderItemText>Games</HeaderItemText>
              </StyledLink>
            </HeaderItem>
          </Header>
          <div className={style.contentWrapper}>{props.children}</div>
          <Footer />
        </Body>
      </StyledChrome>
    </ThemeProvider>
  )
}
