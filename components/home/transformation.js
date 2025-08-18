// // "use client";

// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
// // import Button from "../button/button";
// // import Image from "next/image";

// // const SkillsTransformationShowcase = () => {
// //   const [activeSkill, setActiveSkill] = useState(null);

// // const skills = [
// //   {
// //     local: "Tailor",
// //     global: "Fashion Designer",
// //     icon: "👗",
// //     description: "From creating local clothing to designing for international fashion brands",
// //     bgGradient: "from-purple-primary/50 to-purple-secondary/50",
// //     income: { local: "₦65,000", global: "₦450,000" },
// //     image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=60",
// //     transformationSteps: ["Local repairs", "Custom outfits", "Brand partnerships", "Global consulting"]
// //   },
// //   {
// //     local: "Carpenter",
// //     global: "Furniture Designer",
// //     icon: "🪑",
// //     description: "From building simple furniture to designing custom pieces for clients worldwide",
// //     bgGradient: "from-blue-primary/50 to-purple-secondary/50",
// //     income: { local: "₦80,000", global: "₦520,000" },
// //     image: "https://images.unsplash.com/photo-1611269072029-24fabd8c0b1f?w=800&auto=format&fit=crop&q=60",
// //     transformationSteps: ["Basic repairs", "Custom furniture", "Design consultations", "International commissions"]
// //   },
// //   {
// //     local: "Teacher",
// //     global: "Education Consultant",
// //     icon: "📚",
// //     description: "From classroom teaching to developing curriculum for international schools",
// //     bgGradient: "from-purple-primary/50 to-blue-primary/50",
// //     income: { local: "₦90,000", global: "₦650,000" },
// //     image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&auto=format&fit=crop&q=60",
// //     transformationSteps: ["Local tutoring", "Online courses", "Curriculum development", "Global education programs"]
// //   },
// //   {
// //     local: "Chef",
// //     global: "Culinary Instructor",
// //     icon: "🍲",
// //     description: "From cooking local cuisine to teaching culinary arts to international students",
// //     bgGradient: "from-purple-secondary/50 to-blue-primary/50",
// //     income: { local: "₦75,000", global: "₦480,000" },
// //     image: "https://images.unsplash.com/photo-1654922207993-2952fec328ae?w=800&auto=format&fit=crop&q=60",
// //     transformationSteps: ["Local cooking", "Recipe development", "Cooking classes", "International workshops"]
// //   },
// //   {
// //     local: "Electrician",
// //     global: "Smart Home Expert",
// //     icon: "⚡",
// //     description: "From fixing electrical issues to designing smart home systems remotely",
// //     bgGradient: "from-blue-primary/50 to-blue-200/50",
// //     income: { local: "₦85,000", global: "₦580,000" },
// //     image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=60",
// //     transformationSteps: ["Basic repairs", "Home installations", "Smart tech integration", "Remote consulting"]
// //   },
// //   {
// //     local: "Artist",
// //     global: "Digital Creator",
// //     icon: "🎨",
// //     description: "From local art to creating digital content for global brands",
// //     bgGradient: "from-purple-primary/50 to-purple-primary/50",
// //     income: { local: "₦70,000", global: "₦420,000" },
// //     image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&auto=format&fit=crop&q=60",
// //     transformationSteps: ["Local exhibitions", "Digital artwork", "Brand collaborations", "Global commissions"]
// //   },
// // ];

// //   return (
// //     <section id="skills" className="py-20 bg-white overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <motion.h2
// //             initial={{ y: 20, opacity: 0 }}
// //             whileInView={{ y: 0, opacity: 1 }}
// //             transition={{ duration: 0.5 }}
// //             viewport={{ once: true, margin: "-100px" }}
// //             className="text-4xl md:text-5xl font-bold mb-4 font-display"
// //           >
// //             Every Skill Has
// //             <span className="text-purple-primary"> Global Value</span>
// //           </motion.h2>

