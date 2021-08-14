import React from "react"
import Logo from "./Logo"
import StyledLink from "../elements/StyledLink"
import * as style from "./header.module.css"

const NavBar = () => (
  <nav role="navigation" aria-label="global" className={style.headerNav}>
    <div className={style.headerNavItem}>
      <StyledLink to="/about">Resume</StyledLink>
    </div>
    <div className={style.headerNavItem}>
      <StyledLink to="/cv">CV</StyledLink>
    </div>
    <div className={style.headerNavItem}>
      <StyledLink to="/random">Random</StyledLink>
    </div>
  </nav>
)

export default function Header() {
  return (
    <header className={style.headerContainer}>
      <Logo />
      <NavBar />
    </header>
  )
}
