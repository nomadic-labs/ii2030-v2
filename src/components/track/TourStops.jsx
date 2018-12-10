import React from 'react';
import Slider from 'react-slick'

import Title from "../../components/editables/Title";
import Paragraph from "../../components/editables/Paragraph";
import Image from "../../components/editables/Image";

export default class TourStops extends React.Component {
  state = {
    slideIndex: 0
  }

  goToSlide = slideIndex => {
    this.slider.slickGoTo(slideIndex)
    this.setState({ slideIndex })
  }

  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      arrows: false,
      swipe: true
    }

    return(
      <div className="tour-stops-container">
        <Slider {...sliderSettings} infinite={false} ref={slider => (this.slider = slider)}>
          {
            this.props.slides.map((slide, i) => {
              return(
                <div className="slide" key={`tour-stop-${i}`}>
                  <div className="content-container pure-g centered">
                    <div className="pure-u-1">

                      <div className="image">
                        <Image content={ slide["image"] } />
                      </div>

                      <Title level="h3" content={ slide["organization"] } />
                      <Paragraph content={ slide["description"] } />

                    </div>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}