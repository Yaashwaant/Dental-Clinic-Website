import React from "react";

const instructions = [
  "Do not rinse or spit for 24 hours after surgery.",
  "Keep your fingers and tongue away from the socket or surgical area.",
  "Use ice packs on the surgical area (side of face) for the first 48 hours; apply ice 20 minutes on, 10 minutes off.",
  "Take the medication prescribed to you.",
  "Drink plenty of fluids. Don't use a straw — the suction can cause complications.",
  "Avoid smoking for at least 5 days after surgery.",
  "Avoid strenuous activity and exercise for at least 3–4 days after surgery.",
  "If jaw muscles get stiff, apply warm moist heat to the outside of the face over the stiff areas to relax them.",
  "After the first post-op day, rinse with warm salt water following meals for the first week to flush out food particles from the surgical area.",
  "Diet should mainly be soft, easily swallowed foods and cool drinks."
];

export default function AftercareSection() {
  return (
    <section id="aftercare" style={{ padding: "80px 20px", backgroundColor: "var(--color-white)" }}>
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", background: "var(--color-light-bg)", borderRadius: "20px", padding: "50px", border: "1px solid rgba(45, 212, 191, 0.3)" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-black)", marginBottom: "15px" }}>Post-Surgical Aftercare</h2>
          <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem" }}>
            Important instructions following tooth extraction or surgery to ensure proper healing.
          </p>
        </div>

        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "20px" }}>
          {instructions.map((instruction, index) => (
            <li key={index} style={{ display: "flex", gap: "15px", alignItems: "flex-start", background: "var(--color-white)", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p style={{ color: "var(--color-black)", fontSize: "1.05rem", lineHeight: "1.5" }}>{instruction}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
