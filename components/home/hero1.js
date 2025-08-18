// 'use client';

// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Play, CheckCircle, Activity, Briefcase, DollarSign, Star, Clock } from 'lucide-react';

// const Hero1 = () => {
//   const [activeCount, setActiveCount] = useState(2847);
//   const [tasksToday, setTasksToday] = useState(423);
//   const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

//   // Live counter effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveCount(prev => prev + Math.floor(Math.random() * 3));
//       setTasksToday(prev => prev + Math.floor(Math.random() * 2));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Countdown timer
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev.seconds > 0) {
//           return { ...prev, seconds: prev.seconds - 1 };
//         } else if (prev.minutes > 0) {
//           return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
//         } else if (prev.hours > 0) {
//           return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
//         }
//         return prev;
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.02]">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'radial-gradient(circle at 2px 2px, #7040ea 1px, transparent 1px)',
//           backgroundSize: '40px 40px'
//         }}></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Live Stats Bar */}
//         <div className="bg-white rounded-full shadow-lg p-4 mb-8 inline-flex items-center space-x-6">
//           <div className="flex items-center space-x-2">
//             <Activity className="w-4 h-4 text-green-500" />
//             <span className="text-sm font-medium">{activeCount.toLocaleString()} people earning now</span>
//           </div>
//           <div className="h-4 w-[1px] bg-gray-200"></div>
//           <div className="flex items-center space-x-2">
//             <Briefcase className="w-4 h-4 text-purple-primary" />
//             <span className="text-sm font-medium">{tasksToday} tasks completed today</span>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="inline-flex items-center bg-purple-primary/10 rounded-full px-4 py-2 mb-6">
//               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
//               <span className="text-sm text-gray-700 font-medium">Live in Lagos</span>
//             </div>

//             <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 font-display">
//               Your skills deserve
//               <span className="text-purple-primary block">a global stage.</span>
//             </h1>

//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               The first platform turning Africa's local expertise into global income streams.
//               From traditional crafts to modern tech—everyone has value.
//             </p>

//             {/* Countdown Timer */}
//             <div className="bg-gradient-to-r from-purple-primary/10 to-blue-primary/10 rounded-xl p-4 mb-6">
//               <p className="text-sm font-medium mb-2">🎉 First 1000 users get premium features FREE!</p>
//               <div className="flex items-center space-x-4">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-purple-primary">{String(timeLeft.hours).padStart(2, '0')}</div>
//                   <div className="text-xs text-gray-600">Hours</div>
//                 </div>
//                 <span className="text-2xl font-bold text-purple-primary">:</span>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-purple-primary">{String(timeLeft.minutes).padStart(2, '0')}</div>
//                   <div className="text-xs text-gray-600">Minutes</div>
//                 </div>
//                 <span className="text-2xl font-bold text-purple-primary">:</span>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-purple-primary">{String(timeLeft.seconds).padStart(2, '0')}</div>
//                   <div className="text-xs text-gray-600">Seconds</div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//               <button className="bg-purple-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#5930d0] transition-all transform hover:scale-105 flex items-center justify-center group">
//                 Start Earning Today
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>

//               <button className="border-2 border-gray-200 px-8 py-4 rounded-xl text-lg font-semibold hover:border-purple-primary hover:text-purple-primary transition-all flex items-center justify-center">
//                 <Play className="mr-2 w-5 h-5" />
//                 Watch Demo (2:34)
//               </button>
//             </div>

//             <div className="flex flex-wrap gap-4 text-sm">
//               <div className="flex items-center text-gray-600">
//                 <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
//                 Blockchain Secured
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
//                 Instant Payments
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
//                 No Hidden Fees
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             {/* Phone Mockup */}
//             <div className="relative mx-auto max-w-sm">
//               <div className="bg-gradient-to-br from-purple-primary to-blue-primary rounded-[3rem] p-2">
//                 <div className="bg-white rounded-[2.5rem] p-4">
//                   <div className="bg-gray-100 rounded-[2rem] p-6 h-[600px] overflow-hidden">
//                     {/* Status Bar */}
//                     <div className="flex justify-between items-center mb-4 text-xs">
//                       <span className="font-medium">9:41 AM</span>
//                       <div className="flex items-center space-x-1">
//                         <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
//                         <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
//                         <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
//                       </div>
//                     </div>

