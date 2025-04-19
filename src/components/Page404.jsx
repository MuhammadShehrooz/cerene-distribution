import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Page404 = () => {
  const wrapperRef = useRef(null);
  const numberRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      numberRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.9 }
    );
  }, []);

  return (
    <div className="notfound-wrapper" ref={wrapperRef}>
      <h1 className="notfound-number" ref={numberRef}>404</h1>
      <p className="notfound-text" ref={textRef}>
        Oops! The page you’re looking for doesn’t exist.
      </p>
    </div>
  );
};

export default Page404;
