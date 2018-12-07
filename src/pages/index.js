import React from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";
import {
  updatePage,
  loadPageData,
} from "../redux/actions";

import Grid from "@material-ui/core/Grid"

import Layout from "../layouts/default.js";
import Editable from "../components/editables/Editable";
import Title from "../components/editables/Title";
import PlainTextEditor from "../components/editingTools/PlainTextEditor";
import RichTextEditor from "../components/editingTools/RichTextEditor";

import OverviewSlide from "../components/home/OverviewSlide"
import TestimonialSlide from "../components/home/TestimonialSlide"
import TrackCard from "../components/home/TrackCard"
import HostCard from "../components/home/HostCard"
import PartnerCard from "../components/home/PartnerCard"
import ParticipantCard from "../components/home/ParticipantCard"

import endevaLogo from "../assets/images/logos/endeva.png"
import headerImage from "../assets/images/head-with-bubble.png"
import headIcon from "../assets/images/head-icon-standardized.png"
import tourIcon from "../assets/images/tour-icon-standardized.png"
import tourIconLabelled from "../assets/images/tour-icon-standardized-labelled.png"
import factoryIcon from "../assets/images/factory-icon-standardized.png"
import factoryIconLabelled from "../assets/images/factory-icon-standardized-labelled.png"


const mapDispatchToProps = dispatch => {
  return {
    onUpdatePageData: (page, id, data) => {
      dispatch(updatePage(page, id, data));
    },
    onLoadPageData: data => {
      dispatch(loadPageData(data));
    },
  };
};

const mapStateToProps = state => {
  return {
    pageData: state.page.data
  };
};

class HomePage extends React.Component {
  componentWillMount() {
    console.log("props", this.props)
    const initialPageData = {
      ...this.props.data.pages,
      content: JSON.parse(this.props.data.pages.content)
    };

    this.props.onLoadPageData(initialPageData);
  }

  onSave = id => content => {
    this.props.onUpdatePageData("home", id, content);
  };

  render() {
    const content = this.props.pageData ? this.props.pageData.content : {};
    const tracks = []
    const overviewSlides = []
    const testimonials = []
    const cohosts = []
    const partners = []
    const participants = []
    console.log("render", this.props)

    return (
      <Layout>

        <main>
          <section id="landing">
            <div className="outer-container vert-center">
              <Grid container>
                <Grid item md={6} className="pure-u-1 pure-u-md-1-2 vert-center on-top">
                  <div className="horiz-spacing vert-spacing">
                    <Title text={content["demo-title"].text} />
                    <div className="vert-spacing">
                      <h3>A heartfelt thank you to all of the inspiring innovators who contributed to making ii2030 a resounding success!</h3>
                      <p className="bold"></p>
                    </div>
                    <a data-scroll href="#overview">
                      <button className="btn orange animate">Learn more</button>
                    </a>
                  </div>
                </Grid>
                <Grid item md={6} className="pure-u-1 pure-u-md-1-2 image-container">
                  <img src={headerImage} alt="Robot head" className="pure-img oversize" />
                </Grid>
              </Grid>
            </div>
          </section>

          <section id="overview">
            <header>
              <h2 className="subtitle"><span className="underlined">Event Overview</span></h2>
              <div className="headline vert-spacing">
                <span className="headline-container">
                  ii2030 brings together innovators from corporates, startups, the public sector, NGOs and science to create solutions for a more inclusive society by 2030.
                </span>
              </div>
            </header>
            <div className="outer-container slide-container background-container dark">
              {
                overviewSlides.map((slide, i) => {
                  return <OverviewSlide key={`slide-${i}`} slide={slide} />
                })
              }
            </div>
          </section>

          <section id="timeline">
            <header>
              <h2 className="subtitle">
                <span className="underlined">2017 Testimonials</span>
              </h2>
            </header>
            <div className="timeline">
              <div className="stop-dots">
                <div className="line"></div>
              </div>
            </div>
            <div className="pure-g tour-stops slide-container">
              {
                testimonials.map((testimonial, i) => {
                  return <TestimonialSlide key={`testimonial-${i}`} testimonial={testimonial} />
                })
              }
            </div>
          </section>

          <section id="tracks">
            <header>
              <h2 className="subtitle"><span className="underlined">2017 Tracks</span></h2>
              <p className="headline vert-spacing">The interactive event employs technology as the engine to manufacture solutions for <span className="bold">tomorrow’s biggest challenges.</span></p>
            </header>
            <div className="content background-container">
              <div className="pure-g tracks">
                {
                  tracks.map((track, i) => {
                    return <TrackCard key={`track-${i}`} track={track} />
                  })
                }
              </div>
            </div>
          </section>

          <section id="agenda">
            <header>
              <h2 className="subtitle"><span className="underlined">Program</span></h2>
              <div className="headline">
                <div className="day-selector">
                  <button data-day="day-1" className="btn btn-day1 white active day-1">Day 1: Tour</button>
                  <button data-day="day-2" className="btn btn-day2 white day-2">Day 2: Factory</button>
                </div>
              </div>
            </header>
            <div className="outer-container slide-container">

              <div className="slide tour-agenda">
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

              <div className="slide factory-agenda">
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
            </div>
          </section>

            <section id="cocreation_process">
            <header>
              <h2 className="subtitle">
                <span className="underlined">ii2030 Co-creation Process</span>
              </h2>
            </header>
          </section>

          <section id="partners">
            <header>
              <h2 className="subtitle"><span className="underlined">Partners</span></h2>
            </header>
            <div className="host partner-group headline">
              <h3>An <a href="http://www.endeva.org/" target="_blank"><img id="endeva-logo" src={endevaLogo} alt="Endeva logo" /></a> initiative</h3>
            </div>
            <div className="partner-group headline">
              <h3>Co-hosted by </h3>
              {
                cohosts.map((host, i) => {
                  return <HostCard key={`host-${i}`} host={host} />
                })
              }
            </div>
            <div className="partner-group headline">
              <h3>Partners</h3>
              {
                partners.map((partner, i) => {
                  return <PartnerCard key={`partner-${i}`} partner={partner} />
                })
              }
            </div>
          </section>


          <section id="participants">
            <header>
              <h2 className="subtitle"><span className="underlined">2017 Participants</span></h2>
            </header>
            <div className="participants-slider slide-container">
              {
                participants.map((participant, i) => {
                  return <ParticipantCard key={`participant-${i}`} participant={participant} />
                })
              }
            </div>
          </section>

        </main>


      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

export const query = graphql`
  query {
    pages(id: { eq: "home" }) {
      id
      content
      title
      slug
    }
  }
`;


