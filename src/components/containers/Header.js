import React from "react"
import Logo from "./Logo"
import StyledLink from "../elements/StyledLink"
import style from "./header.module.css"

const NavBar = () => (
  <nav role="navigation" aria-label="global" className={style.headerNav}>
    <div className={style.headerNavItem}>
      <StyledLink to="/cv">Resume</StyledLink>
    </div>
    <div className={style.headerNavItem}>
      <StyledLink to="/about">About Me</StyledLink>
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
