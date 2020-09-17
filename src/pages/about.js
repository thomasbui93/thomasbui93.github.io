import React from "react"
import Page from "../utils/Page"
import Quote from "../components/elements/Quote"
import Poem from "../components/elements/Poem"

export default function About() {
  return (
    <Page name="about">
      <div
        style={{
          padding: "4rem 0",
        }}
      >
        <Quote />
        <Poem />
      </div>
    </Page>
  )
}
