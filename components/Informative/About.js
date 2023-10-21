import React, { Fragment } from "react";
import Head from "next/head";
import Faqs from "../Landing/LandingElements/Faqs";
import Integration from "../Landing/LandingElements/Integration";
import SimpleCards from "../Landing/LandingElements/SimpleCards";

import classes from "./About.module.css";

const AboutUS = () => {
  return (
    <Fragment>
      <Head>
        <title>About Us</title>
      </Head>
      <main className={classes.about}>
        <div className={classes.integration}>
          <Integration />
        </div>
        <div className={classes["simple-cards"]}>
          <SimpleCards />
        </div>
        <article className={classes["about-points"]}>
          <div className={classes["point-1"]}>
            <div className={classes["point-header-1"]}>
              <div className={classes["point-heading-1"]}>
                <h1>Dedication, Teamwork, Innovative and Reliable Services</h1>
                <img src="/images/arrow-left.png" alt="" />
              </div>
              <hr />
            </div>
            <div>
              <p>
                Every one of our staff members is dedicated to providing the
                finest quality service possible, demonstrating a great deal of
                dedication while attempting to meet the expectations of our
                customers.
              </p>
              <p>
                Our company was founded on the idea that great customer service
                begins with excellent employees. Our clients benefit from
                synergistic teams that collaborate to deliver top-level
                performance in all areas of their business using Inspedium’s
                world-class web hosting services.
              </p>
              <p>
                The skills, talents, and expertise possessed by Inspedium’s
                employees are unrivaled in the industry, allowing us to
                successfully implement our solutions to your web hosting
                demands.
              </p>
            </div>
          </div>
          <div className={classes["point-2"]}>
            <div>
              <p>
                Our dedication to quality includes our promise to deliver
                scalable, dependable, and adaptable web hosting services.
                Inspedium strives to provide a system that is consistently
                reliable and constantly accessible to all of its clients,
                effectively delivering mission-critical services on a 24/7
                basis.
              </p>
              <p>
                Inspedium is the one-stop shop for a wide range of IT needs
                because it offers high-value, customizable products and services
                with proactively managed solutions delivered by a team of
                certified engineers.
              </p>
              <p>
                Whether you’re looking for bespoke cage alternatives, unique
                server requirements, or total IT solutions, designing and
                implementing your IT infrastructure with your input and
                requirements can be done in a cost-
              </p>
            </div>
            <div className={classes["point-header-2"]}>
              <h1>Commitment to Excellence</h1>
              <hr />
              <img src="/images/arrow-right.png" alt="" />
            </div>
          </div>
        </article>
        <div className={classes.faqs}>
          <Faqs />
        </div>
      </main>
    </Fragment>
  );
};

export default AboutUS;
