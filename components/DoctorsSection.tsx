import React from "react";

export default function DoctorsSection() {
  return (
    <section id="doctors" className="section-padding" style={{ padding: "80px 20px", backgroundColor: "#F9FAFB" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-black)", marginBottom: "15px" }}>Expert Doctors</h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
            Meet our experienced and caring dental professionals dedicated to giving you the best possible treatment.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {/* Dr. Sheetal Jagtap-Bhise */}
          <div className="doctor-card" style={{ background: "var(--color-white)", borderRadius: "16px", padding: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", textAlign: "center", transition: "transform 0.3s ease" }}>
            <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "var(--color-light-bg)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              {/* Placeholder image */}
              <img src="/assets/doctor_placeholder.jpg" alt="Dr. Sheetal Jagtap-Bhise" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span style={{ fontSize: "40px", color: "var(--color-primary)" }}>👩‍⚕️</span>
            </div>
            <h3 style={{ fontSize: "1.25rem", color: "var(--color-black)", marginBottom: "8px" }}>Dr. Sheetal Jagtap-Bhise</h3>
            <h4 style={{ fontSize: "0.95rem", color: "var(--color-primary)", marginBottom: "8px", fontWeight: "600" }}>BDS, Govt. Dental College, Sambhajinagar</h4>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "8px" }}>
              Reg. No. A-30142
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
              Highly recommended for root canals, extractions, and being especially reassuring with anxious or first-time patients.
            </p>
          </div>

          {/* Dr. Anju Sharma */}
          <div className="doctor-card" style={{ background: "var(--color-white)", borderRadius: "16px", padding: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", textAlign: "center", transition: "transform 0.3s ease" }}>
            <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "var(--color-light-bg)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              {/* Placeholder image */}
              <img src="/assets/doctor_placeholder.jpg" alt="Dr. Anju Sharma" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span style={{ fontSize: "40px", color: "var(--color-primary)" }}>👩‍⚕️</span>
            </div>
            <h3 style={{ fontSize: "1.25rem", color: "var(--color-black)", marginBottom: "8px" }}>Dr. Anju Sharma</h3>
            <h4 style={{ fontSize: "0.95rem", color: "var(--color-primary)", marginBottom: "15px", fontWeight: "600" }}>Dentist</h4>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
              Experienced dental professional committed to providing comprehensive and comfortable dental care for all patients.
            </p>
          </div>

          {/* Dr. Nupur */}
          <div className="doctor-card" style={{ background: "var(--color-white)", borderRadius: "16px", padding: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", textAlign: "center", transition: "transform 0.3s ease" }}>
            <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "var(--color-light-bg)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              {/* Placeholder image */}
              <img src="/assets/doctor_placeholder.jpg" alt="Dr. Nupur" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span style={{ fontSize: "40px", color: "var(--color-primary)" }}>👩‍⚕️</span>
            </div>
            <h3 style={{ fontSize: "1.25rem", color: "var(--color-black)", marginBottom: "8px" }}>Dr. Nupur</h3>
            <h4 style={{ fontSize: "0.95rem", color: "var(--color-primary)", marginBottom: "15px", fontWeight: "600" }}>Dentist</h4>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
              Noted by patients for her exceptional ability to work well with children, making pediatric visits fun and stress-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
