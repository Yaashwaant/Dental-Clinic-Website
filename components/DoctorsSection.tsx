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
    title: "MDS, Pediatric and Preventive Dentistry",
    regNo: "",
    desc: "Consultant pediatric dentist bringing a compassionate, airway-focused approach to children's oral health care. Her passion has driven notable achievements in research and clinical publications.",
    image: "/Dr.%20Nupur%20Agarwal%20.JPG"
  },
  {
    name: "Dr. Rupali Bhorade Jagdale",
    title: "MS in Dental Sciences (National Taiwan University)",
    regNo: "",
    desc: "Regenerative endodontist and root canal specialist with a conservative approach to saving natural teeth. Expert in treating every case with clinical precision.",
    image: "/Dr.%20Rupali%20Bhorade%20Jagdale%20.jpeg"
  },
  {
    name: "Dr. Sachin Hotkar",
    title: "MDS, Oral & Maxillofacial Surgeon",
    regNo: "",
    desc: "Renowned surgeon specializing in painless wisdom tooth extractions, advanced dental implant placements, and complex maxillofacial corrective surgeries.",
    image: "/Dr.%20Sachin%20Hotkar.jpeg"
  },
  {
    name: "Dr. Vishwas Damale",
    title: "Prosthodontist",
    regNo: "",
    desc: "Highly skilled prosthodontist specializing in the precise restoration and replacement of missing teeth using advanced denture therapies. Expert in functional rehabilitation and smile design.",
    image: "/Dr.%20Vishwas%20Damale.jpeg"
  },
  {
    name: "Dr. Madhuri Jogdand",
    title: "MDS (Oral Medicine & Radiology)",
    regNo: "",
    desc: "Specialist in the non-surgical management of oral diseases, chronic jaw pain (TMJ), precancerous lesions, and oral cancer. Expert in advanced maxillofacial radiological interpretation.",
    image: "/madhuri_jogdand.jpeg"
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
