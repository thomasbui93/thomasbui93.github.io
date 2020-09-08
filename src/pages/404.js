import React from "react"
import Page from "../utils/Page"
import { XXXL } from '@zendeskgarden/react-typography'

export default function NotFound() {
  return (
    <Page name="notFound">
      <div style={{textAlign: "center"}}>
        <XXXL isBold>Page not found.</XXXL>  
      </div>
    </Page>
  )
}
