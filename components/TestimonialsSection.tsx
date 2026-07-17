"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Shilpa Khatu",
    text: "I'm a regular at the clinic for my 5-year-old, and the experience has always been smooth and positive. Dr. Shital & Dr. Nupur are excellent with children — they create a calm, painless, and friendly environment that really puts kids at ease. Highly recommended if you're looking for someone skilled, genuine, and dependable in Navi Mumbai.",
  },
  {
    name: "Kishor Kharul",
    text: "From last 3-4 years I am taking dental treatment at Shree Dental Care. I received excellent treatment from Dr Sheetal Jagtap Bhise & Dr Anju Sharma. Both are not only very good doctors but also good human beings. I am very much satisfied with the treatment and will strongly recommend all for any types of dental treatment.",
  },
  {
    name: "Happy Patient",
    text: "Five stars isn't enough, best dentist experience ever! Dr. Sheetal is so professional, courteous, caring and made me feel at ease. She listened to my concerns, provided personalized treatment and personally followed up regarding my pain after root canal treatment. Thank you for giving me a painless treatment!",
  },
  {
    name: "Debarshi Das",
    text: "Very good experience at Shree Dental Clinic. Underwent a molar tooth extraction. Dr. Sheetal and her team is extremely caring and supportive. Post procedure assistance is amazing. Extraction process was carefully done with minimum pain.",
  },
  {
    name: "Satisfied Patient",
    text: "I have been consulting Dr. Sheetal for the past three years, and my recent treatment experience was truly excellent. Even though the procedure was complicated, she and her team were extremely reassuring, patient, and caring throughout the process. I felt well supported at every step. Highly recommend!",
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" style={{ padding: "100px 20px", backgroundColor: "var(--color-light-bg)", overflow: "hidden", position: "relative" }}>
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
            <span style={{ fontSize: "1.2rem" }}>+</span> TESTIMONIAL
          </div>
          
          <h2 style={{ 
            fontSize: "clamp(2rem, 4vw, 3.2rem)", 
            color: "var(--color-secondary)", 
            fontWeight: "800",
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.5px",
            marginBottom: "20px"
          }}>
            What our Patients Are Saying
          </h2>
          
          <p style={{ color: "var(--color-text-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
            Patients from India and abroad trust Shree Dental Care for professional care, skilled doctors, and smooth treatment experiences.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr", 
          gap: "60px",
          alignItems: "center"
        }} className="testimonial-grid">
          
          {/* Left Column: Image & Floating Card */}
          <div style={{ position: "relative", maxWidth: "500px", margin: "0 auto" }}>
            <div style={{
              borderRadius: "40px 40px 40px 40px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              aspectRatio: "4/5",
              position: "relative"
            }}>
              <Image 
                src="/Childern_treament_img.jpeg" 
                alt="Happy Dental Patient Care at Shree Dental Care Kamothe" 
                width={500}
                height={625}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Blue Overlaid Card */}
            <div style={{
              position: "absolute",
              bottom: "-30px",
              right: "-20px",
              left: "10%",
              background: "var(--color-primary)",
              borderRadius: "16px",
              padding: "24px",
              color: "white",
              boxShadow: "0 15px 30px rgba(14, 165, 233, 0.3)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "15px", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "15px" }}>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: "600", marginBottom: "4px" }}>Google Rating</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: "800" }}>4.9</div>
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                  Based On 2k+ Reviews
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "4px", color: "#FFD700" }}>
                  {/* 5 Stars */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: "600" }}>
                  Trusted Patient Feedback
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quotes */}
          <div style={{ paddingLeft: "40px" }} className="testimonial-text-col">
            {/* Quote SVG */}
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "30px" }}>
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
            </svg>

            <div style={{ position: "relative", minHeight: "200px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p style={{ 
                    fontSize: "1.2rem", 
                    lineHeight: "1.8", 
                    color: "var(--color-black)", 
                    fontWeight: "500",
                    marginBottom: "24px"
                  }}>
                    "{testimonials[currentIndex].text}"
                  </p>
                  <h4 style={{ 
                    fontSize: "1.2rem", 
                    color: "var(--color-primary)", 
                    fontWeight: "700" 
                  }}>
                    {testimonials[currentIndex].name}
                  </h4>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation & CTA */}
            <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
              
              <div style={{ display: "flex", gap: "10px" }}>
                <button 
                  onClick={prevTestimonial}
                  style={{ 
                    width: "45px", 
                    height: "45px", 
                    backgroundColor: "var(--color-primary)", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "8px", 
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.2s"
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button 
                  onClick={nextTestimonial}
                  style={{ 
                    width: "45px", 
                    height: "45px", 
                    backgroundColor: "var(--color-primary)", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "8px", 
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.2s"
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>

              <a 
                href="https://g.co/kgs/YguJ2QL" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 24px",
                  backgroundColor: "var(--color-primary-dark)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "50px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "background-color 0.2s"
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--color-secondary)")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "var(--color-primary-dark)")}
              >
                View all reviews
                <span style={{ 
                  background: "white", 
                  color: "var(--color-primary-dark)", 
                  borderRadius: "50%", 
                  width: "24px", 
                  height: "24px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </span>
              </a>

            </div>
          </div>

        </div>
      </div>
      
      {/* Quick responsive fix via inline style tag since media queries in inline styles don't work natively without an emotion/styled-components setup */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 992px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        @media (max-width: 991px) {
          .testimonial-text-col {
            padding-left: 0 !important;
            margin-top: 40px !important;
          }
        }
      `}} />
    </section>
  );
}
