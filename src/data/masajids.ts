import type { ImageMetadata } from 'astro';

import blaineMasjid from '../assets/images/masajids/blaine-masjid.jpg';
import coonRapidsMasjid from '../assets/images/masajids/coon-rapids-masjid.jpg';
import mapleGroveMasjid from '../assets/images/masajids/maple-grove-masjid.jpg';
import masjidAlRahman from '../assets/images/masajids/masjid-al-rahman.jpg';
import masjidAtTaqwa from '../assets/images/masajids/masjid-at-taqwa-mn.jpg';
import quba from '../assets/images/masajids/quba-islamic-center-of-chaska.jpg';
import southMetro from '../assets/images/masajids/south-metro-islamic-center.jpg';
import lakevilleMasjid from '../assets/images/masajids/lakeville-masjid.jpg';

export interface Masjid {
  slug: string;
  name: string;
  city: string;
  address: string;
  description: string;
  image: ImageMetadata;
  /** Masjid ID used to query the masjidal.com prayer times API. */
  masjidalId: string;
}

export const masajids: Masjid[] = [
  {
    slug: 'blaine-masjid',
    name: 'Blaine Masjid',
    city: 'Blaine',
    address: 'Blaine, MN',
    description:
      'Serving the northern metro with daily prayers, Jumu’ah, and weekend Islamic school for children.',
    image: blaineMasjid,
    masjidalId: 'xdNPqnLV',
  },
  {
    slug: 'coon-rapids-masjid',
    name: 'Coon Rapids Masjid',
    city: 'Coon Rapids',
    address: 'Coon Rapids, MN',
    description:
      'A neighborhood masjid offering the five daily prayers, Jumu’ah khutbah, and community classes.',
    image: coonRapidsMasjid,
    masjidalId: '9L2MoNKZ',
  },
  {
    slug: 'maple-grove-masjid',
    name: 'Maple Grove Masjid',
    city: 'Maple Grove',
    address: 'Maple Grove, MN',
    description:
      'A growing western-suburbs community hub for prayer, youth programming, and family events.',
    image: mapleGroveMasjid,
    masjidalId: 'JdGmjXLP',
  },
  {
    slug: 'masjid-al-rahman',
    name: 'Masjid Al Rahman',
    city: 'Twin Cities',
    address: 'Minnesota',
    description:
      'A welcoming masjid offering daily prayers, religious education, and community gatherings.',
    image: masjidAlRahman,
    masjidalId: 'jKZpzNAX',
  },
  {
    slug: 'masjid-at-taqwa-mn',
    name: 'Masjid At-Taqwa',
    city: 'Twin Cities',
    address: 'Minnesota',
    description:
      'Home to regular congregational prayers, Qur’an classes, and community services.',
    image: masjidAtTaqwa,
    masjidalId: 'VdwqVxLe',
  },
  {
    slug: 'quba-islamic-center-of-chaska',
    name: 'Quba Islamic Center of Chaska',
    city: 'Chaska',
    address: 'Chaska, MN',
    description:
      'Serving the southwest metro with prayer space, weekend school, and community programming.',
    image: quba,
    masjidalId: 'zKz8DRAO',
  },
  {
    slug: 'south-metro-islamic-center',
    name: 'South Metro Islamic Center',
    city: 'South Metro',
    address: 'Minnesota',
    description:
      'A community center for the south metro offering prayers, classes, and social services referrals.',
    image: southMetro,
    masjidalId: '3AO2BxLe',
  },
  {
    slug: 'lakeville-masjid',
    name: 'Lakeville Masjid',
    city: 'Lakeville',
    address: 'Lakeville, MN',
    description:
      'Serving Lakeville and the surrounding area with daily prayers and community programs.',
    image: lakevilleMasjid,
    masjidalId: 'wLVpRMdJ',
  },
];
