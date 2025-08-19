"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  User,
  Briefcase,
  Check,
  Smartphone,
  Globe,
  CreditCard,
  MessageCircle,
  Star,
} from "lucide-react";
import Button from "../button/button";

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("providers"); // "providers" or "seekers"

  // Process steps for providers and seekers
  const providerSteps = [
    {
      icon: <User className="w-6 h-6 text-white" />,
      title: "Create Your Profile",
      description:
        "Sign up and showcase your skills, experience, and portfolio in just a few minutes.",
      color: "bg-purple-primary",
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Get Discovered",
      description:
        "Our platform digitizes your skills, making you discoverable to clients locally and beyond.",
      color: "bg-blue-primary",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "Discuss Projects",
      description:
        "Chat directly with clients to understand their needs and agree on terms.",
      color: "bg-purple-secondary",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Complete Work",
      description:
        "Deliver quality service while the payment is securely held in escrow.",
      color: "bg-blue-primary",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Get Paid Quickly",
      description:
        "Receive payment within 24 hours of work completion, directly to your preferred method.",
      color: "bg-purple-primary",
    },
  ];

  const seekerSteps = [
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Post Your Project",
      description:
        "Describe what you need in a few simple steps, with suggested pricing based on market rates.",
      color: "bg-blue-primary",
    },
    {
      icon: <User className="w-6 h-6 text-white" />,
      title: "Browse Talents",
      description:
        "Explore verified profiles or get matched with providers who have the exact skills you need.",
      color: "bg-purple-primary",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "Connect & Discuss",
      description:
        "Chat with providers to discuss your project details, timeline, and expectations.",
      color: "bg-purple-secondary",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Secure Payment",
      description:
        "Fund the project using multiple payment options. Money is held securely until work is complete.",
      color: "bg-blue-primary",
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: "Review & Release",
      description:
        "Approve the completed work and leave a review. Payment is released automatically.",
      color: "bg-purple-primary",
    },
  ];

  // Get the active steps based on selected tab
  const activeSteps = activeTab === "providers" ? providerSteps : seekerSteps;

  return (
    <section
      id="how"
      ref={sectionRef}
      className="py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-purple-primary font-semibold tracking-wide uppercase mb-2">
            Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            How Joblad Works
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, secure process for connecting skills with opportunities
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-100 rounded-full p-1.5 inline-flex"
          >
            <button
              onClick={() => setActiveTab("providers")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === "providers"
                  ? "bg-white text-purple-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              For Providers
            </button>
            <button
              onClick={() => setActiveTab("seekers")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === "seekers"
                  ? "bg-white text-blue-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              For Seekers
            </button>
          </motion.div>
        </div>

        {/* Mobile View - Vertical Steps */}
        <div className="md:hidden">
          <div className="space-y-6">
            {activeSteps.map((step, index) => (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className={`${step.color} px-4 py-3 flex items-center`}>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    {step.icon}
                  </div>
                  <h4 className="text-white font-semibold">Step {index + 1}</h4>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop View - Horizontal Process */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-100">
              <motion.div
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className={`h-full ${
                  activeTab === "providers"
                    ? "bg-gradient-to-r from-purple-primary to-blue-primary"
                    : "bg-gradient-to-r from-blue-primary to-purple-primary"
                }`}
              ></motion.div>
            </div>

            {/* Steps */}
            <div className="flex justify-between">
              {activeSteps.map((step, index) => (
                <motion.div
                  key={`desktop-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                  className="relative"
                  style={{ width: `${100 / activeSteps.length}%` }}
                >
                  {/* Step Circle */}
                  <div className="relative z-10 mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                      className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center`}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Content with fixed height */}
                  <div
                    className="text-center px-4"
                    style={{ minHeight: "120px" }}
                  >
                    <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to{" "}
            {activeTab === "providers"
              ? "start earning"
              : "find skilled talent"}
            ?
          </p>
          <Button
          soon
            variant={activeTab === "providers" ? "primary" : "secondary"}
            size="base"
            rightIcon={<ChevronRight className="w-4 h-4" />}
          >
            {activeTab === "providers"
              ? "Create Your Profile"
              : "Post a Project"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

//    <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//       transition={{ duration: 0.5, delay: 0.7 }}
//       className="mt-20 bg-gradient-to-r from-purple-primary/10 to-blue-primary/10 rounded-2xl overflow-hidden"
//     >
//       <div className="md:flex items-center">
//         <div className="p-8 md:p-10 md:w-2/3">
//           <h3 className="text-2xl font-bold mb-3 font-display">Get the Joblad Mobile App</h3>
//           <p className="text-gray-600 mb-6">
//             Manage your projects, chat with clients, and receive payments on the go.
//             Available for iOS and Android.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button
//               variant="gradient"
//               size="base"
//               leftIcon={<Smartphone className="w-5 h-5" />}
//             >
//               Download for iOS
//             </Button>
//             <Button
//               variant="outline"
//               size="base"
//               leftIcon={<Smartphone className="w-5 h-5" />}
//             >
//               Download for Android
//             </Button>
//           </div>
//         </div>

//         <div className="hidden md:block md:w-1/3 p-6">
//           <div className="relative h-64">
//             <div className="absolute right-0 top-0 w-40 h-64 bg-gradient-to-r from-purple-primary/80 to-blue-primary rounded-3xl transform rotate-6"></div>
//             <div className="absolute right-10 top-6 w-40 h-64 bg-white rounded-3xl shadow-lg overflow-hidden">
//               <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//                 <Smartphone className="w-8 h-8 text-gray-400" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
