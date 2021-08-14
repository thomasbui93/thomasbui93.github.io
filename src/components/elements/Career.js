import React from "react"
import { CareerPiece } from "./CareerPiece"
import { Col } from "@zendeskgarden/react-grid"
import * as style from "./career.module.css"
import { Paragraph, SM, XL } from "@zendeskgarden/react-typography"
import StyledLink from "./StyledLink"
import { Button } from "@zendeskgarden/react-buttons"
import { convertToDict } from "../../service/dict_mapper"
import { useStaticQuery, graphql } from "gatsby"

export const Career = () => {
  const query = graphql`
    query MyQuery {
      allFile {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `
  const imageNodes = useStaticQuery(query).allFile.edges
  const imageMapper = convertToDict(imageNodes)

  const careers = [
    {
      companyName: "Zendesk Inc.",
      companyIcon: imageMapper.get("zendesk").publicURL,
      start: "August 2019",
      end: "Present",
      skills: [
        imageMapper.get("java"),
        imageMapper.get("node.js"),
        imageMapper.get("scala"),
        imageMapper.get("ruby"),
        imageMapper.get("react"),
        imageMapper.get("mysql"),
        imageMapper.get("kafka"),
        imageMapper.get("redis"),
        imageMapper.get("kubernetes"),
        imageMapper.get("spinnaker"),
        imageMapper.get("docker"),
      ],
      details: [
        {
          title: "Senior Software Engineer - Tech Lead",
          start: "September 2020",
          end: "Present",
          duties: [
            "Designed and integrated a micro-services platform for the Ticket Routing Service.",
            "Designed and integrated a Kafka consumer for internal usage.",
            "Lead memory leak hunt for the internal Pubsub Service.",
            "Team Security Champion.",
          ],
        },
        {
          title: "Software Engineer",
          start: "August 2019",
          end: "August 2020",
          duties: [
            "Maintained and improved Zendesk Support.",
            "Modernized the internal Pubsub Service.",
            "Troubleshooted and implemented solution for the Skilled Based Routing Service.",
          ],
        },
      ],
    },
    {
      companyName: "Smartbox Group.",
      companyIcon: imageMapper.get("smartbox").publicURL,
      start: "March 2018",
      end: "July 2019",
      skills: [
        imageMapper.get("javascript"),
        imageMapper.get("vue.js"),
        imageMapper.get("typescript"),
        imageMapper.get("php"),
        imageMapper.get("mysql"),
        imageMapper.get("docker"),
      ],
      details: [
        {
          title: "Frontend Engineer",
          start: "March 2018",
          end: "July 2019",
          duties: [
            "Completely migrated booking service to be a micro-service, no longer a part of the monolithic application.",
            "Introduced and maintained ES6 standard and unit test to frontend part.",
            "Leaded frontend migration from KnockoutJS to VueJS and Typescript.",
            "Recruited and trained engineers for the frontend team in the Booking team.",
          ],
        },
      ],
    },
    {
      companyName: "Vaimo Finland",
      companyIcon: imageMapper.get("vaimo").publicURL,
      start: "April 2016",
      end: "March 2018",
      skills: [
        imageMapper.get("javascript"),
        imageMapper.get("php"),
        imageMapper.get("mysql"),
        imageMapper.get("redis"),
      ],
      details: [
        {
          title: "Software Developer",
          start: "April 2016",
          end: "March 2018",
          duties: [
            "Worked in various customer projects with both Magento 1 and Magento 2",
          ],
        },
      ],
    },
  ]

  return (
    <div className={style.container}>
      <Col justifyContent="center">
        <div className={style.brief}>
          <XL>The story so far.</XL>
          <Paragraph size="small">
            <SM tag="span">
              {" "}
              I'm a polygot Software Engineer, who enjoys building applications.
            </SM>
          </Paragraph>
        </div>
      </Col>
      <Col justifyContent="center">
        {careers.map(career => (
          <CareerPiece key={career.companyName} {...career} />
        ))}
      </Col>
      <Col justifyContent="center">
        <StyledLink to="/cv">
          <Button size="medium">My CV</Button>
        </StyledLink>
      </Col>
    </div>
  )
}
