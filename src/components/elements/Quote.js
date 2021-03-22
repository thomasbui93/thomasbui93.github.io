import React, { useState, useEffect } from "react"
import style from "./quote.module.css"
import { Row, Col } from "@zendeskgarden/react-grid"
import { Skeleton } from "@zendeskgarden/react-loaders"
import getQuote from "../../service/quote"

export default function Quote() {
  const [isLoading, setLoad] = useState(true)
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const quote = await getQuote()

      setQuote(quote)
      setLoad(false)
    }
    fetchData()
  }, [])

  return !isLoading ? (
    <div className={style.quoteContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={style.blockquoteContainer}>
          <div className={style.blockquote}>{quote.message}</div>
          <div className={style.blockquoteAuthor}>{quote.author}</div>
        </div>
      </div>
    </div>
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
  )
}
