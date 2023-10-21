import React, { Fragment } from "react";
import Head from "next/head";
import Attract from "../Landing/LandingElements/Attract";
import Faqs from "../Landing/LandingElements/Faqs";
import GoogleMapReact from "google-map-react";
import { TextField } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

import classes from "./Contact.module.css";

const Contact = () => {
  const contactFormSubmitHandler = (event) => {
    event.preventDefault();
  };

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className={classes.contact}>
        <section className={classes["contact-cards-section"]}>
          <div className={classes["contact-cards-header"]}>
            <h1>Make everyday marketing fun</h1>
            <hr />
            <p>
              That's why we originally created Inspedium Marketing. You can now
              do emailing with peace in mind.
            </p>
          </div>
          <div className={classes["contact-cards"]}>
            <div className={classes.odd}>
              <img
                src="/images/contact/contact-card-1.png"
                alt="General Inquiries"
              />
              <h1>General Inquiries</h1>
              <p>
                For General Enquiries Send us an E-Mail at
                <span>info@inspedium.cloud</span>
              </p>
            </div>
            <div className={classes.even}>
              <img
                src="/images/contact/contact-card-2.png"
                alt="Contact Support"
              />
              <h1>Contact Support</h1>
              <p>
                For General Enquiries Send us an E-Mail at
                <span>info@inspedium.cloud</span>
              </p>
            </div>
            <div className={classes.odd}>
              <img
                src="/images/contact/contact-card-3.png"
                alt="Pre-Sales Questions"
              />
              <h1>Pre-Sales Questions</h1>
              <p>
                For General Enquiries Send us an E-Mail at
                <span>info@inspedium.cloud</span>
              </p>
            </div>
          </div>
        </section>

        <article className={classes["contact-form-section"]}>
          <div className={classes["info-header"]}>
            <h1>Contact Information</h1>
            <div>
              <PhoneInTalkIcon />
              <div>
                <h2>Phone Number</h2>
                <p>+1 (315) 554-9664</p>
              </div>
            </div>
            <div className={classes["arrow-right"]}>
              <img src="/images/arrow-right.png" alt="" />
            </div>
            <div>
              <LocationOnIcon />
              <div>
                <h2>Location</h2>
                <p>19 Holly Cove Ln, Dover, DE 19901, United States</p>
              </div>
            </div>
            <div>
              <EmailIcon />
              <div>
                <h2>Email</h2>
                <p>info@inspedium.cloud</p>
              </div>
            </div>
          </div>
          <div className={classes["vr"]}>
            <hr />
          </div>
          <form
            className={classes["contact-form"]}
            onSubmit={contactFormSubmitHandler}
          >
            <TextField
              label="Name"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              variant="outlined"
              // fullWidth
            />
            <TextField
              label="Email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              variant="outlined"
              // fullWidth
            />
            <TextField
              label="Message"
              name="message"
              id="message"
              placeholder="Write Your Message"
              variant="outlined"
              multiline
              rows={10}
              // fullWidth
            />
            {/* <button className="color-button">MESSAGE</button> */}
            <button style={{ width: "150px" }} className="color-button">
              <div>
                <span>MESSAGE</span>
                <span>MESSAGE</span>
              </div>
            </button>
          </form>
        </article>

        {/* <section className={classes.map}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <div></div>
        </GoogleMapReact>
      </section> */}

        <div className={classes.attract}>
          <Attract />
        </div>
        <div className={classes.faqs}>
          <Faqs />
        </div>
      </main>
    </Fragment>
  );
};

export default Contact;
