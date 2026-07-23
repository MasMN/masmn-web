export interface Masjid {
  slug: string;
  name: string;
  city: string;
  address: string;
  description: string;
}

export const masajids: Masjid[] = [
  {
    slug: 'blaine-masjid',
    name: 'Blaine Masjid',
    city: 'Blaine',
    address: 'Blaine, MN',
    description:
      'Serving the northern metro with daily prayers, Jumu’ah, and weekend Islamic school for children.',
  },
  {
    slug: 'coon-rapids-masjid',
    name: 'Coon Rapids Masjid',
    city: 'Coon Rapids',
    address: 'Coon Rapids, MN',
    description:
      'A neighborhood masjid offering the five daily prayers, Jumu’ah khutbah, and community classes.',
  },
  {
    slug: 'maple-grove-masjid',
    name: 'Maple Grove Masjid',
    city: 'Maple Grove',
    address: 'Maple Grove, MN',
    description:
      'A growing western-suburbs community hub for prayer, youth programming, and family events.',
  },
  {
    slug: 'masjid-al-rahman',
    name: 'Masjid Al Rahman',
    city: 'Twin Cities',
    address: 'Minnesota',
    description:
      'A welcoming masjid offering daily prayers, religious education, and community gatherings.',
  },
  {
    slug: 'masjid-at-taqwa-mn',
    name: 'Masjid At-Taqwa',
    city: 'Twin Cities',
    address: 'Minnesota',
    description:
      'Home to regular congregational prayers, Qur’an classes, and community services.',
  },
  {
    slug: 'quba-islamic-center-of-chaska',
    name: 'Quba Islamic Center of Chaska',
    city: 'Chaska',
    address: 'Chaska, MN',
    description:
      'Serving the southwest metro with prayer space, weekend school, and community programming.',
  },
  {
    slug: 'south-metro-islamic-center',
    name: 'South Metro Islamic Center',
    city: 'South Metro',
    address: 'Minnesota',
    description:
      'A community center for the south metro offering prayers, classes, and social services referrals.',
  },
  {
    slug: 'lakeville-masjid',
    name: 'Lakeville Masjid',
    city: 'Lakeville',
    address: 'Lakeville, MN',
    description:
      'Serving Lakeville and the surrounding area with daily prayers and community programs.',
  },
];
