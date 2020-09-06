import React from "react"
import { Link } from "gatsby"
import style from "./logo.module.css"

export default function Logo() {
  return (
    <Link to="/">
      <div className={style.logoContainer}>
        <div className={style.circle} />
        <div className={style.triangle} />
      </div>
    </Link>
  )
}
