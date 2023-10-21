import React, { Fragment } from "react";
import Head from "next/head";
import Attract from "./LandingElements/Attract";
import Faqs from "./LandingElements/Faqs";
import Integration from "./LandingElements/Integration";
import SimpleCards from "./LandingElements/SimpleCards";

import classes from "./Landing.module.css";

const Landing = () => {
  const registerHandler = () => {
    window.open("https://app.inspedium.email/users/register", "_blank");
  };

  return (
    <Fragment>
      <Head>
        <title>Inspedium Marketing</title>
      </Head>
      <main className={classes.landing}>
        <Integration />

        <section className={classes["feature-grid"]}>
          <div className={classes["grid-text"]}>
            <h1>Comprehensive Statistics & Insight Report</h1>
            <p>
              With Inspedium Marketing, you can review your individual campaign
              reports after every email you send, or monitor your mail list
              growth, campaign engagement, and marketing performance directly
              from your account dashboard.
            </p>
            {/* <button className="color-button">CREATE YOUR ACCOUNT</button> */}
            <button
              onClick={registerHandler}
              style={{ width: "270px" }}
              className="color-button"
            >
              <div>
                <span>CREATE YOUR ACCOUNT</span>
                <span>CREATE YOUR ACCOUNT</span>
              </div>
            </button>
          </div>
          <div className={classes["grid-image"]}>
            <img src="/images/feature-grid-1.png" alt="" />
          </div>
        </section>
        <section id={classes.flip} className={classes["feature-grid"]}>
          <div className={classes["grid-image"]}>
            <img src="/images/feature-grid-2.png" alt="" />
          </div>
          <div className={classes["grid-text"]}>
            <h1>Open to customization and evolve</h1>
            <p>
              With Inspedium Marketing, you can review your individual campaign
              reports after every email you send, or monitor your mail list
              growth, campaign engagement, and marketing performance directly
              from your account dashboard.
            </p>
            {/* <button className="color-button">CREATE YOUR ACCOUNT</button> */}
            <button
              onClick={registerHandler}
              style={{ width: "270px" }}
              className="color-button"
            >
              <div>
                <span>CREATE YOUR ACCOUNT</span>
                <span>CREATE YOUR ACCOUNT</span>
              </div>
            </button>
          </div>
        </section>
        <section className={classes["feature-grid"]}>
          <div className={classes["grid-text"]}>
            <h1>Track every message, sent out for your campaign</h1>
            <p>
              With Inspedium Marketing, you can review your individual campaign
              reports after every email you send, or monitor your mail list
              growth, campaign engagement, and marketing performance directly
              from your account dashboard.
            </p>
            {/* <button className="color-button">CREATE YOUR ACCOUNT</button> */}
            <button
              onClick={registerHandler}
              style={{ width: "270px" }}
              className="color-button"
            >
              <div>
                <span>CREATE YOUR ACCOUNT</span>
                <span>CREATE YOUR ACCOUNT</span>
              </div>
            </button>
          </div>
          <div className={classes["grid-image"]}>
            <img src="/images/feature-grid-3.png" alt="" />
          </div>
        </section>

        <section className={classes.campaign}>
          <div>
            <h1>Next Campaign works in 3 simple steps</h1>
            <p>
              From mapping out your online campaign using simple drag & drop
              interface to simulating and orginizing all of your campaigns...
            </p>
          </div>
          <div>
            <div className={classes["left-text"]}>
              <h1>1. PLAN</h1>
              <p>
                Next Campaign’s drag-and-drop canvas allows you to quickly map
                any online campaign you can think off
              </p>
            </div>
            <div className={classes["right-arrow"]}>
              <img src="/images/arrow-right.png" alt="" />
            </div>
            <div>
              <h1>2. SIMULATE</h1>
              <p>
                Visualize your campaign traffic flowing through your campaign
                elements
              </p>
            </div>
            <div className={classes["left-arrow"]}>
              <img src="/images/arrow-left.png" alt="" />
            </div>
            <div className={classes["left-text"]}>
              <h1>3. ORGANIZE</h1>
              <p>
                Keep your campaigns organized using Kanban style columns and
                tags
              </p>
            </div>
          </div>
        </section>

        <SimpleCards />

        {/* <section className={classes.attract}>
        <h1>
          <hr />
          Ready To Start
          <hr />
        </h1>
        <p>Choose a plan that suits your need and get started</p>
        <button className="color-button">CREATE YOUR ACCOUNT</button>
      </section> */}
        <Attract />

        <article id="features1" className={classes["feature-cards-section"]}>
          <div className={classes["feature-cards-header"]}>
            <h1>Everything You Need In One Web Platform</h1>
            <hr />
            <p>
              More features to make planning and organizing of your campaigns
              even easier
            </p>
          </div>
          <div className={classes["feature-cards"]}>
            <div className={classes.odd}>
              <img src="/images/features/feature1.png" alt="" />
              <h1>Mailing List Management</h1>
              <p>
                Single/double opt-in, list segmenting, mass importing/exporting,
                subscription form builder, blacklisting, etc
              </p>
            </div>
            <div className={classes.even}>
              <img src="/images/features/feature2.png" alt="" />
              <h1>Email verification</h1>
              <p>
                Single/double opt-in, list segmenting, mass importing/exporting,
                subscription form builder, blacklisting, etc
              </p>
            </div>
            <div className={classes.odd}>
              <img src="/images/features/feature3.png" alt="" />
              <h1>Open/click tracking</h1>
              <p>
                Single/double opt-in, list segmenting, mass importing/exporting,
                subscription form builder, blacklisting, etc
              </p>
            </div>
            <div className={classes.even}>
              <img src="/images/features/feature4.png" alt="" />
              <h1>Automation</h1>
              <p>
                Single/double opt-in, list segmenting, mass importing/exporting,
                subscription form builder, blacklisting, etc
              </p>
            </div>
            <div className={classes.odd}>
              <img src="/images/features/feature5.png" alt="" />
              <h1>Live upgrade support</h1>
              <p>
                Single/double opt-in, list segmenting, mass importing/exporting,
                subscription form builder, blacklisting, etc
              </p>
            </div>
            <div className={classes.even}>
              <img src="/images/features/feature6.png" alt="" />
              <h1>Email builder</h1>
              <p>
                Single/double opt-in, list segmenting, mass importing/exporting,
                subscription form builder, blacklisting, etc
              </p>
            </div>
          </div>
        </article>

        <Faqs />
      </main>
    </Fragment>
  );
};

export default Landing;
