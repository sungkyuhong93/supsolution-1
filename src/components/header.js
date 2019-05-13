import { Link } from "gatsby"
import logo from "../images/Supsolution_Logo.png"
import PropTypes from "prop-types"
import React from "react"
import initial_logo_css from "../components/initial-logo.css"
import circle1 from "../images/Circle1.png"
import { Navbar, Nav } from "react-bootstrap"

const activeStyles = {
  backgroundImage: `url(${circle1})`,
  backgroundSize: "100% 100%",
}

const Header = ({ siteTitle }) => (
  <Navbar className="navbar" expand="lg">
    <Navbar.Brand href="/" className="navbar-logo">
      <img className="navbar-logo-img" src={logo} />
    </Navbar.Brand>
    <div className="navbar-items-div">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-list">
          <Link activeStyle={activeStyles} className="link" to="/about/">
            About
          </Link>
          <Link activeStyle={activeStyles} className="link" to="/services/">
            Services
          </Link>
          <Link activeStyle={activeStyles} className="link" to="/contact/">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
