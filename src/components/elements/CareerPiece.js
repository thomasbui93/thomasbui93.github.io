import { Col, Row } from "@zendeskgarden/react-grid"
import { Avatar } from "@zendeskgarden/react-avatars"
import { MD, SM, UnorderedList } from "@zendeskgarden/react-typography"
import React from "react"
import style from "./career-piece.module.css"

export const CareerPiece = props => (
  <div className={style.container}>
    <Col justifyContent="center">
      <Row className={style.headline}>
        <div className={style.companyIcon}>
          <Avatar size="large" isSystem>
            <img src={props.companyIcon} alt={props.companyName} />
          </Avatar>
        </div>
        <div className={style.companyBox}>
          <Col>
            <MD isBold>{props.companyName}</MD>
            <SM>
              {props.start} - {props.end}
            </SM>
          </Col>
          <Col>
            <Row>
              {props.skills.map((skill, index) => (
                <div className={style.skillIcon}>
                  <Avatar size="extrasmall" key={index}>
                    <img
                      src={require(`../../images/skills/${skill.toLowerCase()}.${
                        isSvg(skill) ? "svg" : "png"
                      }`)}
                      alt={skill}
                    />
                  </Avatar>
                </div>
              ))}
            </Row>
          </Col>
        </div>
      </Row>
      <Row>
        <div className={style.progressTracker}></div>
        <Col>
          {props.details.map((detail, index) => (
            <Row>
              <JobPiece key={index} {...detail} />
            </Row>
          ))}
        </Col>
      </Row>
    </Col>
  </div>
)

const isSvg = key => ["spinnaker", "vue.js"].indexOf(key.toLowerCase()) > -1

export const JobPiece = props => (
  <Col className={style.jobPiece}>
    <MD isBold>{props.title}</MD>
    <SM>
      {props.start} - {props.end}
    </SM>
    <UnorderedList>
      {props.duties.map((duty, index) => (
        <UnorderedList.Item key={index}>{duty}</UnorderedList.Item>
      ))}
    </UnorderedList>
  </Col>
)
