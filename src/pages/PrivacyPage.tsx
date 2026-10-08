import React, { useEffect } from 'react';
import { ABOUT_MEDIA } from '../config/media';

interface PrivacyPageProps {
  onBackToHome: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBackToHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center text-sm font-semibold text-stone-600 hover:text-stone-950 mb-8 transition-colors"
        >
          ← Back to home
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-stone-500 font-mono">
          Last updated: 2026
        </p>

        <div className="mt-10 space-y-10 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-stone-900">
              1. What the Contact Form Collects and Why
            </h2>
            <p className="mt-3 text-sm sm:text-base">
              When you submit an inquiry or request a free sample via our website form, we collect:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm sm:text-base text-stone-600">
              <li><strong>Your name</strong>: To address you personally in communications.</li>
              <li><strong>Business or organization name</strong>: To prepare relevant branding templates.</li>
              <li><strong>Website or social link</strong>: To inspect your public brand colors, logos, and aesthetics for the free sample video.</li>
              <li><strong>Your email address</strong>: Exclusively to send your preview video and answer your inquiry.</li>
              <li><strong>Message content</strong>: Any requirements or context you voluntarily share.</li>
            </ul>
            <p className="mt-3 text-sm text-stone-600">
              We never sell, rent, or trade your contact information to any third party. We do not use newsletter tracking pixels or ad retargeting networks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900">
              2. How Client Data is Handled and Deleted After Delivery
            </h2>
            <p className="mt-3 text-sm sm:text-base">
              Protecting customer trust is central to how Yearframes operates:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-2 text-sm sm:text-base text-stone-600">
              <li>
                <strong>Data minimization:</strong> We strictly request only first names (or first name + last initial) and numerical activity metrics (such as classes attended, visits logged, lessons completed, or dollars contributed). We never ask for or accept email addresses, phone numbers, home addresses, or payment card details.
              </li>
              <li>
                <strong>Local processing:</strong> Video generation scripts run in an isolated local environment controlled directly by Nabeel Ahmad. No customer records are uploaded to third-party generative AI models or public clouds.
              </li>
              <li>
                <strong>Strict deletion:</strong> All raw spreadsheets and intermediate rendering data are permanently purged within 14 days of final delivery and client confirmation.
              </li>
              <li>
                <strong>Data Processing Agreements:</strong> I am glad to review and execute your organization’s standard Data Processing Agreement (DPA) or NDA prior to receiving your export file.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900">
              3. Cookies and Analytics
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600">
              This website does not use tracking cookies, behavioral ad scripts, or cross-site fingerprinting tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900">
              4. Contact Details for Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600">
              For any questions regarding data security, DPA requests, or privacy practices, reach out directly to:
            </p>
            <div className="mt-4 p-5 bg-white border border-stone-200 rounded-xl text-sm space-y-1">
              <div className="font-semibold text-stone-900">Nabeel Ahmad · Yearframes</div>
              <div>Email: <a href={`mailto:${ABOUT_MEDIA.email}`} className="text-stone-900 underline font-medium">{ABOUT_MEDIA.email}</a></div>
              <div>WhatsApp: <a href={ABOUT_MEDIA.whatsappLink} className="text-stone-900 underline font-medium">{ABOUT_MEDIA.whatsapp}</a></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
