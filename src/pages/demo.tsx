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
import { StarRating } from "../components/demo/StarRating"
import { KAccordion, KAccordionSection } from "../components/demo/KAccordion"

const DemoPage: React.FC = () => (
  <Page name={PageName.DEMO}>
    <XXL>Demo Stuffs</XXL>
    <Grid>
    <Row justifyContent="center">
        <Col size={6}>
          <KAccordion>
            <KAccordionSection title="First tab">
              Nessun dorma! Nessun dorma!
              Tu pure, o Principessa,
              nella tua fredda stanza,
              guardi le stelle
              che tremano d'amore, e di speranza!
            </KAccordionSection>
            <KAccordionSection title="Second tab">
              Ma il mio mistero è chiuso in me;
              il nome mio nessun saprà!
              No, No! Sulla tua bocca,
              lo dirò quando la luce splenderà!
            </KAccordionSection>
            <KAccordionSection title="Third tab">
              Dilegua, o notte!
              Tramontate, stelle!
              Tramontate, stelle!
              All'alba, vincerò!
              Vincerò! Vincerò!
            </KAccordionSection>
          </KAccordion>
        </Col>
      </Row>
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
      <Row justifyContent="center">
        <Col size={6}>
          <StarRating/>
        </Col>
      </Row>
    </Grid>
  </Page>
)

export default DemoPage
