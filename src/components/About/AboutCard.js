import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arbak Martirosyan </span>
            from <span className="purple"> Yerevan, Armenia.</span>
            <br />
            I am currently working as a Full Stack and Blockchain Developer freelancer.
            <br />
            With over 6 years of exprience, I have developed a wide range of skills in building 
            <span className="purple"> decentralized applications</span>, 
            <span className="purple"> smart contracts</span>, 
            and <span className="purple">trading bots</span> across various blockchain networks, including 
            <span className="purple"> Solana</span>, 
            <span className="purple"> Ethereum</span>, 
            <span className="purple"> BNB Smart Chain</span>, and the
            <span className="purple"> TON network</span>. My expertise extends to
            <span className="purple"> smart contract</span> development, 
            <span className="purple"> EVM</span>, and 
            <span className="purple"> Layer 2 solutions</span>, as well as creating automated 
            <span className="purple"> trading solutions</span> and 
            <span className="purple"> advanced dApps</span>.
            <br />
            I have a strong technical foundation in 
            <span className="purple"> JavaScript</span>, 
            <span className="purple"> TypeScript</span>, 
            <span className="purple"> Rust</span>, and 
            <span className="purple"> Solidity</span>, and I am proficient in frameworks such as 
            <span className="purple"> React</span>, 
            <span className="purple"> Next.js</span>, and 
            <span className="purple"> Anchor</span>, as well as 
            <span className="purple"> Node.js</span> for backend development.
            I have worked with numerous clients on projects like the 
            <span className="purple"> Solintel</span> project, the 
            <span className="purple"> ape.lol</span> platform, and various 
            <span className="purple"> Telegram bots</span> for crypto trading and project management.
            <br />
            In addition to my freelance work, I am passionate about 
            <span className="purple"> network development</span>, 
            <span className="purple"> running high-performance nodes</span>, and have recently been involved in the development of the 
            <span className="purple"> Gatochain network</span>, focusing on 
            <span className="purple"> node</span>, 
            <span className="purple"> validator</span>, and fee management solutions for both 
            <span className="purple"> B2B</span> and 
            <span className="purple"> B2C</span> applications.
            <br />
            I am always eager to explore new challenges in the blockchain space and collaborate with like-minded professionals.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The way to get tarted is to quit talking and begin doing!"{" "}
          </p>
          <footer className="blockquote-footer">Arbak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
