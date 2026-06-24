"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesRibbon from "@/components/ServicesRibbon";
import DoctorsSection from "@/components/DoctorsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
        <ServicesRibbon onServiceClick={(service) => openModal(service)} />
        <ServicesSection />
        <DoctorsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} defaultService={modalService} />
    </div>
  );
}
