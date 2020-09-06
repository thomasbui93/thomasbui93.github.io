import React, { useState, useEffect } from "react"
import fetch from "node-fetch"
import style from "./quote.module.css"

export default function Quote() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/greeting")
      const json = await response.json()

      setData(json.quote)
    }
    fetchData()
  }, [])

  return data ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={style.blockquoteContainer}>
        <div className={style.blockquote}>{data.message}</div>
        <div className={style.blockquoteAuthor}>
          {" "}
          - {data.author ? data.author : "Unknown"} -{" "}
        </div>
      </div>
    </div>
  ) : (
    ""
  )
}
