import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";

import ToolBar from "@material-ui/core/ToolBar"
import Button from "@material-ui/core/Button"
import AppBar from "@material-ui/core/AppBar"
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = {
  menuItem: {
    fontWeight: 100,
    fontSize: '16px',
  },
  grow: {
    flexGrow: 1,
  },
  menu: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)"
  }
}

class TracksDropdown extends React.Component {
  state = {
    anchorEl: null
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return(
      <div>
        <Button
          aria-owns={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <>
            { this.props.anchorText }
            <ExpandMoreIcon />
          </>
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={open}
          onClose={this.handleClose}
        >
          {
            this.props.tracks.map(track => <MenuItem onClick={this.handleClose} key={track.node.slug} component={Link} to={track.node.slug} style={styles.menuItem}>{track.node.tech}</MenuItem>)
          }
        </Menu>
      </div>
    )
  }
}

class OverviewDropdown extends React.Component {
  state = {
    anchorEl: null
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return(
      <div>
        <Button
          aria-owns={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <>
            Overview
            <ExpandMoreIcon />
          </>
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} style={styles.menuItem} component={Link} to={"/#overview"}>Event overview</MenuItem>
          <MenuItem onClick={this.handleClose} style={styles.menuItem} component={Link} to={"/#timeline"}>Timeline</MenuItem>
          <MenuItem onClick={this.handleClose} style={styles.menuItem} component={Link} to={"/#tracks"}>Tracks</MenuItem>
          <MenuItem onClick={this.handleClose} style={styles.menuItem} component={Link} to={"/#agenda"}>Program</MenuItem>
          <MenuItem onClick={this.handleClose} style={styles.menuItem} component={Link} to={"/#cocreation_process"}>Process</MenuItem>
          <MenuItem onClick={this.handleClose} style={styles.menuItem} component={Link} to={"/#partners"}>Partners</MenuItem>
        </Menu>
      </div>
    )
  }
}



class Navigation extends React.Component {

  render() {
    const tracks = this.props.data.allTracks.edges
    const tracks2017 = tracks.filter(track => track.node.year === 2017)
    const tracks2019 = tracks.filter(track => track.node.year === 2019)

    return (
      <AppBar position="fixed" style={styles.menu} id="menu">
          <Grid container justify="space-between">
            <Grid item style={styles.grow}>
              <ToolBar>
                <Button to={'/'} component={Link} color="secondary" className="menu-heading">ii2030</Button>
                <OverviewDropdown />
                <TracksDropdown anchorText={"Past tracks"} tracks={tracks2017} />
                <TracksDropdown anchorText={"2019 Tracks"} tracks={tracks2019} />
                <Button to={'/faqs'} component={Link}>FAQs</Button>
              </ToolBar>
            </Grid>
            <Grid item>
              <ToolBar>
                <Button to={'/#/'} component={Link} color="secondary" variant="contained" className="menu-heading">Register</Button>
              </ToolBar>
            </Grid>
          </Grid>
      </AppBar>
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
              tech
              year
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

