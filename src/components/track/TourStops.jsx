import React from 'react';
import Slider from 'react-slick'

export default class TourStops extends React.Component {
  state = {
    slideIndex: 0
  }

  goToSlide = slideIndex => {
    this.slider.slickGoTo(slideIndex)
    this.setState({ slideIndex })
  }

  render() {
    const tourStopsSettings = {
      dots: true,
      infinite: true,
      arrows: false,
      swipe: true,

    }

    return(
      <div className="tour-stops-container">
        <Slider {...tourStopsSettings} infinite={false} ref={slider => (this.slider = slider)}>
          {
            this.props.stops.map((stop, i) => {
              return(
                <div className="slide" key={`tour-stop-${i}`}>
                  <div className="content-container pure-g centered">
                    <div className="pure-u-1">

                      <div className="image">
                        <img src={ stop.imageSrc } alt={ stop.organization } className="pure-img" />
                      </div>

                      <h3>{ stop.organization }</h3>
                      <p>{ stop.description }</p>
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