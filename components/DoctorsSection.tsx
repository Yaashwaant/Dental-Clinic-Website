import React from "react";

const doctorsData = [
  {
    name: "Dr. Sheetal Jagtap-Bhise",
    title: "BDS, Govt. Dental College, Sambhajinagar",
    regNo: "Reg. No. A-30142",
    desc: "Highly recommended for root canals, extractions, and being especially reassuring with anxious or first-time patients.",
    image: null
  },
  {
    name: "Dr. Nupur Agarwal",
    title: "Dentist",
    regNo: "",
    desc: "Noted by patients for her exceptional ability to work well with children, making pediatric visits fun and stress-free.",
    image: "/Dr.%20Nupur%20Agarwal%20.JPG"
  },
  {
    name: "Dr. Rupali Bhorade Jagdale",
    title: "Dentist",
    regNo: "",
    desc: "Experienced dental professional committed to providing comprehensive and comfortable dental care for all patients.",
    image: "/Dr.%20Rupali%20Bhorade%20Jagdale%20.jpeg"
  },
  {
    name: "Dr. Sachin Hotkar",
    title: "Dentist",
    regNo: "",
    desc: "Dedicated to providing high-quality dental care with a focus on patient comfort and well-being.",
    image: "/Dr.%20Sachin%20Hotkar.jpeg"
  },
  {
    name: "Dr. Vishwas Damale",
    title: "Dentist",
    regNo: "",
    desc: "Expert in restorative and cosmetic dentistry, ensuring every patient leaves with a confident smile.",
    image: "/Dr.%20Vishwas%20Damale.jpeg"
  },
  {
    name: "Dr. Anju Sharma",
    title: "Dentist",
    regNo: "",
    desc: "Experienced dental professional committed to providing comprehensive and comfortable dental care for all patients.",
    image: null
  }
];

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
          {doctorsData.map((doctor, index) => (
            <div key={index} className="doctor-card" style={{ background: "var(--color-white)", borderRadius: "16px", padding: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", textAlign: "center", transition: "transform 0.3s ease" }}>
              <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "var(--color-light-bg)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                {doctor.image ? (
                  <img src={doctor.image} alt={doctor.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                ) : (
                  <span style={{ fontSize: "40px", color: "var(--color-primary)" }}>👩‍⚕️</span>
                )}
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--color-black)", marginBottom: "8px" }}>{doctor.name}</h3>
              <h4 style={{ fontSize: "0.95rem", color: "var(--color-primary)", marginBottom: doctor.regNo ? "4px" : "15px", fontWeight: "600" }}>{doctor.title}</h4>
              
              {doctor.regNo && (
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "8px", fontStyle: "italic" }}>
                  {doctor.regNo}
                </p>
              )}
              
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                {doctor.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
