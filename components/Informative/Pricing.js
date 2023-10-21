import React, { Fragment } from "react";
import Head from "next/head";
import Attract from "../Landing/LandingElements/Attract";
import Faqs from "../Landing/LandingElements/Faqs";
import Integration from "../Landing/LandingElements/Integration";

import classes from "./Pricing.module.css";

const Pricing = () => {
  const buyNowHandler = () => {
    window.open("https://app.inspedium.email/users/register", "_blank");
  };

  return (
    <Fragment>
      <Head>
        <title>Pricing</title>
      </Head>
      <main className={classes.pricing}>
        <Integration />

        <section className={classes["pricing-cards-section"]}>
          <div className={classes["pricing-cards-header"]}>
            <h1>One time pricing for the complete source</h1>
            <hr />
            <p>
              That's why we originally created Inspedium Marketing. You can now
              do emailing with peace in mind.
            </p>
          </div>
          <div className={classes["pricing-cards"]}>
            <div className={classes["pricing-card"]}>
              <div className={classes["pricing-card-header"]}>
                <h1>$ 0.99</h1>
                <p>Personal Use</p>
                <h2>Standard License</h2>
              </div>
              <div className={classes["pricing-card-body"]}>
                <p>
                  Fully featured email marketing and automation functionality.
                  Comes with complete source code in PHP & documentation.
                  Unlimited access to your webapp, no recurring fee
                </p>
              </div>
              {/* <button className="color-button">BUY NOW</button> */}
              <div className={classes["pricing-card-button"]}>
                <button
                  onClick={buyNowHandler}
                  style={{ width: "150px" }}
                  className="color-button"
                >
                  <div>
                    <span>BUY NOW</span>
                    <span>BUY NOW</span>
                  </div>
                </button>
              </div>
            </div>
            <div className={classes["pricing-card"]}>
              <div className={classes["pricing-card-header"]}>
                <h1>$ 0.99</h1>
                <p>Personal Use</p>
                <h2>Standard License</h2>
              </div>
              <div className={classes["pricing-card-body"]}>
                <p>
                  Fully featured email marketing and automation functionality.
                  Comes with complete source code in PHP & documentation.
                  Unlimited access to your webapp, no recurring fee
                </p>
              </div>
              <div className={classes["pricing-card-button"]}>
                <button
                  onClick={buyNowHandler}
                  style={{ width: "150px" }}
                  className="color-button"
                >
                  <div>
                    <span>BUY NOW</span>
                    <span>BUY NOW</span>
                  </div>
                </button>
              </div>
            </div>
            <div className={classes["pricing-card"]}>
              <div className={classes["pricing-card-header"]}>
                <h1>$ 0.99</h1>
                <p>Personal Use</p>
                <h2>Standard License</h2>
              </div>
              <div className={classes["pricing-card-body"]}>
                <p>
                  Fully featured email marketing and automation functionality.
                  Comes with complete source code in PHP & documentation.
                  Unlimited access to your webapp, no recurring fee
                </p>
              </div>
              <div className={classes["pricing-card-button"]}>
                <button
                  onClick={buyNowHandler}
                  style={{ width: "150px" }}
                  className="color-button"
                >
                  <div>
                    <span>BUY NOW</span>
                    <span>BUY NOW</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        <Attract />
        <div className={classes["faq-section"]}>
          <Faqs />
        </div>
      </main>
    </Fragment>
  );
};

export default Pricing;
