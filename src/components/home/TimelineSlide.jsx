import React from "react";


const TimelineSlide = ({ slide }) => {
  return(
    <div className="pure-u-1 slide">
    <div className="content-container pure-g centered">
      <div className="pure-u-1 pure-u-md-2-3">
        { slide.imgSrc &&
          <div className="image">
            <img src={ slide.imgSrc } alt={ slide.title } className="pure-img" />
          </div>
        }
        <h3 className="title">{ slide.title }</h3>
        <p className="quote">"{ slide.quote }"</p>
      </div>
    </div>
  </div>
  )
}


export default TimelineSlide;
