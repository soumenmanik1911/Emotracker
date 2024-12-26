'use client'
import React from 'react'

export const Privacy = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen text-white p-6">
    <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg p-8">
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
        Privacy Policy
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-lg leading-relaxed">
          Welcome to Emotracker! Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <ul className="list-disc ml-6 text-lg leading-relaxed">
          <li>Personal Identification Information (Name, email address, etc.)</li>
          <li>Usage Data (e.g., your IP address, browser type, and interaction with our website)</li>
          <li>Cookies and similar technologies</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
        <p className="text-lg leading-relaxed">
          We use your information to provide and improve our services, respond to inquiries, and personalize your experience on our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p className="text-lg leading-relaxed">
          You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-lg leading-relaxed">
          If you have any questions or concerns about this Privacy Policy, feel free to contact us at soumenmanik1911@gmail.com.
        </p>
      </section>

      <footer className="mt-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Emotracker. All rights reserved.</p>
      </footer>
    </div>
  </div>
  )
}
