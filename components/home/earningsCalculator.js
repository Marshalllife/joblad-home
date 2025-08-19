"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  Check,
  ChevronDown,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
} from "lucide-react";
import Button from "../button/button";
import CurrencyDisplay, {
  CURRENCY_FORMAT,
  CURRENCY_RATES,
} from "../public/currencyDisplay";

const EarningsCalculator = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [experienceLevel, setExperienceLevel] = useState("intermediate");
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const currencyDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        currencyDropdownRef.current &&
        !currencyDropdownRef.current.contains(event.target)
      ) {
        setShowCurrencyDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Skill category data with earnings information
  const skillCategories = [
    {
      id: "design",
      name: "Design & Creative",
      icon: "🎨",
      hourlyRates: { beginner: 10, intermediate: 20, expert: 40 },
      demandScore: 0.9, // High demand multiplier
      examples: ["Fashion Design", "Graphic Design", "Interior Design"],
      color: "from-purple-primary to-purple-secondary",
    },
    {
      id: "tech",
      name: "Tech & Programming",
      icon: "💻",
      hourlyRates: { beginner: 12, intermediate: 25, expert: 50 },
      demandScore: 0.95, // Very high demand multiplier
      examples: ["Web Development", "Mobile Apps", "Software Engineering"],
      color: "from-blue-primary to-purple-primary",
    },
    {
      id: "education",
      name: "Teaching & Education",
      icon: "📚",
      hourlyRates: { beginner: 8, intermediate: 15, expert: 30 },
      demandScore: 0.85, // Good demand multiplier
      examples: ["Language Teaching", "Academic Tutoring", "Skill Training"],
      color: "from-purple-secondary to-blue-primary",
    },
    {
      id: "trades",
      name: "Skilled Trades",
      icon: "🔧",
      hourlyRates: { beginner: 9, intermediate: 18, expert: 35 },
      demandScore: 0.88, // Good demand multiplier
      examples: ["Electrical Work", "Carpentry", "Plumbing"],
      color: "from-blue-primary to-blue-secondary",
    },
    {
      id: "writing",
      name: "Writing & Translation",
      icon: "✍️",
      hourlyRates: { beginner: 7, intermediate: 15, expert: 30 },
      demandScore: 0.82, // Moderate demand multiplier
      examples: ["Content Writing", "Translation", "Copywriting"],
      color: "from-purple-primary to-blue-primary",
    },
    {
      id: "culinary",
      name: "Culinary Arts",
      icon: "🍳",
      hourlyRates: { beginner: 8, intermediate: 16, expert: 32 },
      demandScore: 0.8, // Moderate demand multiplier
      examples: ["Cooking Classes", "Recipe Development", "Food Consulting"],
      color: "from-blue-primary to-purple-primary",
    },
    {
      id: "beauty",
      name: "Beauty & Wellness",
      icon: "💇",
      hourlyRates: { beginner: 7, intermediate: 15, expert: 35 },
      demandScore: 0.87,
      examples: ["Hairdressing", "Makeup Artistry", "Massage Therapy"],
      color: "from-purple-primary to-purple-secondary",
    },
    {
      id: "transport",
      name: "Transportation & Delivery",
      icon: "🚗",
      hourlyRates: { beginner: 5, intermediate: 10, expert: 20 },
      demandScore: 0.83,
      examples: ["Chauffeur Services", "Courier Delivery", "Rideshare Driving"],
      color: "from-blue-primary to-purple-primary",
    },
    {
      id: "events",
      name: "Events & Entertainment",
      icon: "🎉",
      hourlyRates: { beginner: 8, intermediate: 18, expert: 40 },
      demandScore: 0.85,
      examples: ["Event Planning", "DJ Services", "Photography"],
      color: "from-purple-secondary to-blue-primary",
    },
    {
      id: "realestate",
      name: "Real Estate & Property",
      icon: "🏠",
      hourlyRates: { beginner: 10, intermediate: 25, expert: 50 },
      demandScore: 0.89,
      examples: ["Property Brokerage", "Estate Management", "Rental Services"],
      color: "from-blue-primary to-blue-secondary",
    },
    {
      id: "craftsman",
      name: "Artisanal Crafts",
      icon: "🧶",
      hourlyRates: { beginner: 7, intermediate: 15, expert: 30 },
      demandScore: 0.78,
      examples: ["Weaving", "Pottery", "Leatherwork"],
      color: "from-purple-primary to-blue-primary",
    },
    {
      id: "health",
      name: "Healthcare & Wellness",
      icon: "⚕️",
      hourlyRates: { beginner: 9, intermediate: 22, expert: 45 },
      demandScore: 0.92,
      examples: [
        "Traditional Medicine",
        "Fitness Training",
        "Nutritional Guidance",
      ],
      color: "from-blue-primary to-purple-primary",
    },
    {
      id: "digital",
      name: "Digital Marketing",
      icon: "📱",
      hourlyRates: { beginner: 10, intermediate: 22, expert: 45 },
      demandScore: 0.91,
      examples: [
        "Social Media Management",
        "SEO Optimization",
        "Content Strategy",
      ],
      color: "from-purple-primary to-purple-secondary",
    },
    {
      id: "maintenance",
      name: "Home & Building Maintenance",
      icon: "🏗️",
      hourlyRates: { beginner: 8, intermediate: 16, expert: 32 },
      demandScore: 0.86,
      examples: ["Painting", "Roofing", "Flooring Installation"],
      color: "from-blue-primary to-purple-primary",
    },
    {
      id: "media",
      name: "Media Production",
      icon: "🎬",
      hourlyRates: { beginner: 10, intermediate: 25, expert: 45 },
      demandScore: 0.88,
      examples: ["Video Editing", "Audio Production", "Animation"],
      color: "from-purple-secondary to-blue-primary",
    },
    {
      id: "agriculture",
      name: "Agriculture & Farming",
      icon: "🌱",
      hourlyRates: { beginner: 6, intermediate: 12, expert: 25 },
      demandScore: 0.75,
      examples: [
        "Crop Farming",
        "Livestock Management",
        "Agricultural Consulting",
      ],
      color: "from-blue-primary to-blue-secondary",
    },
    {
      id: "retail",
      name: "Retail & Trade",
      icon: "🛒",
      hourlyRates: { beginner: 7, intermediate: 14, expert: 28 },
      demandScore: 0.8,
      examples: ["Market Vending", "Shop Management", "Specialized Trade"],
      color: "from-purple-primary to-blue-primary",
    },
    {
      id: "security",
      name: "Security & Protection",
      icon: "🛡️",
      hourlyRates: { beginner: 8, intermediate: 16, expert: 30 },
      demandScore: 0.82,
      examples: [
        "Security Guard Services",
        "System Installation",
        "Cybersecurity",
      ],
      color: "from-blue-primary to-purple-primary",
    },
    {
      id: "childcare",
      name: "Childcare & Family Services",
      icon: "👶",
      hourlyRates: { beginner: 7, intermediate: 15, expert: 30 },
      demandScore: 0.86,
      examples: ["Babysitting", "Nanny Services", "Tutoring"],
      color: "from-purple-primary to-purple-secondary",
    },
    {
      id: "installation",
      name: "Installation & Technical",
      icon: "🔌",
      hourlyRates: { beginner: 9, intermediate: 18, expert: 35 },
      demandScore: 0.87,
      examples: ["Solar Systems", "CCTV Installation", "Networking Setup"],
      color: "from-blue-primary to-purple-primary",
    },
  ];

  // Experience level multipliers
  const experienceLevels = [
    { id: "beginner", name: "Beginner", multiplier: 1 },
    { id: "intermediate", name: "Intermediate", multiplier: 1.5 },
    { id: "expert", name: "Expert", multiplier: 2 },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Calculate earnings
  const calculateEarnings = () => {
    setIsCalculated(true);
  };

  // Reset calculator
  const resetCalculator = () => {
    setSelectedSkill(null);
    setHoursPerWeek(20);
    setExperienceLevel("intermediate");
    setIsCalculated(false);
  };

  // Calculate estimated monthly earnings
  // const getEstimatedEarnings = () => {
  //   if (!selectedSkill)
  //     return { min: 0, max: 0, daily: 0, weekly: 0, monthly: 0 };

  //   const skillData = skillCategories.find((cat) => cat.id === selectedSkill);
  //   if (!skillData) return { min: 0, max: 0, daily: 0, weekly: 0, monthly: 0 };

  //   const hourlyRate = skillData.hourlyRates[experienceLevel];
  //   const demandMultiplier = skillData.demandScore;

  //   // Base calculation with some variability
  //   const baseDailyHours = hoursPerWeek / 5; // Assuming 5 working days
  //   const baseWeeklyEarnings = hourlyRate * hoursPerWeek;
  //   const baseMonthlyEarnings = baseWeeklyEarnings * 4.33; // Average weeks in a month

  //   // Apply demand multiplier and convert to Naira (approximate conversion)
  //   const nairaConversionRate = 1500; // USD to NGN approximation
  //   const monthlyEarnings =
  //     Math.round(
  //       (baseMonthlyEarnings * demandMultiplier * nairaConversionRate) / 1000
  //     ) * 1000;
  //   const weeklyEarnings = Math.round(monthlyEarnings / 4.33);
  //   const dailyEarnings = Math.round(weeklyEarnings / 5);

  //   // Provide a range (80% to 120% of the calculated amount)
  //   const minEarnings = Math.round((monthlyEarnings * 0.8) / 1000) * 1000;
  //   const maxEarnings = Math.round((monthlyEarnings * 1.2) / 1000) * 1000;

  //   return {
  //     min: minEarnings,
  //     max: maxEarnings,
  //     daily: dailyEarnings,
  //     weekly: weeklyEarnings,
  //     monthly: monthlyEarnings,
  //   };
  // };

  // Calculate estimated monthly earnings
  const getEstimatedEarnings = () => {
    if (!selectedSkill)
      return { min: 0, max: 0, daily: 0, weekly: 0, monthly: 0 };

    const skillData = skillCategories.find((cat) => cat.id === selectedSkill);
    if (!skillData) return { min: 0, max: 0, daily: 0, weekly: 0, monthly: 0 };

    const hourlyRate = skillData.hourlyRates[experienceLevel];
    const demandMultiplier = skillData.demandScore;

    // Base calculation with some variability (in USD)
    const baseDailyHours = hoursPerWeek / 5; // Assuming 5 working days
    const baseWeeklyEarnings = hourlyRate * hoursPerWeek;
    const baseMonthlyEarnings = baseWeeklyEarnings * 4.33; // Average weeks in a month

    // Convert USD to selected currency
    // First convert USD to NGN
    const ngnRate = 1555; // USD to NGN rate
    const ngnMonthlyEarnings =
      Math.round((baseMonthlyEarnings * ngnRate * demandMultiplier) / 1000) *
      1000;

    // Then convert NGN to selected currency if not NGN
    let monthlyEarnings;
    if (selectedCurrency === "NGN") {
      monthlyEarnings = ngnMonthlyEarnings;
    } else {
      // Convert from NGN to the selected currency
      monthlyEarnings = ngnMonthlyEarnings * CURRENCY_RATES[selectedCurrency];
    }

    const weeklyEarnings = Math.round(monthlyEarnings / 4.33);
    const dailyEarnings = Math.round(weeklyEarnings / 5);

    // Provide a range (80% to 120% of the calculated amount)
    const minEarnings = Math.round(monthlyEarnings * 0.8);
    const maxEarnings = Math.round(monthlyEarnings * 1.2);

    return {
      min: minEarnings,
      max: maxEarnings,
      daily: dailyEarnings,
      weekly: weeklyEarnings,
      monthly: monthlyEarnings,
    };
  };

  // Format currency (NGN)
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get the estimated earnings
  const earnings = getEstimatedEarnings();

  return (
    <section
      id="calculator"
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Calculator className="w-12 h-12 text-purple-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Calculate Your
            <span className="text-purple-primary"> Earning Potential</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how much you could earn by offering your skills on Joblad.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            {!isCalculated ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-6">
                  Tell us about your skills
                </h3>

                {/* Skill Category */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-medium mb-2">
                    What's your skill category?
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className={`w-full px-4 py-3 border ${
                        selectedSkill
                          ? "border-purple-primary"
                          : "border-gray-300"
                      } rounded-xl flex justify-between items-center bg-white hover:bg-gray-50 transition-colors text-left`}
                    >
                      {selectedSkill ? (
                        <span className="flex items-center">
                          <span className="mr-2 text-xl">
                            {
                              skillCategories.find(
                                (cat) => cat.id === selectedSkill
                              )?.icon
                            }
                          </span>
                          {
                            skillCategories.find(
                              (cat) => cat.id === selectedSkill
                            )?.name
                          }
                        </span>
                      ) : (
                        <span className="text-gray-500">
                          Select a skill category
                        </span>
                      )}
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </button>

                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
                        >
                          <div className="max-h-60 overflow-y-auto py-1">
                            {skillCategories.map((category) => (
                              <button
                                key={category.id}
                                onClick={() => {
                                  setSelectedSkill(category.id);
                                  setShowDropdown(false);
                                }}
                                className={`w-full px-4 py-3 text-left flex items-center hover:bg-gray-50 transition-colors ${
                                  selectedSkill === category.id
                                    ? "bg-purple-50"
                                    : ""
                                }`}
                              >
                                <span className="mr-3 text-xl">
                                  {category.icon}
                                </span>
                                <div>
                                  <p
                                    className={`font-medium ${
                                      selectedSkill === category.id
                                        ? "text-purple-primary"
                                        : ""
                                    }`}
                                  >
                                    {category.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {category.examples.join(", ")}
                                  </p>
                                </div>
                                {selectedSkill === category.id && (
                                  <Check className="ml-auto w-5 h-5 text-purple-primary" />
                                )}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {!selectedSkill && (
                    <p className="mt-1 text-sm text-gray-500">
                      Choose the category that best matches your skills.
                    </p>
                  )}
                </div>

                {/* Hours Per Week */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-medium mb-2">
                    How many hours can you work per week?
                  </label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="5"
                      max="40"
                      step="5"
                      value={hoursPerWeek}
                      onChange={(e) =>
                        setHoursPerWeek(parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-primary"
                    />
                    <span className="ml-4 min-w-[4rem] px-3 py-1 bg-purple-50 text-purple-primary font-medium rounded text-center">
                      {hoursPerWeek}h
                    </span>
                  </div>

                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>5h</span>
                    <span>10h</span>
                    <span>15h</span>
                    <span>20h</span>
                    <span>25h</span>
                    <span>30h</span>
                    <span>35h</span>
                    <span>40h</span>
                  </div>
                </div>

                {/* Experience Level */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-medium mb-2">
                    What's your experience level?
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {experienceLevels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setExperienceLevel(level.id)}
                        className={`px-4 py-3 rounded-xl border transition-colors ${
                          experienceLevel === level.id
                            ? "border-purple-primary bg-purple-50 text-purple-primary"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {level.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-gray-700 font-medium mb-2">
                    Select your currency
                  </label>
                  <div className="relative" ref={currencyDropdownRef}>
                    <button
                      onClick={() =>
                        setShowCurrencyDropdown(!showCurrencyDropdown)
                      }
                      className={`w-full px-4 py-3 border ${
                        selectedCurrency
                          ? "border-purple-primary"
                          : "border-gray-300"
                      } rounded-xl flex justify-between items-center bg-white hover:bg-gray-50 transition-colors text-left`}
                    >
                      <span className="flex items-center">
                        <span className="mr-2 text-xl">
                          {CURRENCY_FORMAT[selectedCurrency].symbol}
                        </span>
                        {CURRENCY_FORMAT[selectedCurrency].code}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </button>

                    <AnimatePresence>
                      {showCurrencyDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
                        >
                          <div className="max-h-60 overflow-y-auto py-1">
                            {Object.keys(CURRENCY_RATES).map((currencyCode) => (
                              <button
                                key={currencyCode}
                                onClick={() => {
                                  setSelectedCurrency(currencyCode);
                                  setShowCurrencyDropdown(false);
                                }}
                                className={`w-full px-4 py-3 text-left flex items-center hover:bg-gray-50 transition-colors ${
                                  selectedCurrency === currencyCode
                                    ? "bg-purple-50"
                                    : ""
                                }`}
                              >
                                <span className="mr-3 text-xl">
                                  {CURRENCY_FORMAT[currencyCode].symbol}
                                </span>
                                <div>
                                  <p
                                    className={`font-medium ${
                                      selectedCurrency === currencyCode
                                        ? "text-purple-primary"
                                        : ""
                                    }`}
                                  >
                                    {CURRENCY_FORMAT[currencyCode].code}
                                  </p>
                                </div>
                                {selectedCurrency === currencyCode && (
                                  <Check className="ml-auto w-5 h-5 text-purple-primary" />
                                )}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Calculate Button */}
                <div className="mt-8">
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={calculateEarnings}
                    disabled={!selectedSkill}
                  >
                    Calculate My Earning Potential
                  </Button>

                  {!selectedSkill && (
                    <p className="mt-2 text-sm text-red-500 text-center">
                      Please select a skill category first
                    </p>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Back Button */}
                <button
                  onClick={resetCalculator}
                  className="absolute top-0 right-0 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">
                      {
                        skillCategories.find((cat) => cat.id === selectedSkill)
                          ?.icon
                      }
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Your Estimated Earnings as a{" "}
                    <span className="text-purple-primary">
                      {experienceLevel.charAt(0).toUpperCase() +
                        experienceLevel.slice(1)}{" "}
                      {
                        skillCategories.find((cat) => cat.id === selectedSkill)
                          ?.name
                      }{" "}
                      Professional
                    </span>
                  </h3>
                </div>
                {/* Earnings Range Card */}
                {/* <div
                  className={`bg-gradient-to-r ${
                    skillCategories.find((cat) => cat.id === selectedSkill)
                      ?.color
                  } rounded-xl p-8 text-white mb-8`}
                >
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <p className="text-sm font-medium">Monthly Potential</p>
                  </div>
                  <div className="flex items-baseline">
                    <h4 className="text-4xl font-bold">
                      {formatCurrency(earnings.min)}
                    </h4>
                    <span className="mx-3">-</span>
                    <h4 className="text-4xl font-bold">
                      {formatCurrency(earnings.max)}
                    </h4>
                  </div>
                  <p className="mt-2 text-white/80">
                    Based on {hoursPerWeek} hours per week at your experience
                    level
                  </p>
                </div> */}
                <div className="bg-gradient-to-r from-[#7040ea] to-[#897fd8] rounded-xl p-6 text-white text-center">
                  <p className="text-sm opacity-90 mb-2">
                    Estimated Monthly Earnings
                  </p>
                  <div className="flex justify-center items-baseline space-x-2">
                    <div className="text-4xl font-bold">
                      <CurrencyDisplay
                        baseAmount={earnings.min}
                        baseCurrency={selectedCurrency}
                        size="3xl"
                        currencies={[
                          selectedCurrency,
                          ...Object.keys(CURRENCY_RATES).filter(
                            (c) => c !== selectedCurrency
                          ),
                        ]}
                        rotate={false}
                      />
                    </div>
                    <span>-</span>
                    <div className="text-4xl font-bold">
                      <CurrencyDisplay
                        baseAmount={earnings.max}
                        baseCurrency={selectedCurrency}
                        size="3xl"
                        currencies={[
                          selectedCurrency,
                          ...Object.keys(CURRENCY_RATES).filter(
                            (c) => c !== selectedCurrency
                          ),
                        ]}
                        rotate={false}
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-white/80">
                    Based on {hoursPerWeek} hours per week at your experience
                    level
                  </p>
                </div>
                {/* Earnings Breakdown */}
                {/* <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="font-bold text-lg mb-4">Earnings Breakdown</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-2">
                        <Clock className="w-5 h-5 text-purple-primary" />
                      </div>
                      <p className="text-gray-500 text-sm">Daily</p>
                      <p className="font-bold text-lg">
                        {formatCurrency(earnings.daily)}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-2">
                        <DollarSign className="w-5 h-5 text-purple-primary" />
                      </div>
                      <p className="text-gray-500 text-sm">Weekly</p>
                      <p className="font-bold text-lg">
                        {formatCurrency(earnings.weekly)}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-2">
                        <Users className="w-5 h-5 text-purple-primary" />
                      </div>
                      <p className="text-gray-500 text-sm">Projects/Month</p>
                      <p className="font-bold text-lg">
                        {Math.round((hoursPerWeek * 4) / 5)}-
                        {Math.round((hoursPerWeek * 4) / 3)}
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Earnings Breakdown */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="font-bold text-lg mb-4">Earnings Breakdown</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-2">
                        <Clock className="w-5 h-5 text-purple-primary" />
                      </div>
                      <p className="text-gray-500 text-sm">Daily</p>
                      <div className="font-bold text-lg">
                        <CurrencyDisplay
                          baseAmount={earnings.daily}
                          baseCurrency={selectedCurrency}
                          size="lg"
                          rotate={false}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-2">
                        <DollarSign className="w-5 h-5 text-purple-primary" />
                      </div>
                      <p className="text-gray-500 text-sm">Weekly</p>
                      <div className="font-bold text-lg">
                        <CurrencyDisplay
                          baseAmount={earnings.weekly}
                          baseCurrency={selectedCurrency}
                          size="lg"
                          rotate={false}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-2">
                        <Users className="w-5 h-5 text-purple-primary" />
                      </div>
                      <p className="text-gray-500 text-sm">Projects/Month</p>
                      <p className="font-bold text-lg">
                        {Math.round((hoursPerWeek * 4) / 5)}-
                        {Math.round((hoursPerWeek * 4) / 3)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Factors */}
                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-3">
                    Key Factors In Your Estimate
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Your{" "}
                        <span className="font-medium">{experienceLevel}</span>{" "}
                        experience level in{" "}
                        {skillCategories
                          .find((cat) => cat.id === selectedSkill)
                          ?.name.toLowerCase()}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Digital demand for{" "}
                        {skillCategories
                          .find((cat) => cat.id === selectedSkill)
                          ?.examples[0].toLowerCase()}{" "}
                        skills
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Typical rates for similar professionals on our platform
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Your capacity to work {hoursPerWeek} hours weekly
                      </span>
                    </li>
                  </ul>
                </div>
                {/* CTA Button */}
                <Button
                  variant="gradient"
                  soon
                  size="lg"
                  fullWidth
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Earning Now
                </Button>
              </motion.div>
            )}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center text-gray-500 text-sm"
          >
            <p>
              Estimates are based on average earnings of Joblad providers with
              similar profiles. Actual earnings may vary based on your skills,
              work quality, and client demand.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator;
