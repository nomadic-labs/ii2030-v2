import React from "react";
import Grid from "@material-ui/core/Grid"


const IntroSlide = ({ slide }) => {
  return(
    <div className="slide">
      <div className="text horiz-spacing">
        <div className="headline vert-spacing">
          <h2>{ slide.question }</h2>
        </div>
        <p>{ slide.answer }</p>
      </div>
    </div>
  )
}

export default IntroSlide;
