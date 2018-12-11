import React from "react";
import { graphql, Link } from "gatsby";
import { connect } from "react-redux";
import {
  updatePage,
  loadPageData,
} from "../redux/actions";

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import Layout from "../layouts/default.js";
import Section from "../layouts/Section";
import Title from "../components/editables/Title";
import Paragraph from "../components/editables/Paragraph";
import Image from "../components/editables/Image";

import OverviewSlides from "../components/home/OverviewSlides"
import TimelineSlider from "../components/home/TimelineSlider"
import TrackCard from "../components/home/TrackCard"
import LogoDisplay from "../components/home/LogoDisplay"
import Participants from "../components/home/Participants"
import ProgramSlider from "../components/home/ProgramSlider"

import endevaLogo from "../assets/images/logos/endeva.png"
import chatIcon from "../assets/images/chat.png"
import groupIcon from "../assets/images/group.png"
import rocketIcon from "../assets/images/rocket.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PAGE_ID = "home"

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
    pageData: state.page.data,
    isEditingPage: state.adminTools.isEditingPage,
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

  saveHandler = id => content => {
    this.props.onUpdatePageData(PAGE_ID, id, content);
  };

  addPartner = () => {
    const partnerArray = [...this.props.pageData.content.partners]
    const newPartner = {
      "logo" : {
        "imageSrc" : "/icon.png"
      },
      "name" : {
        "text" : "Placeholder"
      }
    }

    partnerArray.push(newPartner)
    this.props.onUpdatePageData(PAGE_ID, "partners", partnerArray)
  };

  editPartner = (index, field) => content => {
    const arr = [...this.props.pageData.content.partners];
    const updated = {
      ...arr[index],
      [field]: content
    };

    arr[index] = updated;

    this.props.onUpdatePageData(PAGE_ID, "partners", arr);
  };

  deletePartner = i => () => {
    const arr = [...this.props.pageData.content.partners]
    arr.splice(i, 1)
    this.props.onUpdatePageData(PAGE_ID, "partners", arr)
  };

  addCohost = () => {
    const arr = [...this.props.pageData.content.cohosts]
    const updated = {
      "logo" : {
        "imageSrc" : "/icon.png"
      },
      "name" : {
        "text" : "Placeholder"
      }
    }

    arr.push(updated)
    this.props.onUpdatePageData(PAGE_ID, "cohosts", arr)
  };

  editCohost = (index, field) => content => {
    const arr = [...this.props.pageData.content.cohosts];
    const updated = {
      ...arr[index],
      [field]: content
    };

    arr[index] = updated;

    this.props.onUpdatePageData(PAGE_ID, "cohosts", arr);
  };

  deleteCohost = i => () => {
    const arr = [...this.props.pageData.content.cohosts]
    arr.splice(i, 1)
    this.props.onUpdatePageData(PAGE_ID, "cohosts", arr)
  };

  addParticipant = () => {
    const arr = [...this.props.pageData.content.participants]
    const newParticipant = {
      "logo" : {
        "imageSrc" : "/icon.png"
      },
      "name" : {
        "text" : "Placeholder"
      },
      "link" : {
        "text" : "http://endeva.org/"
      }
    }

    arr.push(newParticipant)
    this.props.onUpdatePageData(PAGE_ID, "participants", arr)
  };

  editParticipant = (index, field) => content => {
    const arr = [...this.props.pageData.content.participants];
    const updated = {
      ...arr[index],
      [field]: content
    };

    arr[index] = updated;

    this.props.onUpdatePageData(PAGE_ID, "participants", arr);
  };

  deleteParticipant = i => () => {
    const arr = [...this.props.pageData.content.participants]
    arr.splice(i, 1)
    this.props.onUpdatePageData(PAGE_ID, "participants", arr)
  }


  render() {
    const content = this.props.pageData ? this.props.pageData.content : {};
    const tracks = this.props.data ? this.props.data.allTracks.edges : [];
    const cohosts = content["cohosts"] || [];
    const partners = content["partners"] || [];
    const participants = content["participants"] || [];

    return (
      <Layout>

        <main>
          <Section id="landing">
            <div className="outer-container vert-center">
              <Grid container>
                <Grid item xs={12} md={6} className="pure-u-1 pure-u-md-1-2 vert-center on-top">
                  <div className="horiz-spacing vert-spacing">
                    <Title level="title" content={ content["landing-title"] } onSave={this.saveHandler('landing-title')} />
                    <div className="vert-spacing">
                      <Title level="h3" content={ content["landing-subtitle"] } onSave={this.saveHandler('landing-subtitle')} />
                    </div>
                    <Button component={Link} to="#overview" className="btn orange animate">Learn more</Button>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} className="pure-u-1 pure-u-md-1-2 image-container">
                  <Image content={ content["landing-image"] } onSave={this.saveHandler('landing-image')} />
                </Grid>
              </Grid>
            </div>
          </Section>

          <Section id="overview" data-aos="fade-up">
            <header className="text-center">
              <Title level="h2" content={ content["overview-title"] } onSave={this.saveHandler('overview-title')} />
              <div className="headline vert-spacing">
                <span className="headline-container">
                  <Paragraph content={ content["overview-subtitle"] } onSave={this.saveHandler('overview-subtitle')} />
                </span>
              </div>
            </header>
          </Section>
          <Section className="outer-container background-container dark">
            <OverviewSlides slides={content["overview-slides"]} onSave={this.saveHandler("overview-slides")} />
          </Section>

          <Section id="timeline">
            <header className="text-center">
              <Title level="h2" content={ content["timeline-title"] } onSave={this.saveHandler('timeline-title')} />
            </header>
            <TimelineSlider slides={ content["timeline-slides"] } onSave={this.saveHandler("timeline-slides")} />
          </Section>

          <Section>
            <header className="text-center">
              <Title level="h2" content={ content["tracks-title"] } onSave={this.saveHandler('tracks-title')} />
              <div className="headline vert-spacing">
                <span className="headline-container">
                  <Paragraph className="headline" content={ content["tracks-subtitle"] } onSave={this.saveHandler('tracks-subtitle')} />
                </span>
              </div>
            </header>
          </Section>
          <Section id="tracks" className="content background-container">
            <Grid container justify="center" className="pure-g tracks">
              {
                tracks.map((node, i) => {
                  return <TrackCard key={`track-${i}`} track={node} />
                })
              }
            </Grid>
          </Section>

          <Section id="agenda">
            <header className="text-center">
              <Title level="h2" content={ content["agenda-title"] } onSave={this.saveHandler('agenda-title')} />
            </header>
            <ProgramSlider content={content} saveHandler={this.saveHandler} />
          </Section>

            <Section id="cocreation_process">
            <header className="text-center">
              <Title level="h2" content={ content["process-title"] } onSave={this.saveHandler('process-title')} />
            </header>
            <Grid container spacing={24} className="tour-stops">
              <Grid item xs={12} md={4}>
                <div className="content-container">
                    <div className="image">
                      <img src={chatIcon} alt="" className="pure-img" />
                    </div>
                    <div className="text-center">
                      <Title level="h3" content={ content["process-step1-title"] } onSave={this.saveHandler('process-step1-title')} />
                    </div>
                    <Paragraph content={ content["process-step1-description"] } onSave={this.saveHandler('process-step1-description')} />
                </div>
              </Grid>

              <Grid item xs={12} md={4}>
                <div className="content-container">
                    <div className="image">
                      <img src={groupIcon} alt="" className="pure-img" />
                    </div>
                    <div className="text-center">
                      <Title level="h3" content={ content["process-step2-title"] } onSave={this.saveHandler('process-step2-title')} />
                    </div>
                    <Paragraph content={ content["process-step2-description"] } onSave={this.saveHandler('process-step2-description')} />
                </div>
              </Grid>

              <Grid item xs={12} md={4}>
                <div className="content-container">
                    <div className="image">
                      <img src={rocketIcon} alt="" className="pure-img" />
                    </div>
                    <div className="text-center">
                      <Title level="h3" content={ content["process-step3-title"] } onSave={this.saveHandler('process-step3-title')} />
                    </div>
                    <Paragraph content={ content["process-step3-description"] } onSave={this.saveHandler('process-step3-description')} />
                </div>
              </Grid>
            </Grid>
          </Section>

          <Section id="partners">
            <header className="text-center">
              <Title level="h2" content={ content["partners-title"] } onSave={this.saveHandler('partners-title')} />
            </header>
            <div className="host partner-group headline">
              <Typography variant="display3">An <a href="http://www.endeva.org/" target="_blank" rel="noopener noreferrer"><img id="endeva-logo" src={endevaLogo} alt="Endeva logo" /></a> initiative</Typography>
            </div>
            <div className="partner-group">
              <div className="headline">
                <Typography variant="display3">Co-hosted by </Typography>
              </div>
              <div className="logos">
                { cohosts.map((entity, i) => <LogoDisplay key={`cohost-${i}`} index={i} entity={entity} onDelete={this.props.isEditingPage ? this.deleteCohost : null} onSave={this.editCohost} />) }
                { this.props.isEditingPage && <Button onClick={this.addCohost}>Add cohost</Button> }
              </div>
            </div>
            <div className="partner-group">
              <div className="headline">
                <Typography variant="display3">Partners</Typography>
              </div>
              <div className="logos">
                { partners.map((entity, i) => <LogoDisplay key={`partner-${i}`} index={i} entity={entity} onDelete={this.props.isEditingPage ? this.deletePartner : null} onSave={this.editPartner} />) }
                { this.props.isEditingPage && <Button onClick={this.addPartner}>Add partner</Button> }
              </div>
            </div>
          </Section>


          <Section id="participants">
            <header className="text-center">
              <Title level="h2" content={ content["participants-title"] } onSave={this.saveHandler('participants-title')} />
            </header>
            <Participants participants={participants} isEditingPage={this.props.isEditingPage} onSave={this.editParticipant} onDelete={this.deleteParticipant}/>
            { this.props.isEditingPage && <Button onClick={this.addParticipant}>Add participant</Button> }
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
    allTracks(filter: { year: { eq: 2019 }}) {
      edges {
        node {
          id
          title
          slug
          tech
          content
        }
      }
    }
    allPartners {
      edges {
        node {
          id
          partnership_level
          content
        }
      }
    }
    allParticipants {
      edges {
        node {
          id
          content
        }
      }
    }
  }
`;


