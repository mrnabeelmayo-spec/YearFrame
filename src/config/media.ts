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
  title: 'Northline Studio',
  caption: 'Ingrid, 111 classes',
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
        title: 'Northline Studio',
        caption: 'Ingrid, 111 classes',
        video: '/videos/gym-1.mp4',
        poster: '/posters/gym-1.jpg',
        industry: 'gym',
      },
      {
        id: 'gym-2',
        title: 'Northline Studio',
        caption: 'Jamal, 233 classes',
        video: '/videos/gym-2.mp4',
        poster: '/posters/gym-2.jpg',
        industry: 'gym',
      },
      {
        id: 'gym-3',
        title: 'Northline Studio',
        caption: 'Zainab, 15 classes in her first year',
        video: '/videos/gym-3.mp4',
        poster: '/posters/gym-3.jpg',
        industry: 'gym',
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
        title: 'Maison Rose',
        caption: 'Amara, 10 visits',
        video: '/videos/salon-1.mp4',
        poster: '/posters/salon-1.jpg',
        industry: 'salon',
      },
      {
        id: 'salon-2',
        title: 'Juniper Day Spa',
        caption: 'Arjun, 10 visits',
        video: '/videos/salon-2.mp4',
        poster: '/posters/salon-2.jpg',
        industry: 'salon',
      },
      {
        id: 'salon-3',
        title: 'Maison Rose',
        caption: 'Siobhan, new client, 3 visits',
        video: '/videos/salon-3.mp4',
        poster: '/posters/salon-3.jpg',
        industry: 'salon',
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
        title: 'Linden Language School',
        caption: 'Priya, Spanish, A2 to B1',
        video: '/videos/learning-1.mp4',
        poster: '/posters/learning-1.jpg',
        industry: 'learning',
      },
      {
        id: 'learning-2',
        title: 'Harbor Music School',
        caption: 'Helen, Piano, Grade 2 to 3',
        video: '/videos/learning-2.mp4',
        poster: '/posters/learning-2.jpg',
        industry: 'learning',
      },
      {
        id: 'learning-3',
        title: 'Linden Language School',
        caption: 'Omar, first year of Italian',
        video: '/videos/learning-3.mp4',
        poster: '/posters/learning-3.jpg',
        industry: 'learning',
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
        title: 'Common Table Kitchen',
        caption: 'Rosa, 96 meals',
        video: '/videos/nonprofit-1.mp4',
        poster: '/posters/nonprofit-1.jpg',
        industry: 'nonprofit',
      },
      {
        id: 'nonprofit-2',
        title: 'Greenway Tree Trust',
        caption: 'Oliver, 500 trees',
        video: '/videos/nonprofit-2.mp4',
        poster: '/posters/nonprofit-2.jpg',
        industry: 'nonprofit',
      },
      {
        id: 'nonprofit-3',
        title: 'Common Table Kitchen',
        caption: 'Amina, first year, 3 gifts',
        video: '/videos/nonprofit-3.mp4',
        poster: '/posters/nonprofit-3.jpg',
        industry: 'nonprofit',
      },
    ],
  },
];

// Generate 50 posters for the scale grid: /posters/gym-all/01.jpg to 50.jpg
export const SCALE_POSTERS = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return {
    id: `scale-${num}`,
    number: num,
    path: `/posters/gym-all/${num}.jpg`,
  };
});
