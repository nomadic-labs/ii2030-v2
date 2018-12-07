import React from "react";
import Grid from "@material-ui/core/Grid"


const OverviewSlide = ({ slide }) => {
  return(
    <div class="slide">
      <Grid container>
        <Grid item xs={12} md={6} class="vert-center horiz-center">
          <div class="image oversize">
            <img src={ slide.img_path } alt="ii2030" class="pure-img" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} class="vert-center">
          <div class="text horiz-spacing vert-spacing-lg">
            <h2>{ slide.heading }</h2>
            <p>{ slide.text }</p>
            <p>
              <i class="material-icons pause-btn">pause</i>
              <i class="material-icons play-btn">skip_next</i>
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}


export default OverviewSlide;
