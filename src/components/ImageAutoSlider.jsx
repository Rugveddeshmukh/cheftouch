import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/food/food2.jpg";
import img2 from "../assets/food/food3.jpg";
import img3 from "../assets/food/food4.jpg";
import img4 from "../assets/food/food5.jpg";
import img5 from "../assets/food/food6.jpg";
import img6 from "../assets/food/food2.jpg";
import img7 from "../assets/food/food3.jpg";
import img8 from "../assets/food/food4.jpg";


gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: img1, width: 572 },
  { src: img2, width: 302 },
  { src: img3, width: 572 },
  { src: img4, width: 302 },
  { src: img5, width: 572 },
  { src: img6, width: 302 },
  { src: img7, width: 572 },
  { src: img8, width: 302 },
];

export default function ImageScrollCarousel() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalScroll =
        trackRef.current.scrollWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll * 2.2}`, // 🔥 slow luxury feel
          scrub: 2.5,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* IMAGE SCROLL SECTION */}
      <section
        ref={sectionRef}
        style={{
          height: "100vh",
          background: "#f4efe7",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: "40px",
              paddingLeft: "6vw",
              willChange: "transform",
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                style={{
                  width: img.width,
                  height: "460px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src={img.src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
