import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coinflip from "../../Assets/Projects/coinflip.png";
import xrpl_pad from "../../Assets/Projects/xrpl_pad.png";
import replyintelligence from "../../Assets/Projects/replyintelligence.png";
import apelol from "../../Assets/Projects/apelol.png";
import solbets from "../../Assets/Projects/solbets.png";
import solintel from "../../Assets/Projects/solintel.png";
import bundlebot from "../../Assets/Projects/bundlebot.png";
import pumpbot from "../../Assets/Projects/pumpbot.png";
import supertrendbot from "../../Assets/Projects/supertrendbot.png";
import gammaswap from "../../Assets/Projects/gammaswap.png";
import smartmoney from "../../Assets/Projects/smartmoney.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apelol}
              isBlog={false}
              title="Ape.lol"
              description="Ape.lol is a crypto project platform that features functionality similar to Pump.fun, providing a space for community engagement. Built with Next.js, Firebase, and Anchor, it allows users to explore and interact with trending projects."
              // ghLink="https://github.com/octorcat/apelol"
              demoLink="https://ape-lol-b92b.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solintel}
              isBlog={false}
              title="Solintel"
              description="Solintel is a blockchain analytics platform, offering insights into blockchain transactions and data visualizations. It utilizes Next.js and Tailwind CSS for a responsive UI and delivers real-time data analysis."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://solintel.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={replyintelligence}
              isBlog={false}
              title="Reply Intelligence"
              description="Reply Intelligence is an AI-powered customer service tool that automates responses and interactions. It leverages advanced NLP algorithms to generate intelligent replies, streamlining communication processes."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://replyintelligence.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coinflip}
              isBlog={false}
              title="CoinFlip"
              description="CoinFlip is a decentralized gaming platform that allows users to place bets and flip coins on the blockchain. Built using React.js and Firebase, it offers a fair and transparent gaming experience with real-time interactions."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://coinflip-rho-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solbets}
              isBlog={false}
              title="Solbets"
              description="Solbets is a decentralized betting platform on the Solana network. It provides users with a seamless betting experience, featuring secure transactions and a user-friendly interface powered by smart contracts."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://solbets-ecru.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xrpl_pad}
              isBlog={false}
              title="XRPL PAD"
              description="XRPL PAD is a launchpad for new projects on the XRP Ledger, helping startups raise funds and gain visibility. It supports token issuance and provides a user-friendly interface for investors and project creators."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://devnet.xrplpad.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bundlebot}
              isBlog={false}
              title="Bundle Bot"
              description="Bundle Bot is a Telegram bot designed to track and showcase trending crypto projects. It provides real-time project updates and voting functionalities for the crypto community. Built with Node.js and MongoDB, it ensures secure user interactions and data management."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://t.me/cryptobundle_bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pumpbot}
              isBlog={false}
              title="Pump.fun Trading Bot"
              description="Pump.fun Trading Bot is a specialized Telegram bot that automates trading operations for trending crypto assets. It enables users to interact with crypto markets efficiently, offering features like real-time trade execution, project listings, and custom notifications."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://t.me/pump_bundle_bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supertrendbot}
              isBlog={false}
              title="Super Trend Bot"
              description="Super Trend Bot is a specialized Telegram bot designed for automated trading strategies on the Solana network. It offers real-time trade execution, market analysis, and custom alerts, helping users optimize their trading performance."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://t.me/SolanaSuperTrendBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gammaswap}
              isBlog={false}
              title="GammaSwap"
              description="Super Trend Bot is a specialized Telegram bot designed for automated trading strategies on the Solana network. It offers real-time trade execution, market analysis, and custom alerts, helping users optimize their trading performance."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://app.gammaswap.com/trade/arbitrum/0xd63c125b169bc5655f9fdefb47c7d33e622416c7"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartmoney}
              isBlog={false}
              title="Smart Money"
              description="Super Trend Bot is a specialized Telegram bot designed for automated trading strategies on the Solana network. It offers real-time trade execution, market analysis, and custom alerts, helping users optimize their trading performance."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://smrtmoney.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
