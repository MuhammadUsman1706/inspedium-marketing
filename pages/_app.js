import { Fragment, useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";

import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [transition, setTransition] = useState("home");
  const router = useRouter();
  const dynamicText = {
    "/": {
      heading: "Plan, Simulate & Organize Your Digital Marketing Campaigns",
      paragraph:
        "The simple, intuitive and powerful app to manage your online campaigns.",
    },
    "/pricing": {
      heading: "Our Pricing Policy",
      paragraph:
        "The simple, intuitive and powerful app to manage your online campaigns.",
    },
    "/contact": {
      heading: "Contact Us",
      paragraph:
        "The simple, intuitive and powerful app to manage your online campaigns.",
    },
    "/about": {
      heading: "About Us",
      paragraph:
        "The simple, intuitive and powerful app to manage your online campaigns.",
    },
  };

  useEffect(() => {
    const pageName = router.pathname.replace("/", "");
    if (pageName) {
      setTransition(pageName);
    } else {
      setTransition("home");
    }
  }, [router.pathname]);

  return (
    <Fragment>
      <div className="app-background">
        <img src="/images/app-background.png" alt="" />
      </div>
      <Navbar />

      <div
        style={{
          position: "relative",
        }}
      >
        <div className="transition-parent">
          <div
            onClick={() => {
              setTransition("pricing");
            }}
            className={`transition-component transition-cube ${transition}`}
          >
            <img src="/images/cube.png" alt="" />
          </div>
          <div
            onClick={() => {
              setTransition("pricing");
            }}
            className={`transition-component transition-donut ${transition}`}
          >
            <img src="/images/donut.png" alt="" />
          </div>
          <div
            onClick={() => {
              setTransition("pricing");
            }}
            className={`transition-component transition-cone ${transition}`}
          >
            <img src="/images/cone.png" alt="" />
          </div>
        </div>
        <SwitchTransition mode="out-in">
          <CSSTransition key={router.pathname} classNames="text" timeout={500}>
            <div className="app-text">
              {/* <h1>Plan, Simulate & Organize Your Digital Marketing Campaigns</h1> */}
              <h1>{dynamicText[router.pathname]?.heading}</h1>
              <p>{dynamicText[router.pathname]?.paragraph}</p>
              <button
                onClick={() => {
                  window.open(
                    "https://app.inspedium.email/users/register",
                    "_blank"
                  );
                }}
                style={{ marginTop: "3%", width: "300px" }}
                className="color-button"
              >
                <div>
                  <span>CREATE YOUR ACCOUNT</span>
                  <span>CREATE YOUR ACCOUNT</span>
                </div>
              </button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <SwitchTransition mode="out-in">
        <CSSTransition key={router.pathname} classNames="page" timeout={300}>
          <Component {...pageProps} />
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </Fragment>
  );
}
