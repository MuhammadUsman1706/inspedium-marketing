import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

import classes from "./Integration.module.css";

const Integration = () => {
  const nodeRef = useRef(null);
  // const [inside, setInside] = useState(true);

  const router = useRouter();
  console.log(router.pathname);
  return (
    <section
      // ref={nodeRef}
      // onClick={() => {
      //   setInside(false);
      // }}
      className={classes.integration}
    >
      <h1 className={classes["dotted-heading"]}>
        <hr />
        Open to Integration <hr />
      </h1>
      <p className={classes.para}>
        Inspedium Marketing is made integrated with most popular delivery
        services out there
      </p>
      <div className={classes["integration-images"]}>
        <img src="/images/integration/integration1.png" alt="" />
        <img src="/images/integration/integration2.png" alt="" />
        <img src="/images/integration/integration3.png" alt="" />
        <img src="/images/integration/integration4.png" alt="" />
        <img src="/images/integration/integration5.png" alt="" />
        <img src="/images/integration/integration6.png" alt="" />
        <img src="/images/integration/integration7.png" alt="" />
      </div>
    </section>
  );
};

export default Integration;