// //           <motion.p
// //             initial={{ y: 20, opacity: 0 }}
// //             whileInView={{ y: 0, opacity: 1 }}
// //             transition={{ duration: 0.5, delay: 0.1 }}
// //             viewport={{ once: true, margin: "-100px" }}
// //             className="text-xl text-gray-600 max-w-3xl mx-auto"
// //           >
// //             See how traditional local expertise transforms into internationally valued services
// //           </motion.p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {skills.map((skill, index) => (
// //             <motion.div
// //               key={`skill-${index}`}
// //               initial={{ y: 20, opacity: 0 }}
// //               whileInView={{ y: 0, opacity: 1 }}
// //               transition={{ duration: 0.5, delay: 0.05 * index }}
// //               viewport={{ once: true, margin: "-100px" }}
// //               className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm h-[400px]"
// //               onMouseEnter={() => setActiveSkill(index)}
// //               onMouseLeave={() => setActiveSkill(null)}
// //             >
// //               {/* Top Gradient Section */}
// //               <div className={`h-28 bg-gradient-to-r ${skill.bgGradient} relative overflow-hidden`}>
// //                 <div className="absolute inset-0 opacity-30">
// //                   <Image
// //                     src={skill.image}
// //                     alt={skill.global}
// //                     width={400}
// //                     height={200}
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>
// //                 <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
// //                 <div className="absolute top-4 left-4 text-white text-3xl">{skill.icon}</div>
// //               </div>

// //               <div className="p-6 relative z-10 -mt-10">
// //                 {/* Transformation Arrow */}
// //                 <div className="flex items-center justify-center mb-6">
// //                   <div className="bg-white p-2 rounded-full shadow-md">
// //                     <motion.div
// //                       animate={{
// //                         x: activeSkill === index ? [0, 10, 0] : 0,
// //                         transition: { duration: 1.5, repeat: activeSkill === index ? Infinity : 0, repeatType: "loop" }
// //                       }}
// //                     >
// //                       <ArrowRight className="w-5 h-5 text-purple-primary" />
// //                     </motion.div>
// //                   </div>
// //                 </div>

// //                 {/* From Local to Global */}
// //                 <div className="flex justify-between items-center mb-6">
// //                   <div className="text-center flex-1">
// //                     <p className="text-sm text-gray-500 mb-1">Local Skill</p>
// //                     <h4 className="text-lg font-semibold">{skill.local}</h4>
// //                     <p className="text-sm text-gray-500 mt-1">{skill.income.local}/mo</p>
// //                   </div>

// //                   <div className="h-12 border-r border-gray-200 mx-4"></div>

// //                   <div className="text-center flex-1">
// //                     <p className="text-sm text-gray-500 mb-1">Global Service</p>
// //                     <h4 className="text-lg font-semibold text-purple-primary">{skill.global}</h4>
// //                     <p className="text-sm text-purple-primary font-medium mt-1">{skill.income.global}/mo</p>
// //                   </div>
// //                 </div>

// //                 {/* Progress Bar */}
// //                 <div className="mt-2 mb-4">
// //                   <div className="bg-gray-100 rounded-full h-1.5 overflow-hidden">
// //                     <motion.div
// //                       initial={{ width: "0%" }}
// //                       animate={{ width: activeSkill === index ? "100%" : "25%" }}
// //                       transition={{ duration: 0.8 }}
// //                       className="h-full bg-gradient-to-r from-purple-primary to-blue-primary"
// //                     ></motion.div>
// //                   </div>
// //                 </div>

// //                 {/* Description */}
// //                 <p className="text-gray-600 text-sm">{skill.description}</p>

// //                 {/* "Learn More" Button */}
// //                 <motion.button
// //                   className="absolute bottom-4 right-4 flex items-center text-sm text-purple-primary font-medium"
// //                   whileHover={{ x: 3 }}
// //                 >
// //                   Learn more <ChevronRight className="w-4 h-4 ml-1" />
// //                 </motion.button>
// //               </div>

// //               {/* Hover Overlay */}
// //               <AnimatePresence>
// //                 {activeSkill === index && (
// //                   <motion.div
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     exit={{ opacity: 0 }}
// //                     transition={{ duration: 0.2 }}
// //                     className="absolute inset-0 bg-white/95 p-6 flex flex-col z-20"
// //                   >
// //                     <div className="flex justify-between items-center mb-4">
// //                       <h3 className="font-bold text-xl">{skill.local} → {skill.global}</h3>
// //                       <div className="text-3xl">{skill.icon}</div>
// //                     </div>

// //                     <p className="text-gray-600 mb-6">{skill.description}</p>

