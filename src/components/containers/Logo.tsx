import React from "react"
import { Link } from "gatsby"
import * as style from "./logo.module.css"

export const Logo: React.FC = () => (
  <Link to="/" className={style.logoLink}>
    <div className={style.logoContainer}>
      <div className={style.circle}>K</div>
    </div>
  </Link>
)
