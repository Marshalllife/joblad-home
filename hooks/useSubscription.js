import { useState } from "react";
import axios from "axios";

/**
 * Custom hook for handling email subscriptions and requests across mydappr ecosystem
 * @param {Object} options - Configuration options
 * @param {string} options.category - Subscription category (newsletter, product-updates, etc.)
 * @param {string} options.project - Project identifier (mydappr, authvoid, toolsdom, joblad)
 * @param {string} options.source - Source of subscription (website, app, etc.)
 * @param {string} options.medium - Medium/location of subscription form (footer, homepage, etc.)
 * @param {string} options.apiKey - API key for project authentication (not needed for mydappr domain)
 * @param {number} options.successDuration - How long to show success state in ms (default 5000ms)
 * @returns {Object} Subscription states and handlers
 */
export function useSubscription(options = {}) {
  const {
    category = "newsletter",
    project = "mydappr",
    source = "website",
    medium = "general",
    apiKey = "",
    successDuration = 600000000,
  } = options;

  // State management
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [error, setError] = useState("");
  const [lastSubmittedEmail, setLastSubmittedEmail] = useState("");
  const [additionalData, setAdditionalData] = useState({});

  /**
   * Reset all states to default
   */
  const resetStates = () => {
    setEmail("");
    setName("");
    setCompany("");
    setIsSubscribing(false);
    setEmailMessage("");
    // setIsSubscribed(false);
    setError("");
    setAdditionalData({});
  };

  /**
   * Set additional data for the request
   * @param {Object} data - Additional data to include
   */
  const setData = (data) => {
    setAdditionalData((prev) => ({ ...prev, ...data }));
  };

  /**
   * Make API request with proper headers and data
   * @param {Object} data - Request data
   * @returns {Promise<Object>} API response
   */
  const makeRequest = async (data) => {
    const headers = {};

    const isMydapprDomain =
      typeof window !== "undefined" &&
      window.location.hostname.includes("mydappr.io");

    if (!isMydapprDomain) {
      if (apiKey) {
        headers["x-api-key"] = apiKey;
      }

      if (project) {
        headers["x-project"] = project;
      }
    }

    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "https://mydappr.io/api/email"
        : "http://localhost:3000/api/email";

    return axios.post(
      apiUrl,
      { ...data, project },
      {
        headers,
        withCredentials: true,
      }
    );
  };

  /**
   * Handle email subscription form submission
   * @param {Event} e - Form submit event (optional)
   * @returns {Promise<boolean>} Success status
   */
  const handleSubscribe = async (e) => {
    // Prevent form submission if event is provided
    if (e?.preventDefault) {
      e.preventDefault();
    }

    // Validate email
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Please enter your email address");
      return false;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address");
      return false;
    }

    // Start subscription process
    setIsSubscribing(true);
    setError("");
    setLastSubmittedEmail(trimmedEmail);

    try {
      const response = await makeRequest({
        email: trimmedEmail,
        name: name.trim(),
        type: "subscribe",
        category,
        project,
        source,
        medium,
        additionalData: {
          ...additionalData,
          company: company.trim(),
        },
      });

      // Handle response
      if (response.data.success) {
        setIsSubscribed(true);
        setEmail("");
        setEmailMessage(response?.data?.message);

        // Auto-reset success state after specified duration
        if (successDuration > 0) {
          setTimeout(() => {
            setIsSubscribed(false);
          }, successDuration);
        }

        return true;
      } else {
        // API returned an error
        setError(
          response.data.message || "Failed to subscribe. Please try again."
        );
        return false;
      }
    } catch (error) {
      // Network or unexpected error
      console.error("Subscription error:", error);

      // Provide user-friendly error message
      if (error.response?.status === 401) {
        setError("Authentication error. Please check API credentials.");
      } else if (error.response?.status === 429) {
        setError("Too many requests. Please try again later.");
      } else if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.message.includes("Network Error")) {
        setError("Network error. Please check your connection and try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }

      return false;
    } finally {
      setIsSubscribing(false);
    }
  };

  /**
   * Request a document (pitch deck, whitepaper, etc.)
   * @param {Object} options - Request options
   * @param {string} options.category - Document category
   * @param {string} options.email - Email address
   * @param {string} options.name - User name
   * @param {string} options.company - Company name
   * @returns {Promise<boolean>} Success status
   */
  const requestDocument = async ({
    requestCategory = "pitch-deck",
    requestEmail = email,
    requestName = name,
    requestCompany = company,
    customData = {},
  } = {}) => {
    // Validate email
    const trimmedEmail = requestEmail.trim();
    if (!trimmedEmail) {
      setError("Please enter your email address");
      return false;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address");
      return false;
    }

    // Company required for pitch deck
    if (requestCategory === "pitch-deck" && !requestCompany.trim()) {
      setError("Please enter your company name");
      return false;
    }

    // Start request process
    setIsSubscribing(true);
    setError("");
    setLastSubmittedEmail(trimmedEmail);

    try {
      const response = await makeRequest({
        email: trimmedEmail,
        name: requestName.trim(),
        type: "request",
        category: requestCategory,
        project,
        source,
        medium,
        additionalData: {
          ...additionalData,
          ...customData,
          company: requestCompany.trim(),
        },
      });

      // Handle response
      if (response.data.success) {
        setIsSubscribed(true);
        setEmailMessage(response?.data?.message);

        // Auto-reset success state after specified duration
        if (successDuration > 0) {
          setTimeout(() => {
            setIsSubscribed(false);
          }, successDuration);
        }

        return true;
      } else {
        // API returned an error
        setError(
          response.data.message ||
            "Failed to process request. Please try again."
        );
        return false;
      }
    } catch (error) {
      // Network or unexpected error
      console.error("Document request error:", error);

      // Provide user-friendly error message
      if (error.response?.status === 401) {
        setError("Authentication error. Please check API credentials.");
      } else if (error.response?.status === 429) {
        setError("Too many requests. Please try again later.");
      } else if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.message.includes("Network Error")) {
        setError("Network error. Please check your connection and try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }

      return false;
    } finally {
      setIsSubscribing(false);
    }
  };

  /**
   * Request a pitch deck - convenience function
   */
  const requestPitchDeck = async (customOptions = {}) => {
    return requestDocument({
      requestCategory: "pitch-deck",
      ...customOptions,
    });
  };

  /**
   * Subscribe with a provided email (without form, programmatically)
   * @param {string} emailToSubscribe - Email to subscribe
   * @param {string} nameToUse - Name to use
   * @returns {Promise<boolean>} Success status
   */
  const subscribeWithEmail = async (emailToSubscribe, nameToUse = "") => {
    if (!emailToSubscribe) return false;

    setEmail(emailToSubscribe);
    if (nameToUse) setName(nameToUse);
    return handleSubscribe();
  };

  return {
    // State
    email,
    setEmail,
    name,
    setName,
    company,
    setCompany,
    isSubscribing,
    isSubscribed,
    error,
    emailMessage,

    // Actions
    handleSubscribe,
    subscribeWithEmail,
    requestDocument,
    requestPitchDeck,
    resetStates,
    setError,
    setData,

    // For testing/analytics
    lastSubmittedEmail,
  };
}

export default useSubscription;
