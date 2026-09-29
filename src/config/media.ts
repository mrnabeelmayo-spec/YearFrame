/**
 * Yearframe Media Configuration
 * Update video and image paths in this file.
 * If a media file does not exist in the public directory, the site will
 * automatically render a neat, styled placeholder showing the filename.
 */

export interface VideoItem {
  id: string;
  title: string;
  caption: string;
  video: string;
  poster: string;
  industry: 'gym' | 'salon' | 'learning' | 'nonprofit';
  sampleData: {
    recipient: string;
    headline: string;
    metric1: { label: string; value: string };
    metric2: { label: string; value: string };
    highlight: string;
  };
}

export interface IndustryCategory {
  id: 'gyms' | 'salons' | 'schools' | 'nonprofits';
  name: string;
  conceptLine: string;
  description: string;
  videos: VideoItem[];
}

export const HERO_MEDIA = {
  video: '/videos/gym-1.mp4',
  poster: '/posters/gym-1.jpg',
  title: 'Gym Year-in-Review 2026',
  recipient: 'Sarah Jenkins',
  classes: '142 Classes',
  streak: '19-week streak',
  highlight: 'Most frequent 7:00 AM attendee',
};

export const ABOUT_MEDIA = {
  photo: '/images/nabeel.jpg',
  name: 'Nabeel Mayo',
  role: 'Founder & Engineer',
  email: 'mrnabeelmayo@gmail.com',
  whatsapp: '+92 302 4055040',
  whatsappLink: 'https://wa.me/923024055040',
};

export const INDUSTRY_EXAMPLES: IndustryCategory[] = [
  {
    id: 'gyms',
    name: 'Gyms and studios',
    conceptLine: "Every class becomes a tally mark on the coach's whiteboard.",
    description: 'Designed as a real whiteboard with handwritten tally counts, monthly volume graphs, and member personal records.',
    videos: [
      {
        id: 'gym-1',
        title: 'Apex Fitness & Conditioning',
        caption: 'Sarah · 142 classes completed',
        video: '/videos/gym-1.mp4',
        poster: '/posters/gym-1.jpg',
        industry: 'gym',
        sampleData: {
          recipient: 'Sarah J.',
          headline: '142 Classes in 2026',
          metric1: { label: 'Top Class', value: '6:30 AM HIIT' },
          metric2: { label: 'Longest Streak', value: '19 Weeks' },
          highlight: 'Top 5% consistency at Apex Downtown',
        },
      },
      {
        id: 'gym-2',
        title: 'Iron & Oak Strength',
        caption: 'Marcus · 165 training sessions',
        video: '/videos/gym-2.mp4',
        poster: '/posters/gym-2.jpg',
        industry: 'gym',
        sampleData: {
          recipient: 'Marcus B.',
          headline: '165 Sessions Logged',
          metric1: { label: 'Deadlift PR', value: '+45 lbs' },
          metric2: { label: 'Weekend Crew', value: '42 Saturdays' },
          highlight: 'Barbell Club Master Tier',
        },
      },
      {
        id: 'gym-3',
        title: 'Solstice Yoga Sanctuary',
        caption: 'Elena · 88 flow & recovery hours',
        video: '/videos/gym-3.mp4',
        poster: '/posters/gym-3.jpg',
        industry: 'gym',
        sampleData: {
          recipient: 'Elena R.',
          headline: '88 Hours on the Mat',
          metric1: { label: 'Vinyasa Flow', value: '54 Sessions' },
          metric2: { label: 'Sound Baths', value: '12 Evenings' },
          highlight: 'Full Seasonal Solstice Attendance',
        },
      },
    ],
  },
  {
    id: 'salons',
    name: 'Salons and spas',
    conceptLine: 'Lipstick on the mirror, a stamp for every visit.',
    description: 'A glowing vanity mirror motif with handwritten lipstick cursive, service stamps, and seasonal treatment timelines.',
    videos: [
      {
        id: 'salon-1',
        title: 'Maison Glow Hair & Skincare',
        caption: 'Maya · 11 appointments in 2026',
        video: '/videos/salon-1.mp4',
        poster: '/posters/salon-1.jpg',
        industry: 'salon',
        sampleData: {
          recipient: 'Maya T.',
          headline: '11 Visits in 2026',
          metric1: { label: 'Favorite Stylist', value: 'Camille' },
          metric2: { label: 'Signature Tone', value: 'Honey Balayage' },
          highlight: 'Member of the Glow Society since 2024',
        },
      },
      {
        id: 'salon-2',
        title: 'Atelier Botanical Nails',
        caption: 'Chloe · 18 signature sets crafted',
        video: '/videos/salon-2.mp4',
        poster: '/posters/salon-2.jpg',
        industry: 'salon',
        sampleData: {
          recipient: 'Chloe W.',
          headline: '18 Nail Art Sessions',
          metric1: { label: 'Color Palette', value: 'Terra Cotta & Oat' },
          metric2: { label: 'Loyalty Tier', value: 'VIP Flora' },
          highlight: 'Zero chipped days recorded',
        },
      },
      {
        id: 'salon-3',
        title: 'Verde Thermal Day Spa',
        caption: 'Julian · 9 recovery rituals',
        video: '/videos/salon-3.mp4',
        poster: '/posters/salon-3.jpg',
        industry: 'salon',
        sampleData: {
          recipient: 'Julian K.',
          headline: '9 Deep Rest Days',
          metric1: { label: 'Sauna Circuit', value: '14 Hours' },
          metric2: { label: 'Therapeutic Massage', value: '6 Sessions' },
          highlight: 'Sunday Sanctuary Regular',
        },
      },
    ],
  },
  {
    id: 'schools',
    name: 'Schools and courses',
    conceptLine: "Lessons, streaks and levels in the student's own notebook.",
    description: 'Graph-paper and ruled notebook pages filled with handwritten milestones, solved problems, and grade advances.',
    videos: [
      {
        id: 'learning-1',
        title: 'Foundry Coding Academy',
        caption: 'Omar · 112 coding problem sets',
        video: '/videos/learning-1.mp4',
        poster: '/posters/learning-1.jpg',
        industry: 'learning',
        sampleData: {
          recipient: 'Omar B.',
          headline: '112 Code Challenges',
          metric1: { label: 'Best Language', value: 'TypeScript' },
          metric2: { label: 'Active Days', value: '204 Days' },
          highlight: 'Graduated to Senior Systems Project',
        },
      },
      {
        id: 'learning-2',
        title: 'Verbum Language Lab',
        caption: 'Mia · 4,200 vocabulary cards mastered',
        video: '/videos/learning-2.mp4',
        poster: '/posters/learning-2.jpg',
        industry: 'learning',
        sampleData: {
          recipient: 'Mia S.',
          headline: '4,200 Words Mastered',
          metric1: { label: 'Conversational Hours', value: '62 Hours' },
          metric2: { label: 'Fluency Level', value: 'CEFR B2 Level' },
          highlight: 'Spanish Advanced Diploma Earned',
        },
      },
      {
        id: 'learning-3',
        title: 'Cadence Music Conservatory',
        caption: 'Liam · 135 practice logs recorded',
        video: '/videos/learning-3.mp4',
        poster: '/posters/learning-3.jpg',
        industry: 'learning',
        sampleData: {
          recipient: 'Liam N.',
          headline: '135 Studio Practice Hours',
          metric1: { label: 'Repertoire Pieces', value: '8 Études' },
          metric2: { label: 'Recitals', value: '3 Public Stages' },
          highlight: 'Annual Conservatory Honors Selection',
        },
      },
    ],
  },
  {
    id: 'nonprofits',
    name: 'Nonprofits',
    conceptLine: 'A thank-you letter that shows what each gift became.',
    description: 'Warm textured letterhead detailing how the donor’s contributions translated into real human outcomes.',
    videos: [
      {
        id: 'nonprofit-1',
        title: 'ClearSpring Water Initiative',
        caption: 'Clara · $600 provided clean water to 24 families',
        video: '/videos/nonprofit-1.mp4',
        poster: '/posters/nonprofit-1.jpg',
        industry: 'nonprofit',
        sampleData: {
          recipient: 'Clara H.',
          headline: '$600 Annual Contribution',
          metric1: { label: 'Impact Unit', value: '24 Household Wells' },
          metric2: { label: 'Community', value: 'Rift Valley Basin' },
          highlight: '3rd consecutive year as Guardian Partner',
        },
      },
      {
        id: 'nonprofit-2',
        title: 'Urban Hearth Kitchen',
        caption: 'Thomas · 140 warm nutritious meals funded',
        video: '/videos/nonprofit-2.mp4',
        poster: '/posters/nonprofit-2.jpg',
        industry: 'nonprofit',
        sampleData: {
          recipient: 'Thomas A.',
          headline: '140 Warm Meals Served',
          metric1: { label: 'Monthly Sustainer', value: '$35 / month' },
          metric2: { label: 'Holiday Kitchen', value: 'Volunteer Shift' },
          highlight: 'Dedicated Neighbor Sustainer',
        },
      },
      {
        id: 'nonprofit-3',
        title: 'ShelterPaws Wildlife Care',
        caption: 'Grace · 6 medical treatments sponsored',
        video: '/videos/nonprofit-3.mp4',
        poster: '/posters/nonprofit-3.jpg',
        industry: 'nonprofit',
        sampleData: {
          recipient: 'Grace V.',
          headline: '6 Wildlife Rehabilitations',
          metric1: { label: 'Species Aided', value: 'Barn Owls & Foxes' },
          metric2: { label: 'Rescue Flight', value: 'Medical Sponsor' },
          highlight: 'Golden Acorn Conservation Circle',
        },
      },
    ],
  },
];

