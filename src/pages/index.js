import React from "react"
import Page from "../utils/Page"
import * as style from "./home.module.css"

const Intro = () => (
  <div className={style.intro}>
    <h1> Khoa Bui</h1>
    <p>A Software Engineer based in Ireland.</p>
  </div>
)

export default function Home() {
  return (
    <Page name="home">
      <Intro />
    </Page>
  )
}
