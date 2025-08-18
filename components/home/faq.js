"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, HelpCircle, Search, MessageCircle, ExternalLink } from "lucide-react";
import Button from "../button/button";

const FAQSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState({});
  
  // FAQ categories
  const categories = [
    { id: "general", name: "General" },
    { id: "account", name: "Account & Profile" },
    { id: "payments", name: "Payments & Earnings" },
    { id: "providers", name: "For Skill Providers" },
    { id: "seekers", name: "For Seekers" },
  ];
  
  // FAQ items
  const faqItems = [
    {
      id: "what-is-joblad",
      category: "general",
      question: "What is Joblad and how does it work?",
      answer: "Joblad is a platform that connects skilled individuals in Africa with global opportunities. It works by allowing you to create a profile showcasing your skills, which clients worldwide can discover and hire you for projects. We handle payments securely and provide tools to make remote collaboration easy."
    },
    {
      id: "why-joblad",
      category: "general",
      question: "How is Joblad different from other freelance platforms?",
      answer: "Joblad is specifically designed for the African context with features like mobile-friendly interfaces, multiple payment options including mobile money, support for local languages, and specialized categories for local skills that can be monetized globally. We also provide support for those new to digital work."
    },
    {
      id: "who-can-use",
      category: "general",
      question: "Who can use Joblad?",
      answer: "Anyone with marketable skills can use Joblad, whether you're a tailor, teacher, programmer, artist, or have any expertise that can be offered as a service. We welcome beginners to experts across all skill levels."
    },
    {
      id: "signup-requirements",
      category: "account",
      question: "What do I need to sign up?",
      answer: "To create an account, you'll need a valid phone number, email address, and basic information about your skills. For verification purposes, you may need to provide identification documents later, especially to withdraw earnings."
    },
    {
      id: "profile-setup",
      category: "account",
      question: "How do I set up my profile effectively?",
      answer: "To create an effective profile, include clear photos of your work, a detailed description of your skills and experience, your rates, and availability. Adding a professional profile picture and keeping your portfolio updated with recent work will help you stand out."
    },
    {
      id: "verification",
      category: "account",
      question: "How does verification work?",
      answer: "Verification happens in stages. Basic verification requires confirming your email and phone number. Full verification requires valid ID documents and may include skill verification for certain categories. Verified profiles receive a trust badge that helps them attract more clients."
    },
    {
      id: "payment-methods",
      category: "payments",
      question: "What payment methods can I use?",
      answer: "Joblad supports multiple payment methods including bank transfers, mobile money services (like M-Pesa), PayPal, and cryptocurrencies. You can choose which payment method works best for you in your account settings."
    },
    {
      id: "withdrawal-time",
      category: "payments",
      question: "How quickly do I get paid?",
      answer: "Payments are released to your account within 24 hours after a client approves your completed work. Most withdrawals process within 1-2 hours to local payment methods, though international transfers may take 1-3 business days."
    },
    {
      id: "payment-protection",
      category: "payments",
      question: "How does Joblad protect my payments?",
      answer: "All payments are held in secure escrow until work is completed and approved. This protects both providers (ensuring they get paid for completed work) and clients (ensuring they receive the services they've paid for)."
    },
    {
      id: "fees",
      category: "payments",
      question: "What fees does Joblad charge?",
      answer: "Joblad charges a 5% commission for new providers, which decreases to 3% after you earn ₦100,000 and further reduces to 2% after you earn ₦1,000,000. There are no hidden fees or charges for creating an account or bidding on projects."
    },
    {
      id: "find-work",
      category: "providers",
      question: "How do I find work on Joblad?",
      answer: "You can find work by creating a compelling profile that appears in search results, browsing the jobs board for relevant opportunities, or responding to client invitations. Setting competitive rates and showcasing your best work increases your chances of being hired."
    },
    {
      id: "skill-improvement",
      category: "providers",
      question: "How can I improve my skills to earn more?",
      answer: "Joblad offers free skill enhancement courses for members. You can also build your reputation by starting with smaller projects, collecting positive reviews, and gradually increasing your rates as you gain experience and a strong portfolio."
    },
    {
      id: "client-communication",
      category: "providers",
      question: "How do I communicate with clients effectively?",
      answer: "Joblad provides an in-app messaging system for clear communication. Respond promptly, ask clarifying questions, set clear expectations about deliverables and timelines, and maintain professional communication throughout the project."
    },
    {
      id: "find-talent",
      category: "seekers",
      question: "How do I find quality talent on Joblad?",
      answer: "You can search for providers using filters for skills, experience level, ratings, and location. Review their portfolios, check their ratings and reviews from previous clients, and conduct a brief interview before hiring. Our matching algorithm also recommends suitable providers for your specific needs."
    },
    {
      id: "post-job",
      category: "seekers",
      question: "How do I post a job or project?",
      answer: "Click on 'Post a Project' from your dashboard, then provide details about your requirements, timeline, and budget. You can choose to make it visible to all providers or invite specific ones. The more detailed your description, the better matches you'll receive."
    },
    {
      id: "payment-security",
      category: "seekers",
      question: "Is it safe to pay providers through Joblad?",
      answer: "Yes, all payments are processed through our secure system and held in escrow until you approve the completed work. This ensures you only pay for work that meets your requirements. We also offer dispute resolution if any issues arise."
    }
  ];
  
  // Filter FAQs based on active category and search query
  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Toggle FAQ item expansion
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value !== "") {
      setActiveCategory("all"); // Show all categories when searching
    }
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setActiveCategory("general");
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <HelpCircle className="w-12 h-12 text-purple-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Frequently Asked
            <span className="text-purple-primary"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Joblad's platform and services.
          </p>
        </motion.div>
        
        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search questions..."
              className="w-full pl-12 pr-10 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-purple-primary transition-colors"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>
        
        {/* Category Tabs - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex justify-center mb-8 space-x-2"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setSearchQuery("");
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-purple-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Category Dropdown - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:hidden mb-8"
        >
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-purple-primary"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </motion.div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 5) + 0.3 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{item.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        expandedItems[item.id] ? "transform rotate-180" : ""
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedItems[item.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <p className="text-gray-500 mb-4">No questions found matching "{searchQuery}"</p>
              <button
                onClick={clearSearch}
                className="text-purple-primary font-medium hover:underline"
              >
                Clear search and show all questions
              </button>
            </motion.div>
          )}
        </div>
        
        {/* Still Have Questions Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl shadow-sm p-8 border border-gray-100 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4 font-display">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you with any other questions you may have.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="base"
              leftIcon={<MessageCircle className="w-5 h-5" />}
            >
              Chat with Support
            </Button>
            
            <Button
              variant="outline"
              size="base"
              leftIcon={<ExternalLink className="w-5 h-5" />}
            >
              Visit Help Center
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;