import React from "react"
import StyledLink from "../elements/StyledLink"
import style from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.external}>
        <StyledLink to="https://github.com/thomasbui93">Github</StyledLink>
        <StyledLink to="https://www.linkedin.com/in/bdk93">Linkedin</StyledLink>
      </div>
      <div className={style.copyright}>
        <span>© {new Date().getFullYear()} Khoa Bui</span>
      </div>
    </footer>
  )
}
