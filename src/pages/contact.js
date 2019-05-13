import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import info from "../images/Info.png"
import one from "../images/One.png"
import two from "../images/Two.png"

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="contact-div">
      <div className="contact-div-p">
        <p>
          We are dedicated in bridging two cultural hubs in America and Asia. We
          are constantly looking to expand our presence.
        </p>
      </div>

      <div className="contact-row">
        <div className="contact-col">
          <p className="contact-col-title" id="ny">
            <img className="contact-number-img" src={one} alt="one" />
            New York City
          </p>
          <p className="contact-col-phone">
            79 Madison Avenue
            <br />
            New York, NY 10016
          </p>
        </div>

        <div className="contact-col" id="seoul-col">
          <p className="contact-col-title" id="seoul">
            <img className="contact-number-img" src={two} alt="two" />
            Seoul
          </p>
          <p className="contact-col-phone">
            507 Teheran-ro Gangnam-gu
            <br />
            Seoul, 06168
          </p>
        </div>
      </div>

      <div className="contact-email">
        <p className="contact-info">
          Contact - <img className="contact-info-img" src={info} alt="three" />
        </p>
      </div>
    </div>
  </Layout>
)

export default Contact
