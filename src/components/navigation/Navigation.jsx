import React from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid"

const styles = {
  button: {
    padding: '6px 25px',
  },
  fullWidth: {
    width: '100%'
  }
}


class Navigation extends React.Component {
  static = {
    open: false
  }

  render() {
    const navSections = this.props.menuItems ? this.props.menuItems : []
    return (
      <div className="custom-wrapper" id="menu">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="pure-menu">
                <Link to={'/'} className="pure-menu-heading menu-heading">ii2030</Link>
                <a href="#" className="custom-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
            </div>
            <div className="pure-menu pure-menu-horizontal custom-can-transform">
              <ul className="pure-menu-list">
                {
                  navSections.map((section, i) => {
                    return
                      { section.navs && section.navs.map((nav, i) => {
                        return (
                          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover" key={`section-nav-${i}`}>
                            <a className="pure-menu-link">{ nav.name }</a>
                            <div key={`section-nav-${i}`}>
                              <p className="site-map-item">{ nav.name }</p>
                              { nav.subs && nav.subs.map((subnav, i) => (
                                <div>
                                  <img src={ subnav.icon } alt="icon" />
                                  <a data-scroll href={subnav.link} className="">{ subnav.name }</a>
                                </div>
                              ))}
                            </div>
                          </li>
                        )
                      })}
                  })
                }
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

export default Navigation;
