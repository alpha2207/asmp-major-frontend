import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "Enter the World of NFTs: Set Up Your Wallet and Unlock Unique Digital Assets on Our Marketplace. Discover, Buy, and Sell with Confidence Today!",
    icon: "ri-wallet-line",
  },

  {
    title: "Create your collection",
    desc: "Create and Showcase Your Unique Digital Collection on Our NFT Marketplace: The Perfect Platform to Build and Monetize Your Passion.",
    icon: "ri-layout-masonry-line",
  },

  {
    title: "Add your NFTs",
    desc: "Unleash Your Creativity: Add Your Unique Digital Assets to Our NFT Marketplace. Join the NFT Revolution and Showcase Your Art to the World! ",
    icon: "ri-image-line",
  },

  {
    title: "List them for sale",
    desc: "Monetize Your Creativity: List Your Digital Assets for Sale on Our NFT Marketplace. With Easy Integration and Secure Transactions, You Can Start Selling Today!",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
