import React from "react";

export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="hero-section">
      {/* Left Image Column */}
      <div className="hero-image-column">
        {/* Background Ellipses/Circles */}
        <div className="circle-bg circle-outer">
          <img src="/assets/ellipse_3.svg" alt="" className="bg-shape" />
        </div>
        <div className="circle-bg circle-middle">
          <img src="/assets/ellipse_1.svg" alt="" className="bg-shape" />
        </div>
        <div className="circle-bg circle-inner">
          <img src="/assets/ellipse_2.svg" alt="" className="bg-shape" />
        </div>
        
        {/* Central 3D Tooth Image */}
        <div className="hero-tooth-container">
          <img src="/assets/hero_tooth.png" alt="Dental Republic Tooth Mascot" className="hero-tooth" />
          
          {/* Overlapping Card: Advanced Care */}
          <div className="info-card card-advanced-care" id="card-advanced">
            <div className="card-icon-container">
              <img src="/assets/ellipse_7.svg" alt="" className="icon-bg" />
              <img src="/assets/advanced_care_icon.png" alt="" className="card-icon" />
            </div>
            <div className="card-text">
              <h3 className="card-title">4.9★ Rated</h3>
              <p className="card-desc">90+ happy patients<br/>on Google</p>
            </div>
          </div>

          {/* Overlapping Card: Expert Doctors */}
          <div className="info-card card-expert-doctors" id="card-doctors">
            <div className="card-icon-container">
              <img src="/assets/ellipse_7.svg" alt="" className="icon-bg" />
              <img src="/assets/expert_doctors_icon.png" alt="" className="card-icon" />
            </div>
            <div className="card-text">
              <h3 className="card-title">Expert Doctors</h3>
              <p className="card-desc">Led by Dr. Sheetal<br/>Jagtap Bhise</p>
            </div>
          </div>
        </div>

        {/* Floating Sparkles and Orbs */}
        <svg className="floating-sparkle sparkle-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/></svg>
        <svg className="floating-sparkle sparkle-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/></svg>
        <svg className="floating-sparkle sparkle-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/></svg>
      </div>

      {/* Right Content Column */}
      <div className="hero-content-column">
        {/* Priority Pill Badge */}
        <div className="priority-badge">
          <div className="badge-icon-wrapper">
            <svg className="badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/></svg>
          </div>
          <span className="badge-text">GENTLE, PAINLESS DENTAL CARE</span>
        </div>

        {/* Main Typography Heading */}
        <h1 className="hero-heading" style={{ fontSize: "3.5rem", lineHeight: "1.1" }}>
          Caring, Painless<br/>
          Dental Care for Your <span className="highlight-text" style={{ display: "inline-block", marginTop: "10px" }}>Whole Family</span>
        </h1>

        {/* Body Copy */}
        <p className="hero-subtext">
          Trusted multispeciality dental care in Kamothe, Navi Mumbai — from routine checkups to root canals, implants, and pediatric dentistry, all in a clean, welcoming clinic.
        </p>

        {/* Interactive Actions */}
        <div className="hero-actions">
          <a href="tel:+910000000000" className="btn btn-primary cta-book" id="hero-book-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Book Appointment
          </a>
          <button className="btn btn-secondary cta-explore" id="hero-explore-btn" onClick={() => {
            document.querySelector('.services-ribbon')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Services
          </button>
        </div>

        {/* Happy Patients Collage / Stats */}
        <div className="hero-stats">
          <img src="/assets/patients_avatars.png" alt="Happy patient profiles" className="patients-collage" height="45" />
          <div className="patients-info">
            <div className="patients-count">4.9★</div>
            <div className="patients-label">90+ Google Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
