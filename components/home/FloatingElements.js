"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp, Bell, X, Check, PhoneCall, Info, DollarSign, Users, Gift } from "lucide-react";


const FloatingElements = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationIndex, setNotificationIndex] = useState(0);
  

  const mockNotifications = [
    {
      type: "success",
      message: "Someone just joined from Lagos!",
      duration: 5000,
    },
    {
      type: "info",
      message: "15 new jobs posted in the last hour",
      duration: 6000,
    },
    {
      type: "call",
      message: "Need help? Talk to a specialist",
      duration: 7000,
      action: {
        label: "Call Now",
        onClick: () => window.open("tel:+2348012345678"),
      },
    },
    {
      type: "success",
      message: "Profile verified successfully!",
      duration: 5000,
    },
    {
      type: "info",
      message: "New message from client",
      duration: 5000,
      action: {
        label: "View Messages",
        onClick: () => window.location.href = "#messages",
      },
    },
    {
      type: "success",
      message: "₦45,000 payment received",
      icon: <DollarSign className="w-5 h-5 text-green-500" />,
      duration: 6000,
    },
    {
      type: "info",
      message: "Your project is trending! 24 new views",
      icon: <Users className="w-5 h-5 text-blue-500" />,
      duration: 7000,
    },
    {
      type: "success",
      message: "Earned 5 new Joblad points!",
      icon: <Gift className="w-5 h-5 text-purple-primary" />,
      duration: 5000,
      action: {
        label: "View Rewards",
        onClick: () => window.location.href = "#rewards",
      },
    }
  ];
  
  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    const shouldShow = window.scrollY > 500;
    if (showBackToTop !== shouldShow) {
      setShowBackToTop(shouldShow);
    }
  }, [showBackToTop]);

  // Scroll listener
  useEffect(() => {
    const throttledScroll = () => {
      let ticking = false;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  // Show notifications 
  useEffect(() => {
    showNextNotification();
    const interval = setInterval(() => {
      showNextNotification();
    }, 20000); 
    
    return () => clearInterval(interval);
  }, []);
  
  // Function to show the next notification
  const showNextNotification = () => {
    if (notificationIndex >= mockNotifications.length) {
      setNotificationIndex(0);
      return;
    }
    
    const notification = {
      id: Date.now(),
      ...mockNotifications[notificationIndex]
    };
    
    setNotifications(prev => [...prev, notification]);
    setNotificationIndex(prev => prev + 1);
    
    if (notification.duration) {
      setTimeout(() => {
        removeNotification(notification.id);
      }, notification.duration);
    }
  };

  // Function to remove a notification
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // WhatsApp link
  const whatsappLink = "https://wa.me/2348132456789?text=Hello%20Joblad%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20platform.";

  return (
    <>
      {/* WhatsApp Button with hover tooltip */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Contact Joblad support via WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <div className="absolute bottom-full right-0 mb-2 w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm py-1 px-3 rounded-lg shadow-lg whitespace-nowrap">
            Chat with us
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-6 z-50 bg-purple-primary text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Notifications Area */}
      <div 
        className="fixed top-24 right-6 z-50 flex flex-col space-y-4 max-w-sm pointer-events-none"
        aria-live="polite"
      >
        <AnimatePresence>
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              notification={notification}
              onClose={() => removeNotification(notification.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

/**
 * Individual notification component
 */
const Notification = ({ notification, onClose }) => {
  const { type, message, action, icon } = notification;

  // Get icon based on type or use custom icon
  const getIcon = () => {
    if (icon) return icon;
    
    switch (type) {
      case "success":
        return <Check className="w-5 h-5 text-green-500" />;
      case "info":
        return <Info className="w-5 h-5 text-blue-500" />;
      case "call":
        return <PhoneCall className="w-5 h-5 text-purple-primary" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  // Background color based on type
  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200";
      case "info":
        return "bg-blue-50 border-blue-200";
      case "call":
        return "bg-purple-50 border-purple-200";
      default:
        return "bg-white border-gray-200";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg shadow-md p-4 ${getBgColor()} border flex items-center pointer-events-auto`}
    >
      <div className="mr-3">{getIcon()}</div>
      <div className="flex-1">
        <p className="text-gray-800 text-sm">{message}</p>
        {action && (
          <button
            onClick={action.onClick}
            className="mt-2 text-sm font-medium text-purple-primary hover:underline"
          >
            {action.label}
          </button>
        )}
      </div>
      <button
        onClick={onClose}
        className="ml-3 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-200"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default FloatingElements;