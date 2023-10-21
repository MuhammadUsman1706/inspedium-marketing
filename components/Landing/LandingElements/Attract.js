import React from "react";

import classes from "./Attract.module.css";

const Attract = () => {
  return (
    <section className={classes.attract}>
      <h1>
        <hr />
        Ready To Start
        <hr />
      </h1>
      <p>Choose a plan that suits your need and get started</p>
      {/* <button className="color-button">CREATE YOUR ACCOUNT</button> */}
      <button
        onClick={() => {
          window.open("https://app.inspedium.email/users/register", "_blank");
        }}
        style={{ width: "270px" }}
        className="color-button"
      >
        <div>
          <span>CREATE YOUR ACCOUNT</span>
          <span>CREATE YOUR ACCOUNT</span>
        </div>
      </button>
    </section>
  );
};

export default Attract;
