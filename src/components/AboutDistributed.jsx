import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

/* demo images */
import img1 from "../assets/About/aa1.jpg";
import img2 from "../assets/About/aa2.jpg";
import img3 from "../assets/About/aa3.jpg";
import img4 from "../assets/About/aa4.jpg";
import img5 from "../assets/About/aa5.jpg";
import ImageScrollReveal from "./ImageScrollReveal";

export default function AboutDistributed() {
  const [activeIndex, setActiveIndex] = useState(null);

  const ovalRefs = useRef([]);
  const leftTextRefs = useRef([]);
  const rightTextRefs = useRef([]);

  const testimonials = [
    { name: "Heartfelt", quote: "Our culinary Masterpieces are madhe with love and served as a work of art", image: img1 },
    { name: "Memorable", quote: "Everything We do is Created to be a moment to remember.", image: img2 },
    { name: "Comforting", quote: "We exist ti provide moments of bliss.", image: img3 },
    { name: "Connected", quote: "We are dedicated to craeting personalized gatherings throgh food.", image: img4 },
    { name: "Thoughful", quote: "We design details that bring our clients visions to life.", image: img5 },
  ];

  useEffect(() => {
    testimonials.forEach((_, i) => {
      const oval = ovalRefs.current[i];
      const leftText = leftTextRefs.current[i];
      const rightText = rightTextRefs.current[i];

      if (!oval || !leftText || !rightText) return;

      if (activeIndex === i) {
        // Oval
        gsap.to(oval, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power4.out",
        });

        // Left text → from left
        gsap.fromTo(
          leftText,
          { x: -40, opacity: 0.5 },
          {
            x: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
          }
        );

        // Right text → from right
        gsap.fromTo(
          rightText,
          { x: 40, opacity: 0.5 },
          {
            x: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
          }
        );
      } else {
        gsap.to(oval, {
          opacity: 0,
          scale: 0.95,
          y: 20,
          duration: 0.35,
          ease: "power3.inOut",
        });

        gsap.to(leftText, { x: 0, opacity: 0.55, duration: 0.25 });
        gsap.to(rightText, { x: 0, opacity: 1, duration: 0.25 });
      }
    });
  }, [activeIndex]);

  return (
    <>
    <section
      style={{
        background: "#111",
        color: "#f4efe7",
        padding: "100px 8%",
      }}
    >
      {/* HEADING */}
      <h1
        style={{
          fontFamily: "Times New Roman, serif",
          fontSize: "clamp(3rem, 6vw, 4rem)",
          marginBottom: "90px",
        }}
      >
        WHAT WE
        <br />
        STAND FOR
      </h1>

      <div style={{ maxWidth: "1100px" }}>
        {testimonials.map((item, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "450px 1fr 100px",
              alignItems: "center",
              gap: "40px",
              marginBottom: "56px",
              position: "relative",
            }}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* LEFT TEXT */}
            <div
              ref={(el) => (leftTextRefs.current[i] = el)}
              style={{ cursor: "pointer" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "#f2bfc3",
                    borderRadius: "50%",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Times New Roman, serif",
                    fontSize: "clamp(1.6rem, 3vw, 2rem)",
                    margin: 0,
                    opacity: activeIndex === i ? 1 : 0.55,
                  }}
                >
                  {item.name}
                </p>
              </div>
            </div>

            {/* CENTER OVAL */}
            <div
              ref={(el) => (ovalRefs.current[i] = el)}
              style={{
                width: "180px",
                height: "220px",
                borderRadius: "60% 60% 55% 55%",
                overflow: "hidden",
                background: "#f2bfc3",
                opacity: 0,
                transform: "scale(0.95) translateY(20px)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* RIGHT TEXT */}
            <div
              ref={(el) => (rightTextRefs.current[i] = el)}
              style={{
                paddingRight: "40px",
                width: "300px",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                “{item.quote}”
              </p>
            </div>

            {/* BORDER */}
            <div
              style={{
                gridColumn: "1 / -1",
                height: "1px",
                width: "120%",
                background: "rgba(255,255,255,0.25)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
    <ImageScrollReveal/>
   </>
  );
}
