import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* images */
import chefImg from "../assets/About/about4.png";
import imgFoodTop from "../assets/About/about2.png";
import imgFlowerRight from "../assets/About/about1.jpg";
import imgFlowerCenter from "../assets/About/about3.jpg";
import InspiringGallery from "../components/InspiringGallery";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const inspiringSectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((img) => {
        if (!img) return;

        gsap.fromTo(
          img,
          { y: "30%" },
          {
            y: "-30%",
            ease: "none",
            scrollTrigger: {
              trigger: inspiringSectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 2, // 🔥 SAME AS SERVICES
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
    <main
      style={{
        width: "99vw",
        background: "#f4efe7",
        fontFamily: "Times New Roman, serif",
        color: "#111",
        overflowX: "hidden",
      }}
    >
      {/* ================= ABOUT HERO ================= */}
      <section
        style={{
          width: "100vw",
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1.3fr 0.7fr",
          padding: "160px 8% 120px",
          alignItems: "center",
          gap: "80px",
          boxSizing: "border-box",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "clamp(72px, 10vw, 70px)",
              lineHeight: "0.95",
              fontWeight: 400,
              margin: 0,
            }}
          >
            CHEF TOUCH 
            <br />
            A CULUNARY ARTISTRY
          </h1>

          <div
            style={{
              width: "120px",
              height: "2px",
              background: "#111",
              margin: "40px 0 28px",
            }}
          />

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "620px",
              margin: 0,
              color: "#222",
            }}
          >
           We are a second-generation catering company with over 55 years of culinary legacy.
           Rooted in trust, tradition, and precision, we curate refined dining experiences
           for weddings, celebrations, and grand gatherings. Every menu is crafted with intention and care.
           Thoughtfully crafted. Seamlessly delivered.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            src={chefImg}
            alt="Chef Touch"
            style={{
              width: "100%",
              height:"70vh",
              maxWidth: "380px",
              borderRadius: "6px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* ================= INSPIRING SECTION ================= */}
      <section
        ref={inspiringSectionRef}
        style={{
          width: "99vw",
          minHeight: "100vh",
          position: "relative",
          padding: "250px 6%",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(90px, 16vw, 180px)",
            fontFamily: "'Times New Roman', Times, serif",
            lineHeight: "1.0",
            fontWeight: 500,
            margin: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          INSPIRING
          <br />
          THE WAY
          <br />
          WE GATHER
        </h1>

        {/* TOP IMAGE */}
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          src={imgFoodTop}
          alt=""
          style={{
            position: "absolute",
            top: "1%",
            left: "15%",
            width: "280px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "10px",
            zIndex: 0,
          }}
        />

        {/* RIGHT IMAGE */}
        <img
          ref={(el) => (imageRefs.current[1] = el)}
          src={imgFlowerRight}
          alt=""
          style={{
            position: "absolute",
            top: "25%",
            right: "20%",
            width: "280px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "14px",
            zIndex: 0,
          }}
        />

        {/* CENTER IMAGE */}
        <img
          ref={(el) => (imageRefs.current[2] = el)}
          src={imgFlowerCenter}
          alt=""
          style={{
            position: "absolute",
            bottom: "8%",
            left: "30%",
            width: "280px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "14px",
            zIndex: 0,
          }}
        />
      </section>
    </main>
    <InspiringGallery/>
    </>
  );
}
