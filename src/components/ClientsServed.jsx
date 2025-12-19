import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ClientsServed() {
  const [activeIndex, setActiveIndex] = useState(null);
  const ovalRefs = useRef([]);

  const testimonials = [
    {
      name: "Danish Shaikh",
      quote:
        "Food was awesome. Sweets was great especially Akhrot halwa. Starters was delicious. Drinks was great",
      sub: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Vijay",
      quote: "Wonderful! Fun-tastic, Very good Keep it up! Thanks",
      sub: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Chirayush Agarwal",
      quote:
        "Food was very delicious and service was excellent. All the best",
      sub: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Neeraj Soni",
      quote: "Food quality was good and tasty. Management was good",
      sub: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Dinesh Jain",
      quote:
        "ChefTouch was a excellent experience. Great taste, great hospitality, superb service, world class food, a five star cuisine. Weldone! ChefTouch family",
      sub: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Darshan Atwal",
      quote:
        "Excellent Presentation and good taste. Special mention complying with all religious venues. Service was excellent and overall great experience",
      sub: "⭐⭐⭐⭐⭐",
    },
  ];

  // 🔥 SMOOTH IN / OUT ANIMATION
  useEffect(() => {
    ovalRefs.current.forEach((el, i) => {
      if (!el) return;

      if (activeIndex === i) {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: 40,        // outside (right)
            scale: 0.96,
          },
          {
            opacity: 1,
            x: 0,         // comes near text
            scale: 1,
            duration: 0.55,
            ease: "power4.out",
          }
        );
      } else {
        gsap.to(el, {
          opacity: 0,
          x: 40,         // goes back outside
          scale: 0.96,
          duration: 0.35,
          ease: "power3.inOut",
        });
      }
    });
  }, [activeIndex]);

  return (
    <section
      style={{
        background: "#111",
        color: "#f4efe7",
        padding: "60px 8%",
      }}
    >
      {/* ===== HEADING ===== */}
      <h1
        style={{
          fontFamily: "Times New Roman, serif",
          fontSize: "clamp(3rem, 6vw, 4rem)",
          lineHeight: "1",
          marginBottom: "80px",
        }}
      >
        MEET THE
        <br />
        CLIENTS
        <br />
        WE’VE SERVED
      </h1>

      {/* ===== LIST ===== */}
      <div style={{ maxWidth: "900px" }}>
        {testimonials.map((item, i) => (
          <div
            key={i}
            style={{
              marginBottom: "36px",
              position: "relative",
            }}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* NAME ROW */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                cursor: "pointer",
              }}
            >
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
                  transition: "opacity 0.25s ease",
                }}
              >
                {item.name}
              </p>
            </div>

            {/* 🔥 FLOATING PINK OVAL */}
            <div
              ref={(el) => (ovalRefs.current[i] = el)}
              style={{
                position: "absolute",
                top: "10%",
                left: "110%",
                transform: "translateY(-50%)",
                width: "240px",
                height: "120px",
                background: "#f2bfc3",
                borderRadius: "60% 54% 54% 52%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "18px",
                textAlign: "center",

                opacity: 0,              // ❗ controlled by GSAP
                pointerEvents: "none",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "8px",
                    color: "#111",
                  }}
                >
                  “{item.quote}”
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    margin: 0,
                    color: "#333",
                  }}
                >
                  {item.sub}
                </p>
              </div>
            </div>

            {/* BORDER (STATIC) */}
            <div
              style={{
                height: "1px",
                width: "150%",
                background: "rgba(255,255,255,0.25)",
                marginTop: "22px",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
