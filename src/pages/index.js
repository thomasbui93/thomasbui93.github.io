import React from "react"
import Page from "../utils/Page"
import style from "./home.module.css"

const Intro = () => (
  <div className={style.intro}>
    <h1> Hello! I'm Khoa.</h1>
    <p>A Software Engineer based in Dublin, Ireland.</p>
  </div>
)

export default function Home() {
  return (
    <Page name="home">
      <Intro />
    </Page>
  )
}
