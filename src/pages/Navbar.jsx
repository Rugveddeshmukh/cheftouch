import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // 🔥 current route

  const isHome = location.pathname === "/";

  /* MENU OPEN / CLOSE ANIMATION */
  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
      });
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [menuOpen]);

  return (
    <>
      {/* ===== TOP NAVBAR ===== */}
      <header
        style={{
          width: "90%",
          margin: "0 auto",
          padding: "18px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: "5%",
          zIndex: 20,

          /* 🔥 COLOR CHANGE LOGIC */
          color: isHome ? "#fff" : "#111",
          transition: "color 0.3s ease",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: 700,
            letterSpacing: "2px",
            fontFamily: "Times New Roman, serif",
          }}
        >
          CHEF TOUCH
        </h1>

        {/* MENU ICON */}
        <div
          onClick={() => setMenuOpen(true)}
          style={{
            fontSize: "32px",
            cursor: "pointer",
          }}
        >
          ☰
        </div>
      </header>

      {/* ===== FULLSCREEN MENU ===== */}
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          inset: 0,
          background: "#111",
          color: "#f4efe7",
          zIndex: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateY(-100%)",
          opacity: 0,
        }}
      >
        {/* CLOSE */}
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "30px",
            right: "40px",
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          ✕
        </div>

        {/* LINKS */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            textAlign: "center",
          }}
        >
          <Link to="/" onClick={() => setMenuOpen(false)} style={menuLinkStyle}>
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            style={menuLinkStyle}
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={menuLinkStyle}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}

const menuLinkStyle = {
  fontFamily: "Times New Roman, serif",
  fontSize: "25px",
  letterSpacing: "2px",
  textDecoration: "none",
  color: "#f4efe7",
};
