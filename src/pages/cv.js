import React, { useState } from "react"
import Page from "../utils/Page"
import { Spinner } from "@zendeskgarden/react-loaders"
import { Row, Col } from "@zendeskgarden/react-grid"

export default function CV() {
  const [isLoading, setLoading] = useState(true)
  return (
    <Page name="cv">
      <iframe
        title="cv-iframe"
        onLoad={() => setLoading(false)}
        style={{
          width: "100vw",
          minHeight: "100vh",
        }}
        src="https://drive.google.com/file/d/1k4h69tjYDwJUPFpqn1wbg1MYmyIo2gsj/preview"
        width="100vw"
        height="100vh"
      />
      {isLoading ? (
        <div
          style={{
            zIndex: 1000,
            position: "fixed",
            width: "100vw",
            height: "100vh",
            background: "rgba(255,255,255, 0.9)",
          }}
        >
          <Row
            justifyContent="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <Col textAlign="center">
              <Spinner size="64" />
            </Col>
          </Row>
        </div>
      ) : (
        ""
      )}
    </Page>
  )
}
