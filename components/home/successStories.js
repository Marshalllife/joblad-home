"use client";

const missionTextBadge = [
  " Join thousands of skilled individuals who have transformed their careers and incomes through Joblad.",
  "Join the Lads",
];

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Star,
  ChevronRight,
  ChevronLeft,
  MapPin,
  DollarSign,
  Quote,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import Button from "../button/button";
import Image from "next/image";
import AnimatedBadge from "./badge";
import CurrencyDisplay from "../public/currencyDisplay";

const SuccessStories = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeStory, setActiveStory] = useState(0);
  const [isEarningsVisible, setIsEarningsVisible] = useState(false);

  // Success stories data
  const stories = [
    {
      name: "Mama Sidi",
      location: "Lagos, Nigeria",
      skill: "Fashion Designer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
      before: {
        work: "Local tailor doing alterations",
        income: "₦65,000/month",
        reach: "Local neighborhood only",
      },
      after: {
        work: "Digital fashion designer serving global clients",
        income: "₦450,000/month",
        reach: "Clients in UK, US, and Canada",
      },
      quote:
        "Before Joblad, I was just making enough to survive. Now, I design custom ankara pieces for clients worldwide and earn more in a week than I used to in a month.",
      rating: 5,
      video: "mama-sidi-story.mp4",
    },
    {
      name: "Emeka Okafor",
      location: "Enugu, Nigeria",
      skill: "Electrician & Smart Home Expert",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60",
      before: {
        work: "Local electrical repairs",
        income: "₦85,000/month",
        reach: "5km radius from home",
      },
      after: {
        work: "Smart home consultant",
        income: "₦750,000/month",
        reach: "Clients across Africa and Middle East",
      },
      quote:
        "I went from fixing broken sockets to designing smart home systems for luxury properties in Dubai. Joblad changed everything - I can now support my family and pay for my children's education.",
      rating: 5,
      video: "emeka-story.mp4",
    },
    {
      name: "Fatima Ahmed",
      location: "Kano, Nigeria",
      skill: "Culinary Expert",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60",
      before: {
        work: "Local food vendor",
        income: "₦45,000/month",
        reach: "Local market customers",
      },
      after: {
        work: "Nigerian cuisine instructor",
        income: "₦380,000/month",
        reach: "Online Nigerian cuisine instructor",
      },
      quote:
        "I now teach people around the world how to cook traditional Nigerian dishes through video calls. My specialty jollof rice classes are always booked weeks in advance!",
      rating: 5,
      video: "fatima-story.mp4",
    },
  ];

  // Navigate through stories
  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section
      id="stories"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-purple-primary font-semibold tracking-wide uppercase mb-2">
            Success Stories
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Real People.
            <span className="text-purple-primary"> Real Results.</span>
          </h3>
          <p className="text-xl whitespace-nowrap text-gray-600 max-w-2xl mx-auto">
            Meet the people who digitized their local skills to reach broader
            opportunities.
          </p>
        </motion.div>

        {/* Mobile View - Card Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden py-4">
            <motion.div
              animate={{ x: `-${activeStory * 100}%` }}
              transition={{ type: "spring", damping: 20 }}
              className="flex"
            >
              {stories.map((story, index) => (
                <div
                  key={`mobile-story-${index}`}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                    <div className="h-48 relative">
                      <Image
                        src={story.image}
                        alt={story.name}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-xl">{story.name}</h3>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {story.location}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-purple-primary/90 text-white text-xs font-bold px-2 py-1 rounded">
                        {story.skill}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex mb-3">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>

                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-gray-200 mb-2" />
                        <p className="text-gray-600 italic text-sm">
                          {story.quote}
                        </p>
                      </div>

                      <div className="border-t border-gray-100 pt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500 uppercase mb-1">
                              Before
                            </p>
                            <p className="font-medium text-gray-600 text-sm mb-1">
                              {story.before.income}
                            </p>
                            <p className="text-xs text-gray-500">
                              {story.before.reach}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-purple-primary uppercase mb-1">
                              After
                            </p>
                            <p className="font-medium text-purple-primary text-sm mb-1">
                              {story.after.income}
                            </p>
                            <p className="text-xs text-gray-500">
                              {story.after.reach}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 pb-4">
                      <Button
                        soon
                        variant="outline"
                        size="sm"
                        fullWidth
                        leftIcon={<ExternalLink className="w-3 h-3" />}
                      >
                        Watch {story.name}'s Story
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {stories.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setActiveStory(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeStory === index ? "bg-purple-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View - Featured Story */}
        <div
          className="hidden md:block"
          onMouseEnter={() => setIsEarningsVisible(true)}
          onMouseLeave={() => setIsEarningsVisible(false)}
        >
          <div className="relative">
            {stories.map((story, index) => (
              <motion.div
                key={`desktop-story-${index}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeStory === index ? 1 : 0,
                  x:
                    activeStory === index
                      ? 0
                      : activeStory > index
                      ? -100
                      : 100,
                }}
                transition={{ duration: 0.4 }}
                className={`${activeStory === index ? "block" : "hidden"}`}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="grid md:grid-cols-2">
                    {/* Left Side - Image and Details */}
                    <div className="relative">
                      <div className="absolute inset-0">
                        <Image
                          src={story.image}
                          alt={story.name}
                          width={800}
                          height={800}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                      </div>

                      <div className="relative p-8 text-white h-full flex flex-col justify-end">
                        <div className="bg-purple-primary/90 text-white text-xs font-bold px-2 py-1 rounded inline-block mb-4">
                          {story.skill}
                        </div>
                        <h3 className="font-bold text-3xl mb-2">
                          {story.name}
                        </h3>
                        <div className="flex items-center text-sm mb-4">
                          <MapPin className="w-4 h-4 mr-1" />
                          {story.location}
                        </div>
                        <div className="flex">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-500 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Transformation Story */}
                    <div className="p-8">
                      <div className="flex items-start mb-6">
                        <Quote className="w-10 h-10 text-purple-primary/20 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 italic">{story.quote}</p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 mb-6">
                        <h4 className="font-bold text-lg mb-4">
                          The Transformation
                        </h4>
                        <div className="bg-gray-100 rounded-full h-3 overflow-hidden my-1.5">
                          <div
                            className={`h-full bg-gradient-to-r from-purple-primary to-blue-primary transition-all duration-1000 ease-out ${
                              isEarningsVisible ? "w-full" : "w-0"
                            }`}
                          ></div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mb-4">
                          <div>
                            <p className="text-sm text-gray-500 uppercase mb-2">
                              Before
                            </p>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                  <Briefcase className="w-4 h-4 text-gray-500" />
                                </div>
                                <div>
                                  <p className="font-medium">
                                    {story.before.work}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                  <DollarSign className="w-4 h-4 text-gray-500" />
                                </div>
                                <div>
                                  <div className="font-medium">
                                    {/* {story.before.income} */}
                                    <CurrencyDisplay
                                      baseAmount={parseFloat(
                                        story.before.income.replace(
                                          /[^\d.]/g,
                                          ""
                                        )
                                      )}
                                      size="sm"
                                      rotationSpeed={6000}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                  <MapPin className="w-4 h-4 text-gray-500" />
                                </div>
                                <div>
                                  <p className="font-medium">
                                    {story.before.reach}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-purple-primary uppercase mb-2">
                              After Joblad
                            </p>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-purple-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                  <Briefcase className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium">
                                    {story.after.work}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-purple-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                  <DollarSign className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <div className="font-medium text-purple-primary">
                                    {/* {story.after.income} */}
                                    <CurrencyDisplay
                                      baseAmount={parseFloat(
                                        story.after.income.replace(
                                          /[^\d.]/g,
                                          ""
                                        )
                                      )}
                                      size="sm"
                                      rotationSpeed={6000}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-purple-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                  <MapPin className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium">
                                    {story.after.reach}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button
                        soon
                        variant="primary"
                        size="base"
                        leftIcon={<ExternalLink className="w-4 h-4" />}
                      >
                        Watch {story.name}'s Full Story
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Desktop Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
              <button
                onClick={prevStory}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
              <button
                onClick={nextStory}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next story"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Desktop Thumbnail Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            {stories.map((story, index) => (
              <button
                key={`thumb-${index}`}
                onClick={() => setActiveStory(index)}
                className={`relative overflow-hidden rounded-lg transition-all ${
                  activeStory === index
                    ? "ring-2 ring-purple-primary ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <div className="w-16 h-16 relative">
                  <Image
                    src={story.image}
                    alt={story.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className=" mt-10">
          {" "}
          <AnimatedBadge
            missionText={missionTextBadge}
            variant="scrolling"
          />{" "}
          {/* or "scrolling", "floating", "rotating", "typewriter" */}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
