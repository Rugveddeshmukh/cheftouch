import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutReveal() {
  const sectionRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",     
          end: "top 30%",
          scrub: 1.5,
        },
      });
      tl.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 160,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
        },
        0
      );

      // ✨ TEXT REVEAL
      tl.fromTo(
        linesRef.current,
        {
          opacity: 0,
          y: 40,
          rotateX: 8,
          scaleX: 0.98,
          scaleY: 0.98,
          skewX: 2,
          transformPerspective: 900,
          transformStyle: "preserve-3d",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scaleX: 1,
          scaleY: 1,
          skewX: 0,
          ease: "none",
          stagger: 0.22,
        },
        0.15
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const lines = [
  "We are a second-generation catering company",
  "with over 55 years of culinary legacy.",
  "Rooted in trust, tradition, and precision,",
  "we curate refined dining experiences",
  "for weddings, celebrations, and grand gatherings.",
  "Every menu is crafted with intention and care.",
  "Thoughtfully crafted. Seamlessly delivered.",
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#f4efe7",
        padding: "200px 8%",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        willChange: "transform, opacity",

        /* 🔥 IMPORTANT FOR OVERLAP FEEL */
        marginTop: "-18vh",      
        position: "relative",
        zIndex: 0,               
      }}
    >
      <div style={{ maxWidth: "1100px" }}>
        {lines.map((line, i) => (
          <p
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            style={{
              fontFamily: "Times New Roman, serif",
              fontSize: "clamp(2.2rem, 4vw, 2.8rem)",
              lineHeight: "1.25",
              color: "#1a1817",
              
              margin: "0 0 22px 0",
              opacity: 0,
              transformStyle: "preserve-3d",
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
