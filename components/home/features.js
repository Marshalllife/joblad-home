"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Globe,
  Smartphone,
  Languages,
  Zap,
  Sparkles,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  CreditCard,
  Eye,
  Users,
  Award,
  Check,
  Briefcase,
} from "lucide-react";
import Button from "../button/button";
import Image from "next/image";

const PlatformFeatures = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("providers"); // "providers" or "seekers"
  const [activeFeature, setActiveFeature] = useState(0);

  // Core platform features data
  const coreFeatures = [
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Global Reach, Local Focus",
      description:
        "Connect with opportunities worldwide while our platform remains optimized for African contexts and realities.",
      color: "bg-purple-primary",
    },
    {
      icon: <Languages className="w-6 h-6 text-white" />,
      title: "Multiple Languages",
      description:
        "Use Joblad in English, Yoruba, Igbo, or Hausa to navigate comfortably in your preferred language.",
      color: "bg-blue-primary",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Flexible Payments",
      description:
        "Get paid via bank transfer, mobile money, or crypto with fast processing times and low fees.",
      color: "bg-purple-secondary",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Low Data Mode",
      description:
        "Our platform works efficiently on 2G and 3G networks with minimal data consumption.",
      color: "bg-dark/90",
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Skill Verification",
      description:
        "Showcase your certified skills with our trust badge system that builds credibility.",
      color: "bg-green-600",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Community Support",
      description:
        "Join skill-specific communities for mentorship, collaboration, and growth opportunities.",
      color: "bg-amber-500",
    },
  ];

  // App features carousel data
  const appFeatures = [
    {
      title: "Smart Matching",
      description:
        "Our AI connects you with the perfect skill provider or client based on your needs and preferences.",
      image: "/images/app-smart-matching.png", // These would be actual screenshots in production
      color: "from-purple-primary to-blue-primary",
    },
    {
      title: "Secure Messaging",
      description:
        "End-to-end encrypted chat with file sharing, voice notes, and automatic translation.",
      image: "/images/app-messaging.png",
      color: "from-blue-primary to-purple-secondary",
    },
    {
      title: "Project Management",
      description:
        "Manage milestones, deadlines, and deliverables all in one organized dashboard.",
      image: "/images/app-project.png",
      color: "from-purple-secondary to-blue-secondary",
    },
    {
      title: "Wallet & Earnings",
      description:
        "Track your income, manage withdrawals, and view detailed financial reports.",
      image: "/images/app-wallet.png",
      color: "from-blue-secondary to-purple-primary",
    },
  ];

  // Tab-specific features
  const providerFeatures = [
    "Create a profile in under 5 minutes",
    "Set your own rates and availability",
    "Get discovered by global clients",
    "Receive secure payments in multiple currencies",
    "Build your portfolio with verified reviews",
    "Access free skill-building resources",
  ];

  const seekerFeatures = [
    "Find verified skilled professionals quickly",
    "Compare rates and reviews in one place",
    "Pay securely with buyer protection",
    "Track project progress in real-time",
    "Communicate seamlessly with providers",
    "Access quality talent across Africa",
  ];

  // Interval for feature carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % appFeatures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [appFeatures.length]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Sparkles className="w-12 h-12 text-purple-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
        Built for Africa, 
            <span className="text-purple-primary"> works globally</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed specifically to address the unique challenges and
            opportunities of the African market, designed with local realities in mind.
          </p>
        </motion.div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={`feature-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`${feature.color} p-4`}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Features Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-purple-50 rounded-full px-4 py-1.5 mb-3">
              <Smartphone className="w-4 h-4 text-purple-primary mr-2" />
              <span className="text-sm font-medium text-purple-primary">
                Mobile App
              </span>
            </div>
            <h3 className="text-3xl font-bold font-display">
              Powerful Features On The Go
            </h3>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 pt-12 px-8 pb-0">
              {/* Feature Navigation Dots */}
              <div className="flex justify-center space-x-2 mb-8">
                {appFeatures.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    onClick={() => setActiveFeature(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      activeFeature === index ? "bg-white" : "bg-white/30"
                    }`}
                    aria-label={`View feature ${index + 1}`}
                  />
                ))}
              </div>

              {/* Feature Info */}
              <div className="relative h-24">
                <AnimatePresence mode="wait">
                  {appFeatures.map(
                    (feature, index) =>
                      activeFeature === index && (
                        <motion.div
                          key={`feature-info-${index}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 text-white text-center"
                        >
                          <h4 className="text-xl font-bold mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-white/80 max-w-lg mx-auto">
                            {feature.description}
                          </p>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Mockup */}
              <div className="relative h-96 mt-8">
                {/* Placeholder for phone frame */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-64 h-auto">
                  <div className="relative">
                    {/* Phone Frame */}
                    <div className="w-64 h-[500px] bg-black rounded-[32px] border-4 border-gray-800 overflow-hidden">
                      {/* Screen Content */}
                      <div className="w-full h-full overflow-hidden bg-white">
                        <AnimatePresence mode="wait">
                          {appFeatures.map(
                            (feature, index) =>
                              activeFeature === index && (
                                <motion.div
                                  key={`screen-${index}`}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="w-full h-full relative"
                                >
                                  {/* App Screen Placeholder */}
                                  <div
                                    className={`w-full h-full bg-gradient-to-br ${feature.color}`}
                                  >
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                        {index === 0 && (
                                          <Users className="w-8 h-8 text-white" />
                                        )}
                                        {index === 1 && (
                                          <MessageCircle className="w-8 h-8 text-white" />
                                        )}
                                        {index === 2 && (
                                          <Briefcase className="w-8 h-8 text-white" />
                                        )}
                                        {index === 3 && (
                                          <CreditCard className="w-8 h-8 text-white" />
                                        )}
                                      </div>
                                      <p className="text-white text-center font-medium">
                                        {feature.title} Screen
                                      </p>
                                      <p className="text-white/70 text-center text-sm mt-2">
                                        (App screenshot preview)
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              )
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Features Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setActiveTab("providers")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "providers"
                    ? "bg-purple-primary text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                For Skill Providers
              </button>
              <button
                onClick={() => setActiveTab("seekers")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "seekers"
                    ? "bg-blue-primary text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                For Seekers
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {activeTab === "providers" ? (
                  <motion.div
                    key="providers-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-purple-primary font-display">
                      Everything You Need to Succeed
                    </h3>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                      {providerFeatures.map((feature, index) => (
                        <motion.div
                          key={`provider-feature-${index}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.05 * index }}
                          className="flex items-start"
                        >
                          <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mr-3 flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-purple-primary" />
                          </div>
                          <p className="text-gray-700">{feature}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Button
                        variant="primary"
                        size="base"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Create Provider Profile
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="seekers-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-blue-primary font-display">
                      Find the Perfect Provider
                    </h3>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                      {seekerFeatures.map((feature, index) => (
                        <motion.div
                          key={`seeker-feature-${index}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.05 * index }}
                          className="flex items-start"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-blue-primary" />
                          </div>
                          <p className="text-gray-700">{feature}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Button
                        variant="secondary"
                        size="base"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Post a Project
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
