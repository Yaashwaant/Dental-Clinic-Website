import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-black)", color: "var(--color-white)", paddingTop: "60px", paddingBottom: "20px" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px", marginBottom: "40px" }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <img src="/logo.png" alt="Shree Dental Care Logo" style={{ width: "auto", height: "40px", objectFit: "contain", background: "white", padding: "2px" }} />
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", lineHeight: "1.1" }}>Shree Dental Care</h3>
                <span style={{ fontSize: "0.7rem", color: "#ccc" }}>& Multispeciality Clinic</span>
              </div>
            </div>
            <p style={{ color: "#aaa", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>
              Trusted multispeciality dental care in Kamothe, Navi Mumbai. Let us keep you smiling!
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <a href="https://instagram.com/shree.dental_clinic.kamothe" target="_blank" rel="noopener noreferrer" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none" }}>ig</a>
              <a href="https://g.co/kgs/YguJ2QL" target="_blank" rel="noopener noreferrer" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none" }}>G</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "20px", color: "white" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><Link href="/" style={{ color: "#aaa", textDecoration: "none", transition: "color 0.2s" }}>Home</Link></li>
              <li><Link href="#services" style={{ color: "#aaa", textDecoration: "none", transition: "color 0.2s" }}>Services</Link></li>
              <li><Link href="#doctors" style={{ color: "#aaa", textDecoration: "none", transition: "color 0.2s" }}>Doctors</Link></li>
              <li><Link href="#testimonials" style={{ color: "#aaa", textDecoration: "none", transition: "color 0.2s" }}>Testimonials</Link></li>
              <li><Link href="#contact" style={{ color: "#aaa", textDecoration: "none", transition: "color 0.2s" }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "20px", color: "white" }}>Contact Us</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
              <li style={{ display: "flex", gap: "10px", color: "#aaa", fontSize: "0.95rem" }}>
                <span>📍</span>
                <span>Shop No. 47, Geometric Silver Crest, Sector 25, Kamothe, Navi Mumbai – 410 209</span>
              </li>
              <li style={{ display: "flex", gap: "10px", color: "#aaa", fontSize: "0.95rem" }}>
                <span>📞</span>
                <span>+91 90965 42910<br />+91 85910 99263</span>
              </li>
              <li style={{ display: "flex", gap: "10px", color: "#aaa", fontSize: "0.95rem" }}>
                <span>🕒</span>
                <span>Mon–Sat, 10:30 AM–2:00 PM & 5:30 PM–9:30 PM<br />(Sunday by appointment)</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", color: "#888", fontSize: "0.9rem" }}>
          <p>© {new Date().getFullYear()} Shree Dental Care & Multispeciality Clinic. All rights reserved.</p>
          <p>Made with ❤️ for great smiles.</p>
        </div>
      </div>
    </footer>
  );
}
