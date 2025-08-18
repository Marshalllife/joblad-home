import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";

// Inter for UI elements and body text
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Axiforma for headlines and display text
export const axiforma = localFont({
  src: [
    {
      path: "../public/fonts/Axiforma-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-axiforma",
});

// Poppins for testimonials, success stories, and special elements
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});



// Lastly i think v1  and v2 of ou landing are what i preferred than the v3  which is dark mode