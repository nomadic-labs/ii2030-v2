import React from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";

import Image from "../editables/Image";
import Title from "../editables/Title";
import Paragraph from "../editables/Paragraph";


const TrackCard = ({ track, onSave }) => {
  const trackData = track ? track.node : {};
  console.log("track", track)
  const content = trackData.content ? JSON.parse(trackData.content) : {};
  console.log("content", content)
  return(
    <Grid item xs={12} sm={6} md={3}>
      <div className={`track text-center`}>
        <Image content={ content["icon"] } onSave={ onSave } />
        <Title level="h3" content={ content["tech"] } onSave={ onSave } />
        <Paragraph content={ content["topic"] } onSave={ onSave } />
        <Link to={ trackData["slug"] }><button className="btn white animate hide-unless-active">Learn more</button></Link>
      </div>
    </Grid>
  )
}

export default TrackCard;
