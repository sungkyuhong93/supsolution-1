import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import logo from "../images/Supsolution_Logo.png";

// const activeStyles = {
//   backgroundImage: `url(${circle1})`,
//   backgroundSize: "100% 100%",
// }

const IndexPage = () => {
  return (
    <Layout>
      <div className="init-logo">
        <Link to="/about/">
          <img className="init-logo-img fade-in" src={logo} alt="Logo" />
        </Link>
      </div>
    </Layout>
  );
};

export default IndexPage;
