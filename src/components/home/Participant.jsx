import React from "react";


const Participant = ({ participant }) => {
  return(
    <div className="slide">
      <a href={ participant.url } target="_blank" rel="noopener noreferrer">
        <img src={ participant.imageSrc } alt={ participant.name } className="pure-img" />
      </a>
    </div>
  )
}


export default Participant;
