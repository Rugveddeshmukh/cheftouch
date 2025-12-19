import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef([]);
  const paraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 35%",
          scrub: 1.6,
        },
      });

      // 🔥 BIG HEADING REVEAL (EDITORIAL FEEL)
      tl.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 120,
          rotateX: 12,
          scaleY: 1.15,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scaleY: 1,
          ease: "none",
          stagger: 0.15,
        },
        0
      );

      // ✨ PARAGRAPH FADE IN
      tl.fromTo(
        paraRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          ease: "none",
        },
        0.3
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#f4efe7",
        padding: "60px 8%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SMALL LABEL */}
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "20px",
          letterSpacing: "1px",
          color: "#1a1817",
          marginBottom: "40px",
          borderBottom: "1px solid #1a1817",
          paddingBottom: "12px",
          maxWidth: "100%", 
        }}
      >
        Services
      </div>

      {/* BIG HEADING */}
      <div
        style={{
          fontFamily: "Times New Roman, serif",
          fontSize: "clamp(4.5rem, 9vw, 4rem)",
          lineHeight: "1",
          color: "#1a1817",
          marginBottom: "60px",
        }}
      >
        {["SERVING UP", "THOUGHTFUL", "MENUS"].map((word, i) => (
          <div
            key={i}
            ref={(el) => (headingRef.current[i] = el)}
            style={{
              opacity: 0,
              transformStyle: "preserve-3d",
            }}
          >
            {word}
          </div>
        ))}
      </div>

      {/* DESCRIPTION */}
      <p
        ref={paraRef}
        style={{
          maxWidth: "520px",
          fontFamily: "Inter, sans-serif",
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#1a1817",
          opacity: 0,
        }}
      >
        From corporate retreats and professional networking events to
        anniversaries, birthdays, and special life milestones, we transform
        your event into a memorable moment that connects people together
        through food.
      </p>
      {/* CTA BUTTON */}
<div style={{ marginTop: "48px" }}>
  <button
    style={{
      background: "transparent",
      border: "1.5px solid #1a1817",
      borderRadius: "999px",
      padding: "14px 34px",
      fontFamily: "Inter, sans-serif",
      fontSize: "16px",
      color: "#1a1817",
      cursor: "pointer",
      transition: "all 0.4s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#1a1817";
      e.currentTarget.style.color = "#f4efe7";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "#1a1817";
    }}
  >
    Check our Menu
  </button>
</div>

    </section>
  );
}
