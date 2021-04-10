import React from "react"
import Page from "../utils/Page"
import { Career } from "../components/elements/Career"

export default function About() {
  return (
    <Page name="about">
      <div
        style={{
          padding: "1rem 0",
        }}
      >
        <Career />
      </div>
    </Page>
  )
}
