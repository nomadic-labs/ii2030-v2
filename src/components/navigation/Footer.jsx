import React from "react";
import Grid from "@material-ui/core/Grid";
import Section from "../../layouts/Section";

const Footer = props => {
  const navSections = [];

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
              {
                navSections.map((section, i) => {
                  return (
                    <Grid item xs={12} md={4} key={`nav-section-${i}`}>
                      { section.navs && section.navs.map((nav, i) => {
                        return (
                          <div key={`section-nav-${i}`}>
                            <p className="site-map-item">{ nav.name }</p>
                            { nav.subs && nav.subs.map((subnav, i) => (
                              <a data-scroll href={subnav.link} className="">{ subnav.name }</a>
                            ))}
                          </div>
                        )
                      })}
                    </Grid>
                  )
                })
              }
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </footer>
  );
};

export default Footer;
