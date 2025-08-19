"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronRight,
  User,
  Briefcase,
  Phone,
  Star,
  Lock,
  TrendingUp,
  Globe,
  Users,
  Search,
  ShieldCheck,
  DollarSign,
  BarChart,
  Computer,
} from "lucide-react";

const Spotlight = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState("discover");

  // Feature data
  const features = [
    {
      id: "discover",
      title: "Digital Presence",
      description:
        "Transform your local skills into a professional digital portfolio",
      color: "from-purple-primary to-blue-primary",
      icon: <Search className="w-6 h-6 text-white" />,
    },

    {
      id: "verify",
      title: "Trust & Verification",
      description: "Build credibility with our multi-level verification",
      color: "from-green-400 to-green-600",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
    {
      id: "earn",
      title: "Secure Payments",
      description: "Get paid reliably in multiple currencies",
      color: "from-yellow-400 to-yellow-600",
      icon: <DollarSign className="w-6 h-6 text-white" />,
    },
    {
      id: "grow",
      title: "Business Growth",
      description: "Scale your services with powerful analytics",
      color: "from-purple-400 to-purple-600",
      icon: <BarChart className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="features" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-base text-purple-primary font-semibold tracking-wide uppercase mb-2">
            Features
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            What Makes Joblad Different
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed to digitize local skills for both local and global
            opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 mb-8">
          {/* Features Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-md h-full">
              <div className="p-6 border-b border-gray-100">
                <h4 className="text-lg font-semibold mb-4">
                  Explore Our Features
                </h4>
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <motion.button
                      key={feature.id}
                      onClick={() => setActiveFeature(feature.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex items-center ${
                        activeFeature === feature.id
                          ? "bg-purple-50 text-purple-primary"
                          : "hover:bg-gray-50"
                      }`}
                      whileHover={{ x: activeFeature === feature.id ? 0 : 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mr-3`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <span>{feature.title}</span>
                      {activeFeature === feature.id && (
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-auto"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold">Platform Stats</h4>
                  <span className="text-xs text-warning bg-gray-900 p-1 rounded-full animate-pulse">
                    Paused
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-gray-50 rounded-xl p-4"
                    whileHover={{
                      y: -3,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* <p className="text-sm text-gray-500 mb-1">Active Users</p> */}
                    {/* <p className="text-2xl font-bold">20,000+</p> */}
                    <p className="text-sm text-gray-500 mb-1">Status</p>
                    <p className="text-sm text-success mb-1">Beta Testing</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-50 rounded-xl p-4"
                    whileHover={{
                      y: -3,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm text-gray-500 mb-1">
                      Skills Available
                    </p>
                    <p className="text-2xl font-bold">250+</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-50 rounded-xl p-4"
                    whileHover={{
                      y: -3,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm text-gray-500 mb-1">
                      Avg. Payout Time
                    </p>
                    <p className="text-2xl font-bold">15min</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-50 rounded-xl p-4"
                    whileHover={{
                      y: -3,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
                    <p className="text-xs font-bold animate-pulse">
                      Loading...
                    </p>
                    {/* <p className="text-2xl font-bold">₦2.5B+</p> */}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Display Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature) =>
                  feature.id === activeFeature && (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <motion.div
                        className={`h-64 bg-gradient-to-r ${feature.color} flex items-center justify-center p-8 relative overflow-hidden`}
                        initial={{ backgroundPosition: "0% 0%" }}
                        animate={{ backgroundPosition: "100% 0%" }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <div className="absolute inset-0 opacity-20">
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage:
                                "radial-gradient(circle at 25px 25px, white 2px, transparent 0)",
                              backgroundSize: "50px 50px",
                            }}
                          ></div>
                        </div>

                        <div className="relative z-10 text-white text-center">
                          <motion.div
                            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            {React.cloneElement(feature.icon, {
                              className: "w-10 h-10",
                            })}
                          </motion.div>
                          <motion.h3
                            className="text-3xl font-bold mb-2"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            {feature.title}
                          </motion.h3>
                          <motion.p
                            className="text-lg text-white/80"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {feature.description}
                          </motion.p>
                        </div>
                      </motion.div>

                      <div className="p-8">
                        {feature.id === "discover" && (
                          <div>
                            <motion.h4
                              className="text-xl font-bold mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              Connect with the world
                            </motion.h4>
                            <div className="grid grid-cols-2 gap-6">
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                              >
                                <h5 className="font-semibold mb-2">
                                  Global Reach
                                </h5>
                                <p className="text-gray-600 mb-4">
                                  Access clients from over 30 countries looking
                                  for your specific skills.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {[
                                    "NG",
                                    "UK",
                                    "GH",
                                    "Canada",
                                    "UAE",
                                    "USA",
                                  ].map((country, i) => (
                                    <motion.span
                                      key={country}
                                      className="bg-purple-50 text-purple-primary text-xs px-2 py-1 rounded-full"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: 0.1 + i * 0.05,
                                      }}
                                      whileHover={{ scale: 1.1 }}
                                    >
                                      {country}
                                    </motion.span>
                                  ))}
                                  <motion.span
                                    className="bg-gray-50 text-gray-500 text-xs px-2 py-1 rounded-full"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    +25 more
                                  </motion.span>
                                </div>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                              >
                                <h5 className="font-semibold mb-2">
                                  Matching Algorithm
                                </h5>
                                <p className="text-gray-600 mb-4">
                                  Our AI connects you with clients who value
                                  your specific expertise.
                                </p>
                                <div className="bg-gray-50 rounded-xl p-4">
                                  <div className="flex items-center justify-between text-sm">
                                    <span>Match Quality</span>
                                    <span className="font-semibold">94%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden">
                                    <motion.div
                                      className="bg-green-500 h-1.5 rounded-full"
                                      initial={{ width: "0%" }}
                                      animate={{ width: "94%" }}
                                      transition={{
                                        duration: 1,
                                        delay: 0.3,
                                        ease: "easeOut",
                                      }}
                                    ></motion.div>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        )}

                        {feature.id === "verify" && (
                          <div>
                            <motion.h4
                              className="text-xl font-bold mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              Build Trust & Credibility
                            </motion.h4>
                            <div className="grid grid-cols-2 gap-6">
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                              >
                                <h5 className="font-semibold mb-2">
                                  Verification Badges
                                </h5>
                                <p className="text-gray-600 mb-4">
                                  Show clients you're trustworthy with our
                                  multi-level verification system.
                                </p>
                                <div className="flex gap-3 mb-4">
                                  {[
                                    {
                                      icon: (
                                        <User className="w-6 h-6 text-purple-primary" />
                                      ),
                                      label: "Identity",
                                      bg: "bg-purple-100",
                                    },
                                    {
                                      icon: (
                                        <Briefcase className="w-6 h-6 text-blue-primary" />
                                      ),
                                      label: "Skills",
                                      bg: "bg-blue-100",
                                    },
                                    {
                                      icon: (
                                        <Phone className="w-6 h-6 text-green-600" />
                                      ),
                                      label: "Contact",
                                      bg: "bg-green-100",
                                    },
                                  ].map((badge, i) => (
                                    <motion.div
                                      key={badge.label}
                                      className="flex flex-col items-center"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: 0.2 + i * 0.1,
                                      }}
                                    >
                                      <motion.div
                                        className={`w-12 h-12 rounded-full ${badge.bg} flex items-center justify-center mb-1`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        {badge.icon}
                                      </motion.div>
                                      <span className="text-xs">
                                        {badge.label}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                              >
                                <h5 className="font-semibold mb-2">
                                  Rating System
                                </h5>
                                <p className="text-gray-600 mb-4">
                                  Build your reputation through client reviews
                                  and ratings.
                                </p>
                                <div className="bg-gray-50 rounded-xl p-4">
                                  <div className="flex items-center mb-2">
                                    <motion.div
                                      className="flex items-center mr-2"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ duration: 0.4, delay: 0.3 }}
                                    >
                                      {[...Array(5)].map((_, i) => (
                                        <motion.div
                                          key={i}
                                          initial={{ opacity: 0, rotate: -30 }}
                                          animate={{ opacity: 1, rotate: 0 }}
                                          transition={{
                                            duration: 0.3,
                                            delay: 0.3 + i * 0.1,
                                          }}
                                        >
                                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        </motion.div>
                                      ))}
                                    </motion.div>
                                    <span className="text-sm font-semibold">
                                      4.9 average rating
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-500">
                                    Based on verified client reviews
                                  </p>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        )}

                        {feature.id === "earn" && (
                          <div>
                            <motion.h4
                              className="text-xl font-bold mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              Flexible Payments
                            </motion.h4>
                            <div className="grid grid-cols-2 gap-6">
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                              >
                                <h5 className="font-semibold mb-2">
                                  Multiple Currencies
                                </h5>
                                <p className="text-gray-600 mb-4">
                                  Get paid in Naira, USD, EUR, GBP or
                                  cryptocurrency.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {[
                                    "₦ Naira",
                                    "$ USD",
                                    "€ EUR",
                                    "£ GBP",
                                    "₿ Bitcoin",
                                  ].map((currency, i) => (
                                    <motion.span
                                      key={currency}
                                      className="bg-blue-50 text-blue-primary text-xs px-2 py-1 rounded-full"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: 0.1 + i * 0.05,
                                      }}
                                      whileHover={{ scale: 1.1 }}
                                    >
                                      {currency}
                                    </motion.span>
                                  ))}
                                </div>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                              >
                                <h5 className="font-semibold mb-2">
                                  Secure Escrow
                                </h5>
                                <p className="text-gray-600 mb-4">
                                  Funds are held securely until you complete the
                                  work to satisfaction.
                                </p>
                                <motion.div
                                  className="bg-gray-50 rounded-xl p-4 relative"
                                  whileHover={{
                                    y: -3,
                                    boxShadow:
                                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                  }}
                                >
                                  <div className="flex items-center mb-2">
                                    <Lock className="w-5 h-5 text-green-600 mr-2" />
                                    <span className="text-sm font-semibold">
                                      Payment Protection
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-500">
                                    100% secure transactions
                                  </p>
                                  <motion.div
                                    className="absolute bottom-4 right-4 text-2xl"
                                    initial={{ scale: 0.8, rotate: -10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                  >
                                    🛡️
                                  </motion.div>
                                </motion.div>
                              </motion.div>
                            </div>
                          </div>
                        )}

                        {feature.id === "grow" && (
                          <div>
                            <motion.h4
                              className="text-xl font-bold mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              Scale Your Business
                            </motion.h4>
                            <div className="grid grid-cols-2 gap-6">
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                              >
                                <h5 className="font-semibold mb-2">
                                  Analytics Dashboard
                                </h5>
                                <p className="text-gray-600 mb-4">
                                  Track your performance, client demographics,
                                  and earnings trends.
                                </p>
                                <div className="bg-gray-50 rounded-xl p-3">
                                  <div className="h-24 flex items-end justify-between gap-1">
                                    {[35, 45, 60, 75, 55, 90, 70].map(
                                      (height, i) => (
                                        <motion.div
                                          key={i}
                                          className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-sm w-full"
                                          initial={{ height: "0%" }}
                                          animate={{ height: `${height}%` }}
                                          transition={{
                                            duration: 0.7,
                                            delay: 0.3 + i * 0.05,
                                            ease: "easeOut",
                                          }}
                                          whileHover={{ y: -2 }}
                                        ></motion.div>
                                      )
                                    )}
                                  </div>
                                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                    <span>Sun</span>
                                  </div>
                                </div>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                              >
                                <h5 className="font-semibold mb-2">
                                  Growth Tools
                                </h5>
                                <p className="text-gray-600 mb-4">
                                  Access resources and tools to expand your
                                  client base.
                                </p>
                                <div className="space-y-2">
                                  {[
                                    {
                                      icon: (
                                        <TrendingUp className="w-4 h-4 text-purple-primary" />
                                      ),
                                      text: "Skill development courses",
                                      bg: "bg-purple-100",
                                    },
                                    {
                                      icon: (
                                        <Globe className="w-4 h-4 text-blue-primary" />
                                      ),
                                      text: "International market insights",
                                      bg: "bg-blue-100",
                                    },
                                    {
                                      icon: (
                                        <Users className="w-4 h-4 text-green-600" />
                                      ),
                                      text: "Client relationship tools",
                                      bg: "bg-green-100",
                                    },
                                  ].map((tool, i) => (
                                    <motion.div
                                      key={i}
                                      className="flex items-center"
                                      initial={{ opacity: 0, x: 10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: 0.3 + i * 0.1,
                                      }}
                                      whileHover={{ x: 3 }}
                                    >
                                      <motion.div
                                        className={`w-8 h-8 rounded-lg ${tool.bg} flex items-center justify-center mr-3`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        {tool.icon}
                                      </motion.div>
                                      <span className="text-sm">
                                        {tool.text}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
