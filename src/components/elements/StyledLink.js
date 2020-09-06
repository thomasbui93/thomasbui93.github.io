import React from "react"
import { Link as GatsbyLink } from "gatsby"
import style from "./styled-link.module.css"

export default function StyledLink(props) {
  return (
    <GatsbyLink
      className={style.styledLink}
      activeClassName="is-current"
      {...props}
    />
  )
}
