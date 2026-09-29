import React from 'react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const tiers = [
    {
      name: 'Starter',
      capacity: 'Up to 200 people',
      price: '$400',
      turnaround: '7 days',
      description: 'Ideal for boutique studios, small gyms, local salons, and specialized workshops.',
    },
    {
      name: 'Standard',
      capacity: 'Up to 500 people',
      price: '$750',
      turnaround: '7 days',
      description: 'For established fitness clubs, day spas and membership programs.',
    },
    {
      name: 'Large',
      capacity: 'Up to 1,000 people',
      price: '$1,200',
      turnaround: '10 days',
      description: 'Built for high-volume facilities, multi-trainer studios, and online course cohorts.',
    },
    {
      name: 'Custom',
      capacity: 'More than 1,000 people or several locations',
      price: 'Price on request',
      turnaround: 'Flexible schedule',
      description: 'Tailored workflows for franchise networks, university programs, and large regional nonprofits.',
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-stone-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-lg text-stone-600">
            One flat fee per batch. No monthly subscriptions, no software licenses, and no per-render surprise charges.
          </p>
        </div>

        {/* Founding offer banner */}
        <div className="mt-8 bg-amber-50/80 border border-amber-200/90 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 shrink-0"></span>
            <p className="text-sm sm:text-base font-semibold text-amber-950">
              Founding offer: 30% off for my first 3 clients.
            </p>
          </div>
          <a
            href="#contact"
            className="text-xs sm:text-sm font-semibold text-amber-900 hover:text-amber-950 underline underline-offset-4"
          >
            Claim founding slot →
          </a>
        </div>

        {/* 4-Column Pricing Grid on Desktop, 1 on Mobile */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-white border border-stone-200 shadow-xs"
            >
              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  {tier.name}
                </h3>
                <div className="text-xs text-stone-500 font-medium mt-1">
                  {tier.capacity}
                </div>

                <div className="mt-6 pt-6 border-t border-stone-100">
                  <div className="text-3xl sm:text-4xl font-bold text-stone-900 font-mono tabular-nums tracking-tight">
                    {tier.price}
                  </div>
                  <div className="text-xs text-stone-500 font-medium mt-1">
                    Turnaround: <span className="text-stone-800 font-semibold">{tier.turnaround}</span>
                  </div>
                </div>

                <p className="mt-5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => onSelectPlan(tier.name)}
                  className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors bg-stone-100 text-stone-900 hover:bg-stone-200"
                >
                  Choose {tier.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Below the table notes */}
        <div className="mt-10 pt-8 border-t border-stone-200/80 space-y-2 text-sm text-stone-600">
          <p className="font-medium text-stone-800">
            • Every package includes your name and colors, a data check, one round of changes, and all videos and posters.
          </p>
          <p>
            • Payment structure: 50% to start, 50% on delivery.
          </p>
          <p className="text-xs text-stone-500">
            All prices in USD. Delivered as high-resolution vertical MP4 video files and matching JPEG posters.
          </p>
        </div>
      </div>
    </section>
  );
};
