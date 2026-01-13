// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Stats from './components/Stats';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [activeCompany, setActiveCompany] = useState(null);

  // Subsidiary companies data
  const subsidiaries = [
    {
      id: 1,
      name: "Miposh Travels & Tour",
      tagline: "Journey Beyond Imagination",
      description: "Premium travel and tour services with personalized itineraries, luxury accommodations, and seamless booking experiences for both leisure and business travelers.",
      icon: "✈️",
      color: "#3B82F6",
      features: [
        "Flight & Hotel Bookings",
        "Custom Tour Packages",
        "Visa Processing",
        "Corporate Travel Solutions"
      ]
    },
    {
      id: 2,
      name: "Kids Gadget & Car Ride Services",
      tagline: "Safe Fun for Little Ones",
      description: "Innovative children's gadgets and secure transportation services designed with parental controls and child-friendly features for peace of mind.",
      icon: "🚗",
      color: "#10B981",
      features: [
        "Educational Smart Gadgets",
        "GPS-Tracked Rides",
        "Parental Monitoring App",
        "Entertainment Systems"
      ]
    },
    {
      id: 3,
      name: "Miposh Real Estate",
      tagline: "Building Dreams, Creating Communities",
      description: "Luxury residential and commercial properties with sustainable designs, smart home integration, and premium amenities in prime locations.",
      icon: "🏢",
      color: "#8B5CF6",
      features: [
        "Luxury Apartments",
        "Commercial Spaces",
        "Property Management",
        "Investment Consulting"
      ]
    },
    {
      id: 4,
      name: "Miposh Farms",
      tagline: "Fresh from Our Fields to Your Table",
      description: "Sustainable agriculture using cutting-edge technology to produce organic, high-quality produce while preserving the environment for future generations.",
      icon: "🚜",
      color: "#22C55E",
      features: [
        "Organic Produce",
        "Hydroponic Farming",
        "Farm-to-Table Delivery",
        "Agricultural Consulting"
      ]
    },
    {
      id: 5,
      name: "Miposh Clinic & SPA",
      tagline: "Holistic Wellness Redefined",
      description: "Integrated healthcare facility combining advanced medical treatments with therapeutic spa experiences for complete physical and mental wellbeing.",
      icon: "💆",
      color: "#EC4899",
      features: [
        "Medical Consultations",
        "Therapeutic Spa Treatments",
        "Wellness Programs",
        "Nutrition Counseling"
      ]
    },
    {
      id: 6,
      name: "Auto Mobile Refurbishing Services",
      tagline: "Reviving Automotive Excellence",
      description: "Complete automobile restoration and customization services using state-of-the-art technology and expert craftsmanship for classic and modern vehicles.",
      icon: "🔧",
      color: "#F59E0B",
      features: [
        "Complete Restoration",
        "Custom Paint Jobs",
        "Engine Upgrades",
        "Interior Refurbishment"
      ]
    },
    {
      id: 7,
      name: "Master's Soft Info Tech",
      tagline: "Digital Transformation Leaders",
      description: "Full-stack technology solutions provider specializing in software development, cloud computing, cybersecurity, and digital innovation for businesses.",
      icon: "💻",
      color: "#6366F1",
      features: [
        "Custom Software Development",
        "Cloud Solutions",
        "Cybersecurity Services",
        "AI & ML Implementation"
      ]
    }
  ];

  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Companies 
        subsidiaries={subsidiaries}
        activeCompany={activeCompany}
        setActiveCompany={setActiveCompany}
      />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;