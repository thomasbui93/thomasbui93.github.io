import React from "react"
import Page from "../utils/Page"
import { XXL } from "@zendeskgarden/react-typography"
import { PageName } from "../utils/constant"
import { UseFocusComponent } from "../components/demo/UseFocusComponent"
import { Col, Grid, Row } from "@zendeskgarden/react-grid"
import { PhoneNumberInput } from "../components/demo/PhoneNumberInput"

const DemoPage: React.FC = () => (
  <Page name={PageName.DEMO}>
    <XXL>Demo Stuffs</XXL>
    <Grid>
      <Row justifyContent="center">
        <Col size={6}>
          <UseFocusComponent/>
        </Col>
      </Row>
      <Row justifyContent="center">
        <Col size={6}>
          <PhoneNumberInput/>
        </Col>
      </Row>
    </Grid>
  </Page>
)

export default DemoPage
