"use client";
import React, { useState, useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function BookingModal({ isOpen, onClose, defaultService = "" }: BookingModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: defaultService
  });

  // Update default service if it changes
  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset form on close after a small delay
      setTimeout(() => setIsSuccess(false), 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (!isOpen) return null;

  // Format date and time for success screen
  let formattedDate = "";
  let formattedTime = "";
  if (isSuccess && formData.date && formData.time) {
    const dateObj = new Date(formData.date);
    formattedDate = dateObj.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    
    let [hours, minutes] = formData.time.split(':');
    const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
    let h = parseInt(hours) % 12;
    h = h ? h : 12;
    formattedTime = `${h}:${minutes} ${ampm}`;
  }

  const serviceLabels: Record<string, string> = {
    general: "General Dentistry",
    cosmetic: "Cosmetic Dentistry",
    orthodontics: "Orthodontics",
    implant: "Dental Implant"
  };

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`} id="booking-modal" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
        <div className="modal-header">
          <h2 className="modal-title">Book an Appointment</h2>
          <p className="modal-subtitle">Fill out the details below to schedule your dental visit.</p>
        </div>
        
        {!isSuccess ? (
          <form id="appointment-form" className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="patient-name" className="form-label">Full Name</label>
              <input type="text" id="patient-name" name="name" className="form-input" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="patient-email" className="form-label">Email Address</label>
              <input type="email" id="patient-email" name="email" className="form-input" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="appointment-date" className="form-label">Preferred Date</label>
                <input type="date" id="appointment-date" name="date" className="form-input" min={new Date().toISOString().split('T')[0]} value={formData.date} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="appointment-time" className="form-label">Preferred Time</label>
                <input type="time" id="appointment-time" name="time" className="form-input" value={formData.time} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service-type" className="form-label">Select Service</label>
              <select id="service-type" name="service" className="form-input select-input" value={formData.service} onChange={handleChange} required>
                <option value="" disabled>Choose a dental treatment...</option>
                <option value="general">General Dentistry</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="orthodontics">Orthodontics</option>
                <option value="implant">Dental Implant</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary form-submit-btn">Confirm Appointment</button>
          </form>
        ) : (
          <div className="modal-success-screen active" id="modal-success">
            <div className="success-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="success-svg" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="success-title">Appointment Requested!</h3>
            <p className="success-message">
              Thank you, <strong>{formData.name}</strong>. We have received your request for <span>{serviceLabels[formData.service]}</span> on <span>{formattedDate}</span> at <span>{formattedTime}</span>. A confirmation email has been sent to <span>{formData.email}</span>.
            </p>
            <button type="button" className="btn btn-primary success-close-btn" onClick={onClose}>Back to Home</button>
          </div>
        )}
      </div>
    </div>
  );
}
