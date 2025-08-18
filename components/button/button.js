// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const Button = ({
//   children,
//   href,
//   variant = "primary",
//   size = "md",
//   className = "",
//   leftIcon,
//   rightIcon,
//   onClick,
//   fullWidth = false,
//   disabled = false,
// }) => {
//   // Base styles with proper spacing and alignment
//   const baseStyles = "font-medium transition-all duration-300 inline-flex items-center justify-center";
  
//   // Variant styles - more comprehensive with active/disabled states
//   const variantStyles = {
//     primary: `bg-purple-primary hover:bg-purple-700 active:bg-purple-800 text-white 
//               ${disabled ? "opacity-60 cursor-not-allowed hover:bg-purple-primary" : ""}`,
    
//     secondary: `bg-blue-primary hover:bg-blue-700 active:bg-blue-800 text-white 
//                 ${disabled ? "opacity-60 cursor-not-allowed hover:bg-blue-primary" : ""}`,
    
//     gradient: `bg-gradient-secondary hover:bg-gradient-to-r from-blue-primary to-purple-primary text-white 
//                ${disabled ? "opacity-60 cursor-not-allowed" : ""}`,
    
//     outline: `border-2 border-gray-200 text-gray-700 
//               ${disabled 
//                 ? "opacity-60 cursor-not-allowed" 
//                 : "hover:border-purple-primary hover:text-purple-primary"}`,
    
//     white: `bg-white text-purple-primary shadow-sm 
//             ${disabled ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-100"}`,
//   };
  
//   // Size styles with appropriate spacing for icons
//   const sizeStyles = {
//     xs: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
//     sm: "text-sm px-4 py-2 rounded-lg gap-2",
//     md: "px-5 py-2.5 rounded-xl gap-2",
//     lg: "text-lg px-8 py-4 rounded-xl font-semibold gap-2.5",
//   };
  
//   // Icon size based on button size
//   const getIconSize = (size) => {
//     switch (size) {
//       case "xs": return "w-3 h-3";
//       case "sm": return "w-4 h-4";
//       case "md": return "w-5 h-5";
//       case "lg": return "w-5 h-5";
//       default: return "w-5 h-5";
//     }
//   };
  
//   // Combine classes with proper spacing
//   const buttonClasses = `
//     ${baseStyles}
//     ${variantStyles[variant]}
//     ${sizeStyles[size]}
//     ${fullWidth ? "w-full" : ""}
//     ${className}
//   `;
  
//   // Motion props with condition for disabled state
//   const motionProps = disabled ? {} : {
//     whileHover: { scale: 1.03 },
//     whileTap: { scale: 0.97 },
//     transition: { type: "spring", stiffness: 400, damping: 17 }
//   };
  
//   // Button content with proper icon handling
//   const content = (
//     <>
//       {leftIcon && (
//         <span className={`inline-flex ${getIconSize(size)} ${variant === 'outline' && 'group-hover:text-purple-primary'}`}>
//           {leftIcon}
//         </span>
//       )}
//       <span>{children}</span>
//       {rightIcon && (
//         <span className={`inline-flex ${getIconSize(size)} ${variant === 'outline' && 'group-hover:text-purple-primary'} group-hover:translate-x-0.5 transition-transform`}>
//           {rightIcon}
//         </span>
//       )}
//     </>
//   );
  
//   // Render as link or button with consistent motion handling
//   if (href && !disabled) {
//     return (
//       <motion.a
//         href={href}
//         className={`${buttonClasses} group`}
//         {...motionProps}
//         onClick={onClick}
//       >
//         {content}
//       </motion.a>
//     );
//   }
  
//   return (
//     <motion.button 
//       onClick={onClick} 
//       className={`${buttonClasses} group`} 
//       {...motionProps}
//       disabled={disabled}
//     >
//       {content}
//     </motion.button>
//   );
// };

// export default Button;


"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Button = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  leftIcon,
  rightIcon,
  onClick,
  fullWidth = false,
  disabled = false,
}) => {
  // Base styles
  const baseStyles = "font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  // Variant styles
  const variantStyles = {
    primary: `bg-purple-primary hover:bg-purple-700 active:bg-purple-800 text-white 
              ${disabled ? "opacity-60 cursor-not-allowed hover:bg-purple-primary" : ""}`,
    
    secondary: `bg-blue-primary hover:bg-blue-700 active:bg-blue-800 text-white 
                ${disabled ? "opacity-60 cursor-not-allowed hover:bg-blue-primary" : ""}`,
    
    gradient: `bg-gradient-secondary hover:bg-gradient-to-r from-blue-primary to-purple-primary text-white 
               ${disabled ? "opacity-60 cursor-not-allowed" : ""}`,
    
    outline: `border-2 border-gray-200 text-gray-700 
              ${disabled 
                ? "opacity-60 cursor-not-allowed" 
                : "hover:border-purple-primary hover:text-purple-primary"}`,
    
    white: `bg-white text-purple-primary shadow-sm 
            ${disabled ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-100"}`,
  };
  
  // Refined size styles with more options and subtler differences
  const sizeStyles = {
    xs: "text-xs px-2.5 py-1 rounded-lg gap-1",
    sm: "text-sm px-3.5 py-1.5 rounded-lg gap-1.5",
    md: "text-base px-5 py-2 rounded-xl gap-2",
    base: "text-base px-6 py-2.5 rounded-xl gap-2",
    lg: "text-lg px-6 py-3 rounded-xl gap-2",
    xl: "text-lg px-8 py-4 rounded-xl font-semibold gap-2.5",
  };
  
  // Icon size based on button size
  const getIconSize = (size) => {
    switch (size) {
      case "xs": return "w-3 h-3";
      case "sm": return "w-3.5 h-3.5";
      case "md": return "w-4 h-4";
      case "base": return "w-4 h-4";
      case "lg": return "w-5 h-5";
      case "xl": return "w-5 h-5";
      default: return "w-4 h-4";
    }
  };
  
  // Combine classes
  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;
  
  // Motion props - more subtle effects
  const motionProps = disabled ? {} : {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };
  
  // Button content
  const content = (
    <>
      {leftIcon && (
        <span className={`inline-flex ${getIconSize(size)}`}>
          {leftIcon}
        </span>
      )}
      <span>{children}</span>
      {rightIcon && (
        <span className={`inline-flex ${getIconSize(size)} group-hover:translate-x-0.5 transition-transform`}>
          {rightIcon}
        </span>
      )}
    </>
  );
  
  // Render as link or button
  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        className={`${buttonClasses} group`}
        {...motionProps}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }
  
  return (
    <motion.button 
      onClick={onClick} 
      className={`${buttonClasses} group`} 
      {...motionProps}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
};

export default Button;