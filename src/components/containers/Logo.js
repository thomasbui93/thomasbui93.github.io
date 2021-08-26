import React from "react"
import { Link } from "gatsby"
import * as style from "./logo.module.css"

export default function Logo() {
  return (
    <Link to="/">
      <div className={style.logoContainer}>
        <div className={style.circle}>K</div>
      </div>
    </Link>
  )
}
