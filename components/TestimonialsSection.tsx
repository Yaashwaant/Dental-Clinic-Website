import React from "react";

const testimonials = [
  {
    name: "Rahul",
    text: "My molar extraction was done so carefully with minimal discomfort. The post-procedure follow-up was also excellent. Highly recommend!",
  },
  {
    name: "Priya",
    text: "I had a complicated procedure, but the doctor and team were incredibly patient. They made the whole experience very reassuring throughout.",
  },
  {
    name: "Amit",
    text: "As a parent, I was worried about my child's visit, but the clinic creates such a calm, painless environment that puts kids completely at ease.",
  },
  {
    name: "Sneha",
    text: "I have had a childhood dental phobia for years. The doctors here handled my anxiety with so much care and gentleness. I finally feel comfortable going to the dentist.",
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ padding: "80px 20px", backgroundColor: "#F0FFFE" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-black)", marginBottom: "15px" }}>What Our Patients Say</h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
            Don't just take our word for it — read what our happy patients have experienced.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ 
              background: "var(--color-white)", 
              padding: "30px", 
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
              position: "relative"
            }}>
              <div style={{ color: "var(--color-primary)", fontSize: "40px", lineHeight: "1", marginBottom: "15px", opacity: "0.2", fontFamily: "serif" }}>
                "
              </div>
              <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "20px", fontStyle: "italic" }}>
                "{testimonial.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--color-primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", marginRight: "12px" }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: "1rem", color: "var(--color-black)", fontWeight: "600" }}>{testimonial.name}</h4>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Google Reviewer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
