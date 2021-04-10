import React from "react"
import Page from "../utils/Page"
import Poem from "../components/elements/Poem"
import Quote from "../components/elements/Quote"

export default function Random() {
  return (
    <Page name="random">
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
