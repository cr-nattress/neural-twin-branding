/**
 * @module NeuroTwin Marketing Homepage
 * @purpose Renders the public-facing marketing landing page for NeuroTwin product
 * @context Entry point for potential users; drives conversion via hero section and CTAs
 * @dependencies NeuralBackground component for SVG animation, Tailwind CSS for responsive layout
 * @exports Home (default export)
 *
 * @remarks
 * Layout structure (top to bottom):
 * 1. Fixed navigation bar with login button
 * 2. Hero section with headline, description, and CTA
 * 3. "How It Works" feature section (3 steps)
 * 4. "Powerful Applications" use cases (for individuals & organizations)
 * 5. Final CTA section (gradient background)
 * 6. Footer with links and information
 *
 * The NeuralBackground component renders as a fixed z-0 layer; all content uses z-10.
 * Environment-aware routing: development uses localhost, production uses Netlify URL.
 */

"use client";

import { NeuralBackground } from "./components/NeuralBackground";

/**
 * Home
 *
 * Marketing homepage component that showcases NeuroTwin features and drives user conversion.
 * Includes animated background, multi-section layout, and environment-aware CTA buttons.
 *
 * @returns React element containing full-page marketing layout with navigation, sections, and footer
 *
 * @pattern Client component (uses 'use client' for event handlers and browser environment)
 * @assumes window.location.href is available (client-side only); process.env.NODE_ENV set by Next.js build
 * @sideeffects
 * - handleLoginRedirect changes window.location on button click
 * - Reads process.env.NODE_ENV to determine redirect URL
 *
 * @example
 * // App renders at http://localhost:3000 in dev, production URL in production
 * // Clicking login button navigates to app instance based on environment
 */
export default function Home() {
  /**
   * handleLoginRedirect
   *
   * Redirects user to the NeuroTwin application based on environment.
   * Used by login and CTA buttons throughout the page.
   *
   * @sideeffects
   * - Reads process.env.NODE_ENV
   * - Changes window.location.href (full page navigation)
   *
   * @decision Environment-based URLs allow seamless dev/prod separation.
   * Alternative considered: API endpoint for dynamic URL config (rejected: adds latency and complexity).
   */
  const handleLoginRedirect = () => {
    const isDevelopment = process.env.NODE_ENV === "development";
    const appUrl = isDevelopment
      ? "http://localhost:3000"
      : "https://neuro-twin-app.netlify.app/";
    window.location.href = appUrl;
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Neural Background with animated synapses */}
      <NeuralBackground />

      {/* Content wrapper: z-10 ensures all content renders above neural background (z-0) */}
      <div className="relative z-10">
        {/* Navigation: Fixed header with gradient logo and login CTA; z-50 stays above all content */}
        <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NeuroTwin
              </h1>
            </div>
            <button
              onClick={handleLoginRedirect}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </div>
        </nav>

        {/* Hero Section: Primary conversion driver with headline, value prop, and CTA */}
        {/* Padding: pt-32 accounts for fixed nav height; centering drives focus */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline: Emotional appeal ("Create Your") + clear product name */}
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Create Your Digital Twin
            </h2>
            {/* Value prop: Explains transformation → interactive AI → personalization benefits */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your personality, knowledge, and expertise into an
              interactive AI-powered digital persona. Chat with a version of
              yourself that captures your unique perspective.
            </p>
            <button
              onClick={handleLoginRedirect}
              className="inline-block px-8 py-3 bg-blue-600 text-white text-lg rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started Free
            </button>
          </div>
        </section>

        {/* Features Section: "How It Works" - 3-step customer journey */}
        {/* Alternating bg-gray-50 to create visual section breaks; improves readability */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* Section title: "How It Works" frames the 3-step process clearly */}
            <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
              How It Works
            </h3>

            {/* 3-column grid on medium+ screens; stacks on mobile for readability */}
            <div className="grid md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📝</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Share Your Story
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Provide information about yourself - your background,
                  interests, values, and personality traits.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  AI Learns You
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Our AI analyzes your information and creates a digital persona
                  that captures your essence and perspective.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💬</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Chat & Interact
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Have conversations with your digital twin and explore how it
                  thinks, responds, and behaves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section: Dual-audience messaging (Individuals vs Organizations) */}
        {/* White background (default) provides contrast with previous gray section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section title: "Powerful Applications" emphasizes versatility across segments */}
            <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Powerful Applications
            </h3>

            {/* 2-column grid: separates Individual from Organization use cases clearly */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  For Individuals
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">✓</span>
                    <span>Explore your own thinking and perspective</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">✓</span>
                    <span>Create a personal AI mentor or coach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">✓</span>
                    <span>Share your expertise with others</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">✓</span>
                    <span>Preserve and share your knowledge</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  For Organizations
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">✓</span>
                    <span>Capture institutional knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">✓</span>
                    <span>Create expert decision-making personas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">✓</span>
                    <span>Enable knowledge transfer and training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">✓</span>
                    <span>Build AI-powered customer service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section: Final conversion opportunity before footer */}
        {/* Gradient background (blue→purple) matches brand colors and draws attention */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-3xl mx-auto text-center">
            {/* Final CTA headline: Action-oriented ("Ready to...") + clear value prop */}
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Digital Twin?
            </h3>
            {/* Supporting text: "Free" + "explore the future" lowers friction + builds excitement */}
            <p className="text-xl text-blue-100 mb-8">
              Start for free and explore the future of AI-powered personas.
            </p>
            <button
              onClick={handleLoginRedirect}
              className="inline-block px-8 py-3 bg-white text-blue-600 text-lg rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h5 className="text-white font-bold mb-4">Product</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4">Company</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4">Legal</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4">Connect</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm">
              <p>&copy; 2025 NeuroTwin. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
