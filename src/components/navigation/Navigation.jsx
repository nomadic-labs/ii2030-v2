import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid"


class Navigation extends React.Component {
  static = {
    open: false
  }

  render() {
    // console.log(this.props.data)

    return (
      <div className="custom-wrapper" id="menu">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="pure-menu">
                <Link to={'/'} className="pure-menu-heading menu-heading">ii2030</Link>
                <a href="/#/" className="custom-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
            </div>
            <div className="pure-menu pure-menu-horizontal custom-can-transform">
              <ul className="pure-menu-list">

              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="pure-menu pure-menu-horizontal custom-can-transform pull-right">
              <a href="https://www.linkedin.com/company/endeva/"
              className="pure-menu-heading registration">Read our latest blogposts here!</a>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

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
      <Navigation data={data} />
    )}
  />
)

