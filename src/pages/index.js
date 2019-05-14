import React from "react";
import { Link } from "gatsby";

import logo from "../images/Supsolution_Logo.png";

import circle1 from "../images/Circle1.png";

// const activeStyles = {
//   backgroundImage: `url(${circle1})`,
//   backgroundSize: "100% 100%",
// }

const IndexPage = () => (
  <div className="init-logo">
    <Link to="/about/">
      <img className="init-logo-img" src={logo} alt="Logo" />
    </Link>
  </div>
);

export default IndexPage;
