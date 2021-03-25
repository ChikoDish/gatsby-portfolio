import React from "react"
import Leaf from "../videos/leavs.mp4"
const Background = () => {
  return (
    <div className="overlay bg-video">
      <video autoPlay muted loop width="100%">
        <source src={Leaf} type="video/mp4" />
      </video>
    </div>
  )
}

export default Background
