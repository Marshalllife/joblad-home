"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Compass } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark/20 flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-primary/5 rounded-full"></div>
        <div className="absolute top-40 -left-20 w-40 h-40 bg-blue-primary/5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-secondary/5 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-md w-full text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-purple-primary rounded-2xl flex items-center justify-center">
            <svg
              width="24"
              height="24"
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
          <span className="ml-3 text-2xl font-bold">Joblad</span>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              <Compass className="w-12 h-12 text-purple-primary animate-spin" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4 font-display">
            Page Not Found
          </h1>

          <div className="h-1 w-16 bg-gradient-to-r from-purple-primary to-blue-primary rounded-full mx-auto mb-6"></div>

          <p className="text-gray-600 mb-6">
            The digital path you're looking for hasn't been created yet. Like
            skills waiting to be digitized, this page is still in development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-purple-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <Link
              href="/#waitlist"
              className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-purple-primary hover:text-purple-primary transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Join Waitlist
            </Link>
          </div>
        </motion.div>

        {/* Stats or extras */}
        <div className="text-gray-500 text-sm">
          <p>
            While you're here, did you know we've already helped digitize over
            1,000 local skills across Africa?
          </p>
        </div>
      </div>
    </div>
  );
}
