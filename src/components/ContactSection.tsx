import React, { useState } from 'react';
import { ABOUT_MEDIA } from '../config/media';

interface ContactSectionProps {
  prefilledPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    website: '',
    email: '',
    message: prefilledPlan ? `Hi Nabeel, I'm interested in the ${prefilledPlan} package for our year-in-review.` : '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const encode = (data: Record<string, string>) => {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
      };

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      });

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-stone-200 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Get a free sample in your brand.
          </h2>
          <p className="mt-3 text-lg text-stone-600">
            No commitment and no client data required. I'll make a custom 25-second preview using your logo, colors, and dummy metrics.
          </p>
        </div>

        {/* Quick Direct Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${ABOUT_MEDIA.email}`}
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs"
          >
            Email me
          </a>
          <a
            href={ABOUT_MEDIA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
          >
            WhatsApp
          </a>
          <div className="flex items-center text-xs text-stone-500 font-mono pl-1">
            mrnabeelmayo@gmail.com · +92 302 4055040
          </div>
        </div>

        {/* Netlify Form */}
        <div className="mt-12 bg-[#FAFAF9] border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="mt-4 text-2xl font-bold text-stone-900">
                Thank you!
              </h3>
              <p className="mt-2 text-stone-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                Your sample request has been sent. I'll review your website and reply within 24 hours with a branded sample video.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setFormData({ name: '', business: '', website: '', email: '', message: '' });
                }}
                className="mt-6 inline-flex px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden field for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-800 mb-2">
                    Your Name <span className="text-stone-400 font-normal">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-stone-900 focus:border-stone-900 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-stone-800 mb-2">
                    Business or Organization <span className="text-stone-400 font-normal">*</span>
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="e.g. Peak Athletic Club"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-stone-900 focus:border-stone-900 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-stone-800 mb-2">
                    Website or Instagram URL
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="e.g. peakathletic.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-stone-900 focus:border-stone-900 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-800 mb-2">
                    Your Email <span className="text-stone-400 font-normal">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@peakathletic.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-stone-900 focus:border-stone-900 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-800 mb-2">
                  Message or Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your business, approx customer count, or any specific ideas you have in mind."
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-stone-900 focus:border-stone-900 text-sm transition-all"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700">
                  There was an issue sending your message. Please reach out directly to{' '}
                  <a href={`mailto:${ABOUT_MEDIA.email}`} className="font-semibold underline">
                    {ABOUT_MEDIA.email}
                  </a>.
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 disabled:opacity-50 transition-colors shadow-xs"
                >
                  {status === 'submitting' ? 'Sending request...' : 'Request free branded sample'}
                </button>
                <span className="text-xs text-stone-500">
                  No credit card required. Free sample turnaround: 24–48 hours.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
