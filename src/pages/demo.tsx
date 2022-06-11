import React from "react"
import Page from "../utils/Page"
import { XXL } from "@zendeskgarden/react-typography"
import { PageName } from "../utils/constant"
import { UseFocusComponent } from "../components/demo/UseFocusComponent"
import { Col, Grid, Row } from "@zendeskgarden/react-grid"
import { PhoneNumberInput } from "../components/demo/PhoneNumberInput"
import { ClickCount } from "../components/demo/ClickCount"
import { TodoList } from "../components/demo/TodoList"
import { Autocomplete } from "../components/demo/Autocomplete"

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
      <Row justifyContent="center">
        <Col size={6}>
          <ClickCount/>
        </Col>
      </Row>
      <Row justifyContent="center">
        <Col size={6}>
          <TodoList/>
        </Col>
      </Row>
      <Row justifyContent="center">
        <Col size={6}>
          <Autocomplete suggestions={[{name: 'Dublin'}, {name: 'Da Nang'}, {name: 'Tokyo'}, {name: 'Saigon'}]}/>
        </Col>
      </Row>
    </Grid>
  </Page>
)

export default DemoPage
