"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="clinic-video" style={{ padding: "80px 20px", backgroundColor: "var(--color-white)" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
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
            <span style={{ fontSize: "1.2rem" }}>+</span> CLINIC TOUR
          </div>
          <h2 style={{ 
            fontSize: "clamp(2rem, 4vw, 2.8rem)", 
            color: "var(--color-black)", 
            fontWeight: "800",
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.5px"
          }}>
            Take a look inside our clinic
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ 
            position: "relative", 
            borderRadius: "24px", 
            overflow: "hidden", 
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            aspectRatio: "16/9",
            backgroundColor: "#000",
            cursor: "pointer"
          }}
          onClick={togglePlay}
        >
          <video 
            ref={videoRef}
            src="/Clinic_complete_video.mp4" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            controls={false}
            loop
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          
          {/* Custom Play Button Overlay */}
          {!isPlaying && (
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.3)",
              transition: "background-color 0.3s"
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                backgroundColor: "var(--color-primary)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px rgba(14, 165, 233, 0.4)",
                paddingLeft: "5px" // optical alignment for play triangle
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
