import React from "react"
import { Link as GatsbyLink } from "gatsby"
import * as style from "./styled-link.module.css"

export default function StyledLink(props:any) {
  return (
    <GatsbyLink
      className={style.styledLink}
      activeClassName="is-current"
      {...props}
    />
  )
}
