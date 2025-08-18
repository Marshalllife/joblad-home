"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../button/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How it Works", href: "#how" },
  { label: "Skills", href: "#skills" },
  { label: "Success Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  const isActive = useCallback(
    (href) => {
      if (href === "/") return activeSection === "/";
      return activeSection === href;
    },
    [activeSection]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
      const sections = navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => item.href.substring(1));

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      } else if (window.scrollY < 100) {
        setActiveSection("/");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle link clicks
  const handleLinkClick = (href) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("/");
    } else if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${
          scrolled
            ? " bg-white/40 backdrop-blur-xl shadow-md py-4"
            : "bg-transparen py-3.5"
        }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/"
              className="flex items-center"
              aria-label="Joblad - Homepage"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("/");
              }}
            >
              <div className="w-10 h-10 bg-purple-primary rounded-2xl flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L7 7V12L12 17L17 12V7L12 2Z" fill="white" />
                  <path
                    d="M12 17V22"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="ml-3 text-xl font-bold font-display text-gray-900">
                Joblad
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-8">
            {navItems.map((item, index) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={isActive(item.href)}
                index={index}
                onClick={() => handleLinkClick(item.href)}
              >
                {item.label}
              </NavLink>
            ))}
            {/* 
            <motion.a
              href="/"
              className="ml-4 bg-gradient-secondary hover:bg-gradient-to-r from-blue-primary to-purple-primary text-white px-5 py-2.5 rounded-xl font-medium duration-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Download App
            </motion.a> */}

            <Button variant="gradient" size="md" href={"/"}>
              Download App
            </Button>
          </div>

          {/* Mobile menu button remains the same... */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 rounded-lg"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x > 100) {
                setIsMenuOpen(false);
              }
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setActiveSection("/");
                    setIsMenuOpen(false);
                  }}
                >
                  <div className="w-10s h-10 bg-purple-primary rounded-2xl flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2L7 7V12L12 17L17 12V7L12 2Z" fill="white" />
                      <path
                        d="M12 17V22"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-xl font-bold font-display">
                    Joblad
                  </span>
                </Link>
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 rounded-lg"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="flex-grow flex flex-col justify-center px-8 space-y-8">
                {navItems.map((item, index) => (
                  <MobileNavLink
                    key={item.href}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    isActive={isActive(item.href)}
                    index={index}
                  >
                    {item.label}
                  </MobileNavLink>
                ))}
              </div>

              <div className="p-8">
                <motion.button
                  className="w-full bg-gradient-secondary hover:bg-gradient-to-r from-blue-primary to-purple-primary text-white py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download App
                </motion.button>
              </div>
            </div>

            {/* Subtle swipe hint */}
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-1.5 rounded-full bg-gray-500 opacity-20"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 20, opacity: [0, 0.2, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                delay: 1,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Desktop Navigation
const NavLink = ({ href, isActive, children, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.3,
      delay: 0.05 * index,
    }}
    className="relative"
  >
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 py-2 text-gray-600 hover:text-purple-primary font-medium transition-colors ${
        isActive ? "text-purple-primary" : ""
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute h-0.5 w-full bg-gradient-to-r from-purple-primary to-blue-primary rounded-full bottom-0 left-0"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </Link>
  </motion.div>
);

// Mobile Navigation Link
const MobileNavLink = ({ href, onClick, isActive, children, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.3,
      delay: 0.1 * index,
      ease: [0.25, 0.1, 0.25, 1.0],
    }}
    whileHover={{ x: 5 }}
    className="relative"
  >
    <Link
      href={href}
      onClick={onClick}
      className={`block text-2xl font-display font-medium ${
        isActive ? "text-purple-primary" : "text-gray-800"
      }`}
    >
      <div className="flex items-center">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="ml-2 h-2 w-2 rounded-full bg-purple-primary"
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        )}
      </div>
    </Link>

    {isActive && (
      <motion.div
        className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1.5 h-6 bg-gradient-to-b from-purple-primary to-blue-primary rounded-full"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.2 }}
      />
    )}
  </motion.div>
);

export default Navbar;
