'use client'

import { NeuralBackground } from './components/NeuralBackground'

export default function Home() {
  const handleLoginRedirect = () => {
    const isDevelopment = process.env.NODE_ENV === 'development'
    const appUrl = isDevelopment ? 'http://localhost:3000' : 'https://neuro-twin-app.netlify.app/'
    window.location.href = appUrl
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Neural Background with animated synapses */}
      <NeuralBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Create Your Digital Twin
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your personality, knowledge, and expertise into an interactive AI-powered digital persona.
            Chat with a version of yourself that captures your unique perspective.
          </p>
          <button
            onClick={handleLoginRedirect}
            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Free
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h3>

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
                Provide information about yourself - your background, interests, values, and personality traits.
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
                Our AI analyzes your information and creates a digital persona that captures your essence and perspective.
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
                Have conversations with your digital twin and explore how it thinks, responds, and behaves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Powerful Applications
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">For Individuals</h4>
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
              <h4 className="text-2xl font-bold text-gray-900 mb-4">For Organizations</h4>
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Digital Twin?
          </h3>
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
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Connect</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
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
  )
}
