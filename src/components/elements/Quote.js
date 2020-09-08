import React, { useState, useEffect } from "react"
import fetch from "node-fetch"
import style from "./quote.module.css"
import { Row, Col } from '@zendeskgarden/react-grid';
import { Skeleton } from '@zendeskgarden/react-loaders'

export default function Quote() {
  const [isLoading, setLoad] = useState(true)
  const [quote, setQuote] = useState(null)
  const [greeter, setGreeter] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.QUOTE_URL || "https://dug2020.herokuapp.com/api/greeting")
      const json = await response.json()

      setQuote(json.quote)
      setGreeter(json.greeter.split('!')[0] + '!')
      setLoad(false)
    }
    fetchData()
  }, [])

  return !isLoading ? (
    <>
    <div className={style.greeting}>
      {greeter}
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={style.blockquoteContainer}>
        <div className={style.blockquote}>{quote.message}</div>
        <div className={style.blockquoteAuthor}>
          {" "}
          - {quote.author ? quote.author : "Unknown"} -{" "}
        </div>
      </div>
    </div>
    </>
  ) : (
  <div style={{
    padding: '1rem'
  }}> 
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
  )
}
