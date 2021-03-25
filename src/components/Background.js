import React from "react"
import Leaf from "../videos/leavs.mp4"
const Background = () => {
  return (
    <video className="bg-video" autoPlay muted loop>
      <source src={Leaf} type="video/mp4" />
    </video>
  )
}

export default Background