// Generate 50 posters for the scale grid: /posters/gym-all/01.jpg to 50.jpg
const MEMBER_NAMES = [
  'Alex M.', 'Sarah K.', 'David L.', 'Elena R.', 'Marcus B.',
  'Chloe W.', 'Maya T.', 'Liam N.', 'Omar B.', 'Mia S.',
  'James P.', 'Clara H.', 'Thomas A.', 'Grace V.', 'Julian K.',
  'Zoe D.', 'Noah F.', 'Emma C.', 'Lucas G.', 'Ava J.',
  'Leo W.', 'Harper S.', 'Ethan B.', 'Sophia M.', 'Mason K.',
  'Isabella R.', 'Oliver T.', 'Charlotte E.', 'Benjamin L.', 'Amelia H.',
  'Jack V.', 'Ella P.', 'Henry G.', 'Scarlett D.', 'Alexander C.',
  'Hannah Y.', 'Daniel O.', 'Lily B.', 'Matthew R.', 'Aria S.',
  'Samuel K.', 'Victoria M.', 'Joseph T.', 'Chloe N.', 'David H.',
  'Penelope W.', 'Carter L.', 'Layla B.', 'Owen F.', 'Nora S.',
];

export const SCALE_POSTERS = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  const classes = 40 + Math.floor((i * 13) % 150);
  return {
    id: `scale-${num}`,
    number: num,
    path: `/posters/gym-all/${num}.jpg`,
    name: MEMBER_NAMES[i] || `Member ${num}`,
    classes: `${classes} classes`,
  };
});
