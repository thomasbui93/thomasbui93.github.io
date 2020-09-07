import React, { useState, useEffect } from "react"
import fetch from "node-fetch"
import style from "./quote.module.css"
import ReactTypingEffect from 'react-typing-effect'

export default function Quote() {
  const [quote, setQuote] = useState(null)
  const [greeter, setGreeter] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.QUOTE_URL || "https://dug2020.herokuapp.com/api/greeting")
      const json = await response.json()

      setQuote(json.quote)
      setGreeter(json.greeter.split('!')[0] + '!')
    }
    fetchData()
  }, [])

  return quote && greeter ? (
    <>
    <div className={style.greeting}>
      <ReactTypingEffect text={greeter}/>
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
    ""
  )
}
