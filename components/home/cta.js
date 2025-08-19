// "use client";

// import React, { useState, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { ArrowRight, Check, Gift, Clock, Users, Send } from "lucide-react";
// import Button from "../button/button";

// const CTAWaitlist = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
//   const [email, setEmail] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   // Benefits of joining early
//   const earlyBenefits = [
//     "Premium features free for 6 months",
//     "Priority verification and onboarding",
//     "0% commission on your first 10 projects",
//     "Exclusive access to premium clients and projects",
//     "Early access to the Joblad token ecosystem"
//   ];

//   // Mock signup stats
//   const signupStats = {
//     totalSignups: 4873,
//     todaySignups: 127,
//     remainingSpots: 127, // Out of 5000 early access spots
//     percentFull: 97.5, // 4873/5000 * 100
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     // Validate email
//     if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     // Simulate form submission
//     setSubmitting(true);

//     // Mock API call
//     setTimeout(() => {
//       setSubmitting(false);
//       setSubmitted(true);
//       // In a real implementation, you would send the email to your backend
//     }, 1500);
//   };

//   return (
//     <section
//       id="waitlist"
//       ref={sectionRef}
//       className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-primary/5 rounded-full"></div>
//         <div className="absolute top-40 -left-20 w-40 h-40 bg-blue-primary/5 rounded-full"></div>
//         <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-secondary/5 rounded-full"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center bg-purple-50 rounded-full px-4 py-1.5 mb-4">
//             <Gift className="w-4 h-4 text-purple-primary mr-2" />
//             <span className="text-sm font-medium text-purple-primary">Limited Time Offer</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
//             Join The <span className="text-purple-primary">Waitlist</span> Today
//           </h2>
//           <p className="text-xl  max-w-3xl mx-auto">
//             Be among the first 5,000 users to get exclusive benefits and premium features for free.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Benefits & Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
//               <h3 className="text-2xl font-bold mb-6 font-display">Early Access Benefits</h3>

//               <div className="space-y-4 mb-8">
//                 {earlyBenefits.map((benefit, index) => (
//                   <motion.div
//                     key={`benefit-${index}`}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
//                     transition={{ duration: 0.3, delay: 0.3 + (0.1 * index) }}
//                     className="flex items-start"
//                   >
//                     <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mr-3 flex-shrink-0">
//                       <Check className="w-3.5 h-3.5 text-green-500" />
//                     </div>
//                     <p className="text-gray-700">{benefit}</p>
//                   </motion.div>
//                 ))}
//               </div>

//               {!submitted ? (
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                       Enter your email to join the waitlist
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="you@example.com"
//                         className={`w-full px-4 py-3 border ${
//                           error ? "border-red-400" : "border-gray-300"
//                         } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-purple-primary transition-colors`}
//                         disabled={submitting}
//                       />
//                       {error && (
//                         <p className="text-red-500 text-sm mt-1">{error}</p>
//                       )}
//                     </div>
//                   </div>

//                   <Button
//                     variant="gradient"
//                     size="lg"
//                     fullWidth
//                     rightIcon={<ArrowRight className="w-5 h-5" />}
//                     onClick={handleSubmit}
//                     disabled={submitting}
//                   >
//                     {submitting ? "Joining..." : "Join The Waitlist"}
//                   </Button>

//                   <p className="mt-3 text-sm text-gray-300 text-center">
//                     No credit card required. Cancel anytime.
//                   </p>
//                 </form>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="bg-green-50 rounded-xl p-6 text-center"
//                 >
//                   <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Check className="w-8 h-8 text-green-500" />
//                   </div>
//                   <h4 className="text-xl font-bold text-green-700 mb-2">You're on the list!</h4>
//                   <p className="text-green-600">
//                     We'll notify you when Joblad launches in your area.
//                   </p>
//                   <p className="mt-4 text-sm ">
//                     Check your email for a confirmation message.
//                   </p>
//                 </motion.div>
//               )}
//             </div>
//           </motion.div>

//           {/* Right Side - Status & Countdown */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             {/* Stats Card */}
//             <div className="bg-gradient-to-br from-purple-primary to-blue-primary rounded-2xl p-8 text-white shadow-lg mb-6">
//               <h3 className="text-xl font-bold mb-6">Waitlist Status</h3>

//               <div className="grid grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <p className="text-white/70 text-sm mb-1">Total Signups</p>
//                   <div className="flex items-baseline">
//                     <span className="text-3xl font-bold">{signupStats.totalSignups.toLocaleString()}</span>
//                     <span className="text-white/70 text-sm ml-1">/5,000</span>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-white/70 text-sm mb-1">Today</p>
//                   <div className="flex items-center">
//                     <span className="text-3xl font-bold">+{signupStats.todaySignups}</span>
//                     <Users className="w-4 h-4 ml-2 text-white/70" />
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-2">
//                 <div className="flex justify-between text-sm mb-1">
//                   <span>Waitlist Capacity</span>
//                   <span>{signupStats.percentFull}% Full</span>
//                 </div>
//                 <div className="h-2 bg-white/20 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-white rounded-full"
//                     style={{ width: `${signupStats.percentFull}%` }}
//                   ></div>
//                 </div>
//               </div>

//               <p className="text-sm text-white/70">
//                 Only <span className="font-bold text-white">{signupStats.remainingSpots}</span> spots remaining!
//               </p>
//             </div>

