import React from 'react';
import Slider from 'react-slick'
import Grid from "@material-ui/core/Grid"

import Image from "../editables/Image";
import Title from "../editables/Title";
import Paragraph from "../editables/Paragraph";

export default class TimelineSlider extends React.Component {
  state = {
    slideIndex: 0
  }

  goToSlide = slideIndex => {
    this.slider.slickGoTo(slideIndex)
    this.setState({ slideIndex })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      swipe: true,
    }

    return(
      <div className="tour-stops-container">
        <Slider {...settings} infinite={false} ref={slider => (this.slider = slider)}>
          {
            this.props.slides.map((slide, i) => {
              return(
                <div className="slide" key={`timeline-slide-${i}`}>
                  <Grid container justify="center">
                    <Grid item xs={12} md={8}>
                      <div className="content-container">
                        { slide["image"] &&
                          <div className="image">
                            <Image content={ slide["image"] } onSave={ this.props.onSave } />
                          </div>
                        }
                        <Title content={ slide["heading"] } onSave={ this.props.onSave } />
                        <Paragraph content={ slide["description"] } onSave={ this.props.onSave } />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}