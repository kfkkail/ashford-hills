'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to an API endpoint
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
        />
      </div>
      {submitted && (
        <div className="bg-emerald-50 border border-emerald-400 text-emerald-700 px-4 py-3 rounded-lg">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors font-semibold shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
}

