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
import Title from "../components/editables/Title";
import Paragraph from "../components/editables/Paragraph";
import Image from "../components/editables/Image";

import OverviewSlide from "../components/home/OverviewSlide"
import TimelineSlider from "../components/home/TimelineSlider"
import TrackCard from "../components/home/TrackCard"
import LogoDisplay from "../components/home/LogoDisplay"
import Participant from "../components/home/Participant"
import ProgramSlider from "../components/home/ProgramSlider"

import endevaLogo from "../assets/images/logos/endeva.png"

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
    const overviewSlides = content["overview-slides"] || [];
    const tracks = this.props.data ? this.props.data.allTracks.edges : [];
    const timelineSlides = content["timeline-slides"] || [];
    const cohosts = []
    const partners = []
    const participants = []
    console.log("tracks", tracks)

    return (
      <Layout>

        <main>
          <Section id="landing">
            <div className="outer-container vert-center">
              <Grid container>
                <Grid item xs={12} md={6} className="pure-u-1 pure-u-md-1-2 vert-center on-top">
                  <div className="horiz-spacing vert-spacing">
                    <Title level="h1" content={ content["landing-title"] } onSave={this.onSave('landing-title')} />
                    <div className="vert-spacing">
                      <Title level="h3" content={ content["landing-subtitle"] } onSave={this.onSave('landing-subtitle')} />
                    </div>
                    <a data-scroll href="#overview">
                      <button className="btn orange animate">Learn more</button>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} className="pure-u-1 pure-u-md-1-2 image-container">
                  <Image content={ content["landing-image"] } onSave={this.onSave('landing-image')} />
                </Grid>
              </Grid>
            </div>
          </Section>

          <Section id="overview">
            <header className="text-center">
              <Title level="h2" content={ content["overview-title"] } onSave={this.onSave('overview-title')} />
              <div className="headline vert-spacing">
                <span className="headline-container">
                  <Paragraph content={ content["overview-subtitle"] } onSave={this.onSave('overview-subtitle')} />
                </span>
              </div>
            </header>
          </Section>
          <Section className="outer-container background-container dark">
            <Slider>
              {
                overviewSlides.map((slide, i) => {
                  return <OverviewSlide key={`slide-${i}`} slide={slide} />
                })
              }
            </Slider>
          </Section>

          <Section id="timeline">
            <header className="text-center">
              <Title level="h2" content={ content["timeline-title"] } onSave={this.onSave('timeline-title')} />
            </header>
            <TimelineSlider slides={timelineSlides} />
          </Section>

          <Section id="tracks">
            <header className="text-center">
              <Title level="h2" content={ content["tracks-title"] } onSave={this.onSave('tracks-title')} />
              <div className="headline vert-spacing">
                <span className="headline-container">
                  <Paragraph className="headline" content={ content["tracks-subtitle"] } onSave={this.onSave('tracks-subtitle')} />
                </span>
              </div>
            </header>
          </Section>
          <Section className="content background-container">
            <Grid container className="pure-g tracks">
              {
                tracks.map((node, i) => {
                  return <TrackCard key={`track-${i}`} track={node} />
                })
              }
            </Grid>
          </Section>

          <Section id="agenda">
            <header className="text-center">
              <Title level="h2" content={ content["agenda-title"] } onSave={this.onSave('agenda-title')} />
            </header>
            <ProgramSlider />
          </Section>

            <Section id="cocreation_process">
            <header className="text-center">
              <Title level="h2" content={ content["process-title"] } onSave={this.onSave('process-title')} />
            </header>
            <Grid container spacing={24} className="tour-stops">
              <Grid item xs={12} md={4}>
                <div className="content-container centered">
                    <div className="image">
                      <img src="/images/chat.png" alt="" className="pure-img" />
                    </div>
                    <Title level="h3" content={ content["process-step1-title"] } onSave={this.onSave('process-step1-title')} />
                    <Paragraph content={ content["process-step1-description"] } onSave={this.onSave('process-step1-description')} />
                </div>
              </Grid>

              <Grid item xs={12} md={4}>
                <div className="content-container centered">
                    <div className="image">
                      <img src="/images/group.png" alt="" className="pure-img" />
                    </div>
                    <Title level="h3" content={ content["process-step2-title"] } onSave={this.onSave('process-step2-title')} />
                    <Paragraph content={ content["process-step2-description"] } onSave={this.onSave('process-step2-description')} />
                </div>
              </Grid>

              <Grid item xs={12} md={4}>
                <div className="content-container centered">
                    <div className="image">
                      <img src="/images/rocket.png" alt="" className="pure-img" />
                    </div>
                    <Title level="h3" content={ content["process-step3-title"] } onSave={this.onSave('process-step3-title')} />
                    <Paragraph content={ content["process-step3-description"] } onSave={this.onSave('process-step3-description')} />
                </div>
              </Grid>
            </Grid>
          </Section>

          <Section id="partners">
            <header className="text-center">
              <Title level="h2" content={ content["partners-title"] } onSave={this.onSave('partners-title')} />
            </header>
            <div className="host partner-group headline">
              <h3>An <a href="http://www.endeva.org/" target="_blank" rel="noopener noreferrer"><img id="endeva-logo" src={endevaLogo} alt="Endeva logo" /></a> initiative</h3>
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
            <header className="text-center">
              <Title level="h2" content={ content["participants-title"] } onSave={this.onSave('participants-title')} />
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
    pages(id: {eq: "home"}) {
      id
      content
      title
      slug
    }
    allTracks(filter: { year: { eq: 2017 }}) {
      edges {
        node {
          id
          title
          slug
          content
        }
      }
    }
  }
`;


