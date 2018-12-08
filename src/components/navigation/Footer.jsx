import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { map } from 'lodash';
import Grid from "@material-ui/core/Grid";
import Section from "../../layouts/Section";

const Footer = props => {
  console.log(props.data)
  const navSections = [];
  const tracks = props.data.allTracks.edges;

  return (
    <footer>
      <Section>
        <Grid container>
          <Grid item xs={12} md={6}>
            <p className="column-header">ii2030</p>
            <p>Oct 18 - 19, 2017 | Berlin, Germany</p>
            <p className="contact">For more information:</p>
            <p className="contact">Email: <a href="mailto:m.leahy@endeva.org">Megan Leahy-Wright</a></p>
            <p className="contact">Facebook: <a href="https://www.facebook.com/inclusiveinnovation2030/">Inclusive Innovation 2030</a></p>
            <p className="contact">Twitter: <a href="https://twitter.com/ii2030_Berlin">@ii2030_Berlin</a></p>
          </Grid>
          <Grid item xs={12} md={6}>
            <p className="column-header">Site map</p>
            <Grid container>

              <Grid item xs={12} md={4}>
                <p>Overview</p>
                <Link to={"/#overview"}>Event overview</Link>
                <Link to={"/#timeline"}>Timeline</Link>
                <Link to={"/#tracks"}>Tracks</Link>
                <Link to={"/#agenda"}>Program</Link>
                <Link to={"/#cocreation_process"}>Process</Link>
                <Link to={"/#partners"}>Partners</Link>
              </Grid>

              <Grid item xs={12} md={4}>
                <p>Tracks</p>
                {
                  tracks.map(track => <Link to={track.node.slug}>{track.node.title}</Link>)
                }
              </Grid>

              <Grid item xs={12} md={4}>
                <Link to={"/#overview"}>FAQs</Link>
                <Link to={"/#timeline"}>Impressum</Link>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Section>
    </footer>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allPages {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
        allTracks {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <Footer data={data} />
    )}
  />
)

