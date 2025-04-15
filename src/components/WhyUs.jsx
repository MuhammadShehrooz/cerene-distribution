import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import distribution1 from "../assets/whyus.jpg";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="whyus-section" className="py-5 py-md-6">
      <div className="container">
        <div className="row gy-4 gy-md-5 gy-lg-0 align-items-center">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11" ref={textRef}>
                <h2
                  className="mb-4 fw-bold heading fs-48 Recoleta"
                  style={{ letterSpacing: "2px" }}
                >
                  Why Choose Us?
                </h2>
                <p
                  className="mb-5"
                  style={{
                    fontSize: "18px",
                    color: "#555",
                    fontFamily: "Raleway",
                  }}
                >
                  With decades of industry experience, our team of highly
                  skilled professionals offers unmatched expertise. We expertly
                  navigate the complexities of global markets, staying ahead of
                  emerging trends and developments. This enables us to provide
                  you with insightful, strategic solutions tailored to meet your
                  unique challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="rounded">
              <img
                ref={imageRef}
                src={distribution1}
                className="img-fluid w-100"
                style={{
                  marginBottom: "-7px",
                  height: "600px",
                  objectFit: "cover",
                }}
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
