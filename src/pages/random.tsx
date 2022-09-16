import React from "react"
import Page from "../utils/Page"
import { QuoteComponent as Quote } from "../components/elements/Quote"
import { PageName } from "../utils/constant"
import { PoemComponent as Poem } from "../components/elements/Poem"

const Random: React.FC = () => (
  <Page name={PageName.RANDOM}>
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

export default Random
