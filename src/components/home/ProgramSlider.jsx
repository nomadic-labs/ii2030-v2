import React from 'react';
import Slider from 'react-slick'
import Grid from "@material-ui/core/Grid"

import headIcon from "../../assets/images/head-icon-standardized.png"
import tourIcon from "../../assets/images/tour-icon-standardized.png"
import tourIconLabelled from "../../assets/images/tour-icon-standardized-labelled.png"
import factoryIcon from "../../assets/images/factory-icon-standardized.png"
import factoryIconLabelled from "../../assets/images/factory-icon-standardized-labelled.png"



export default class ProgramSlider extends React.Component {
  state = {
    slideIndex: 0
  }

  goToSlide = slideIndex => {
    this.slider.slickGoTo(slideIndex)
    this.setState({ slideIndex })
  }

  render() {
    return(
      <div>
        <div className="day-selector">
          <button data-day="day-1" className={`btn btn-day1 white day-1 ${(this.state.slideIndex === 0) && 'active'}`} onClick={() => this.goToSlide(0)}>Day 1: Tour</button>
          <button data-day="day-2" className={`btn btn-day2 white day-2 ${(this.state.slideIndex === 1) && 'active'}`} onClick={() => this.goToSlide(1)}>Day 2: Factory</button>
        </div>

        <Slider arrows={false} infinite={false} ref={slider => (this.slider = slider)}>

          <div className="tour-agenda">
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className="image oversize">
                  <img src={headIcon} alt="Robot head" className="pure-img robot-head" />
                  <img src={tourIconLabelled} alt="Robot body" className="pure-img animate-move-right active robot-body" />
                  <img src={factoryIcon} alt="Robot feet" className="pure-img animate-move-right robot-feet" />
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="agenda-item vert-center">
                <div className="text vert-spacing horiz-spacing">
                  <div className="text">
                    <div className="vert-spacing">
                      <h3 className="agenda-title">Inclusive Innovation Tour</h3>
                      <small className="agenda-date bold">Date - location</small>
                      <p className="agenda-description vert-spacing">Several tour guides take participants on an exploration of Berlin’s buzzing inclusive innovation scene to provide inspiration and information around the ii2030 challenges.</p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="factory-agenda">
             <Grid container>
              <Grid item xs={12} md={6}>
                <div className="image oversize">
                  <img src={headIcon} alt="Robot head" className="pure-img" />
                  <img src={tourIcon} alt="Robot body" className="pure-img animate-move-right" />
                  <img src={factoryIconLabelled} alt="Robot feet" className="pure-img animate-move-right active" />
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="agenda-item vert-center">
                <div className="text vert-spacing horiz-spacing">
                  <div className="text">
                    <div className="vert-spacing">
                      <h3 className="agenda-title">Inclusive Innovation Factory</h3>
                      <small className="agenda-date bold">Date - location</small>
                      <p className="agenda-description vert-spacing">In design-thinking workshops of up to 10 participants, we work out how technology can drive inclusive innovation, and what is needed to realize solutions. Participants are carefully selected to bring together those actors who can make the change - and only those.</p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>

          </div>
        </Slider>
      </div>
    )
  }
}