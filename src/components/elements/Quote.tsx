import React, { useState, useEffect } from "react"
import * as style from "./quote.module.css"
import { Row, Col } from "@zendeskgarden/react-grid"
import { Skeleton } from "@zendeskgarden/react-loaders"
import getQuote, { Quote } from "../../service/quote"
import { AsyncState, useAsync } from "../../hooks/useAsync"

type QuoteBlockProps = {
  quote: Quote | null
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({
  quote,
}: QuoteBlockProps) => (
  <>
    {quote ? (
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
      ""
    )}
  </>
)

export const MemoizedQuoteBlock = React.memo(QuoteBlock)

export const QuoteLoading: React.FC = () => (
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

export const QuoteComponent: React.FC = () => {
  const { status, value } = useAsync<Quote>(getQuote, true)
  const isLoading = status === AsyncState.IDLE || status == AsyncState.PENDING

  return isLoading ? <QuoteLoading /> : <MemoizedQuoteBlock quote={value} />
}
