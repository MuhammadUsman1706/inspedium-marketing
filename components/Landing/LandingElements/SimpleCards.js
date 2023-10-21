import React from "react";

import classes from "./SimpleCards.module.css";

const SimpleCards = () => {
  return (
    <section className={classes["simple-cards-section"]}>
      <div className={classes["simple-cards-header"]}>
        <h1>Make everyday marketing fun</h1>
        <hr />
        <p>
          That's why we originally created Inspedium Marketing. You can now do
          emailing with peace in mind.
        </p>
      </div>
      <div className={classes["simple-cards"]}>
        <div className={classes.odd}>
          <h1>AFFORDABLE</h1>
          <p>An alternative to expensive services like MailChimp, SendGrid</p>
        </div>
        <div className={classes.even}>
          <h1>VISUALIZED</h1>
          <p>Unlimited access to reports and insights, improve your business</p>
        </div>
        <div className={classes.odd}>
          <h1>FULL CONTROL</h1>
          <p>
            Your own application with no limitation, no longer cost per email
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleCards;
