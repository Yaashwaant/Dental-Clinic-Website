"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const servicesData = [
  { title: "Teeth Whitening", desc: "Brighten stained teeth with our gentle whitening care.", icon: "/assets/images/icon_teeth_whitening.png" },
  { title: "Crowns & Bridges", desc: "Restore strength and shape to damaged or missing teeth.", icon: "/assets/images/icon_crowns_bridges.png" },
  { title: "Dental Implants", desc: "Permanent and natural-looking replacement for missing teeth.", icon: "/assets/images/icon_dental_implants.png" },
  { title: "Smile Design", desc: "Enhance your smile with our expert cosmetic treatments.", icon: "/assets/images/icon_smile_design.png" },
  { title: "Veneers", desc: "Improve tooth color and shape for a perfect smile.", icon: "/assets/images/icon_veneers.png" },
  { title: "Orthodontics", desc: "Straighten teeth discreetly with invisible clear braces.", icon: "/assets/images/icon_orthodontics.png" },
  { title: "Root Canal", desc: "Save infected teeth with comfortable root treatment.", icon: "/assets/images/icon_root_canal.png" },
  { title: "Restorative Dentistry", desc: "Repair damaged teeth for healthy everyday function.", icon: "/assets/images/icon_restorative_dentistry.png" },
  { title: "Dentures", desc: "Regain chewing comfort with natural-looking dentures.", icon: "/assets/images/icon_dentures.png" },
  { title: "Gum Treatment", desc: "Effective care to restore your gum health and stop bleeding.", icon: "/assets/images/icon_gum_treatment.png" },
  { title: "Dental Extractions", desc: "Safe and painless removal of problematic wisdom teeth.", icon: "/assets/images/icon_dental_extractions.png" },
  { title: "Pediatric Dentistry", desc: "Gentle and fun dental care specially tailored for kids.", icon: "/assets/images/icon_pediatric_dentistry.png" },
  { title: "Digital X-ray", desc: "Advanced imaging for precise and accurate diagnosis.", icon: "/assets/images/icon_digital_xray.png" },
  { title: "Flap Surgery", desc: "Advanced surgical treatment for severe gum disease.", icon: "/assets/images/icon_flap_surgery.png" },
  { title: "Scaling & Polishing", desc: "Professional deep cleaning to remove plaque and tartar.", icon: "/assets/images/icon_scaling_polishing.png" },
  { title: "Fillings & Sealants", desc: "Protect teeth from decay and restore cavities.", icon: "/assets/images/icon_fillings_sealants.png" },
  { title: "Mouth Guards", desc: "Custom-fitted protection for teeth during sports or sleep.", icon: "/assets/images/icon_mouth_guards.png" },
  { title: "Full Mouth Rehab", desc: "Comprehensive care to restore full dental function.", icon: "/assets/images/icon_full_mouth_rehab.png" }
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
              
              <div style={{ display: "flex", gap: "8px", marginTop: "auto", flexWrap: "wrap", justifyContent: "flex-end" }}>
                <div style={{ 
                  background: "var(--color-primary-light, #e6f4f1)", 
                  padding: "8px", 
                  borderRadius: "50%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: "var(--color-primary, #0f766e)"
                }}>
                  {service.icon && <Image src={service.icon} alt={`${service.title} Icon`} width={32} height={32} style={{ objectFit: "contain" }} />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
