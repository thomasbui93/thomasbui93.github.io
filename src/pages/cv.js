import React from "react"
import Page from "../utils/Page"
import { Career } from "../components/elements/Career"

export default function CV() {
  return (
    <Page name="cv">
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
