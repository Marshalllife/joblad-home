import React from "react";
import Navbar from "./navbar";
import HeroMain from "./heroMain";
import ProblemSection from "./problem";
import SkillsTransformationShowcase from "./transformation";
import HowItWorks from "./howitworks";
import SuccessStories from "./successStories";
import EarningsCalculator from "./earningsCalculator";
import FAQSection from "./faq";
import TrustAndSafety from "./trustSafty";
import PlatformFeatures from "./features";
import CTAWaitlist from "./cta";
import Footer from "./footer";
import StatsMetrics from "./stats";
import Layout from "../layout";
import Spotlight from "./spotlight";

const Main = () => {
  return (
    <>
    <Layout>
      <Navbar />
      <HeroMain />
      <ProblemSection />
      <SkillsTransformationShowcase />
      <HowItWorks />
      <SuccessStories />
      <EarningsCalculator />
      <Spotlight/>
      <TrustAndSafety />
      <PlatformFeatures />
      <StatsMetrics/>
      <FAQSection />
      <CTAWaitlist />
      <Footer /></Layout>
    </>
  );
};

export default Main;
