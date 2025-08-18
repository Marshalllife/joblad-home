"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero1 from "./hero1";
import Hero2 from "./hero2";

const HeroMain = ({ mode = "steps" }) => {
  const [activeHero, setActiveHero] = useState(1);
  const dynamicRef = useRef(null);

  // For dynamic mode, set up auto-rotation
  useEffect(() => {
    if (mode === "dynamic") {
      const interval = setInterval(() => {
        setActiveHero((prev) => (prev === 1 ? 2 : 1));
      }, 8000); // Switch every 8 seconds

      return () => clearInterval(interval);
    }
  }, [mode]);

  // Navigate to previous/next hero in dynamic mode
  const goToPrevHero = () => {
    setActiveHero((prev) => (prev === 1 ? 2 : 1));
  };

  const goToNextHero = () => {
    setActiveHero((prev) => (prev === 1 ? 2 : 1));
  };

  // For mobile swipe in dynamic mode
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    if (mode !== "dynamic") return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (mode !== "dynamic") return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (mode !== "dynamic") return;
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveHero((prev) => (prev === 1 ? 2 : 1));
    } else if (isRightSwipe) {
      setActiveHero((prev) => (prev === 1 ? 2 : 1));
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Render different layouts based on mode
  if (mode === "steps") {
    return (
      <div id="#">
        <section className="section-1">
          <Hero1 />
        </section>
        <section className="section-2">
          <Hero2 />
        </section>
      </div>
    );
  }

  if (mode === "stepsBack") {
    return (
      <div id="#">
        <section className="section-1">
          <Hero2 />
        </section>
        <section className="section-2">
          <Hero1 />
        </section>
      </div>
    );
  }

  // Dynamic mode with slider
  return (
    <div
      id="#"
      className="relative overflow-hidden"
      ref={dynamicRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevHero}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-purple-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={goToNextHero}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-purple-primary"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        <button
          onClick={() => setActiveHero(1)}
          className={`w-3 h-3 rounded-full transition-colors ${
            activeHero === 1
              ? "bg-purple-primary"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label="View first hero section"
          aria-current={activeHero === 1 ? "true" : "false"}
        />
        <button
          onClick={() => setActiveHero(2)}
          className={`w-3 h-3 rounded-full transition-colors ${
            activeHero === 2
              ? "bg-purple-primary"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label="View second hero section"
          aria-current={activeHero === 2 ? "true" : "false"}
        />
      </div>

      {/* Hero Slides */}
      <div className="relative">
        <div
          className={`transition-all duration-700 ${
            activeHero === 1
              ? "opacity-100 translate-x-0 z-20"
              : "opacity-0 -translate-x-full z-10 absolute top-0 left-0 right-0"
          }`}
        >
          <Hero1 />
        </div>

        <div
          className={`transition-all duration-700 ${
            activeHero === 2
              ? "opacity-100 translate-x-0 z-20"
              : "opacity-0 translate-x-full z-10 absolute top-0 left-0 right-0"
          }`}
        >
          <Hero2 />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