// //                     <div className="flex-grow">
// //                       <h4 className="font-semibold mb-3 text-purple-primary">Transformation Journey</h4>
// //                       <div className="space-y-3">
// //                         {skill.transformationSteps.map((step, stepIndex) => (
// //                           <div key={`journey-${index}-${stepIndex}`} className="flex items-center">
// //                             <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 text-white ${
// //                               stepIndex === 0 
// //                                 ? 'bg-gray-400' 
// //                                 : stepIndex === skill.transformationSteps.length - 1 
// //                                   ? 'bg-purple-primary' 
// //                                   : 'bg-blue-primary'
// //                             }`}>
// //                               {stepIndex + 1}
// //                             </div>
// //                             <div>{step}</div>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     </div>

// //                     <div className="mt-4 flex justify-between items-center">
// //                       <div>
// //                         <p className="text-sm text-gray-500">Monthly Income</p>
// //                         <div className="flex items-baseline space-x-2">
// //                           <span className="text-gray-400 line-through">{skill.income.local}</span>
// //                           <span className="text-xl font-bold text-purple-primary">{skill.income.global}</span>
// //                         </div>
// //                       </div>
// //                       <Button
// //                         variant="gradient"
// //                         size="sm"
// //                         rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
// //                       >
// //                         View Examples
// //                       </Button>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </motion.div>
// //           ))}
// //         </div>

// //         <motion.div
// //           initial={{ y: 20, opacity: 0 }}
// //           whileInView={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.5, delay: 0.3 }}
// //           viewport={{ once: true, margin: "-100px" }}
// //           className="mt-12 bg-gradient-to-r from-purple-primary/10 to-blue-primary/10 rounded-2xl p-8"
// //         >
// //           <div className="flex flex-col md:flex-row items-center justify-between">
// //             <div>
// //               <h3 className="text-2xl font-bold mb-2 font-display">Your skill not listed?</h3>
// //               <p className="text-gray-600">We support 250+ skills. If you can do it, someone needs it.</p>
// //             </div>
// //             <Button
// //               variant="gradient"
// //               size="base"
// //               className="mt-6 md:mt-0"
// //               rightIcon={<ChevronRight className="w-4 h-4" />}
// //             >
// //               Explore All Skills
// //             </Button>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default SkillsTransformationShowcase;


// "use client";

// import React, { useState, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { ArrowRight, ChevronRight, TrendingUp } from "lucide-react";
// import Button from "../button/button";

// const SkillsTransformationShowcase = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
//   const skills = [
//     {
//       local: "Tailor",
//       global: "Fashion Designer",
//       emoji: "👗",
//       description: "Traditional sewing and alterations transform into custom design for global brands",
//       income: { local: "₦65,000", global: "₦450,000" },
//       increase: "693%"
//     },
//     {
//       local: "Carpenter",
//       global: "Furniture Designer",
//       emoji: "🪑",
//       description: "Local furniture repair becomes international bespoke design consultancy",
//       income: { local: "₦80,000", global: "₦520,000" },
//       increase: "650%"
//     },
//     {
//       local: "Teacher",
//       global: "Education Consultant",
//       emoji: "📚",
//       description: "Classroom teaching evolves into curriculum development for global institutions",
//       income: { local: "₦90,000", global: "₦650,000" },
//       increase: "722%"
//     },
//     {
//       local: "Chef",
//       global: "Culinary Instructor",
//       emoji: "🍲",
//       description: "Local cooking transforms into teaching culinary arts to international students",
//       income: { local: "₦75,000", global: "₦480,000" },
//       increase: "640%"
//     },
//     {
//       local: "Electrician",
//       global: "Smart Home Expert",
//       emoji: "⚡",
//       description: "Basic electrical work becomes remote smart home system design and consultation",
//       income: { local: "₦85,000", global: "₦580,000" },
//       increase: "682%"
//     },
//     {
//       local: "Artist",
//       global: "Digital Creator",
//       emoji: "🎨",
//       description: "Traditional artwork evolves into digital content creation for global brands",
//       income: { local: "₦70,000", global: "₦420,000" },
//       increase: "600%"
//     }
//   ];

//   return (
//     <section 
//       id="skills" 
//       ref={sectionRef}
//       className="py-24 bg-gradient-to-r from-gray-50 to-white overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-base text-purple-primary font-semibold tracking-wide uppercase mb-2">Transformation</h2>
//           <h3 className="text-4xl md:text-5xl font-bold mb-4 font-display">From Local to Global</h3>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             See how traditional skills transform into international services through Joblad.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <motion.div 
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.5, delay: 0.1 * index }}
//               className="relative group rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-[380px] border border-gray-100"
//             >
//               {/* Top gradient bar */}
//               <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-primary to-blue-primary"></div>
              
