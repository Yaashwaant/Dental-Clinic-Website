"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const branches = [
  {
    id: "kamothe",
    title: "Sector 25, Kamothe, Navi Mumbai",
    name: "Shree Dental Care & Multispeciality Clinic",
    address: "Shop Number 47, Geometric Silver Crest, Sector-25, Kamothe, Navi Mumbai, Maharashtra 410209",
    phones: ["+91 90965 42910", "+91 85910 99263"],
    timings: "Mon–Sat, 10:30 AM to 2:00 PM & 5:30 PM to 9:30 PM (Sunday by appointment)",
    mapUrl: "https://maps.google.com/?q=Shree+Dental+Care+Khandeshwar+Sector+25+Navi+Mumbai",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.536979603099!2d73.08502395!3d19.01423455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e82e46b9aebf%3A0x6b63d91cf339a1d9!2sSector%2025%2C%20Kamothe%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    id: "panvel",
    title: "Greater Khanda Colony, New Panvel",
    name: "Dr Bhise's Shree Dental Care (Branch-2)",
    address: "Shop no.20, Plot no 20&20A, Millennium Infinia, Sector 17, Greater Khanda colony, New panvel, Maharashtra 410206",
    phones: ["+91 90965 42910", "+91 85910 99263"],
    timings: "Mon–Sat, 10:30 AM to 2:00 PM & 5:30 PM to 9:30 PM (Sunday by appointment)",
    mapUrl: "https://maps.google.com/?q=Millennium+Infinia+Sector+17+New+Panvel",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.669319696226!2d73.1023!3d19.0135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzQ4LjYiTiA3M8KwMDYnMDguMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  }
];

export default function ContactSection() {
  const [activeBranch, setActiveBranch] = useState(branches[0].id);
  const currentBranch = branches.find(b => b.id === activeBranch) || branches[0];

  return (
    <section id="contact" style={{ padding: "100px 20px", backgroundColor: "var(--color-white)" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
            <span style={{ fontSize: "1.2rem" }}>+</span> CONTACT NOW
          </div>
          <h2 style={{ 
            fontSize: "clamp(2rem, 4vw, 3.2rem)", 
            color: "var(--color-secondary)", 
            fontWeight: "800",
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.5px"
          }}>
            Get In Touch
          </h2>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr", 
          gap: "40px",
          '@media (min-width: 992px)': { gridTemplateColumns: "1fr 1fr" }
        }} className="contact-grid">
          
          {/* Map Column */}
          <div style={{ 
            borderRadius: "24px", 
            overflow: "hidden", 
            boxShadow: "0 10px 40px rgba(0,0,0,0.06)", 
            border: "1px solid #f0f0f0",
            minHeight: "500px",
            background: "#eee",
            position: "relative"
          }}>
            <iframe 
              src={currentBranch.embedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: "absolute", inset: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Locations Accordion Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "20px" }}>
            {branches.map((branch) => {
              const isActive = activeBranch === branch.id;
              return (
                <div 
                  key={branch.id}
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: isActive ? "none" : "1px solid #eaeaea",
                    backgroundColor: isActive ? "var(--color-light-bg)" : "#f9f9f9",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Accordion Header */}
                  <button 
                    onClick={() => setActiveBranch(branch.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px 24px",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      color: isActive ? "var(--color-primary-dark)" : "var(--color-black)",
                      fontWeight: isActive ? "700" : "600",
                      fontSize: "1.1rem"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ 
                        transform: isActive ? "rotate(90deg)" : "rotate(0deg)", 
                        transition: "transform 0.3s ease",
                        display: "flex" 
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </span>
                      {branch.title}
                    </div>
                  </button>

                  {/* Accordion Body */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ padding: "0 24px 24px 24px" }}>
                          
                          <p style={{ color: "var(--color-black)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "16px", fontWeight: "500" }}>
                            {branch.address}
                          </p>
                          
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                            <div style={{ display: "flex", gap: "8px", fontSize: "0.95rem" }}>
                              <span style={{ color: "var(--color-primary)", fontWeight: "600" }}>Ph.</span>
                              <span style={{ color: "var(--color-text-muted)" }}>{branch.phones.join(" | ")}</span>
                            </div>
                            <div style={{ display: "flex", gap: "8px", fontSize: "0.95rem" }}>
                              <span style={{ color: "var(--color-primary)", fontWeight: "600" }}>Timings.</span>
                              <span style={{ color: "var(--color-text-muted)" }}>{branch.timings}</span>
                            </div>
                          </div>

                          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                            <a 
                              href={branch.mapUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{
                                backgroundColor: "var(--color-primary)",
                                color: "white",
                                textDecoration: "none",
                                padding: "10px 20px",
                                borderRadius: "6px",
                                fontSize: "0.9rem",
                                fontWeight: "600",
                                display: "inline-block",
                                transition: "background-color 0.2s"
                              }}
                              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--color-primary-dark)")}
                              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "var(--color-primary)")}
                            >
                              Get directions on Google Map
                            </a>
                            <a 
                              href={"tel:" + branch.phones[0].replace(/[^0-9+]/g, '')}
                              style={{
                                backgroundColor: "var(--color-primary)",
                                color: "white",
                                textDecoration: "none",
                                padding: "10px 20px",
                                borderRadius: "6px",
                                fontSize: "0.9rem",
                                fontWeight: "600",
                                display: "inline-block",
                                transition: "background-color 0.2s"
                              }}
                              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--color-primary-dark)")}
                              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "var(--color-primary)")}
                            >
                              Call Now
                            </a>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}} />
    </section>
  );
}
