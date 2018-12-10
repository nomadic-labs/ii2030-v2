import React from "react";
import Slider from "react-slick";

import Image from "../editables/Image";

const MAX_SLIDES = 8


const Participants = ({ participants, onSave }) => {
  const onSavePassthrough = (index, fieldId) => content => {
    const newParticipants = [...participants]
    newParticipants[index][fieldId] = content
    onSave(newParticipants)
  }

  const collection = participants || [];
  console.log("collection", collection)

  const sliderSettings = {
    infinite: true,
    autoplay: true,
    slidesToShow: collection.length > MAX_SLIDES ? MAX_SLIDES : collection.length,
    slidesToScroll: 1,
  }
  return (
    <Slider { ...sliderSettings }>
      {collection.map((participant, i) => {
        const content = JSON.parse(participant.node.content)
        return(
          <div className="slide" key={`participant-${i}`}>
            <a href={ content["url"] } target="_blank" rel="noopener noreferrer">
              <Image content={ content["logo"] } onSave={onSavePassthrough(i, "logo")} />
            </a>
          </div>
        )
      })}
    </Slider>
  );
};

export default Participants;
