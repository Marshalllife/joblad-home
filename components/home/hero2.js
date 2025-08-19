"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Globe,
  Shield,
  Play,
  User,
  Briefcase,
  CheckCircle,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../button/button";
import Image from "next/image";
import CurrencyDisplay from "../public/currencyDisplay";

const Hero2 = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const providerFeatures = [
    "No fees to join",
    "Set your own rates",
    "Work from anywhere",
  ];
  const seekerFeatures = [
    "Verified providers",
    "Secure payments",
    "Quality guaranteed",
  ];

  return (
    <section id="who" className="py-16 md:py-20 overflow-hidden">
      <div className="min-h-screen grid md:grid-cols-2 relative">
        <motion.div
          className="bg-gradient-to-br from-purple-50 to-white flex flex-col justify-center p-4 md:p-16 relative overflow-hidden"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-full h-full opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25px 25px, #7040ea 2px, transparent 0)",
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="relative">
            <motion.div
              className="inline-flex items-center bg-purple-100 rounded-full px-3 py-1 mb-6 text-purple-primary text-sm font-medium"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <User className="w-4 h-4 mr-2" />
              For Skill Providers
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-display"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Your <span className="text-purple-primary">Local Skills</span>,
              <br />
              Global <span className="text-blue-primary">Reach</span>.
            </motion.h2>

            <motion.p
              className=" text-md md:text-lg text-gray-600 mb-8 max-w-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Bring your everyday expertise into the digital economy. Connect
              with clients worldwide who value what you do.
            </motion.p>

            <motion.div
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-sm p-4 md:p-5 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/successStory/mamaSidi.png"
                      alt="Provider"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Mama Sidi</h3>
                    <p className="text-sm text-gray-500">
                      Fashion Designer in Lagos
                    </p>
                  </div>
                  <div className="ml-auto text-right whitespace-nowrap">
                    <div className="font-bold text-purple-primary">
                      {/* ₦450K */}
                      <CurrencyDisplay baseAmount={450000} size="norm" />
                    </div>
                    <p className="text-xs text-gray-500">monthly income</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 italic mb-3">
                  "I now sell my designs to clients in the UK and Canada. Joblad
                  changed everything for me."
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                soon
                variant="primary"
                size="base"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Join the Lads
              </Button>

              <Button
                soon
                variant="outline"
                size="base"
                leftIcon={<Play className="w-5 h-5" />}
              >
                How It Works
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {providerFeatures.map((feature, index) => (
                <motion.div
                  key={`provider-${index}`}
                  className="flex items-center text-gray-600 text-sm mb-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="hidden md:block absolute -bottom-16 -right-16 w-64 h-64 bg-purple-50 rounded-full opacity-50"
            animate={{
              x: scrollY * 0.05,
              y: -scrollY * 0.05,
            }}
          />
          <motion.div
            className="hidden md:block absolute top-32 -right-8 w-32 h-32 bg-blue-50 rounded-full opacity-70"
            animate={{
              x: -scrollY * 0.03,
              y: scrollY * 0.08,
            }}
          />
        </motion.div>

        {/* Right Column - Seeker Side */}
        <motion.div
          className="bg-gradient-to-bl from-blue-50 to-white flex flex-col justify-center p-8 md:p-16 relative overflow-hidden"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25px 25px, #3f9de6 2px, transparent 0)",
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="relative">
            <motion.div
              className="inline-flex items-center bg-blue-100 rounded-full px-3 py-1 mb-6 text-blue-primary text-sm font-medium"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              For Service Seekers
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-display"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Find <span className="text-blue-primary">Verified Skills</span>,
              <br />
              <span className="text-purple-primary">Anywhere</span>.
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Connect with skilled providers for any task. From local crafts to
              digital expertise, find trusted talent globally.
            </motion.p>

            <motion.div
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-sm p-4 md:p-5 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/profile/david.jpg"
                      alt="Seeker"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">David Thompson</h3>
                    <p className="text-sm text-gray-500">
                      Business owner in Canada
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 italic mb-3">
                  "Finding skilled Nigerian talent was impossible until Joblad.
                  Now I have a dedicated team I can trust."
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                variant="secondary"
                size="base"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Find Talent
              </Button>

              <Button
                variant="outline"
                size="base"
                leftIcon={<Globe className="w-5 h-5" />}
              >
                Browse Skills
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {seekerFeatures.map((feature, index) => (
                <motion.div
                  key={`seeker-${index}`}
                  className="flex items-center text-gray-600 text-sm mb-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="hidden md:block absolute -bottom-20 -left-16 w-72 h-72 bg-blue-50 rounded-full opacity-40"
            animate={{
              x: -scrollY * 0.05,
              y: -scrollY * 0.05,
            }}
          />
          <motion.div
            className="hidden md:block absolute top-40 -left-8 w-40 h-40 bg-purple-50 rounded-full opacity-60"
            animate={{
              x: scrollY * 0.03,
              y: scrollY * 0.07,
            }}
          />
        </motion.div>

        {/* Overlapping Center Element */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full  shadow-xl z-10 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.8,
          }}
        >
          <Image
            src={"/image/logo2.png"}
            alt="Image logo for nav"
            width={0}
            height={0}
            sizes="(max-width: 768px) 50px, 55px"
            className="w-full h-auto object-contain  rounded-full "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero2;
