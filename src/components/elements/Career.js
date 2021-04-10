import React from "react"
import { CareerPiece } from "./CareerPiece"
import { Col } from "@zendeskgarden/react-grid"
import style from "./career.module.css"
import { Paragraph, SM, XL } from "@zendeskgarden/react-typography"

export const Career = () => {
  const careers = [
    {
      companyName: "Zendesk Inc.",
      companyIcon:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQGtnStjF-vq9w/company-logo_100_100/0/1591210050428?e=1626307200&v=beta&t=f9057vSnyo1VSTRs2yx4Hrk19rXehXxl3Om-C2227ek",
      start: "August 2019",
      end: "Present",
      skills: [
        "Java",
        "Node.js",
        "Ruby",
        "React",
        "MySQL",
        "Kafka",
        "Redis",
        "Kubernetes",
        "Spinnaker",
        "Docker",
      ],
      details: [
        {
          title: "Senior Software Engineer",
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
      companyIcon:
        "https://media-exp1.licdn.com/dms/image/C560BAQFF-1fwHIT9AQ/company-logo_100_100/0/1519897341882?e=1626307200&v=beta&t=8Z1JyUqJqV9KNWV4PJS8SXCn2-W5AxGhKeW9BMBjxfM",
      start: "March 2018",
      end: "July 2019",
      skills: ["JavaScript", "Vue.js", "Typescript", "PHP", "MySQL", "Docker"],
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
      companyIcon:
        "https://media-exp1.licdn.com/dms/image/C560BAQEoQquyRBqxCg/company-logo_100_100/0/1519884471543?e=1626307200&v=beta&t=CETkg8X7b8Ah02EDz7YkTknNmbbcCIRD3aIYxiKZt-Y",
      start: "April 2016",
      end: "March 2018",
      skills: ["JavaScript", "PHP", "MySQL", "Redis"],
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
        {careers.map((career, index) => (
          <CareerPiece key={index} {...career} />
        ))}
      </Col>
    </div>
  )
}
