import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgLeft from "../assets/About/about 5.jpg";
import imgTopRight from "../assets/About/about 6.jpg";
import imgBottomCenter from "../assets/About/about 7.jpg";
import AboutDistributed from "./AboutDistributed";

gsap.registerPlugin(ScrollTrigger);

export default function AboutGalleryWithIntro() {
  const galleryRef = useRef(null);
  const imageRefs = useRef([]);

  /* ================= IMAGE SCROLL PARALLAX ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((img) => {
        if (!img) return;

        gsap.fromTo(
          img,
          { y: "25%" },
          {
            y: "-25%",
            ease: "none",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.8, // 🔥 smooth cinematic movement
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ================= TEXT SECTION ================= */}
      <section
        style={{
          width: "99vw",
          background: "#f4efe7",
          padding: "80px 6% 120px",
          boxSizing: "border-box",
          color: "#111",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            display: "block",
            marginBottom: "14px",
          }}
        >
          Our Commitment
        </span>

        <div
          style={{
            height: "1px",
            width: "100%",
            background: "#111",
            opacity: 0.6,
            marginBottom: "80px",
          }}
        />

        <h1
          style={{
            fontSize: "clamp(72px, 14vw, 72px)",
            lineHeight: "0.95",
            fontFamily: "'Times New Roman',serif",
            fontWeight: 500,
            margin: "0 0 60px 0",
          }}
        >
        DESIGNED
          <br />
         WITH PURPOSE
        </h1>

        <div
          style={{
            maxWidth: "680px",
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#222",
          }}
        >
          <p style={{ marginBottom: "28px" }}>
           Every event is thoughtfully designed around our client’s vision and budget
           We are passionate about delivering exceptional dining experiences at every level.
          </p>

          <p>
            Our commitment goes beyond service we consistently go the extra mile
            With personalized menus and refined presentation, we bring excellence to every table.
          </p>
          <p>
            Chef Touch offers innovative cuisine, elegant décor, and seamless execution
            From weddings to corporate events, we create memorable celebrations of every scale.
          </p>
        </div>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      <section
        ref={galleryRef}
        style={{
          width: "99vw",
          minHeight: "200vh",
          background: "#f4efe7",
          position: "relative",
          overflow: "hidden",
          padding: "120px 6%",
          boxSizing: "border-box",
        }}
      >
        {/* LEFT IMAGE */}
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          src={imgLeft}
          alt=""
          style={{
            position: "absolute",
            top: "20%",
            left: "6%",
            width: "320px",
            height: "420px",
            objectFit: "cover",
            borderRadius: "14px",
          }}
        />

        {/* TOP RIGHT IMAGE */}
        <img
          ref={(el) => (imageRefs.current[1] = el)}
          src={imgTopRight}
          alt=""
          style={{
            position: "absolute",
            top: "1%",
            right: "6%",
            width: "500px",
            height: "600px",
            objectFit: "cover",
            borderRadius: "14px",
          }}
        />

        {/* BOTTOM CENTER IMAGE */}
        <img
          ref={(el) => (imageRefs.current[2] = el)}
          src={imgBottomCenter}
          alt=""
          style={{
            position: "absolute",
            top: "60%",
            left: "45%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "500px",
            objectFit: "cover",
            borderRadius: "14px",
          }}
        />
      </section>
      <AboutDistributed/>
    </>
  );
}
