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
    address: '12175 Aberdeen St NE, Blaine, MN 55449',
    description:
      'Serving the northern metro since 2011 with three prayer halls, four Friday services, and a monthly food assistance program.',
    image: blaineMasjid,
    masjidalId: 'xdNPqnLV',
  },
  {
    slug: 'coon-rapids-masjid',
    name: 'Coon Rapids Masjid',
    city: 'Coon Rapids',
    address: '1313 Coon Rapids Blvd NW, Coon Rapids, MN 55433',
    description:
      'Established in 2024, offering two Friday khutbahs, Fiqh and Qur’an halaqas, and community programs open to all.',
    image: coonRapidsMasjid,
    masjidalId: '9L2MoNKZ',
  },
  {
    slug: 'maple-grove-masjid',
    name: 'Maple Grove Masjid',
    city: 'Maple Grove',
    address: '10186 Lancaster Lane N, Maple Grove, MN 55369',
    description:
      'A growing western-suburbs community hub serving Maple Grove, Rogers, St. Michael, and Otsego since 2021.',
    image: mapleGroveMasjid,
    masjidalId: 'JdGmjXLP',
  },
  {
    slug: 'masjid-al-rahman',
    name: 'Masjid Al Rahman',
    city: 'Bloomington',
    address: '8910 Old Cedar Ave S #2049, Bloomington, MN 55425',
    description:
      'Minnesota’s first purpose-built masjid, established in 1999, now serving over 700 families with daily prayers and Qur’an education.',
    image: masjidAlRahman,
    masjidalId: 'jKZpzNAX',
  },
  {
    slug: 'masjid-at-taqwa-mn',
    name: 'Masjid At-Taqwa',
    city: 'Saint Paul',
    address: '1608 Como Ave, Saint Paul, MN 55108',
    description:
      'Serving University of Minnesota students and Saint Paul families with daily prayers, Qur’an halaqas, Sunday school, and a monthly food shelf.',
    image: masjidAtTaqwa,
    masjidalId: 'VdwqVxLe',
  },
  {
    slug: 'quba-islamic-center-of-chaska',
    name: 'Quba Islamic Center of Chaska',
    city: 'Chaska',
    address: '415 N Chestnut St, Chaska, MN 55318',
    description:
      'Carver County’s first mosque, established in 2022, serving the growing Muslim community in downtown Chaska.',
    image: quba,
    masjidalId: 'zKz8DRAO',
  },
  {
    slug: 'south-metro-islamic-center',
    name: 'South Metro Islamic Center',
    city: 'Rosemount',
    address: '15400 South Robert Trail, Rosemount, MN 55068',
    description:
      'Serving Eagan, Apple Valley, Rosemount, Lakeville, Farmington, and the south metro with prayers, classes, and family programming.',
    image: southMetro,
    masjidalId: '3AO2BxLe',
  },
  {
    slug: 'lakeville-masjid',
    name: 'Lakeville Masjid',
    city: 'Lakeville',
    address: '8670 210th St W, Lakeville, MN 55044',
    description:
      'A spacious new masjid serving the growing Muslim community in Lakeville with Friday prayers, Qur’an study, and family programs.',
    image: lakevilleMasjid,
    masjidalId: 'wLVpRMdJ',
  },
];
