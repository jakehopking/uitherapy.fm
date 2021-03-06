import React from 'react';
import {Link} from 'gatsby';
// import Img from 'gatsby-image';
// import imgHeader from '../images/header.png';
import imgLogo from '../images/logo-round.png';
import Nav from './Nav';

export default function Header() {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           subTitle
  //         }
  //       }
  //       file(relativePath: {eq: "images/header.png"}) {
  //         childImageSharp {
  //           fluid(maxWidth: 1440) {
  //             ...GatsbyImageSharpFluid_tracedSVG
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  // console.log(data)

  return (
    <header className="site-header">
      <Nav />
      <Link to="/" className="site-header__logo">
        <img src={imgLogo} alt="UI Therapy logo" />
      </Link>
      <div className="site-header__subtitle">
        <h1 className="padded-multiline title-background title-background--white">
          <span>
            The podcast for designers, developers and <br />
            independent thinkers
          </span>
        </h1>
      </div>
      {/* Very inflexible unfortunately, and an example of failure of abstraction */}
      {/* <Img
        className="site-header__bg-image"
        fluid={data.file.childImageSharp.fluid}
        draggable="false"
        alt="Header image"
        style={{ position: `absolute !important` }}
      /> */}
    </header>
  );
}
