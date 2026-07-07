"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import VideoSection from "@/components/VideoSection";
import PatientEducationSection from "@/components/PatientEducationSection";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AftercareSection from "@/components/AftercareSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("");

  const openModal = (service = "") => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <Header onBookClick={() => openModal()} />
      <main className="main-content">
        <Hero onBookClick={() => openModal()} />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <VideoSection />
        <PatientEducationSection />
        <DoctorsSection />
        <TestimonialsSection />
        <AftercareSection />
        <ContactSection />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} defaultService={modalService} />
    </div>
  );
}
