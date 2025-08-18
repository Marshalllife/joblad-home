import "./globals.css";
import { inter, axiforma, poppins } from "./fonts";

export const metadata = {
  title: "Joblad — Local Skills, Global Reach",
  Description:
    "Digitalize your everyday skills and connect to global opportunities. From local expertise to worldwide income.",
  metadataBase: new URL("https://joblad.com"),

  // Search/SEO
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Open Graph
  openGraph: {
    title: "Joblad — Local Skills, Global Reach",
    Description:
      "Digitalize your everyday skills and connect to global opportunities. From local expertise to worldwide income.",
    url: "https://joblad.com",
    siteName: "Joblad",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Joblad — Local Skills, Global Reach",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Joblad — Local Skills, Global Reach",
    Description:
      "Digitalize your everyday skills and connect to global opportunities. From local expertise to worldwide income.",
    images: ["/og.jpg"],
    creator: "@joblad",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${axiforma.variable} ${poppins.variable} font-sans`}
    >
      <body>{children}</body>
    </html>
  );
}
