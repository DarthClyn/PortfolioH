import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";

import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Decentralised Medical Record Management"
              description= {`Technologies & Tools:
              - Blockchain: Ensures data immutability and decentralization.
              - Smart Contracts: Implements privacy controls and user-specific access.
              - IPFS (InterPlanetary File System): Decentralized document storage with cryptographic security.
              - Frontend Framework: User-friendly interface for healthcare providers (React, Angular, or similar).
              Features:
              - Secure patient data management.
              - Cryptographic privacy mechanisms for sensitive data.
              - Efficient access control using blockchain.
              - Simplified user interface for non-technical users.`}
              ghLink="https://github.com/DarthClyn/Medical-Record-Managment-System"
              demoLink="https://medical-record-managment-system-git-main-darthclyns-projects.vercel.app"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Decentralised Supplychain Tracking System"
              description={`Technologies & Tools:
                - Blockchain: Provides transparency through immutable records.
                - Smart Contracts: Automates product traceability and verifications.
                - Frontend Framework: Dashboard for real-time tracking.
                Features:
                - Real-time shipment tracking.
                - Enhanced transparency with immutable logs.
                - Smart contracts ensuring product authenticity and traceability.`}
              ghLink="https://github.com/DarthClyn/trustytransi-supplychain"
              demoLink="https://trustytransit-supplychain-git-main-darthclyns-projects.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Decentralised NFT Marketplace"
              description={`Technologies & Tools:
                - Blockchain: Ethereum or similar network for decentralized NFT operations.
                - ERC-721 Smart Contracts: NFT functionality, ownership, and trading.
                - WalletConnect: Integration with multiple wallets for transactions.
                - Frontend Framework: React, Vue, or Angular for a responsive UI.
                Features:
                - Decentralized platform for minting, buying, and selling NFTs.
                - Portfolio management for asset tracking.
                - Value calculation tools for user assets.
                - Wallet compatibility with popular crypto wallets.`}
                ghLink="https://github.com/DarthClyn/Street_NFT_Marketplace"
              demoLink="https://street-nft-marketplace-git-main-darthclyns-projects.vercel.app/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Project Portfolio"
              description={`Technologies & Tools:
                - React: For building an interactive and responsive interface.
                - APIs:
                  - GitHub API: Displays project stats and repository details.
                  - LeetCode API: Shows coding statistics and achievements.
                - HTML, CSS, JavaScript: For designing and styling the website.
                Features:
                - Overview of personal details, skills, and tools used.
                - Resume download functionality.
                - Dynamic API integration for GitHub and LeetCode stats.
                - Portfolio of projects with deployment links and GitHub repositories.
                - Contact page with easy-to-use forms and links.`}
                 ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects