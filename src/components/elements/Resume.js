import React, { useState } from "react"
import { Spinner } from "@zendeskgarden/react-loaders"
import { Row, Col } from "@zendeskgarden/react-grid"

export default function Resume() {
  const [isLoading, setLoading] = useState(true)
  return (
    <div>
      <iframe
        title="cv-iframe"
        onLoad={() => setLoading(false)}
        style={{
          width: "100vw",
          minHeight: "100vh",
        }}
        src="https://drive.google.com/file/d/1jCIRJHTbFxtZCMcyAFmmj09penl6yJ_D/preview"
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
    </div>
  )
}