//                     {/* App Header */}
//                     <div className="flex items-center justify-between mb-6">
//                       <h3 className="text-lg font-bold">Hi, Chioma 👋</h3>
//                       <div className="w-10 h-10 bg-purple-primary rounded-full"></div>
//                     </div>

//                     {/* Earnings Card */}
//                     <div className="bg-gradient-to-r from-purple-primary to-purple-secondary rounded-2xl p-6 text-white mb-6">
//                       <p className="text-sm opacity-90 mb-1">This Week</p>
//                       <p className="text-3xl font-bold mb-3">₦127,500</p>
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm opacity-90">14 tasks completed</span>
//                         <span className="bg-white/20 px-3 py-1 rounded-full text-xs">+23%</span>
//                       </div>
//                     </div>

//                     {/* Active Tasks */}
//                     <div className="space-y-3">
//                       <h4 className="font-semibold text-sm text-gray-600">Active Task</h4>

//                       <div className="bg-white rounded-xl p-4 shadow-sm">
//                         <div className="flex items-start justify-between mb-2">
//                           <div>
//                             <span className="text-xs font-medium text-purple-primary px-2 py-0.5 bg-purple-50 rounded-full">In Progress</span>
//                             <h5 className="font-semibold text-sm mt-1">Design Logo for Restaurant</h5>
//                           </div>
//                           <span className="text-purple-primary font-bold">₦45,000</span>
//                         </div>
//                         <div className="flex items-center justify-between text-xs text-gray-500">
//                           <div className="flex items-center">
//                             <Clock className="w-3 h-3 mr-1" />
//                             Due in 2 days
//                           </div>
//                           <div className="flex">
//                             <Star className="w-3 h-3 text-yellow-500 fill-current" />
//                             <Star className="w-3 h-3 text-yellow-500 fill-current" />
//                             <Star className="w-3 h-3 text-yellow-500 fill-current" />
//                             <Star className="w-3 h-3 text-yellow-500 fill-current" />
//                             <Star className="w-3 h-3 text-yellow-500 fill-current" />
//                           </div>
//                         </div>
//                         <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
//                           <div className="bg-purple-primary h-full w-[75%]"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-bounce-slow">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                     <DollarSign className="w-4 h-4 text-green-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold">Payment Received</p>
//                     <p className="text-xs text-gray-500">₦45,000</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3">
//                 <div className="flex items-center space-x-2">
//                   <Star className="w-5 h-5 text-yellow-500" />
//                   <span className="text-sm font-semibold">4.9 Rating</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero1;

"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Activity,
  Briefcase,
  DollarSign,
  Star,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../button/button";
import Image from "next/image";

