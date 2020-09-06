import React from "react"
import { ThemeProvider } from "@zendeskgarden/react-theming"
import "@zendeskgarden/css-bedrock/dist/index.css"
import Header from "../components/containers/Header"
import Footer from "../components/containers/Footer"
import { Helmet } from "react-helmet"

export default function Page(props) {
  const metadata = {
    cv: {
      title: "Khoa Bui's Resumé",
    },
    home: {
      title: "Khoa Bui, Software Engineer",
    },
  }

  return (
    <ThemeProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metadata[props.name].title}</title>
        <link rel="canonical" href="http://www.buidangkhoa.com" />
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header name={props.name} />
        <div
          style={{
            position: "relative",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {props.children}
        </div>
        <Footer name={props.name} />
      </div>
    </ThemeProvider>
  )
}
