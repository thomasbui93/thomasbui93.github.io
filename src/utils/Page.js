import React from "react"
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming"
import {
  Chrome,
  Body,
  Header,
  HeaderItem,
  HeaderItemText
} from '@zendeskgarden/react-chrome'
import "@zendeskgarden/css-bedrock/dist/index.css"
import { Helmet } from "react-helmet"
import Logo from "../components/containers/Logo"
import StyledLink from "../components/elements/StyledLink"
import Footer from "../components/containers/Footer"
import * as style from "./page.module.css"

const contentStyle = {
  minWidth: "100vw",
  minHeight: "calc(100% - 150px)",
  display: "flex",
  flexFlow: "column"
}

export default function Page(props) {
  const metadata = {
    cv: {
      title: "Khoa Bui's Resumé",
    },
    home: {
      title: "Khoa Bui, Software Engineer.",
    },
    about: {
      title: "About me.",
    },
    random: {
      title: "Random stuff.",
    },
    notFound: {
      title: "Page not found.",
    },
  }

  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metadata[props.name].title}</title>
        <link rel="canonical" href="http://www.buidangkhoa.com" />
      </Helmet>
      <Chrome>
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
          </Header>
          <div className={style.contentWrapper}>
            {props.children}
          </div>
          <Footer/>
        </Body>
      </Chrome>
    </ThemeProvider>
  )
}
