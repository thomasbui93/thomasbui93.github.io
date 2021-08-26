import React, { useState } from "react"
import fetch from "node-fetch"
import { Row, Col } from "@zendeskgarden/react-grid"
import { Skeleton } from "@zendeskgarden/react-loaders"
import { Button } from "@zendeskgarden/react-buttons"
import { useSpring, animated } from "react-spring"
import * as style from "./poem.module.css"

export default function Poem() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  const [isLoading, setLoad] = useState(false)
  const [poems, setPoems] = useState([])
  const [isShowTheRest, setShowTheRest] = useState(false)

  const fetchData = async () => {
    setLoad(true)
    const authors = ["L%C3%BD%20B%E1%BA%A1ch", "Nguy%E1%BB%85n%20Tr%C3%A3i"]
    const author = authors[Math.floor(Math.random() * authors.length)]
    const response = await fetch(
      process.env.POEM_URL ||
        `https://griffin-me.herokuapp.com/api/poem/random?author=${author}`
    )
    const poems = await response.json()

    setPoems(poems)
    setLoad(false)
    setShowTheRest(false)
  }

  const isShowContent = index => {
    if (index === 0) return true
    if (index > 0 && isShowTheRest) return true
    return false
  }

  const createPoem = ({ title, content }, index, author, poemSize) => {
    if (!content) return ""
    if (!isShowContent(index)) return ""

    const formattedContent = stripHtml(content)
      .split("\n")
      .map(line => <div className={style.line}>{line}</div>)
    return (
      <animated.div style={props}>
        <div className={style.poem} key={index}>
          <div className={style.title}>{title}</div>
          {index === 0 ? <div className={style.poet}>{author}</div> : ""}
          <div className={style.body}>{formattedContent}</div>
          {index === 0 && poemSize > 1 ? (
            <div
              className={style.toggleTranslation}
              onClick={toggleTranslation}
            >
              {isShowTheRest ? "Collapse" : "Translate"}
            </div>
          ) : (
            ""
          )}
        </div>
      </animated.div>
    )
  }

  const toggleTranslation = () => setShowTheRest(!isShowTheRest)

  const stripHtml = html => {
    let tmp = document.createElement("div")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  }

  const reOrderPoemContent = poems => {
    if (poems.length < 3) return poems.reverse()
    const [chinese, original, translated] = poems

    return [original, translated, chinese]
  }

  return (
    <div className={style.poemContainer}>
      {!isLoading ? (
        <div className={style.poemListing}>
          {poems && poems.content
            ? reOrderPoemContent(poems.content).map((poem, index) =>
                createPoem(poem, index, poems.author, poems.content.length)
              )
            : ""}
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
      )}
      <Button
        onClick={fetchData}
        size="medium"
        style={{
          border: "1px solid #333",
          color: "#333",
        }}
      >
        Fetch a poem!
      </Button>
    </div>
  )
}
