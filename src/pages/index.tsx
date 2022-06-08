import React from "react"
import { PageName } from "../utils/constant"
import Page from "../utils/Page"
import * as style from "./home.module.css"

const Intro:React.FC = () => (
  <div className={style.intro}>
    <h1> Khoa Bui</h1>
    <p>A Software Engineer based in Ireland.</p>
  </div>
)

const Home: React.FC = () => (
  <Page name={PageName.HOME}>
    <Intro />
  </Page>
)

export default Home