//             {/* Launch Countdown */}
//             <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
//               <div className="flex items-center mb-4">
//                 <Clock className="w-5 h-5 text-purple-primary mr-2" />
//                 <h3 className="text-lg font-bold">Launching Soon</h3>
//               </div>

//               <p className=" mb-6">
//                 We're currently in beta testing and will be launching soon. Join the waitlist to be among the first to experience Joblad.
//               </p>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   <Send className="w-4 h-4 text-purple-primary" />
//                   <span className="text-sm text-gray-300">We'll notify you when we launch</span>
//                 </div>
//                 <div className="bg-green-50 px-3 py-1 rounded-full">
//                   <span className="text-xs font-medium text-green-600">Coming Soon</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Social Proof */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-16 text-center"
//         >
//           <p className="text-gray-300 mb-4">Trusted by professionals from</p>
//           <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
//             <div className="text-xl font-bold text-gray-400">TechCabal</div>
//             <div className="text-xl font-bold text-gray-400">Techpoint</div>
//             <div className="text-xl font-bold text-gray-400">Guardian</div>
//             <div className="text-xl font-bold text-gray-400">Ventures</div>
//             <div className="text-xl font-bold text-gray-400">ThisDay</div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CTAWaitlist;

"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Check,
  Gift,
  Clock,
  Users,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import Button from "../button/button";

const CTAWaitlist = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState(""); // "provider" or "seeker"
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Benefits of joining early
  const earlyBenefits = [
    "Premium features free for life",
    "Free digital portfolio creation and training",
    "Priority verification and onboarding",
    "Exclusive access to premium clients",
  ];

  // Waitlist stats
  const waitlistStats = {
    totalSpots: 1000,
    spotsLeft: 985,
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Validate user type
    if (!userType) {
      setError(
        "Please select if you want to offer skills or need skilled people"
      );
      return;
    }

    // Simulate form submission
    setSubmitting(true);

    // Mock API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-purple-primary to-blue-primary text-white"
      data-observe
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-primary/5 rounded-full"></div>
        <div className="absolute top-40 -left-20 w-40 h-40 bg-blue-primary/5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-secondary/5 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-red-50 rounded-full px-4 py-1.5 mb-4">
            <Clock className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-sm font-medium text-red-500">
              Early access closing soon
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Your Skills Deserve <br className="md:hidden" />
            <span className="relative">
              A Global Stage
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50.3333 4.33333 148.4 -5.2 298 10"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands already on the waitlist. First 1,000 users get
            premium features free for life.
          </p>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
          {!submitted ? (
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 font-display">
                  Early Access Benefits
                </h3>

                <div className="space-y-4 mb-8">
                  {earlyBenefits.map((benefit, index) => (
                    <motion.div
                      key={`benefit-${index}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{ duration: 0.3, delay: 0.3 + 0.1 * index }}
                      className="flex items-start"
                    >
                      <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-light" />
                      </div>
                      <p className="text-gray-100">{benefit}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white/30 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-200">
                      Waitlist Capacity
                    </p>
                    <p className="text-sm font-medium text-gray-200">
                      {waitlistStats.spotsLeft}/{waitlistStats.totalSpots} spots
                      left
                    </p>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-primary rounded-full"
                      style={{
                        width: `${
                          ((waitlistStats.totalSpots -
                            waitlistStats.spotsLeft) /
                            waitlistStats.totalSpots) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-gray-300 font-medium mb-2"
                    >
                      Enter your email to join the waitlist
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 border ${
                        error ? "border-red-400" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-purple-primary transition-colors`}
                      disabled={submitting}
                    />
                  </div>

                  <div className="mb-6">
                    <p className="block text-gray-300 font-medium mb-2">
                      I want to:
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 mb-8">
                      <div className="grid grid-cols-2">
                        <button
                          onClick={() => setUserType("local")}
                          className={` px-2.5 md:px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                            userType === "local"
                              ? "bg-white text-purple-primary"
                              : "text-white hover:bg-white/10"
                          }`}
                        >
                          I want to offer skills
                        </button>
                        <button
                          onClick={() => setUserType("global")}
                          className={`px-2.5 md:px-4  py-3 rounded-xl text-sm font-medium transition-colors ${
                            userType === "global"
                              ? "bg-white text-blue-primary"
                              : "text-white hover:bg-white/10"
                          }`}
                        >
                          I need skilled people
                        </button>
                      </div>
                    </div>
                    {error && (
                      <p className="bg-error/90 text-red-50 text-center rounded-md py-1 text-sm mt-2">{error}</p>
                    )}
                  </div>

                  <Button
                    variant="secondary"
                    size="lg"
                    fullWidth
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? "Joining..." : "Join Waitlist"}
                  </Button>

                  <div className="flex flex-wrap justify-between mt-4 text-sm text-gray-300">
                    <p>Your information is secure</p>
                    <p>No credit card required</p>
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center gap-y-2 gap-x-6 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Start Free
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Available on Android & iOS
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Early access to all features
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-100 mb-2">
                You're on the list!
              </h4>
              <p className=" mb-6 max-w-lg mx-auto">
                Thanks for joining! We'll notify you when Joblad launches. Be
                sure to check your email for a confirmation message.
              </p>
              <Button
              soon
                variant="outline"
                size="base"
                className="text-light/90"
                rightIcon={<ChevronRight className="w-4 h-4 " />}
              >
                Refer a Friend for Priority Access
              </Button>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <div className="flex justify-center items-center space-x-2 text-sm ">
            <Users className="w-4 h-4" />
            <p>4,900+ people have already joined</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAWaitlist;
