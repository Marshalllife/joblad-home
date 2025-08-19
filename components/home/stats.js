"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  TrendingUp, Users, Globe, DollarSign, Star, Briefcase, 
  BarChart2, Award, Clock ,ArrowRight
} from "lucide-react";

const StatsMetrics = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [countersStarted, setCountersStarted] = useState(false);
  
  // Platform statistics
  const platformStats = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      label: "Targeted Earnings To Be Paid",
      value: "₦2.5B+",
      suffix: "",
      color: "text-purple-primary",
      detail: "Disbursed to skilled providers",
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Target Active Users In 6 months",
      value: "20K+",
      suffix: "",
      color: "text-blue-primary",
      detail: "Across Nigeria and beyond",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: "Target Projects Completion",
      value: "104",
      suffix: "K",
      color: "text-green-600",
      detail: "With 98% satisfaction rate",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Target Countries To Reach",
      value: "32",
      suffix: "",
      color: "text-amber-500",
      detail: "Spanning 5 continents",
    },
  ];
  
  // Growth metrics
  const growthMetrics = [
    {
      label: "Monthly Growth",
      value: 37,
      color: "bg-purple-primary",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      label: "Avg. Rating",
      value: 94,
      color: "bg-amber-500",
      icon: <Star className="w-4 h-4" />,
    },
    {
      label: "Repeat Clients",
      value: 82,
      color: "bg-blue-primary",
      icon: <Users className="w-4 h-4" />,
    },
    {
      label: "Payment Speed",
      value: 98,
      color: "bg-green-600",
      icon: <Clock className="w-4 h-4" />,
    },
  ];
  
  // Time-based metrics
  const timeMetrics = [
    {
      period: "Monthly",
      transactions: 32500,
      revenue: "₦380M",
      growth: "+27%",
      color: "from-purple-primary to-blue-primary",
    },
    {
      period: "Weekly",
      transactions: 7800,
      revenue: "₦95M",
      growth: "+31%",
      color: "from-blue-primary to-purple-secondary",
    },
    {
      period: "Daily",
      transactions: 1200,
      revenue: "₦14M",
      growth: "+18%",
      color: "from-purple-secondary to-blue-secondary",
    },
  ];
  
  // Counter animation effect
  useEffect(() => {
    if (isInView && !countersStarted) {
      setCountersStarted(true);
    }
  }, [isInView, countersStarted]);
  
  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section 
      id="metrics"
      ref={sectionRef}
      className="py-16 bg-off-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <BarChart2 className="w-12 h-12 text-purple-primary mx-auto mb-4" />
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Platform <span className="text-purple-primary">Metrics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real numbers that showcase our impact and growth in connecting skills with opportunities.
          </p> */}

          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
  How We'll <span className="text-purple-primary">Measure Success</span>
</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
  After launch, these are the key metrics we'll track to ensure we're fulfilling our mission.
</p>
        </motion.div>
        
        {/* Key Platform Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platformStats.map((stat, index) => (
            <motion.div
              key={`stat-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.color.replace('text-', 'bg-')}/10 flex items-center justify-center`}>
                  <div className={stat.color}>{stat.icon}</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm text-gray-500 font-medium">{stat.label}</h3>
                </div>
              </div>
              
              <div className="flex items-baseline">
                <CountUpDisplay 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  start={countersStarted}
                  className={`text-4xl font-bold ${stat.color}`}
                />
              </div>
              
              <p className="mt-2 text-sm text-gray-500">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Circular Progress Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {growthMetrics.map((metric, index) => (
            <motion.div
              key={`metric-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#f1f1f1"
                    strokeWidth="10"
                  />
                  
                  {/* Progress circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={metric.color.replace('bg-', '#').replace('purple-primary', '7040ea').replace('blue-primary', '3f9de6').replace('amber-500', 'f59e0b').replace('green-600', '16a34a')}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    strokeDashoffset="283"
                    initial={{ strokeDashoffset: 283 }}
                    animate={countersStarted ? { 
                      strokeDashoffset: 283 - (283 * metric.value / 100),
                      transition: { duration: 1.5, ease: "easeOut" }
                    } : {}}
                    style={{
                      transformOrigin: "center",
                      transform: "rotate(-90deg)",
                    }}
                  />
                  
                  {/* Percentage in the middle */}
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-3xl font-bold"
                    fill="#333"
                  >
                    {countersStarted ? `${metric.value}%` : "0%"}
                  </text>
                </svg>
                
                {/* Icon on top of the chart */}
                <div className={`absolute top-0 right-0 w-10 h-10 ${metric.color} rounded-full flex items-center justify-center text-white`}>
                  {metric.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-center">{metric.label}</h3>
            </motion.div>
          ))}
        </div>
        
        {/* Time-Based Performance Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timeMetrics.map((metric, index) => (
            <motion.div
              key={`time-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (0.1 * index) }}
              className={`rounded-2xl shadow-md overflow-hidden`}
            >
              <div className={`bg-gradient-to-r ${metric.color} p-6 text-white`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{metric.period}</h3>
                  <div className="bg-white/20 rounded-full px-2 py-1 text-sm font-medium">
                    {metric.growth}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/70 text-sm mb-1">Transactions</p>
                    <p className="text-2xl font-bold">{formatNumber(metric.transactions)}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Revenue</p>
                    <p className="text-2xl font-bold">{metric.revenue}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Updated</span>
                  <span className="font-medium">Today</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
        
        {/* "See More" Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center text-purple-primary font-medium hover:underline"
          >
            <span>View detailed platform reports</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// CountUpDisplay component for animated number counting
const CountUpDisplay = ({ value, suffix = "", start, className }) => {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (!start) return;
    
    let startValue = 0;
    let endValue = parseInt(value.replace(/[^0-9]/g, ""));
    
    // If the value contains non-numeric characters (like +, B, M, etc)
    if (isNaN(endValue)) {
      endValue = value.includes("K") ? 1000 : 
                 value.includes("M") ? 1000000 : 
                 value.includes("B") ? 1000000000 : 1;
    }
    
    // Handle special cases with + sign or text
    const isPlus = value.includes("+");
    const prefix = /^[^\d]*/.exec(value)[0]; // Get any text before the number
    
    // Animation duration based on value size
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    // Easing function for smooth animation
    const easeOutQuint = t => 1 + (--t) * t * t * t * t;
    
    let frame = 0;
    const countTo = endValue;
    
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuint(frame / totalFrames);
      const currentCount = Math.round(countTo * progress);
      
      // Format the number with commas
      const formattedValue = currentCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      
      // Construct the final display string
      let displayString = prefix + formattedValue;
      if (isPlus) displayString += "+";
      if (suffix) displayString += suffix;
      
      setDisplayValue(displayString);
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setDisplayValue(value); // Ensure we display the exact target value
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [value, suffix, start]);
  
  return <span className={className}>{displayValue}</span>;
};

export default StatsMetrics;