const Hero1 = () => {
  const [activeCount, setActiveCount] = useState(2847);
  const [tasksToday, setTasksToday] = useState(423);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const headlines = [
    "a global stage.",
    "recognition.",
    "fair income.",
    "worldwide reach.",
  ];

  // Live counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCount((prev) => prev + Math.floor(Math.random() * 3));
      setTasksToday((prev) => prev + Math.floor(Math.random() * 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Headline rotation
  useEffect(() => {
    const headlineInterval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(headlineInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #7040ea 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" rounded-full inline-flex items-center space-x-6"
        >
          {/* <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">
              {activeCount.toLocaleString()} people earning now
            </span>
          </div>
          <div className="h-4 w-[1px] bg-gray-200"></div>
          <div className="flex items-center space-x-2">
            <Briefcase className="w-4 h-4 text-purple-primary" />
            <span className="text-sm font-medium">
              {tasksToday} tasks completed today
            </span>
          </div> */}
          <div className="inline-flex items-center bg-[#9fe1ff]/10 border border-[#3f9de6]/20 rounded-full px-4 py-2 mb-0">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-sm text-gray-700">
              5,000+ people already in waiting list
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-5xl md:text-6xl font-bold leading-tight mb-2 font-display"
              >
                Your skills deserve
              </motion.h1>
              <div className="h-[72px] md:h-[80px] relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={headlineIndex}
                    className="text-5xl md:text-6xl font-bold font-display text-purple-primary absolute left-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1], 
                    }}
                  >
                    {headlines[headlineIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 mb-8 font-normal font-accent leading-relaxed mt-4"
            >
              The first platform turning Africa's local expertise into global
              income streams. From traditional crafts to modern tech—everyone
              has value.
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-r from-purple-primary/10 to-blue-primary/10 rounded-xl p-4 mb-6"
            >
              <p className="text-sm font-medium mb-2">
                🎉 First 1000 lads get FREE shoutout when we launch!
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-primary">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-600">Hours</div>
                </div>
                <span className="text-2xl font-bold text-purple-primary">
                  :
                </span>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-primary">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-600">Minutes</div>
                </div>
                <span className="text-2xl font-bold text-purple-primary">
                  :
                </span>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-primary">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-600">Seconds</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                href="/"
                variant="gradient"
                size="lg"
                rightIcon={
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                }
              >
                Join the Lads
              </Button>

              <Button
                variant="outline"
                size="lg"
                leftIcon={<Play className="w-5 h-5" />}
              >
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4 text-sm"
            >
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Start free
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Instant Payments
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No Hidden Fees
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Phone Mockup */}
            <motion.div
              className="relative mx-auto max-w-sm"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <div className="bg-gradient-to-br from-purple-primary to-blue-primary rounded-[3rem] p-2">
                <div className="bg-white rounded-[2.5rem] p-4">
                  <div className="bg-gray-100 rounded-[2rem] p-6 h-[600px] overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4 text-xs">
                      <span className="font-medium">9:41 AM</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
                        <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
                        <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold">Hi, Chioma 👋</h3>
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                        width={100}
                        height={100}
                          src="https://picsum.photos/1200/800"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Earnings Card */}
                    <motion.div
                      className="bg-gradient-to-r from-purple-primary to-purple-secondary rounded-2xl p-6 text-white mb-6"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm opacity-90 mb-1">This Week</p>
                      <p className="text-3xl font-bold mb-3">₦127,500</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm opacity-90">
                          14 tasks completed
                        </span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                          +23%
                        </span>
                      </div>
                    </motion.div>

                    {/* Active Tasks */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-gray-600">
                        Active Tasks
                      </h4>

                      <motion.div
                        className="bg-white rounded-xl p-4 shadow-sm"
                        whileHover={{ scale: 1.02, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <span className="text-xs font-medium text-purple-primary px-2 py-0.5 bg-purple-50 rounded-full">
                              In Progress
                            </span>
                            <h5 className="font-semibold text-sm mt-1">
                              Design Logo for Restaurant
                            </h5>
                                    <p className="text-xs text-gray-500">Client: Sarah (UK)</p>
                          </div>
                          <span className="text-purple-primary font-bold">
                            ₦65,000
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            Due in 2 days
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 text-yellow-500 fill-current"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div className="bg-purple-primary h-full w-[75%]"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-xl p-4 shadow-sm"
                        whileHover={{ scale: 1.02, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <span className="text-xs font-medium text-blue-primary px-2 py-0.5 bg-blue-50 rounded-full">
                              Upcoming
                            </span>
                            <h5 className="font-semibold text-sm mt-1">
                              Teach Yoruba (5 sessions)
                            </h5>
                            <p className="text-xs text-gray-500">Client: David (USA)</p>
                          </div>
                          <span className="text-blue-primary font-bold">
                            $150
                          </span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          Next: Today 3:00 PM
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Payment Received</p>
                    <p className="text-xs text-gray-500">₦45,000</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">4.9 Rating</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
