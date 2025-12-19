import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import foodImg from "../assets/logo/footer11.jpg";
import images from "../assets/logo/DIMG.png"

gsap.registerPlugin(ScrollTrigger);

export default function ImageScrollReveal() {
  const imageSectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const rightImgRef = useRef(null);

  useEffect(() => {
    /* IMAGE DEPTH PARALLAX */
    gsap.to(imageRef.current, {
      scale: 1.12,
      ease: "none",
      scrollTrigger: {
        trigger: imageSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.6,
      },
    });

    /* CONTENT SLIDE OVER IMAGE */
    gsap.fromTo(
      contentRef.current,
      { y: 200 },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1.6,
        },
      }
    );


     /* 🔥 RIGHT IMAGE SLIDE-IN ANIMATION */
    gsap.fromTo(
      rightImgRef.current,
      {
        x: 120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          end: "top 35%",
          scrub: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <>
      {/* ================= IMAGE SECTION ================= */}
      <section
        ref={imageSectionRef}
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          ref={imageRef}
          src={foodImg}
          alt="Luxury Food"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* DARK GRADIENT OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.45))",
          }}
        />
      </section>

      {/* ================= CTA SECTION ================= */}
      <section
        ref={contentRef}
        style={{
          background: "#cfd9df",
          padding: "100px 8% 200px",   // ✅ HEIGHT REDUCED
          marginTop: "-32vh",       // overlap stays
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* BIG HEADING */}
        <h1
          style={{
            fontFamily: "Times New Roman, serif",
            fontSize: "clamp(3.2rem, 8vw, 4.5rem)",
            lineHeight: "1",
            color: "#111",
            marginBottom: "40px",
          }}
        >
          THE ART OF <br />  GATHERING
        </h1>

        {/* CTA BUTTON */}
        <button
          style={{
            padding: "14px 34px",
            borderRadius: "999px",
            border: "1px solid #111",
            background: "transparent",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Schedule a Call
        </button>


      {/* 🔥 RIGHT IMAGE WITH ANIMATION */}
        <img
          ref={rightImgRef}
          src={images}
          alt="Chef Touch Catering"
          style={{
            position: "absolute",
            right: "15%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "320px",
            height: "420px",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
        {/* SOCIAL ICONS */}
        <div
          style={{
            position: "absolute",
            left: "8%",
            bottom: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Instagram */}
          <a href="#" style={iconStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="6"
                stroke="#111"
                strokeWidth="1.6"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="#111"
                strokeWidth="1.6"
              />
              <circle cx="17" cy="7" r="1.2" fill="#111" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" style={iconStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="4"
                stroke="#111"
                strokeWidth="1.6"
              />
              <rect x="6" y="10" width="2.5" height="7" fill="#111" />
              <circle cx="7.25" cy="7.25" r="1.25" fill="#111" />
              <path
                d="M11 10h2.4v1c.4-.7 1.3-1.2 2.6-1.2 2 0 3 1.3 3 3.5V17h-2.5v-3.2c0-1.2-.4-2-1.5-2s-1.6.8-1.6 2V17H11v-7z"
                fill="#111"
              />
            </svg>
          </a>
        </div>

        {/* FOOTER EMAIL */}
        <p
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            color: "#111",
          }}
        >
         Copyright ©2025  Chef Touch All rights reserved
        </p>
      </section>
    </>
  );
}

const iconStyle = {
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  border: "1px solid #111",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};
