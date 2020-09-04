import React from "react"
import { ThemeProvider } from "@zendeskgarden/react-theming"
import '@zendeskgarden/css-bedrock/dist/index.css';
import Header from "../components/containers/Header"
import Footer from "../components/containers/Footer"

export default function Page(props) {
  return <ThemeProvider>  
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }}>
    <Header name={props.name}/>
    <div style={{
      position: 'relative',
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>
      { props.children }
    </div>
    <Footer name={props.name}/>
  </div>
</ThemeProvider>
}

