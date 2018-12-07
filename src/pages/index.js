import React from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";
import {
  updatePage,
  loadPageData,
} from "../redux/actions";

import Grid from "@material-ui/core/Grid"
import Slider from 'react-slick'

import Layout from "../layouts/default.js";
import Section from "../layouts/Section";
import Editable from "../components/editables/Editable";
import Title from "../components/editables/Title";
import PlainTextEditor from "../components/editingTools/PlainTextEditor";
import RichTextEditor from "../components/editingTools/RichTextEditor";

import OverviewSlide from "../components/home/OverviewSlide"
import TestimonialSlide from "../components/home/TestimonialSlide"
import TrackCard from "../components/home/TrackCard"
import LogoDisplay from "../components/home/LogoDisplay"
import Participant from "../components/home/Participant"
import ProgramSlider from "../components/home/ProgramSlider"

import endevaLogo from "../assets/images/logos/endeva.png"
import headerImage from "../assets/images/head-with-bubble.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
  componentDidMount() {
    console.log("component did mount", this.props)
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
    console.log("content", content)

    return (
      <Layout>

        <main>
          <Section id="landing">
            <div className="outer-container vert-center">
              <Grid container>
                <Grid item md={6} className="pure-u-1 pure-u-md-1-2 vert-center on-top">
                  <div className="horiz-spacing vert-spacing">
                    <Title level="h1" content={ content["landing-title"] } onSave={this.onSave('landing-title')} />
                    <div className="vert-spacing">
                      <Title level="h3" content={ content["landing-subtitle"] } onSave={this.onSave('landing-subtitle')} />
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
          </Section>

          <Section id="overview">
            <header>
              <h2 className="subtitle"><span className="underlined">Event Overview</span></h2>
              <div className="headline vert-spacing">
                <span className="headline-container">
                  ii2030 brings together innovators from corporates, startups, the public sector, NGOs and science to create solutions for a more inclusive society by 2030.
                </span>
              </div>
            </header>
            <div className="outer-container background-container dark">
              <Slider>
              {
                overviewSlides.map((slide, i) => {
                  return <OverviewSlide key={`slide-${i}`} slide={slide} />
                })
              }
              </Slider>
            </div>
          </Section>

          <Section id="timeline">
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
          </Section>

          <Section id="tracks">
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
          </Section>

          <Section id="agenda">
            <header>
              <h2 className="subtitle"><span className="underlined">Program</span></h2>
            </header>
            <ProgramSlider />
          </Section>

            <Section id="cocreation_process">
            <header>
              <h2 className="subtitle">
                <span className="underlined">ii2030 Co-creation Process</span>
              </h2>
            </header>
            <Grid container spacing={24} className="tour-stops">
              <Grid item xs={12} md={4}>
                <div className="content-container centered">
                    <div className="image">
                      <img src="/images/chat.png" alt="" className="pure-img" />
                    </div>
                    <h3 className="title">Before ii2030</h3>
                    <p className="description">Four weeks ahead of ii2030, we kick off the co-creation process online. Together with fellow participants, you have the chance to connect with a community of social innovators and entrepreneurs. Get valuable input from experts in your field and inspiration for the Inclusive Innovation Factory!</p>
                </div>
              </Grid>

              <Grid item xs={12} md={4}>
                <div className="content-container centered">
                    <div className="image">
                      <img src="/images/group.png" alt="" className="pure-img" />
                    </div>
                    <h3 className="title">During ii2030</h3>
                    <p className="description">ii2030 draws inspiration from a hyper-focused and intensive service design process created by IXDS. This process, aided by mapping and storytelling, fosters the creation of technology-led solutions to address the SDGs. The methodology guides participants in their understanding of the challenges future users face. Through techniques that enhance their creativity, participants co-create new, holistic solutions that involve all needed stakeholders. The end-product of the workshop is a minimum viable prototype and a concrete roadmap to success.</p>
                </div>
              </Grid>

              <Grid item xs={12} md={4}>
                <div className="content-container centered">
                    <div className="image">
                      <img src="/images/rocket.png" alt="" className="pure-img" />
                    </div>
                    <h3 className="title">After ii2030</h3>
                    <p className="description">Following ii2030, you have the opportunity to continue the co-creation process and implement your solution with guidance and follow-up support from Endeva and its partners. As a team, we move from refining our innovative visions towards realizing a pilot project within a year of ii2030.</p>
                </div>
              </Grid>
            </Grid>
          </Section>

          <Section id="partners">
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
                  return <LogoDisplay key={`host-${i}`} logo={host} />
                })
              }
            </div>
            <div className="partner-group headline">
              <h3>Partners</h3>
              {
                partners.map((partner, i) => {
                  return <LogoDisplay key={`partner-${i}`} logo={partner} />
                })
              }
            </div>
          </Section>


          <Section id="participants">
            <header>
              <h2 className="subtitle"><span className="underlined">2017 Participants</span></h2>
            </header>
            <div className="participants-slider slide-container">
              {
                participants.map((participant, i) => {
                  return <Participant key={`participant-${i}`} participant={participant} />
                })
              }
            </div>
          </Section>

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


