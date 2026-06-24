import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "80px 20px", backgroundColor: "var(--color-white)" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-black)", marginBottom: "15px" }}>Visit Our Clinic</h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
            We're conveniently located in Kamothe, Navi Mumbai. Book your appointment today!
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", background: "var(--color-white)", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.06)", border: "1px solid #f0f0f0" }}>
          {/* Map Column */}
          <div style={{ flex: "1 1 400px", minHeight: "350px", background: "#eee" }}>
            {/* Embed generic map placeholder (user needs to update with exact Place listing iframe) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.536979603099!2d73.08502395!3d19.01423455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e82e46b9aebf%3A0x6b63d91cf339a1d9!2sSector%2025%2C%20Kamothe%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Details Column */}
          <div style={{ flex: "1 1 400px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ fontSize: "1.8rem", color: "var(--color-black)", marginBottom: "25px" }}>Contact Information</h3>
            
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px" }}>
              <span style={{ fontSize: "24px", marginRight: "15px", marginTop: "2px" }}>📍</span>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "4px" }}>Address</h4>
                <p style={{ color: "var(--color-text-muted)", lineHeight: "1.5" }}>
                  Khandeshwar, Sector 25<br/>
                  Navi Mumbai – 410206<br/>
                  (near Khandeshwar Railway Station)
                </p>
                <small style={{ color: "var(--color-primary)", display: "block", marginTop: "5px" }}>*Please confirm exact shop/floor number.</small>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px" }}>
              <span style={{ fontSize: "24px", marginRight: "15px" }}>📞</span>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "4px" }}>Phone</h4>
                <p style={{ color: "var(--color-text-muted)", lineHeight: "1.5" }}>
                  <a href="tel:+910000000000" style={{ color: "inherit", textDecoration: "none" }}>+91 00000 00000</a><br/>
                  <span style={{ fontSize: "0.85rem" }}>(Placeholder - Update with real number)</span>
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "30px" }}>
              <span style={{ fontSize: "24px", marginRight: "15px" }}>🕒</span>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "4px" }}>Opening Hours</h4>
                <p style={{ color: "var(--color-text-muted)", lineHeight: "1.5" }}>
                  Monday - Saturday: 10:00 AM - 9:00 PM<br/>
                  Sunday: Closed<br/>
                  <span style={{ fontSize: "0.85rem" }}>(Placeholder - Update with real hours)</span>
                </p>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Shree+Dental+Care+Khandeshwar+Sector+25+Navi+Mumbai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              style={{ alignSelf: "flex-start", textDecoration: "none" }}
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
