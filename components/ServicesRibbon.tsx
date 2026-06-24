import React from "react";

export default function ServicesRibbon({ onServiceClick }: { onServiceClick: (s: string) => void }) {
  return (
    <section className="services-ribbon">
      {/* Column 1: General Dentistry */}
      <div className="service-col" id="service-general" onClick={() => onServiceClick('general')}>
        <div className="service-icon-wrapper">
          <img src="/assets/ellipse_8.svg" alt="" className="service-icon-bg" />
          <img src="/assets/general_dentistry_icon.png" alt="General Dentistry Icon" className="service-icon" />
        </div>
        <div className="service-info">
          <h4 className="service-name">General Dentistry</h4>
          <p className="service-desc">Regular Check-ups, cleaning, and preventive care.</p>
        </div>
      </div>

      <div className="service-divider divider-1"></div>

      {/* Column 2: Cosmetic Dentistry */}
      <div className="service-col" id="service-cosmetic" onClick={() => onServiceClick('cosmetic')}>
        <div className="service-icon-wrapper">
          <img src="/assets/ellipse_8.svg" alt="" className="service-icon-bg" />
          <img src="/assets/cosmetic_dentistry_icon.png" alt="Cosmetic Dentistry Icon" className="service-icon" />
        </div>
        <div className="service-info">
          <h4 className="service-name">Cosmetic Dentistry</h4>
          <p className="service-desc">Enhance your smile with whitening, veneers & more.</p>
        </div>
      </div>

      <div className="service-divider divider-2"></div>

      {/* Column 3: Orthodontics */}
      <div className="service-col" id="service-orthodontics" onClick={() => onServiceClick('orthodontics')}>
        <div className="service-icon-wrapper">
          <img src="/assets/ellipse_8.svg" alt="" className="service-icon-bg" />
          <img src="/assets/orthodontics_icon.png" alt="Orthodontics Icon" className="service-icon" />
        </div>
        <div className="service-info">
          <h4 className="service-name">Orthodontics</h4>
          <p className="service-desc">Braces and aligners for a perfect smile.</p>
        </div>
      </div>

      <div className="service-divider divider-3"></div>

      {/* Column 4: Dental Implant */}
      <div className="service-col" id="service-implant" onClick={() => onServiceClick('implant')}>
        <div className="service-icon-wrapper">
          <img src="/assets/ellipse_8.svg" alt="" className="service-icon-bg" />
          <img src="/assets/implant_icon.png" alt="Dental Implant Icon" className="service-icon" />
        </div>
        <div className="service-info">
          <h4 className="service-name">Dental Implant</h4>
          <p className="service-desc">Permanent solutions for missing teeth.</p>
        </div>
      </div>
    </section>
  );
}
