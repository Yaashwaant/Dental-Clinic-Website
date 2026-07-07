import React from "react";

const galleryItems = [
  { title: "Teeth Straightening – Invisible Aligner", image: "/assets/aligner.jpg" },
  { title: "Teeth Straightening – Ortho Treatment", image: "/assets/braces.jpg" },
  { title: "Tooth Implant", image: "/assets/implant.jpg" }
];

export default function GallerySection() {
  return (
    <section id="gallery" style={{ padding: "80px 20px", backgroundColor: "var(--color-light-bg)" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-black)", marginBottom: "15px" }}>Treatment Gallery</h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
            See the results of our advanced dental treatments.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {galleryItems.map((item, index) => (
            <div key={index} style={{ 
              background: "var(--color-white)", 
              borderRadius: "16px", 
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease"
            }} className="gallery-card">
              <div style={{ width: "100%", height: "250px", background: "#eaeaea" }}>
                <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = `<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #999;">Photo: ${item.title}</div>`; }} />
              </div>
              <div style={{ padding: "20px", textAlign: "center" }}>
                <h3 style={{ fontSize: "1.1rem", color: "var(--color-black)", fontWeight: "600" }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
