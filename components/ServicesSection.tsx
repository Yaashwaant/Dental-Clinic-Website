import React from "react";

const servicesList = [
  "Root Canal Treatment",
  "Tooth Extraction",
  "Dental Fillings",
  "Teeth Cleaning & Polishing",
  "Veneers",
  "Orthodontic Treatment",
  "Gum Disease Treatment",
  "Dental Implants",
  "Pediatric Dentistry",
  "Cosmetic Dentistry"
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: "80px 20px", backgroundColor: "var(--color-white)" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-black)", marginBottom: "15px" }}>Our Comprehensive Services</h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
            From routine checkups to advanced procedures, we offer a full range of dental treatments.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {servicesList.map((service, index) => (
            <div key={index} style={{ 
              display: "flex", 
              alignItems: "center", 
              padding: "20px", 
              background: "var(--color-light-bg)", 
              borderRadius: "12px",
              border: "1px solid rgba(45, 212, 191, 0.2)",
              transition: "all 0.2s ease",
              cursor: "default"
            }}>
              <div style={{ 
                width: "40px", 
                height: "40px", 
                borderRadius: "50%", 
                background: "var(--color-primary)", 
                color: "white", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                marginRight: "15px",
                flexShrink: 0
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span style={{ fontSize: "1.05rem", fontWeight: "600", color: "var(--color-black)" }}>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
