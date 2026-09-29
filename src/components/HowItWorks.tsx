import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Send your export',
      description: 'First names and activity only, no emails or payment details needed. A standard CSV or Excel export from your booking or management software is all it takes.',
      detail: 'I provide the exact columns to include.',
    },
    {
      step: '02',
      title: 'See a free sample in your brand',
      description: 'Made with made-up people first so you can review colors, wording, and styling without committing or sharing sensitive client information.',
      detail: 'One round of design refinements included.',
    },
    {
      step: '03',
      title: 'Get videos and posters for every person',
      description: 'Get a video and a poster for every person, plus a file list for your email tool. Everything organized, optimized, and ready to send via Mailchimp, Klaviyo, WhatsApp, or direct SMS.',
      detail: 'Standard vertical 1080×1920 MP4 files.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 border-t border-stone-200 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            How it works
          </h2>
          <p className="mt-3 text-lg text-stone-600">
            Three simple steps from your spreadsheet to thousands of personalized videos.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col justify-between border-t border-stone-200 pt-6"
            >
              <div>
                <span className="text-2xl font-bold text-stone-400 font-mono tabular-nums">
                  {item.step}
                </span>
                <h3 className="mt-3 text-xl font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 font-medium">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
