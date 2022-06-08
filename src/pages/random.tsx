import React from "react"
import Page from "../utils/Page"
import Quote from "../components/elements/Quote"
import { PageName } from "../utils/constant"

const Random: React.FC = () => (
  <Page name={PageName.RANDOM}>
    <div
      style={{
        padding: "4rem 0",
      }}
    >
      <Quote />
    </div>
  </Page>
)

export default Random 
