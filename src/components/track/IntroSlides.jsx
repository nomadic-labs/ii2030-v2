import React from 'react';
import Slider from 'react-slick'

export default class IntroSlides extends React.Component {
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
      <div className="intro-slides-container">
        <Slider {...sliderSettings} infinite={false} ref={slider => (this.slider = slider)}>
          {
            this.props.slides.map((slide, i) => {
              return(
                <div className="slide" key={`intro-slide-${i}`}>
                  <div className="text horiz-spacing">
                    <div className="headline vert-spacing">
                      <h2>{ slide.question }</h2>
                    </div>
                    <p>{ slide.answer }</p>
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

