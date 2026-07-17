"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "100px 20px", backgroundColor: "#f8fdfc", overflow: "hidden" }}>
      <div className="container" style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
        gap: "60px", 
        alignItems: "center" 
      }}>
        
        {/* Left Column: Image with decoration */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ position: "relative", display: "flex", justifyContent: "center", padding: "20px" }}
        >
          {/* Background circle decoration */}
          <div style={{
            position: "absolute",
            width: "85%",
            paddingBottom: "85%",
            borderRadius: "50%",
            backgroundColor: "var(--color-light-bg)",
            top: "50%",
            left: "45%",
            transform: "translate(-50%, -50%)",
            zIndex: 0
          }}></div>
          
          <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "400px" }}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{ 
                width: "100%", 
                borderRadius: "24px", 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)", 
                overflow: "hidden",
                border: "8px solid white",
                aspectRatio: "3/4"
              }} 
            >
              <Image 
                src="/Main_slider_image.jpeg" 
                alt="Shree Dental Care Clinic - Best Dental Specialists in Kamothe Navi Mumbai" 
                width={600} 
                height={800} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ 
              color: "var(--color-primary-dark)", 
              fontWeight: "700", 
              fontSize: "0.95rem", 
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>+</span> ABOUT US
          </motion.div>
          
          <h2 style={{ 
            fontSize: "clamp(2rem, 4vw, 3.2rem)", 
            color: "var(--color-secondary)", 
            fontWeight: "800",
            lineHeight: "1.15",
            marginBottom: "25px",
            fontFamily: "var(--font-display)"
          }}>
            Shree Dental Care – Best Dentist In Kamothe and Navi Mumbai
          </h2>
          
          <div style={{ 
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "25px"
          }}>
            <span style={{
              width: "8px",
              height: "8px",
              backgroundColor: "var(--color-primary)",
              borderRadius: "50%",
              flexShrink: 0
            }}></span>
            <h3 style={{ 
              fontSize: "1.1rem", 
              color: "#333", 
              fontWeight: "600",
              margin: 0
            }}>
              Best Dentist in Kamothe – Excellence in Dental Care
            </h3>
          </div>
          
          <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "15px" }}>
            Shree Dental Care Clinic is led by <strong>Dr. Sheetal Jagtap-Bhise</strong>, who earned her degree from Government Dental College and Hospital, Sambhajinagar — one of the best institutions in India.
          </p>
          
          <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "15px" }}>
            We're one of the leading dental clinics in Kamothe, Navi Mumbai, with a team of dentists (MDS) holding expertise across all types of advanced dental treatments. We treat patients in a calm, comfortable environment, equipped with the latest and most modern dental instruments.
          </p>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: "40px", display: "inline-block" }}
          >
            <Link href="#contact" className="btn btn-primary" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 28px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.05rem"
            }}>
              Read More About Us
              <span style={{ 
                background: "white", 
                color: "var(--color-primary)", 
                width: "28px", 
                height: "28px", 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                marginLeft: "5px"
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
