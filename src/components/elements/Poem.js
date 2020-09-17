import React, { useState } from "react"
import fetch from "node-fetch"
import { Row, Col } from "@zendeskgarden/react-grid"
import { Skeleton } from "@zendeskgarden/react-loaders"
import { Button } from "@zendeskgarden/react-buttons"
import style from "./poem.module.css"

export default function Poem() {
  const [isLoading, setLoad] = useState(false)
  const [poem, setPoem] = useState([])

  const fetchData = async () => {
    setLoad(true)
    const response = await fetch(
      process.env.POEM_URL || "https://dug2020.herokuapp.com/api/poem/random"
    )
    const json = await response.json()

    setPoem(json.poem)
    setLoad(false)
  }

  const createPoem = ({ title, content }) => {
    const formattedContent = content
      .split("\n")
      .map(line => <div className={style.line}>{line}</div>)
    return (
      <div className={style.poem}>
        <div className={style.title}>{title}</div>
        <div className={style.body}>{formattedContent}</div>
      </div>
    )
  }

  return (
    <div className={style.poemContainer}>
      <Button onClick={fetchData} size="medium">
        Fetch poem
      </Button>
      {!isLoading ? (
        <div>{poem.map(content => createPoem(content))}</div>
      ) : (
        <div
          style={{
            padding: "1rem",
          }}
        >
          <Row justifyContent="center">
            <Col sm={5}>
              <Skeleton height="48px" />
              <Skeleton height="24px" width="80%" />
              <Skeleton height="16px" width="90%" />
              <Skeleton height="16px" width="85%" />
              <Skeleton height="16px" width="75%" />
            </Col>
          </Row>
        </div>
      )}
    </div>
  )
}
