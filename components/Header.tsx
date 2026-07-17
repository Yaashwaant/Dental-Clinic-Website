"use client";
import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";

export default function Header({ onBookClick }: { onBookClick: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header" id="main-header">
      <div className="header-content">
        <Link href="/" className="logo-container" style={{ display: "flex", alignItems: "center", textDecoration: "none" }} id="logo-link">
          <Image src="/logo.png" alt="Shree Dental Care Logo - Best Dentist in Kamothe" width={240} height={60} className="logo-img" />
          <div className="logo-text-wrapper" style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
            <span className="logo-text" style={{ lineHeight: "1.2" }}>Shree Dental Care</span>
            <span style={{ fontSize: "0.7em", color: "var(--color-primary, #0f766e)", fontWeight: "600", marginTop: "2px" }}>& Multispeciality Clinic</span>
          </div>
        </Link>        
        {/* Mobile menu toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        <nav className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
          <div className="nav-item-container">
            <Link href="/" className="nav-item active" id="nav-home">Home</Link>
          </div>
          <div className="nav-item-container has-dropdown" id="nav-services-container">
            <Link href="#services" className="nav-item" id="nav-services">Services</Link>
            <div className="dropdown-menu">
              <Link href="#service-general" className="dropdown-item">General Dentistry</Link>
              <Link href="#service-cosmetic" className="dropdown-item">Cosmetic Dentistry</Link>
              <Link href="#service-orthodontics" className="dropdown-item">Orthodontics</Link>
              <Link href="#service-implant" className="dropdown-item">Dental Implant</Link>
            </div>
          </div>
          <div className="nav-item-container">
            <Link href="#doctors" className="nav-item" id="nav-doctors">Doctors</Link>
          </div>
          <div className="nav-item-container">
            <Link href="#about" className="nav-item" id="nav-about">About Us</Link>
          </div>
          <div className="nav-item-container">
            <Link href="#testimonials" className="nav-item" id="nav-testimonials">Testimonials</Link>
          </div>
          <div className="nav-item-container">
            <Link href="#contact" className="nav-item" id="nav-contact">Contact</Link>
          </div>
        </nav>
        
        <button onClick={onBookClick} className="btn btn-primary header-cta" id="header-book-btn" style={{ textDecoration: 'none', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: 'none', fontFamily: 'inherit' }}>Book Appointment</button>
      </div>
    </header>
  );
}
