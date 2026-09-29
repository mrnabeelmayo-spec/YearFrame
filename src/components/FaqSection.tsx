import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: 'What data do you need?',
      answer:
        "A first name and activity for each person, like classes or visits per month. I'll send you the exact columns. No emails, phone numbers or payment details.",
    },
    {
      question: 'How long does it take?',
      answer:
        '7 days after I receive your data for up to 500 people, 10 days for up to 1,000.',
    },
    {
      question: 'Can it match our brand?',
      answer:
        'Yes: your name, colors, class or service names and staff names. The free sample shows exactly how it will look.',
    },
    {
      question: 'Can people share their video?',
      answer:
        'Yes. Each one is a normal vertical MP4 video, made for phones.',
    },
    {
      question: 'What if someone has very little data?',
      answer:
        'Every design has a version for new and light customers, so nobody gets an empty video. Rankings are only shown to people near the top.',
    },
    {
      question: 'Do the videos have music?',
      answer:
        'No, so you can add your own licensed track or send them silent.',
    },
  ];

  // Keep all or multiple open or accordion. Let's make it easy to read with all visible or toggleable
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-lg text-stone-600">
            Everything you need to know about the process, formats, and data requirements.
          </p>
        </div>

        <div className="mt-12 divide-y divide-stone-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div key={faq.question} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-stone-400 rounded-md"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-stone-900 group-hover:text-stone-700 transition-colors">
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 text-stone-400 group-hover:text-stone-600 text-xl font-mono">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-base text-stone-600 leading-relaxed pr-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
