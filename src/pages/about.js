import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import star1 from "../images/Star1.png"
import logo from "../images/Supsolution_Logo.png"
import box1 from "../images/Box1.png"
import line2 from "../images/Line2.png"
import line3 from "../images/Line3.png"
import line4 from "../images/speaks-line.png"
import diagramMobile from "../images/Diagram_Mobile-01.png"
import diagramWeb from "../images/Diagram_Web-01.png"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="about-page">
      <div className="about-div">
        <div className="about-text">
          <p className="about-text-p">
            <span className="about-logo">
              <img src={logo} className="about-logo-img" alt="line" />
            </span>{" "}
            is a full-service creative consulting agency, specializing in
            overall brand cultivation and dynamic brand experiences. Working
            closely with our clients, we collaborate to create and curate a
            strong narrative with a{" "}
            <span className="bespoke">
              <img className="bespoke-img" src={box1} alt="line" />
              bespoke look and feel.
            </span>{" "}
            We are based in{" "}
            <span className="new-york">
              <img className="ny-line" src={line2} alt="line" />
              New York
            </span>{" "}
            and{" "}
            <span className="seoul">
              <img src={line3} className="seoul-line" alt="line" />
              Seoul
            </span>{" "}
            and work in a collective of producers, designers, brand consultants,
            photographers, artists, and developers. We build content that is
            catered to each client and deliver adjacent printed and digial
            matter that{" "}
            <span className="speaks-to-brand">
              <img src={line4} className="speaks-brand-img" alt="line" />
              speaks to the brand
            </span>{" "}
            .
            <div className="star-div">
              <img src={star1} className="star-img" alt="line" />
            </div>
          </p>
          <div className="diagram-web-div">
            <img
              className="diagram-web"
              src={diagramWeb}
              alt="supsolution-diagram"
            />
          </div>
          <div className="diagram-mobile-div">
            <img
              className="diagram-mobile"
              src={diagramMobile}
              alt="supsolution-diagram"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
