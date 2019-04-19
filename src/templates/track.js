import React from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";
import {
  saveTrackContent,
  saveTrackData,
  loadPageData,
} from "../redux/actions";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Layout from "../layouts/default.js";
import Section from "../layouts/Section";
import Title from "../components/editables/Title";
import Paragraph from "../components/editables/Paragraph";
import Image from "../components/editables/Image";
import PlainText from "../components/editables/PlainText";

import IntroSlides from "../components/track/IntroSlides"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const mapDispatchToProps = dispatch => {
  return {
    onUpdateTrackContent: (track, id, data) => {
      dispatch(saveTrackContent(track, id, data));
    },
    onUpdateTrackData: (track, id, data) => {
      dispatch(saveTrackData(track, id, data));
    },
    onLoadPageData: data => {
      dispatch(loadPageData(data));
    },
  };
};

const mapStateToProps = state => {
  return {
    pageData: state.page.data,
    isEditingPage: state.adminTools.isEditingPage,
  };
};

class TrackTemplate extends React.Component {
  componentDidMount() {
    const initialPageData = {
      ...this.props.data.tracks,
      content: JSON.parse(this.props.data.tracks.content)
    };

    this.props.onLoadPageData(initialPageData);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data.tracks.id !== this.props.data.tracks.id) {
      const initialPageData = {
        ...this.props.data.tracks,
        content: JSON.parse(this.props.data.tracks.content)
      };

      this.props.onLoadPageData(initialPageData);
    }
  }

  onSave = fieldId => content => {
    const { id } = this.props.data.tracks;
    console.log(`Saving ${fieldId}`)
    console.log(content)
    this.props.onUpdateTrackContent(id, fieldId, content);
  };

  onSaveTitle = content => {
    const { id } = this.props.data.tracks;
    this.props.onUpdateTrackData(id, "title", content.text)
  }

  addTrackLead = () => {
    const newArr = this.props.pageData.content["track-leads"] ? [...this.props.pageData.content["track-leads"]] : [];
    const { id } = this.props.data.tracks;

    const newItem = {
      "track-lead-image" : {
        "imageSrc" : "/icon.png",
      },
      "track-lead-name": {
        "text": "Name"
      },
      "track-lead-quote": {
        "text": "Quote"
      }
    }

    newArr.push(newItem)
    this.props.onUpdateTrackContent(id, "track-leads", newArr)
  };

  editTrackLead = (index, field) => content => {
    const arr = [...this.props.pageData.content["track-leads"]];
    const { id } = this.props.data.tracks;

    const updated = {
      ...arr[index],
      [field]: content
    };

    arr[index] = updated;

    this.props.onUpdateTrackContent(id, "track-leads", arr);
  };

  deleteTrackLead = i => () => {
    const arr = [...this.props.pageData.content["track-leads"]];
    const { id } = this.props.data.tracks;

    arr.splice(i, 1)
    this.props.onUpdateTrackContent(id, "track-leads", arr)
  };

  render() {
    const title = this.props.pageData ? this.props.pageData.title : "";
    const content = this.props.pageData ? this.props.pageData.content : {};
    const introSlides = content["intro-slides"] || [];
    const trackLeads = content["track-leads"] || [];

    return (
      <Layout>
        <main style={{ paddingBottom: 0 }}>
          <Section id="track-landing">
            <div className="outer-container">
              <Grid container>
                <Grid item xs={12} md={6}>
                  <div className="horiz-spacing vert-spacing">
                    <Title level="h3" content={ { text: title } } onSave={this.onSaveTitle} />
                    <div className="big-question">
                      <Title level="h2" content={ content["topic"] } onSave={this.onSave('topic')} />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="track-icon image-container vert-spacing">
                    <Image content={ content["icon"] } onSave={this.onSave('icon')} helpText="This is the main icon for this track (solid background)" />
                    { this.props.isEditingPage && <Image content={ content["icon-small"] } onSave={this.onSave('icon-small')} helpText="This is the secondary icon for this track (transparent background). It will appear on the home page." /> }
                  </div>
                </Grid>
              </Grid>
            </div>
          </Section>

          <Section id="track-description" className="background-container dark">
            <div className="outer-container">
              <div className="slider-nav"></div>
              <IntroSlides slides={introSlides} onSave={this.onSave("intro-slides")} />
            </div>
          </Section>


          <Section id="track-lead" className="background-container vert-spacing">
            <header className="text-center vert-spacing">
              <Title level="h2" content={ content["track-lead-title"] } onSave={this.onSave('track-lead-title')} />
            </header>

            {
              trackLeads.map((lead, index) => {
                return (
                  <div className="track-lead vert-spacing" key={`track-lead-${index}`}>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <div className="image-container vert-spacing">
                          <Image
                            content={lead["track-lead-image"]}
                            className="pure-img"
                            onSave={this.editTrackLead(index, "track-lead-image")}
                            styles={{ image: { width: 'unset', borderRadius: "50%" }}}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div className="text vert-spacing horiz-spacing">
                          <h3>
                            <PlainText content={lead["track-lead-name"]} onSave={this.editTrackLead(index, "track-lead-name")} />
                          </h3>
                          <div className="quote">
                            <Paragraph content={lead["track-lead-quote"]} onSave={this.editTrackLead(index, "track-lead-quote")} />
                          </div>
                        </div>
                        {
                          this.props.isEditingPage &&
                          <div className="text vert-spacing horiz-spacing">
                            <Button onClick={this.deleteTrackLead(index)}>Delete implementation partner</Button>
                          </div>
                        }
                      </Grid>
                    </Grid>
                  </div>
                )
              })
            }

            { this.props.isEditingPage && <Button onClick={this.addTrackLead}>Add implementation partner</Button> }
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

