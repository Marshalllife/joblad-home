"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Compass } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
        <motion.div
          className="flex items-center space-x-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={"/image/logo2.png"}
            alt="Image logo for nav"
            width={0}
            height={0}
            sizes="(max-width: 768px) 50px, 55px"
            className="w-[50px] md:w-[55px] h-auto object-contain p-1.5 rounded-2xl "
          />
          <span className="ml-0.5 mt-1 text-md md:text-xl font-bold font-display text-gray-900">
            Joblad
          </span>
        </motion.div>

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
