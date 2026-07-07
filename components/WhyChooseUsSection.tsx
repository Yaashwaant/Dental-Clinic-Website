"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Building2, Clock, ShieldCheck, Users, Heart } from "lucide-react";

const highlights = [
  {
    icon: <Award size={36} strokeWidth={1.5} />,
    title: "Best Quality",
    desc: "Ethical dental treatments at affordable prices"
  },
  {
    icon: <Building2 size={36} strokeWidth={1.5} />,
    title: "Modern Setup",
    desc: "State-of-the-art facilities under a single roof"
  },
  {
    icon: <Clock size={36} strokeWidth={1.5} />,
    title: "Zero Waiting",
    desc: "Painless procedures & short appointment time"
  },
  {
    icon: <ShieldCheck size={36} strokeWidth={1.5} />,
    title: "100% Safe",
    desc: "Strict sterilisation protocols followed"
  },
  {
    icon: <Users size={36} strokeWidth={1.5} />,
    title: "Expert Team",
    desc: "Highly experienced dentists and staff"
  },
  {
    icon: <Heart size={36} strokeWidth={1.5} />,
    title: "Patient First",
    desc: "Patient satisfaction is our first priority"
  }
];

export default function WhyChooseUsSection() {
  return (
    <section 
      id="why-choose-us" 
      style={{ 
        padding: "100px 20px", 
        background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary-dark) 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <div style={{ 
            color: "rgba(255,255,255,0.9)", 
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
            <span style={{ fontSize: "1.2rem" }}>+</span> CLINIC HIGHLIGHTS
          </div>
          
          <h2 style={{ 
            fontSize: "clamp(2rem, 4vw, 3rem)", 
            color: "white", 
            fontWeight: "800",
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.5px"
          }}>
            Why Choose Shree Dental Care Clinic
          </h2>
        </motion.div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", 
          gap: "20px" 
        }}>
          {highlights.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ 
                background: "rgba(255, 255, 255, 0.12)", 
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "16px", 
                padding: "35px 20px", 
                textAlign: "center",
                display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                cursor: "default"
              }}
              whileHover={{ 
                y: -8,
                background: "rgba(255, 255, 255, 0.18)",
                transition: { duration: 0.2 }
              }}
            >
              <div style={{ 
                color: "white", 
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {item.icon}
              </div>
              <h3 style={{ 
                fontSize: "1.4rem", 
                color: "white", 
                fontWeight: "700",
                marginBottom: "12px",
                lineHeight: "1.2"
              }}>
                {item.title}
              </h3>
              <p style={{ 
                fontSize: "0.9rem", 
                color: "rgba(255, 255, 255, 0.85)", 
                lineHeight: "1.5", 
                fontWeight: "400",
                margin: 0
              }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
