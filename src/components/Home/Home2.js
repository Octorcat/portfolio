import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/av.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a deep passion for programming and am constantly learning and growing in the field.
              <br />
              <br />I am fluent in program languages like
              <i>
                <b className="purple"> Javascript</b> /<b className="purple"> TypeScript</b>,<b className="purple"> Python</b> and<b className="purple"> Rust. </b>
              </i>
              <br />
              <br />
              My interests lie in building innovative web technologies and products, with a particular focus on blockchain, including expertise in
              <i>
                <b className="purple"> Solana </b> and {" "}
                <b className="purple">
                  EVM networks.
                </b>
              </i>
              <br />
              <br />
              I’m also dedicated to developing robust applications using Node.js and modern JavaScript libraries and frameworks such as
              <b className="purple"> React.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Next.js
                </b>
              </i>
              &nbsp;, always striving to turn ideas into impactful solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/octorcat"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/incredible__guy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arbak-dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/octorcat"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/37499598009"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
