"use client";

import Link from "next/link";

export default function Header() {
  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">V-SQUARE</div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li>
            <button 
              onClick={handleGetInTouch}
              style={{
                background: "none",
                border: "none",
                color: "#666",
                cursor: "pointer",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                transition: "color 0.3s ease",
                padding: 0
              }}
              onMouseEnter={(e) => e.target.style.color = "#222"}
              onMouseLeave={(e) => e.target.style.color = "#666"}
            >
              Get In Touch
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
