import React from "react"
import Background from "../components/Background"

import "../index.css"
import Header from "../components/Header"
export default function Home() {
  return (
    <div className="outer">
      <Background />
      <Header headerText="Hi I'm Ankit Kumar Gupta" />
    </div>
  )
}
