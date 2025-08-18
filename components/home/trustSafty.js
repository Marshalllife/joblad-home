"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, BadgeCheck, CreditCard, UserCheck, AlertTriangle, Eye, FileCheck, CheckCircle } from "lucide-react";
import Button from "../button/button";
import Image from "next/image";

const TrustAndSafety = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Trust pillars data
  const trustPillars = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Secure Platform",
      description: "End-to-end encryption for all communications and data with regular security audits",
      color: "bg-purple-primary",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      title: "Payment Protection",
      description: "All payments securely held in escrow until work is completed and approved",
      color: "bg-blue-primary",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-white" />,
      title: "Verified Providers",
      description: "Rigorous verification process for all skill providers on our platform",
      color: "bg-green-600",
    },
  ];
  
  // Verification steps
  const verificationSteps = [
    {
      icon: <UserCheck className="w-6 h-6 text-purple-primary" />,
      title: "Identity Verification",
      description: "We verify the identity of all users through official ID and facial recognition",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-purple-primary" />,
      title: "Skill Certification",
      description: "Providers submit proof of their skills and qualifications for review",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-primary" />,
      title: "Trust Score",
      description: "Ongoing rating system based on client feedback and successful projects",
    },
  ];
  
  // Payment protection features
  const paymentFeatures = [
    {
      title: "Secure Escrow",
      description: "Funds are held safely until work is completed and approved"
    },
    {
      title: "Milestone Payments",
      description: "Break large projects into smaller, manageable payment milestones"
    },
    {
      title: "Dispute Resolution",
      description: "Fair mediation process if any issues arise between parties"
    },
    {
      title: "Instant Notifications",
      description: "Real-time alerts for all payment activities and transfers"
    }
  ];

  return (
    <section
      id="trust"
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
          <Lock className="w-12 h-12 text-purple-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Trust & Safety
            <span className="text-purple-primary"> Guaranteed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your security is our priority. We've built robust systems to ensure safe transactions and protect your data.
          </p>
        </motion.div>
        
        {/* Trust Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {trustPillars.map((pillar, index) => (
            <motion.div
              key={`pillar-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className={`${pillar.color} p-4 flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  {pillar.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Payment Protection Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 font-display">Secure Payment Protection</h3>
            <p className="text-gray-600 mb-6">
              Our escrow payment system ensures that funds are only released when work is completed to satisfaction, protecting both providers and clients.
            </p>
            
            <div className="space-y-4">
              {paymentFeatures.map((feature, index) => (
                <motion.div
                  key={`payment-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.3 + (0.1 * index) }}
                  className="flex items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mr-4">
                    <CheckCircle className="w-5 h-5 text-blue-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button
                variant="secondary"
                size="base"
                leftIcon={<Eye className="w-5 h-5" />}
              >
                How Escrow Works
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-80 md:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden">
              <div className="absolute bottom-0 right-0 w-full h-full opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#7040ea" d="M42.7,-62.9C50.9,-52.8,50.1,-35.7,54.2,-21.1C58.4,-6.6,67.5,5.3,68.3,18.2C69,31.1,61.4,44.9,49.6,52.7C37.8,60.5,21.9,62.2,6.2,64.8C-9.5,67.3,-25,70.7,-39.2,66.3C-53.4,61.9,-66.3,49.7,-70.3,35.1C-74.2,20.5,-69.3,3.4,-65.2,-12.8C-61.2,-29,-58.1,-44.3,-48.4,-54.6C-38.7,-64.9,-22.4,-70.1,-5.6,-69.2C11.1,-68.3,34.5,-73,42.7,-62.9Z" transform="translate(100 100)" />
                </svg>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xs w-full">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Payment Status</p>
                      <p className="font-bold text-lg">In Escrow</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                      <Lock className="w-6 h-6 text-blue-primary" />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="h-2 bg-gray-100 rounded-full mb-2">
                      <div className="h-full w-1/2 bg-blue-primary rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Payment Secured</span>
                      <span>Work in Progress</span>
                      <span>Released</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium">Project Value</p>
                      <p className="font-bold">₦85,000</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium">Release Date</p>
                      <p className="text-sm">Upon Completion</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Funds are secure and will be released when both parties agree the work is complete
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Verification Process */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4 font-display">Our Verification Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take multiple steps to verify all users on our platform, ensuring a safe and trustworthy community.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {verificationSteps.map((step, index) => (
              <motion.div
                key={`step-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + (0.1 * index) }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Trust Badge Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-purple-primary/10 to-blue-primary/10 rounded-2xl p-8"
        >
          <div className="md:flex items-center">
            <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
              <div className="relative">
                <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center">
                  <BadgeCheck className="w-12 h-12 text-purple-primary" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-2xl font-bold mb-3 font-display">The Joblad Trust Badge</h3>
              <p className="text-gray-600 mb-4">
                Look for the Trust Badge on provider profiles. This indicates they've passed our thorough verification process and have consistently delivered quality work.
              </p>
              
              <div className="flex items-start mt-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  Always check for the Trust Badge before hiring, and never take communications or payments outside of the Joblad platform for your safety.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustAndSafety;