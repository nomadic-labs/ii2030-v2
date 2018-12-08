import React from "react";
import Grid from "@material-ui/core/Grid"

import Image from "../editables/Image";
import Title from "../editables/Title";
import Paragraph from "../editables/Paragraph";


const OverviewSlide = ({ slide }) => {
  return(
    <div className="slide">
      <Grid container>
        <Grid item xs={12} md={6} className="vert-center horiz-center">
          <div className="image oversize">
              <Image content={slide["image"]} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="vert-center">
          <div className="text horiz-spacing vert-spacing-lg">
            <Title level="h2" content={ slide["heading"]} />
            <Paragraph content={ slide["description"]} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default OverviewSlide;
