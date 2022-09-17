import React from "react"
import Page from "../utils/Page"
import { XL } from "@zendeskgarden/react-typography"
import { PageName } from "../utils/constant"
import { MatchMeMatrixComponent } from "../components/elements/MatchMe"

const RandomGames: React.FC = () => (
  <Page name={PageName.GAME}>
    <div style={{ textAlign: "center" }}>
      <XL isBold>Games</XL>
    </div>
    <MatchMeMatrixComponent />
  </Page>
)

export default RandomGames
