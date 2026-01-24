'use client';

import { useState, useEffect } from 'react';
import { ContactData } from '@/types';

interface ContactFormProps {
  data: ContactData;
}

export default function ContactForm({ data }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot field
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [obfuscatedEmail, setObfuscatedEmail] = useState('');

  // Email obfuscation - assemble email on client side only
  useEffect(() => {
    setObfuscatedEmail(['e.krystal', '@gmail.com'].join(''));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Check honeypot - if filled, it's a bot
    if (formData.website) {
      console.log('Bot detected via honeypot');
      setStatus('idle');
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      return;
    }

    // For now, simulate form submission
    // In production, you would send this to an API route or email service
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {data.form.fields.name.label}
          {data.form.fields.name.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={data.form.fields.name.placeholder}
          required={data.form.fields.name.required}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {data.form.fields.email.label}
          {data.form.fields.email.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={data.form.fields.email.placeholder}
          required={data.form.fields.email.required}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {data.form.fields.subject.label}
          {data.form.fields.subject.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder={data.form.fields.subject.placeholder}
          required={data.form.fields.subject.required}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {data.form.fields.message.label}
          {data.form.fields.message.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={data.form.fields.message.placeholder}
          required={data.form.fields.message.required}
          rows={data.form.fields.message.rows || 5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
        />
      </div>

      {/* Honeypot Field - Hidden from humans */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Submit Button */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn btn-primary w-full sm:w-auto"
        >
          {status === 'loading' ? 'Sending...' : data.form.submit.label}
        </button>
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200">
          {data.form.submit.successMessage}
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200">
          {data.form.submit.errorMessage}
        </div>
      )}

      {/* Email Fallback */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {data.emailFallback.label}
        </p>
        {obfuscatedEmail && (
          <a
            href={`mailto:${obfuscatedEmail}`}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
          >
            {obfuscatedEmail}
          </a>
        )}
      </div>
    </form>
  );
}
