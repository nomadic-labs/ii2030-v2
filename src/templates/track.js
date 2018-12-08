import React from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";
import {
  updateTrack,
  loadPageData,
} from "../redux/actions";

import Grid from "@material-ui/core/Grid"

import Layout from "../layouts/default.js";
import Section from "../layouts/Section";
import Title from "../components/editables/Title";
import Paragraph from "../components/editables/Paragraph";
import Image from "../components/editables/Image";

import IntroSlides from "../components/track/IntroSlides"
import TourStops from "../components/track/TourStops"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const mapDispatchToProps = dispatch => {
  return {
    onUpdateTrackData: (track, id, data) => {
      dispatch(updateTrack(track, id, data));
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

class TrackTemplate extends React.Component {
  componentDidMount() {
    console.log("component did mount", this.props)
    const initialPageData = {
      ...this.props.data.tracks,
      content: JSON.parse(this.props.data.tracks.content)
    };

    this.props.onLoadPageData(initialPageData);
  }

  onSave = fieldId => content => {
    const { id } = this.props.data.tracks;
    this.props.onUpdateTrackData(id, fieldId, content);
  };

  render() {
    const content = this.props.pageData ? this.props.pageData.content : {};
    console.log("content", content)
    const tourStops = [
      { organization: "eKutir", description: "Some description goes here", imageSrc: "/images/rocket.png" },
      { organization: "Another company", description: "Some description goes here", imageSrc: "/images/rocket.png" },
    ]
    const introSlides = [
      { question: "What is disruptive technology doing for agriculture?", answer: "Precision agriculture allows farmers... " },
      { question: "Why do we need more inclusive solutions?", answer: "Precision agriculture allows farmers... " }
    ]

    return (
      <Layout>
        <main>
          <Section id="track-landing">
            <div className="outer-container">
              <Grid container>
                <Grid xs={12} md={6}>
                  <div className="horiz-spacing vert-spacing">
                    <Title level="h3" content={ content["page-title"] } onSave={this.onSave('page-title')} />
                    <div className="big-question">
                      <Title level="h1" content={ content["topic"] } onSave={this.onSave('topic')} />
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} md={6}>
                  <div className="track-icon image-container vert-spacing">
                    <Image content={ content["icon"] } onSave={this.onSave('icon')} />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Section>

          <Section id="track-description" className="background-container dark">
            <div className="outer-container">
              <div className="slider-nav"></div>
              <IntroSlides slides={introSlides} />
            </div>
          </Section>

          {
            content["track-lead"] &&
            <Section id="track-lead">
              <div className="track-lead">
                <div className="background-container">
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <div className="image-container">
                        <Image src={content["track-lead"]["image"]} alt={content["track-lead"]["name"]} className="pure-img" onSave={this.onSave('icon')}/>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div className="text vert-spacing horiz-spacing">
                        <h3>Track lead</h3>
                        <p>{`${content["track-lead"]["name"]}, ${content["track-lead"]["position"]}`}</p>
                        <p className="quote">{content["track-lead"]["quote"]}</p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Section>
          }

          <Section id="tour-factory">

            <Grid container>
              <Grid item xs={12}>
                <div id="tour">
                  <section className="intro">
                    <header className="text-center">
                      <Title level="h2" content={ content["tour-title"] } onSave={this.onSave('tour-title')} />
                      <div className="headline vert-spacing">
                        <Paragraph content={ content["tour-subtitle"] } onSave={this.onSave('tour-subtitle')} />
                      </div>
                    </header>

                    <div className="outer-container">
                      <Grid container>
                        <Grid item xs={12} md={6}>
                          <div className="vert-center horiz-center">
                            <div className="image oversize">
                              <img src="/images/tour-detailed.png" alt="ii2030" className="pure-img" />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <div className="vert-center slide-container">
                            <div className="slide text horiz-spacing vert-spacing">
                              <Paragraph content={ content["tour-description"] } onSave={this.onSave('tour-description')} />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </section>

                  <section id="tour-stops">
                    <header className="text-center">
                      <Title level="h2" content={ content["tour-stops-title"] } onSave={this.onSave('tour-stops-title')} />
                      <div className="headline vert-spacing">
                        <Paragraph content={ content["tour-stops-subtitle"] } onSave={this.onSave('tour-stops-subtitle')} />
                      </div>
                    </header>

                    <TourStops stops={tourStops} />
                  </section>

                </div>

              </Grid>

              <Grid item xs={12}>
                <div id="factory">
                  <section className="intro">
                    <header className="text-center">
                      <Title level="h2" content={ content["factory-title"] } onSave={this.onSave('factory-title')} />
                      <div className="headline vert-spacing">
                        <Paragraph content={ content["factory-subtitle"] } onSave={this.onSave('factory-subtitle')} />
                      </div>
                    </header>

                    <div className="outer-container">
                      <Grid container>
                        <Grid item xs={12} md={6}>
                          <div className="vert-center horiz-center">
                            <div className="image oversize">
                              <img src="/images/factory-detailed.png" alt="ii2030" className="pure-img" />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <div className="vert-center slide-container">
                            <div className="slide text horiz-spacing vert-spacing">
                              <Paragraph content={ content["factory-description"] } onSave={this.onSave('factory-description')} />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </section>

                  <section id="factory-outputs">
                    <header className="text-center">
                      <Title level="h2" content={ content["factory-outputs-title"] } onSave={this.onSave('factory-outputs-title')} />
                    </header>
                    <div className="text horiz-spacing">
                      <Paragraph content={ content["factory-outputs-description"] } onSave={this.onSave('factory-outputs-description')} />
                    </div>
                  </section>
                </div>
              </Grid>
            </Grid>

          </Section>
        </main>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackTemplate);


export const query = graphql`
  query($id: String!) {
    tracks(id: { eq: $id }) {
      id
      content
      title
      slug
      template
      page_type
      navigation {
        order
        displayTitle
      }
    }
  }
`;

