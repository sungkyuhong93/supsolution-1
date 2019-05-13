import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BrandDesign from "../images/Brand_Design.png"
import ArtDirection from "../images/Art_Direction.png"
import BrandDev from "../images/Brand_Development.png"
import CreativeConsulting from "../images/Creative_Consulting.png"
import MarketingStrategy from "../images/Marketing_Strategy.png"
import ContentCreation from "../images/Content_Creation.png"
import Investments from "../images/Investments.png"
import Education from "../images/Education.png"
import Events from "../images/Events_Exhibitions.png"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <div className="services-row">
      <div class="services-col">
        <div className="services-col-title">
          <img
            className="services-col-img"
            src={BrandDesign}
            alt="brand-design"
          />
        </div>
        <div className="services-col-desc">
          <p>
            We create a visual identity system that will speak to your brand,
            embody your brand’s personality, but most importantly visually
            reflect with a purpose.
          </p>
        </div>
      </div>
      <div class="services-col">
        <div className="services-col-title">
          <img
            className="services-col-img"
            src={ArtDirection}
            alt="art-direction"
          />
          <div className="services-col-desc">
            <p>
              We value the importance of keeping a holistic view on a brand. Art
              direction keeps all creative aspects of a brand feel unified. From
              design to photography, it will streamline a brand.
            </p>
          </div>
        </div>
      </div>
      <div class="services-col">
        <div className="services-col-title">
          <img className="services-col-img" src={BrandDev} alt="brand-dev" />
          <div className="services-col-desc">
            <p>
              We do an analysis on your current brand and help strengthen its
              strategy. This will help define your brand objectives and the best
              course of action.
            </p>
          </div>
        </div>
      </div>
      <div class="services-col">
        <div className="services-col-title">
          <img
            className="services-col-img"
            src={CreativeConsulting}
            alt="creative-consulting"
          />
          <div className="services-col-desc">
            <p>
              There are a range of creative outlets, and we specialize in small
              creative businesses. We assist in bringing a business from
              ground-up in all creative aspects.
            </p>
          </div>
        </div>
      </div>
      <div class="services-col">
        <div className="services-col-title">
          <img
            className="services-col-img"
            src={MarketingStrategy}
            alt="marketing-strategy"
          />
          <div className="services-col-desc">
            <p>
              Alongside social media marketing, we find the best way for a
              brand’s outreach. We set short and long term goals to achieve two
              separate outcomes.
            </p>
          </div>
        </div>
      </div>
      <div class="services-col">
        <div className="services-col-title">
          <img
            className="services-col-img"
            src={ContentCreation}
            alt="content-creation"
          />
          <div className="services-col-desc">
            <p>
              Through multiple streams of media, we create different content
              pieces that not only gives exposure to a brand, but speak to the
              brand’s creativity.
            </p>
          </div>
        </div>
      </div>
      <div class="services-col">
        <div className="services-col-title">
          <img
            className="services-col-img"
            src={Investments}
            alt="investments"
          />
          <div className="services-col-desc">
            <p>
              We help businesses expand into other areas, or help individuals
              become a part of new opportunities.
            </p>
          </div>
        </div>
      </div>
      <div class="services-col">
        <div className="services-col-title">
          <img className="services-col-img" src={Education} alt="education" />
          <div className="services-col-desc">
            <p>
              We look for opportunities to train and develop the organizational
              leadership in order to fully realize their vision.
            </p>
          </div>
        </div>
      </div>
      <div class="services-col">
        <div className="services-col-title">
          <img className="services-col-img" src={Events} alt="events" />
          <div className="services-col-desc">
            <p>
              We create interactive experiences, from installations to full
              blown events, which help tell a brand story in a more impactful
              way.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Services
