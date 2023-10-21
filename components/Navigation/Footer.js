import Link from "next/link";
import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <main className={classes.main}>
        <div>
          {/* <h1>LOGO</h1> */}
          <div className={classes.logo}>
            <img src="/images/logo.png" alt="Inspedium Marketing" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className={classes["footer-lists"]}>
          <h1>Resources</h1>
          <ul>
            <li>Service level agreement</li>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={classes["footer-lists"]}>
          <h1>Menu</h1>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
      </main>
      <div className={classes["copyright-text"]}>
        <hr />
        <p>© 2023 Inspedium Marketing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
