"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Globe, CreditCard, CheckCircle } from "lucide-react";
import Button from "../button/button";
import AnimatedBadge from "./badge";

const ProblemSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Problem and solution items
  const problems = [
    {
      icon: <Globe className="w-6 h-6 text-gray-600" />,
      title: "Limited by location",
      description:
        "Traditional platforms require bank accounts most don't have",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-gray-600" />,
      title: "Payment challenges",
      description: "Complex interfaces built for Western markets",
    },
    {
      icon: <Lock className="w-6 h-6 text-gray-600" />,
      title: "Trust barriers",
      description: "Payment delays that kill small businesses",
    },
  ];

  const solutions = [
    {
      title: "Global Access",
      description: "Connect with clients from over 30 countries",
      check: true,
    },
    {
      title: "Multiple Payment Options",
      description: "Get paid in local currency, dollars, or crypto",
      check: true,
    },
    {
      title: "Built for Africans - works globally",
      description: "Simple interface that works on any device",
      check: true,
    },
    {
      title: "Secure Escrow",
      description: "Money held safely until work is completed",
      check: true,
    },
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 font-display"
          >
            The problem:
            <br />
            <span className="text-purple-primary">
              Talent everywhere,
              <br className="md:hidden" /> opportunity nowhere
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Millions of skilled Africans—carpenters, teachers, developers,
            artists—remain disconnected from the $450B global gig economy.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold font-display"
            >
              Current Challenges
            </motion.h3>

            {problems.map((problem, index) => (
              <motion.div
                key={`problem-${index}`}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{problem.title}</h4>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-purple-primary/10 to-blue-primary/10 rounded-xl p-6"
            >
              <p className="text-gray-700 font-medium">
                The result? Talented individuals remain underemployed, earning a
                fraction of their potential.
              </p>
            </motion.div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-purple-primary to-blue-primary p-6 text-white">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold font-display"
              >
                Joblad's Solution
              </motion.h3>
            </div>

            <div className="p-6 space-y-6">
              <motion.p variants={itemVariants} className="text-gray-700">
                We've built a platform specifically designed to bridge this gap,
                with features that address each barrier:
              </motion.p>

              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={`solution-${index}`}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">{solution.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {solution.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="pt-4 mt-4 border-t border-gray-100"
              >
                <Button variant="gradient" size="base" fullWidth>
                  Explore Our Solution
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
          >
            <p className="text-3xl font-bold text-purple-primary">3-5x</p>
            <p className="text-gray-600 text-sm">Average income increase</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
          >
            <p className="text-3xl font-bold text-purple-primary">30+</p>
            <p className="text-gray-600 text-sm">Countries reached</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
          >
            <p className="text-3xl font-bold text-purple-primary">250+</p>
            <p className="text-gray-600 text-sm">Skills supported</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
          >
            <p className="text-3xl font-bold text-purple-primary">15min</p>
            <p className="text-gray-600 text-sm">Average payment time</p>
          </motion.div>
        </motion.div>
      </div>
      <div className=" mt-5">
        {" "}
        <AnimatedBadge variant="floating" />{" "}
        {/* or "scrolling", "floating", "rotating", "typewriter" */}
      </div>
    </section>
  );
};

export default ProblemSection;
