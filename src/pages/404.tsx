import React from "react"
import Page from "../utils/Page"
import { XXXL } from "@zendeskgarden/react-typography"
import { PageName } from "../utils/constant"

const NotFound: React.FC = () => (
  <Page name={PageName.NOT_FOUND}>
    <div style={{ textAlign: "center" }}>
      <XXXL isBold>Page not found.</XXXL>
    </div>
  </Page>
)

export default NotFound