//               {/* Income increase pill */}
//               <div className="absolute top-3 right-3 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-full flex items-center">
//                 <TrendingUp className="w-3 h-3 mr-1" />
//                 +{skill.increase}
//               </div>
              
//               <div className="p-8">
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gray-100 group-hover:scale-110 transition-transform duration-500">
//                     {skill.emoji}
//                   </div>
//                   <motion.div
//                     animate={isInView ? { 
//                       x: [0, 10, 0],
//                       transition: { 
//                         duration: 2, 
//                         repeat: Infinity, 
//                         repeatType: "loop",
//                         ease: "easeInOut",
//                         repeatDelay: 1
//                       }
//                     } : {}}
//                     className="group-hover:text-purple-primary transition-colors"
//                   >
//                     <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-purple-primary transition-colors" />
//                   </motion.div>
//                   <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gray-100 group-hover:scale-110 transition-transform duration-500">
//                     {skill.emoji}
//                   </div>
//                 </div>
                
//                 <div className="flex justify-between items-center">
//                   <div className="text-center flex-1">
//                     <p className="text-sm text-gray-500 mb-1">Local Skill</p>
//                     <h4 className="text-lg font-semibold">{skill.local}</h4>
//                     <p className="text-sm text-gray-500 mt-1">{skill.income.local}/mo</p>
//                   </div>
                  
//                   <div className="h-12 border-r border-gray-200 mx-4"></div>
                  
//                   <div className="text-center flex-1">
//                     <p className="text-sm text-gray-500 mb-1">Global Service</p>
//                     <h4 className="text-lg font-semibold text-purple-primary">{skill.global}</h4>
//                     <p className="text-sm text-purple-primary font-medium mt-1">{skill.income.global}/mo</p>
//                   </div>
//                 </div>
                
//                 <div className="mt-6">
//                   <div className="bg-gray-100 rounded-full h-1.5 overflow-hidden">
//                     <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-purple-primary to-blue-primary transition-all duration-1000 ease-out"></div>
//                   </div>
//                   <div className="flex justify-between mt-2 text-sm text-gray-500">
//                     <span>Local Market</span>
//                     <span>Global Opportunities</span>
//                   </div>
//                 </div>
                
//                 <p className="mt-6 text-gray-600 text-sm">{skill.description}</p>
                
//                 <div className="absolute bottom-4 right-4">
//                   <div className="flex items-center text-purple-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
//                     Learn more <ChevronRight className="ml-1 w-4 h-4" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-16 bg-gradient-to-r from-purple-primary/10 to-blue-primary/10 rounded-2xl p-8">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div>
//               <h3 className="text-2xl font-bold mb-2 font-display">Your skill not listed?</h3>
//               <p className="text-gray-600">We support 250+ skills. If you can do it, someone needs it.</p>
//             </div>
//             <Button 
//               variant="gradient"
//               size="base"
//               rightIcon={<ChevronRight className="w-4 h-4" />}
//               className="mt-6 md:mt-0"
//             >
//               Explore All Skills
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsTransformationShowcase;



"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, ChevronRight, TrendingUp, ExternalLink, Eye } from "lucide-react";
import Button from "../button/button";

const SkillsTransformationShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [viewMode, setViewMode] = useState("standard"); // "standard" or "detailed"
  const [activeSkill, setActiveSkill] = useState(null);
  
  // Combined skills data for both visualizations
  const skills = [
    {
      local: "Tailor",
      global: "Fashion Designer",
      emoji: "👗",
      description: "Traditional sewing and alterations transform into custom design for global brands",
      income: { local: "₦65,000", global: "₦450,000" },
      increase: "693%",
      bgGradient: "from-purple-primary to-purple-secondary",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=60",
      transformationSteps: ["Local repairs", "Custom outfits", "Brand partnerships", "Global consulting"]
    },
    {
      local: "Carpenter",
      global: "Furniture Designer",
      emoji: "🪑",
      description: "Local furniture repair becomes international bespoke design consultancy",
      income: { local: "₦80,000", global: "₦520,000" },
      increase: "650%",
      bgGradient: "from-blue-primary to-purple-secondary",
      image: "https://images.unsplash.com/photo-1611269072029-24fabd8c0b1f?w=800&auto=format&fit=crop&q=60",
      transformationSteps: ["Basic repairs", "Custom furniture", "Design consultations", "International commissions"]
    },
    {
      local: "Teacher",
      global: "Education Consultant",
      emoji: "📚",
      description: "Classroom teaching evolves into curriculum development for global institutions",
      income: { local: "₦90,000", global: "₦650,000" },
      increase: "722%",
      bgGradient: "from-purple-primary to-blue-primary",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&auto=format&fit=crop&q=60",
      transformationSteps: ["Local tutoring", "Online courses", "Curriculum development", "Global education programs"]
    },
    {
      local: "Chef",
      global: "Culinary Instructor",
      emoji: "🍲",
      description: "Local cooking transforms into teaching culinary arts to international students",
      income: { local: "₦75,000", global: "₦480,000" },
      increase: "640%",
      bgGradient: "from-purple-secondary to-blue-primary",
      image: "https://images.unsplash.com/photo-1654922207993-2952fec328ae?w=800&auto=format&fit=crop&q=60",
      transformationSteps: ["Local cooking", "Recipe development", "Cooking classes", "International workshops"]
    },
    {
      local: "Electrician",
      global: "Smart Home Expert",
      emoji: "⚡",
      description: "Basic electrical work becomes remote smart home system design and consultation",
      income: { local: "₦85,000", global: "₦580,000" },
      increase: "682%",
      bgGradient: "from-blue-primary to-blue-200",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=60",
      transformationSteps: ["Basic repairs", "Home installations", "Smart tech integration", "Remote consulting"]
    },
    {
      local: "Artist",
      global: "Digital Creator",
      emoji: "🎨",
      description: "Traditional artwork evolves into digital content creation for global brands",
      income: { local: "₦70,000", global: "₦420,000" },
      increase: "600%",
      bgGradient: "from-purple-primary/90 to-purple-primary/60",
      image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&auto=format&fit=crop&q=60",
      transformationSteps: ["Local exhibitions", "Digital artwork", "Brand collaborations", "Global commissions"]
    }
  ];

  // Toggle view mode
  const toggleViewMode = () => {
    setViewMode(viewMode === "standard" ? "detailed" : "standard");
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-r from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-base text-purple-primary font-semibold tracking-wide uppercase mb-2">Transformation</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 font-display">From Local to Global</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how traditional skills transform into international services through Joblad.
          </p>
        </motion.div>
        
        {/* View Mode Toggle */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <button 
              onClick={toggleViewMode}
              className="inline-flex items-center bg-white px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm hover:shadow transition-all"
            >
              <Eye className="w-4 h-4 mr-2 text-purple-primary" />
              {viewMode === "standard" ? "See Interactive Visualization" : "Return to Standard View"}
            </button>
          </motion.div>
        </div>

        {/* Standard View (Version 3) */}
        <AnimatePresence mode="wait">
          {viewMode === "standard" && (
            <motion.div
              key="standard-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative group rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-[380px] border border-gray-100"
                >
                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-primary to-blue-primary"></div>
                  
                  {/* Income increase pill */}
                  <div className="absolute top-3 right-3 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-full flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +{skill.increase}
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gray-100 group-hover:scale-110 transition-transform duration-500">
                        {skill.emoji}
                      </div>
                      <motion.div
                        animate={{ 
                          x: [0, 10, 0],
                          transition: { 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatType: "loop",
                            ease: "easeInOut",
                            repeatDelay: 1
                          }
                        }}
                        className="group-hover:text-purple-primary transition-colors"
                      >
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-purple-primary transition-colors" />
                      </motion.div>
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gray-100 group-hover:scale-110 transition-transform duration-500">
                        {skill.emoji}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-center flex-1">
                        <p className="text-sm text-gray-500 mb-1">Local Skill</p>
                        <h4 className="text-lg font-semibold">{skill.local}</h4>
                        <p className="text-sm text-gray-500 mt-1">{skill.income.local}/mo</p>
                      </div>
                      
                      <div className="h-12 border-r border-gray-200 mx-4"></div>
                      
                      <div className="text-center flex-1">
                        <p className="text-sm text-gray-500 mb-1">Global Service</p>
                        <h4 className="text-lg font-semibold text-purple-primary">{skill.global}</h4>
                        <p className="text-sm text-purple-primary font-medium mt-1">{skill.income.global}/mo</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <div className="bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-purple-primary to-blue-primary transition-all duration-1000 ease-out"></div>
                      </div>
                      <div className="flex justify-between mt-2 text-sm text-gray-500">
                        <span>Local Market</span>
                        <span>Global Opportunities</span>
                      </div>
                    </div>
                    
                    <p className="mt-6 text-gray-600 text-sm">{skill.description}</p>
                    
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center text-purple-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        Learn more <ChevronRight className="ml-1 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Detailed View (Version 2) */}
          {viewMode === "detailed" && (
            <motion.div
              key="detailed-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={`detailed-${index}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm h-[400px]"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  {/* Top Gradient Section */}
                  <div className={`h-28 bg-gradient-to-r ${skill.bgGradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-30">
                      {skill.image && (
                        <img
                          src={skill.image}
                          alt={skill.global}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
                    <div className="absolute top-4 left-4 text-white text-3xl">{skill.emoji}</div>
                  </div>

                  <div className="p-6 relative z-10 -mt-10">
                    {/* Transformation Arrow */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <motion.div
                          animate={{
                            x: activeSkill === index ? [0, 10, 0] : 0,
                            transition: { duration: 1.5, repeat: activeSkill === index ? Infinity : 0, repeatType: "loop" }
                          }}
                        >
                          <ArrowRight className="w-5 h-5 text-purple-primary" />
                        </motion.div>
                      </div>
                    </div>

                    {/* From Local to Global */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-center flex-1">
                        <p className="text-sm text-gray-500 mb-1">Local Skill</p>
                        <h4 className="text-lg font-semibold">{skill.local}</h4>
                        <p className="text-sm text-gray-500 mt-1">{skill.income.local}/mo</p>
                      </div>

                      <div className="h-12 border-r border-gray-200 mx-4"></div>

                      <div className="text-center flex-1">
                        <p className="text-sm text-gray-500 mb-1">Global Service</p>
                        <h4 className="text-lg font-semibold text-purple-primary">{skill.global}</h4>
                        <p className="text-sm text-purple-primary font-medium mt-1">{skill.income.global}/mo</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-2 mb-4">
                      <div className="bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: activeSkill === index ? "100%" : "25%" }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-purple-primary to-blue-primary"
                        ></motion.div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm">{skill.description}</p>

                    {/* Learn More Text */}
                    <div className="absolute bottom-4 right-4 flex items-center text-sm text-purple-primary font-medium">
                      Hover to explore <ChevronRight className="w-4 h-4 ml-1" />
                    </div>

                    {/* Hover Overlay */}
                    <AnimatePresence>
                      {activeSkill === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-white/95 p-6 flex flex-col z-20"
                          style={{ top: "-70px", bottom: "-30px" }}
                        >
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-xl">{skill.local} → {skill.global}</h3>
                            <div className="text-3xl">{skill.emoji}</div>
                          </div>

                          <p className="text-gray-600 mb-6">{skill.description}</p>

                          <div className="flex-grow">
                            <h4 className="font-semibold mb-3 text-purple-primary">Transformation Journey</h4>
                            <div className="space-y-3">
                              {skill.transformationSteps.map((step, stepIndex) => (
                                <div key={`journey-${index}-${stepIndex}`} className="flex items-center">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 text-white ${
                                    stepIndex === 0 
                                      ? 'bg-gray-400' 
                                      : stepIndex === skill.transformationSteps.length - 1 
                                        ? 'bg-purple-primary' 
                                        : 'bg-blue-primary'
                                  }`}>
                                    {stepIndex + 1}
                                  </div>
                                  <div>{step}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mt-4 flex justify-between items-center">
                            <div>
                              <p className="text-sm text-gray-500">Monthly Income</p>
                              <div className="flex items-baseline space-x-2">
                                <span className="text-gray-400 line-through">{skill.income.local}</span>
                                <span className="text-xl font-bold text-purple-primary">{skill.income.global}</span>
                              </div>
                            </div>
                            <Button
                              variant="gradient"
                              size="sm"
                              rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                            >
                              View Examples
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-purple-primary/10 to-blue-primary/10 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2 font-display">Your skill not listed?</h3>
              <p className="text-gray-600">We support 250+ skills. If you can do it, someone needs it.</p>
            </div>
            <Button 
              variant="gradient"
              size="base"
              rightIcon={<ChevronRight className="w-4 h-4" />}
              className="mt-6 md:mt-0"
            >
              Explore All Skills
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsTransformationShowcase;