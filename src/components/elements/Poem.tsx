import React from "react"
import { Row, Col } from "@zendeskgarden/react-grid"
import { Skeleton } from "@zendeskgarden/react-loaders"
import { MD, XL, XXXL } from "@zendeskgarden/react-typography"
import styled from "styled-components"
import { AsyncState, useAsync } from "../../hooks/useAsync"
import { Button } from "@zendeskgarden/react-buttons"

const baseUrl = "https://griffin-me.herokuapp.com/api/poem?page="

export type PoemListResponse = {
  page: number
  poems: PoemResponse[]
  total: number
}

export type PoemResponse = {
  author: string
  body: Poem[]
  title: string
}

export type Poem = {
  title: string
  content: string
}

export type PoemBlockProps = {
  poem: PoemResponse | null
}

export const StyledPoem = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 1.4em;
  line-height: 1.5em;
  font-weight: 100;
  font-family: "EB Garamond", Georgia, serif;
  width: 350px;
  text-align: left;
`

export const StyledPoemContent = styled.div`
  margin-top: 1rem;
`

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const PoemLoading: React.FC = () => (
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

export const PoemBlock: React.FC<PoemBlockProps> = ({
  poem,
}: PoemBlockProps) => (
  <>
    {poem ? (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StyledPoem>
            <XXXL>{poem.title}</XXXL>
            <XL style={{ textAlign: "right" }}>{poem.author}</XL>
            <div>
              {poem.body.map(item => (
                <StyledPoemContent>
                  <XL>{item.title}</XL>
                  <MD>
                    <span style={{ whiteSpace: "pre-line" }}>
                      {item.content}
                    </span>
                  </MD>
                </StyledPoemContent>
              ))}
            </div>
          </StyledPoem>
        </div>
      </div>
    ) : (
      ""
    )}
  </>
)

export const PoemComponent: React.FC = () => {
  const { execute, status, value } = useAsync<PoemResponse>(getRandomPoem, true)
  const isLoading = status === AsyncState.IDLE || status == AsyncState.PENDING

  return (
    <div>
      {isLoading ? <PoemLoading /> : <PoemBlock poem={value} />}
      <CenteredContainer>
        <Button
          onClick={execute}
          size="medium"
          style={{
            border: "1px solid #333",
            color: "#333",
          }}
        >
          Fetch a poem!
        </Button>
      </CenteredContainer>
    </div>
  )
}

let poemCount = 3863

const getRandomPoem = async (): Promise<PoemResponse> => {
  const randomIndex = Math.floor(Math.random() * poemCount)
  const pageNumber = Math.floor(randomIndex / 20) + 1
  const index = pageNumber % 20
  const response = await fetch(`${baseUrl}${pageNumber}`)
  const poemsResponse: PoemListResponse = await response.json()
  poemCount = poemsResponse.total

  return poemsResponse.poems[index]
}
