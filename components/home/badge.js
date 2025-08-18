"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";

const missionTextBadge = [
  "Bridging Local Skills to Global Markets",
  "Joblad was born from a simple observation:",
  "incredible talent exists everywhere, but opportunity doesn't.",
];

const AnimatedBadge = ({ variant = "ribbon", missionText = missionTextBadge }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // For rotating text variant
  useEffect(() => {
    if (variant === "rotating") {
      const interval = setInterval(() => {
        setCurrentTextIndex((prev) => (prev + 1) % missionText.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [variant]);

  // Render the appropriate badge variant
  const renderBadge = () => {
    switch (variant) {
      case "ribbon":
        return <RibbonBadge text={missionText.join(" ")} />;
      case "scrolling":
        return <ScrollingBadge text={missionText.join(" ")} />;
      case "floating":
        return <FloatingBadge text={missionText.join(" ")} />;
      case "rotating":
        return (
          <RotatingBadge texts={missionText} currentIndex={currentTextIndex} />
        );
      case "typewriter":
        return <TypewriterBadge texts={missionText} />;
      default:
        return <RibbonBadge text={missionText.join(" ")} />;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-4xl mb-12"
        >
          {renderBadge()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Ribbon Style Badge
const RibbonBadge = ({ text }) => {
  return (
    <div className="relative">
      <div className="absolute -left-4 -right-4 top-0 bottom-0 bg-gradient-to-r from-purple-primary/10 via-blue-primary/10 to-purple-primary/10 rounded-lg transform -skew-x-3"></div>
      <div className="relative bg-gradient-to-r from-purple-primary to-blue-primary text-white px-8 py-4 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
          <div className="w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        </div>

        <div className="relative flex items-center justify-center">
          <Globe className="w-5 h-5 mr-3 text-white/80" />
          <p className="text-lg font-medium">{text}</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-2 -top-2 w-4 h-4 bg-white/20 rounded-full"></div>
        <div className="absolute -right-2 -bottom-2 w-4 h-4 bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};

// Scrolling Marquee Badge
const ScrollingBadge = ({ text }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-purple-primary to-blue-primary px-4 py-1 text-white text-xs font-semibold">
        Our Mission
      </div>
      <div className="px-4 py-3 overflow-hidden relative">
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="whitespace-nowrap text-gray-800 font-medium"
          >
            {text} • {text} • {text}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Floating Badge with parallax effect
const FloatingBadge = ({ text }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-5, 5, -5] }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        },
      }}
      className="bg-gradient-to-r from-purple-primary to-blue-primary text-white px-6 py-4 rounded-2xl shadow-xl relative overflow-hidden"
    >
      <div className="absolute inset-0 flex">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="h-full w-1/6 bg-white/10"
            initial={{ y: "100%" }}
            animate={{ y: "-100%" }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 2 + i,
                ease: "linear",
                delay: i * 0.5,
              },
            }}
            style={{
              left: `${i * (100 / 6)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative flex items-center justify-center">
        <Globe className="w-5 h-5 mr-3 animate-pulse text-white/90" />
        <p className="text-lg font-medium">{text}</p>
      </div>
    </motion.div>
  );
};

// Rotating Text Badge
const RotatingBadge = ({ texts, currentIndex }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-purple-primary to-blue-primary px-4 py-1 text-white text-xs font-semibold flex justify-between items-center">
        <span>Our Mission</span>
        <div className="flex items-center text-white/80 text-xs">
          <span>
            {currentIndex + 1}/{texts.length}
          </span>
        </div>
      </div>
      <div className="px-6 py-4 h-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-800 font-medium"
          >
            {texts[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="px-4 py-2 bg-gray-50 flex justify-center">
        <div className="flex space-x-1">
          {texts.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-purple-primary" : "bg-gray-300"
              }`}
              animate={{
                scale: index === currentIndex ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: index === currentIndex ? Infinity : 0,
                repeatDelay: 1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Typewriter Effect Badge
const TypewriterBadge = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current text
      const currentText = texts[textIndex];

      // If deleting
      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(30); // Delete faster
      }
      // If typing
      else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypingSpeed(50 + Math.random() * 50); // Vary typing speed
      }

      // Check if completed typing current text
      if (!isDeleting && charIndex === currentText.length) {
        setTypingSpeed(2000); // Pause at the end
        setIsDeleting(true);
      }
      // Check if completed deleting
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
        setTypingSpeed(500); // Pause before typing next
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, typingSpeed, texts]);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-purple-primary to-blue-primary px-4 py-1 text-white text-xs font-semibold">
        Our Mission
      </div>
      <div className="px-6 py-4 h-20 flex items-center justify-center">
        <div className="text-center text-gray-800 font-medium relative">
          <span>{displayText}</span>
          <motion.span
            className="inline-block w-0.5 h-5 bg-gray-800 ml-0.5"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBadge;
