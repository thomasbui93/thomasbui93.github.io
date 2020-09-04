import React from "react"
import Logo from "./Logo"
import { mediaQuery } from '@zendeskgarden/react-theming'
import StyledLink from "../elements/StyledLink"
import style from "./header.module.css"

const NavBar = () => (
  <nav role="navigation" aria-label="global" className={style.headerNav}>
    <div className={style.headerNavItem}>
      <StyledLink to="me">About Me</StyledLink>
    </div>
    <div className={style.headerNavItem}>
      <StyledLink to="cv">Resume</StyledLink>
    </div>
  </nav>
)
export default function Header() {
  return <header className={style.headerContainer}>
    <Logo />
    <NavBar />
  </header>
}
