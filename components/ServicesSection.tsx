"use client";

import React from "react";
import { motion } from "framer-motion";

const servicesData = [
  { title: "Teeth Whitening", desc: "Brighten stained teeth with our gentle whitening care." },
  { title: "Crowns & Bridges", desc: "Restore strength and shape to damaged or missing teeth." },
  { title: "Dental Implants", desc: "Permanent and natural-looking replacement for missing teeth." },
  { title: "Smile Design", desc: "Enhance your smile with our expert cosmetic treatments." },
  { title: "Veneers", desc: "Improve tooth color and shape for a perfect smile." },
  { title: "Orthodontics", desc: "Straighten teeth discreetly with invisible clear braces." },
  { title: "Root Canal", desc: "Save infected teeth with comfortable root treatment." },
  { title: "Restorative Dentistry", desc: "Repair damaged teeth for healthy everyday function." },
  { title: "Dentures", desc: "Regain chewing comfort with natural-looking dentures." },
  { title: "Gum Treatment", desc: "Effective care to restore your gum health and stop bleeding." },
  { title: "Dental Extractions", desc: "Safe and painless removal of problematic wisdom teeth." },
  { title: "Pediatric Dentistry", desc: "Gentle and fun dental care specially tailored for kids." },
  { title: "Digital X-ray", desc: "Advanced imaging for precise and accurate diagnosis." },
  { title: "Flap Surgery", desc: "Advanced surgical treatment for severe gum disease." },
  { title: "Scaling & Polishing", desc: "Professional deep cleaning to remove plaque and tartar." },
  { title: "Fillings & Sealants", desc: "Protect teeth from decay and restore cavities." },
  { title: "Mouth Guards", desc: "Custom-fitted protection for teeth during sports or sleep." },
  { title: "Full Mouth Rehab", desc: "Comprehensive care to restore full dental function." }
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: "70px 20px", backgroundColor: "var(--color-light-bg)", overflow: "hidden" }}>
      <div className="container" style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 20px" }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <div style={{ 
            color: "var(--color-primary-dark)", 
            fontWeight: "700", 
            fontSize: "0.9rem", 
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          }}>
            <span style={{ fontSize: "1.2rem" }}>+</span> OUR SERVICES
          </div>
          
          <h2 style={{ 
            fontSize: "clamp(2rem, 4vw, 3.2rem)", 
            color: "var(--color-secondary)", 
            fontWeight: "800",
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.5px",
            marginBottom: "20px"
          }}>
            High Quality Services for You.
          </h2>
          
          <p style={{ color: "var(--color-text-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}>
            Explore our comprehensive range of advanced dental treatments designed to give you a healthy, beautiful smile in Kamothe, Navi Mumbai.
          </p>
        </motion.div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", 
          gap: "16px" 
        }}>
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              style={{ 
                background: "var(--color-white)", 
                borderRadius: "16px", 
                padding: "20px 16px", 
                display: "flex", 
                flexDirection: "column",
                boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                cursor: "default"
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 50px rgba(0,0,0,0.08)",
                transition: { duration: 0.2 }
              }}
            >
              
              <h3 style={{ 
                fontSize: "1rem", 
                color: "var(--color-secondary)", 
                fontWeight: "700",
                marginBottom: "8px",
                lineHeight: "1.3"
              }}>
                {service.title}
              </h3>
              
              <p style={{ 
                fontSize: "0.85rem", 
                color: "var(--color-text-muted)", 
                lineHeight: "1.5", 
                fontWeight: "400",
                marginBottom: "20px",
                flexGrow: 1
              }}>
                {service.desc}
              </p>
              
              <div style={{ display: "flex", gap: "8px", marginTop: "auto", flexWrap: "wrap" }}>
                <span style={{ 
                  fontSize: "0.75rem", 
                  fontWeight: "600", 
                  color: "var(--color-black)", 
                  padding: "4px 12px", 
                  border: "1px solid #e5e7eb", 
                  borderRadius: "50px" 
                }}>
                  Kamothe
                </span>
                <span style={{ 
                  fontSize: "0.75rem", 
                  fontWeight: "600", 
                  color: "var(--color-black)", 
                  padding: "4px 12px", 
                  border: "1px solid #e5e7eb", 
                  borderRadius: "50px" 
                }}>
                  Navi Mumbai
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
