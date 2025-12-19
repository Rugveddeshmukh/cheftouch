import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/Service/Priviledge (2).jpg";
import img2 from "../assets/Service/khas1.jpg";
import img3 from "../assets/Service/exclusive (2).jpg";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "01",
    title: "CHEF TOUCH",
    tagline: "Khaas Aapke Liye",
    font: "TT Intrphss Pr Trl Cnd, Poppins, sans-serif",
    image: img1,
  },
  {
    id: "02",
    title: "CHEF TOUCH",
    tagline: "Privilege",
    font: "Streamster, cursive",
    image: img2,
  },
  {
    id: "03",
    title: "CHEF TOUCH",
    tagline: "Exclusive",
    font: "Bayer Sans, Poppins, sans-serif",
    image: img3,
  },
];

export default function MarquetServices() {
  const sectionRefs = useRef([]);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, i) => {
      const image = imageRefs.current[i];
      const text = textRefs.current[i];

      gsap.fromTo(
        image,
        { y: "30%" },
        {
          y: "-30%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        }
      );

      gsap.fromTo(
        text,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div style={{ background: "#f4efe7", overflowX: "hidden" }}>
      {sections.map((s, i) => (
        <section
          key={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            padding: "0 8%",
            gap: "8%",
          }}
        >
          {/* LEFT TEXT */}
          <div ref={(el) => (textRefs.current[i] = el)} style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                marginBottom: "18px",
              }}
            >
              {s.id}.
            </div>

            <h2
              style={{
               fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(4.2rem, 7vw, 1rem)",
                lineHeight: "1",
                color: "#1a1817",
                marginBottom: "22px",
              }}
            >
              {s.title}
            </h2>

            {/* 🔥 DIFFERENT FONT TAGLINE */}
            <p
              style={{
                maxWidth: "520px",
                fontFamily: s.font,
                fontSize: "64px",
                lineHeight: "1.1",
                color: "#1a1817",
                marginBottom: "42px",
                letterSpacing:
                  s.tagline === "Exclusive" ? "2px" : "0px",
                fontWeight:
                  s.tagline === "Exclusive" ? "600" : "400",
              }}
            >
              {s.tagline}
            </p>

            <button
              style={{
                padding: "14px 36px",
                borderRadius: "999px",
                border: "1px solid #1a1817",
                background: "transparent",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
             Explore the Experience
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            style={{
              flex: 1,
              height: "80vh",
              overflow: "hidden",
              borderRadius: "14px",
              marginTop: "60px",
            }}
          >
            <img
              ref={(el) => (imageRefs.current[i] = el)}
              src={s.image}
              alt={s.title}
              style={{
                width: "100%",
                height: "140%",
                objectFit: "cover",
                willChange: "transform",
              }}
            />
          </div>
        </section>
      ))}
    </div>
  );
}
