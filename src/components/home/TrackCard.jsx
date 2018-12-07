import React from "react";


const TrackCard = ({ track, active }) => {
  return(
    <div className="pure-u-1 pure-u-md-1-5">
      <div className={`track ${active}`}>
        <img src={ track.imgSrc } alt="icon" />
        <h3>{ track.title }</h3>
        <p>{ track.topic }</p>
        { track.link ?
          <a href={ track.link }><button className="btn white animate hide-unless-active">Learn more</button></a> :
          <p className="hide-unless-active">- Coming soon -</p>
        }
      </div>
    </div>
  )
}

export default TrackCard;
