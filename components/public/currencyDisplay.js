"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Currency conversion rates (approximations relative to NGN)
export const CURRENCY_RATES = {
  NGN: 1,
  USD: 1 / 1555, // 1 USD = ₦1555 (black market rate)
  GBP: 1 / 2100, // 1 GBP = ₦2100 (approximated from search results)
  EUR: 1 / 1780, // 1 EUR = ₦1780 (approximated from search results)
  GHS: 1 / 130, // 1 GHS = ₦130 (approximated)
  KES: 1 / 10.5, // 1 KES = ₦10.5 (approximated)
  ZAR: 1 / 85, // 1 ZAR = ₦85 (approximated)
  CAD: 1 / 1150, // 1 CAD = ₦1150 (approximated)
  AED: 1 / 420, // 1 AED = ₦420 (approximated)
};

// Currency symbols and formatting
export const CURRENCY_FORMAT = {
  NGN: { symbol: "₦", position: "before", code: "NGN" },
  USD: { symbol: "$", position: "before", code: "USD" },
  GBP: { symbol: "£", position: "before", code: "GBP" },
  EUR: { symbol: "€", position: "before", code: "EUR" },
  GHS: { symbol: "GH₵", position: "before", code: "GHS" },
  KES: { symbol: "KSh", position: "before", code: "KES" },
  ZAR: { symbol: "R", position: "before", code: "ZAR" },
  CAD: { symbol: "C$", position: "before", code: "CAD" },
  AED: { symbol: "AED", position: "after", code: "AED" },
};

const CurrencyDisplay = ({
  baseAmount,
  baseCurrency = "NGN",
  currencies = ["NGN", "USD", "GBP", "EUR", "GHS"],
  rotationSpeed = 5000, // milliseconds between rotations
  size = "md",
  rotate = true,
  primaryDisplay = true, // show base currency more frequently
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedCurrency, setDisplayedCurrency] = useState(baseCurrency);

  // Size variants
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl font-bold",
    "2xl": "text-2xl font-bold",
    "3xl": "text-3xl font-bold",
  };

  const displayCurrencies = primaryDisplay
    ? [
        baseCurrency,
        ...currencies.filter((c) => c !== baseCurrency),
        baseCurrency,
      ]
    : currencies;

  // useEffect(() => {
  //   setCurrentIndex(0);
  //   setDisplayedCurrency(displayCurrencies[0]);
  // }, [displayCurrencies, rotate]); //new

  useEffect(() => {
    if (!rotate) {
      setDisplayedCurrency(baseCurrency);
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayCurrencies.length);
    }, rotationSpeed);

    return () => clearInterval(interval);
  }, [rotate, rotationSpeed, displayCurrencies.length, baseCurrency]); //new

  // //  rotation of currencies
  // useEffect(() => {
  //   if (!rotate) return;
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % displayCurrencies.length);
  //   }, rotationSpeed);

  //   return () => clearInterval(interval);
  // }, [rotationSpeed, displayCurrencies.length]);

  //  displayed currency when index changes
  // useEffect(() => {
  //   setDisplayedCurrency(displayCurrencies[currentIndex]);
  // }, [currentIndex, displayCurrencies]);

  useEffect(() => {
    if (currentIndex < displayCurrencies.length) {
      setDisplayedCurrency(displayCurrencies[currentIndex]);
    } else {
      // Handle out-of-bounds index
      setCurrentIndex(0);
    }
  }, [currentIndex, displayCurrencies]); //new

  // Convert amount to current currency
  const convertAmount = (amount, from, to) => {
    if (from === to) return amount;
    const inNGN = amount / CURRENCY_RATES[from];
    return inNGN * CURRENCY_RATES[to];
  };

  // Format currency based on locale and currency code
  const formatCurrency = (amount, currencyCode) => {
    const format = CURRENCY_FORMAT[currencyCode];
    const formatted = new Intl.NumberFormat("en", {
      maximumFractionDigits: 0,
    }).format(Math.round(amount));

    return format.position === "before"
      ? `${format.symbol}${formatted}`
      : `${formatted} ${format.symbol}`;
  };

  // Calculate converted amount
  const convertedAmount = convertAmount(
    baseAmount,
    baseCurrency,
    displayedCurrency
  );

  return (
    <div className={`inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayedCurrency}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.3 }}
          className={`${sizeClasses[size]} relative`}
        >
          {formatCurrency(convertedAmount, displayedCurrency)}
          <motion.span
            className="absolute -top-2 -right-2 text-[0.6em] text-gray-500 font-normal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            {displayedCurrency !== baseCurrency ? displayedCurrency : ""}
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default CurrencyDisplay;
