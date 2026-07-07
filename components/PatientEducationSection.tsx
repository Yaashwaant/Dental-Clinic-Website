import React from "react";

const rootCanalSteps = [
  { step: 1, title: "Infected tooth", desc: "Decay has reached the pulp, affecting the nerves, blood vessels, gum, and dentin, sometimes forming an abscess near the bone." },
  { step: 2, title: "Opening made in tooth", desc: "An opening is created to access the infection, using an endodontic file." },
  { step: 3, title: "Cleaning", desc: "Infected tissue removed; canals cleaned." },
  { step: 4, title: "Filling", desc: "Canals filled with a permanent material (gutta-percha) — packed into place using a plugger." },
  { step: 5, title: "Sealing", desc: "Opening sealed with filling — in some cases, a post is inserted for extra support." },
  { step: 6, title: "Crowning", desc: "New crown cemented onto the rebuilt tooth." }
];

const fluorideBenefits = [
  "Remineralizes your tooth enamel",
  "Reverses early tooth decay",
  "Slows down the process of demineralization",
  "Prevents the growth of cavity-causing bacteria"
];

export default function PatientEducationSection() {
  return (
    <section id="education" style={{ padding: "80px 20px", backgroundColor: "var(--color-white)" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Root Canal Stepper */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.5rem", color: "var(--color-black)", marginBottom: "15px" }}>How a Root Canal Works</h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
              Understanding the procedure step-by-step.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {rootCanalSteps.map((item) => (
              <div key={item.step} style={{ 
                background: "var(--color-light-bg)", 
                padding: "30px", 
                borderRadius: "16px",
                position: "relative",
                border: "1px solid rgba(45, 212, 191, 0.2)"
              }}>
                <div style={{ 
                  position: "absolute", 
                  top: "-15px", 
                  left: "30px", 
                  background: "var(--color-primary)", 
                  color: "white", 
                  width: "40px", 
                  height: "40px", 
                  borderRadius: "50%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.2rem"
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: "1.2rem", marginTop: "15px", marginBottom: "10px", color: "var(--color-black)" }}>{item.title}</h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fluoride Benefits */}
        <div style={{ background: "var(--color-black)", borderRadius: "20px", padding: "50px", color: "white", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "var(--color-primary)" }}>Fluoride Benefits</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#e0e0e0" }}>
              Fluoride strengthens teeth and reduces your risk of cavities. Specifically, fluoride:
            </p>
          </div>
          <div style={{ flex: "1 1 400px" }}>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
              {fluorideBenefits.map((benefit, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center", gap: "15px", fontSize: "1.1rem" }}>
                  <div style={{ width: "10px", height: "10px", background: "var(--color-primary)", borderRadius: "50%" }}></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
