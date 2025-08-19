"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  MapPin,
  Mail,
  Phone,
  Globe,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Button from "../button/button";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [language, setLanguage] = useState("English");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Available languages
  const languages = ["English", "Yoruba", "Igbo", "Hausa", "French"];

  // Company information
  const companyInfo = {
    name: "Joblad by MyDappr",
    address: "Ikeja, Lagos, Nigeria",
    email: "hello@joblad.com",
    phone: "+234 000 000 0000",
  };

  // Quick links
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#how" },
    { name: "Skills", href: "#skills" },
    { name: "Success Stories", href: "#stories" },
    { name: "Features", href: "#features" },
    { name: "Trust & Safety", href: "#trust" },
    { name: "FAQ", href: "#faq" },
  ];

  // Product links
  const productLinks = [
    { name: "Local Lad", href: "http://localhost:3000/#how" },
    { name: "Micro Lad", href: "http://localhost:3000/#how" },
    { name: "Macro Lad", href: "http://localhost:3000/#how" },
    { name: "Business Lad", href: "http://localhost:3000/#how" },
    { name: "Earnings Calculator", href: "#calculator" },
    { name: "Mobile App -soon", href: "#" },
  ];

  // Social media links
  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
  ];

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
      // In a real implementation, you would send this to your API
      setTimeout(() => {
        setSubscribed(true);
      }, 1000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Newsletter */}
        {/* <div className="border-b border-gray-800 pb-10 mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 font-display">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Join our newsletter to get the latest updates, tips, and exclusive offers.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
                    required
                  />
                </div>
                <Button
                  variant="primary"
                  size="base"
                  type="submit"
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="bg-gray-800 rounded-lg p-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <p className="text-gray-300">
                  Thanks for subscribing! Check your inbox for a confirmation.
                </p>
              </div>
            )}
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
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
              <span className="ml-3 text-xl font-bold">Joblad</span>
            </div>

            <p className="text-gray-400 mb-6">
              Digitalizing local skills, empowering global dreams. The platform
              that transforms local talent into digital services.
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">{companyInfo.address}</p>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                <a
                  target="_black"
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                <a
                  target="_black"
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  target="_black"
                  key={`social-${index}`}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-primary hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={`quick-${index}`}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={`product-${index}`}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          {/* <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={`legal-${index}`}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

         
          </div> */}

          <div>
            <h4 className="font-semibold mb-4">Download App</h4>
            <div className="space-y-3">
              <button className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center space-x-3 hover:bg-white/20 transition-colors w-full">
                <div className="w-6 h-6 bg-white/20 rounded text-blue-light">G</div>
                <div className="text-left">
                  <p className="text-xs">Download on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </button>
              <button className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center space-x-3 hover:bg-white/20 transition-colors w-full">
                <div className="w-6 h-6 bg-white/20 rounded text-blue-light">A</div>
                <div className="text-left">
                  <p className="text-xs">Download on</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </button>
            </div>
            {/* Language Selector */}
            <div className="mt-6">
              <h4 className="font-bold text-sm text-gray-500 mb-2">Language</h4>
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="w-full flex items-center justify-between bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm"
                >
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{language}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {showLanguageDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <div className="max-h-60 overflow-y-auto">
                      {languages.map((lang, index) => (
                        <button
                          key={`lang-${index}`}
                          onClick={() => {
                            setLanguage(lang);
                            setShowLanguageDropdown(false);
                          }}
                          className={`w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors ${
                            language === lang ? "bg-gray-700" : ""
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* <Link
              href="#"
              className="text-gray-500 hover:text-gray-400 text-sm"
            >
              Sitemap
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-400 text-sm"
            >
              Accessibility
            </Link> */}
            <Link
              target="_black"
              href="https://mydappr.io/#contact"
              className="text-gray-500 hover:text-gray-400 text-sm"
            >
              Contact Us
            </Link>

            <a
              target="_black"
              href="https://mydappr.io/company/terms"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms
            </a>
            <a
              target="_black"
              href="https://mydappr.io/company/privacy"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy
            </a>
            <a
              target="_black"
              href="https://mydappr.io/company/cookies"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
