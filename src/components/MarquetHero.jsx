import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "../assets/Banner/img23.jpg";
import logo from "../assets/logo/Cheftouch logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function MarquetHero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const imageWrapRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=260%",
          scrub: 1.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(bgRef.current, { scale: 1.25, ease: "none" }, 0);
      tl.to(overlayRef.current, { opacity: 0.7, ease: "none" }, 0);

      tl.fromTo(
        imageWrapRef.current,
        {
          width: 500,
          height: 700,
          clipPath: "ellipse(50% 45% at 50% 50%)",
        },
        {
          width: "100vw",
          height: "100vh",
          clipPath: "ellipse(75% 75% at 50% 50%)",
          ease: "none",
        },
        0
      );

      tl.fromTo(
        imageWrapRef.current.querySelector("img"),
        { scale: 1.08 },
        { scale: 1, ease: "none" },
        0
      );

      tl.to(
        logoRef.current,
        { opacity: 0, y: -120, ease: "power2.out" },
        0.12
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* 🔥 HERO */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          width: "99vw",
          height: "100vh",
          background: "#000",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND */}
        <div
          ref={bgRef}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, #2a2a2a 0%, #000 70%)",
            zIndex: 1,
          }}
        />

        {/* OVERLAY */}
        <div
          ref={overlayRef}
          style={{
            position: "absolute",
            inset: 0,
            background: "#000",
            opacity: 0,
            zIndex: 2,
          }}
        />

        {/* IMAGE */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3,
          }}
        >
          <div
            ref={imageWrapRef}
            style={{
              width: 420,
              height: 640,
              overflow: "hidden",
              clipPath: "ellipse(38% 62% at 50% 50%)",
            }}
          >
            <img
              src={heroImg}
              alt="Hero Food"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* LOGO */}
        <div
          ref={logoRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 4,
            pointerEvents: "none",
          }}
        >
          <img
            src={logo}
            alt="Chef Touch Logo"
            style={{
              width: "60%",
              maxWidth: "50vw",
              height: "auto",
            }}
          />
        </div>
      </section>
    </>
  );
}
