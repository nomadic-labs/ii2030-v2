import React from "react";
import Grid from "@material-ui/core/Grid"


const OverviewSlide = ({ slide }) => {
  return(
    <div className="slide">
      <Grid container>
        <Grid item xs={12} md={6} className="vert-center horiz-center">
          <div className="image oversize">
            <img src={ slide.imgSrc } alt="ii2030" className="pure-img" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="vert-center">
          <div className="text horiz-spacing vert-spacing-lg">
            <h2>{ slide.heading }</h2>
            <p>{ slide.text }</p>
            <p>
              <i className="material-icons pause-btn">pause</i>
              <i className="material-icons play-btn">skip_next</i>
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default OverviewSlide;
