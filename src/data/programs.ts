export interface Program {
  slug: string;
  name: string;
  category: 'Religious Life' | 'Youth & Family' | 'Community & Civic';
  summary: string;
  description: string;
  highlights?: string[];
}

export const programs: Program[] = [
  {
    slug: 'khateeb-bureau',
    name: 'Khateeb Bureau',
    category: 'Religious Life',
    summary: 'Coordinating qualified khateebs to deliver Friday khutbahs across MAS MN masajid.',
    description:
      'The Khateeb Bureau schedules and supports qualified speakers to deliver the Jumu’ah khutbah at masajid and institutions across the Twin Cities, ensuring consistent, relevant, and inspiring Friday sermons for every community.',
    highlights: [
      'Regularly serves 12+ locations, including every MAS MN masjid plus the University of Minnesota, Regions Hospital, and the Eastern Twin Cities Islamic Centre',
      'Request a khateeb by emailing the office with “Khateeb Bureau” in the subject line',
    ],
  },
  {
    slug: 'speaker-bureau',
    name: 'Speaker Bureau',
    category: 'Community & Civic',
    summary: 'Connecting knowledgeable speakers with schools, interfaith groups, and institutions.',
    description:
      'The Speaker Bureau arranges Muslim speakers for schools, universities, interfaith gatherings, and civic institutions across Minnesota — building understanding and answering questions about Islam and the Muslim community.',
    highlights: [
      'Trained presenters speak to schools, healthcare facilities, social service agencies, media outlets, law enforcement, corporations, and religious institutions',
      'Request a speaker by emailing the office with “Speaker Bureau” in the subject line, or through the online request form',
    ],
  },
  {
    slug: 'lectures-public-events',
    name: 'Lectures & Public Events',
    category: 'Religious Life',
    summary: 'Hosting scholars, workshops, and public events throughout the year.',
    description:
      'MAS MN regularly hosts visiting scholars, community lectures, and public events that deepen religious knowledge and bring the community together outside of regular prayer times.',
    highlights: [
      'Weekly programs — Qur’an study, tajweed instruction, and fiqh circles — are free and open to the public',
      'Includes family, women’s, and youth halaqas, guest lectures, monthly potlucks, and Ramadan and Eid programming',
    ],
  },
  {
    slug: 'mas-youth',
    name: 'MAS Youth',
    category: 'Youth & Family',
    summary: 'Mentorship, retreats, and activities that build strong Muslim youth identity.',
    description:
      'MAS Youth serves young Americans ages 6–30 through mentorship, retreats, sports, and social activities designed and run by the youth themselves, with guidance from mentors — building a peer community rooted in service, equality, and justice.',
    highlights: [
      'MAS Blaine Youth — spiritual events for ages 16–25',
      'South Metro Islamic Center Youth — programs building positive Muslim identity',
      'Maple Grove Youth — monthly spiritual activities for ages 14+',
      'Noor Explorers — leadership development for girls ages 10–12',
      'Tarbiya and Ilm Camp — a week-long immersive experience for ages 18+',
    ],
  },
  {
    slug: 'public-affairs-civic-engagement',
    name: 'Public Affairs & Civic Engagement',
    category: 'Community & Civic',
    summary: 'Voter registration, civic education, and non-partisan advocacy for the Muslim community.',
    description:
      'Home to the largest Muslim voter database in the state, this bureau leads non-partisan voter registration, civic education, and interfaith advocacy so Minnesota Muslims are informed and engaged participants in public life.',
    highlights: [
      'Muslim Day at the Capitol (est. 2005) — connects Muslim constituents with state legislators',
      'Taking Heart Ramadan Iftar Open House — co-founded with the MN Council of Churches in 2005; the 2019 series held 26 events statewide for 1,500+ non-Muslim guests',
      'Rabbi Imam Round Table (est. 2011) — a bimonthly interfaith forum for Islamic and Jewish religious leaders',
    ],
  },
  {
    slug: 'religious-programming',
    name: 'Reverts Reconnect',
    category: 'Religious Life',
    summary: 'Support, community, and religious education for new Muslims.',
    description:
      'Reverts Reconnect provides new and reconnecting Muslims with mentorship, foundational religious education, and a welcoming community — with no required timeline or knowledge prerequisites.',
    highlights: [
      'Monthly community circles for food, conversation, and member-driven discussion',
      'Learning sessions on Islamic practice, family relationships, and spiritual growth',
      'One-on-one support, plus pre- and post-Shahada guidance for those exploring or new to Islam',
    ],
  },
  {
    slug: 'social-services',
    name: 'Social Services',
    category: 'Community & Civic',
    summary: 'Direct assistance connecting families with food, housing, and financial resources.',
    description:
      'Our social services team connects individuals and families with food assistance, housing support, financial aid resources, and case management for community members in need, regardless of faith or background.',
    highlights: [
      'Runs the MAS MN food shelf and emergency assistance fundraising',
      'Supports immigrant community members navigating public policy and public benefits',
    ],
  },
  {
    slug: 'food-shelf',
    name: 'Food Shelf',
    category: 'Community & Civic',
    summary: 'A regularly stocked food shelf serving families across the metro.',
    description:
      'The MAS MN food shelf provides groceries and essentials to families facing food insecurity at three metro locations, open to all members of the community regardless of faith or background.',
    highlights: [
      'Monthly distribution at Blaine Masjid, South Metro Islamic Center (Rosemount), and Masjid At-Taqwa (Saint Paul)',
      'No appointment needed — first-come, monthly assistance',
      'Suggested donations: $100 provides a two-week supply, $200 a monthly supply, for a family in need',
    ],
  },
  {
    slug: 'sunday-school',
    name: 'Sunday School',
    category: 'Youth & Family',
    summary: 'Weekend Islamic studies and Qur’an education for children.',
    description:
      'Our weekend Islamic school offers structured Qur’an, Arabic, and Islamic studies classes for children, taught by dedicated teachers in a nurturing environment.',
    highlights: [
      'Locations at Rosemount, Blaine Masjid, and Masjid At-Taqwa',
      'Sundays, 10:00 AM – 1:30 PM, September through June',
      'Currently accepting new students at all three locations',
    ],
  },
  {
    slug: 'tarbiya-personal-development',
    name: 'Tarbiya (Personal Development)',
    category: 'Religious Life',
    summary: 'Structured spiritual and personal development programming for adults.',
    description:
      'Tarbiya — Arabic for growth and loftiness — offers structured programming for spiritual, intellectual, physical, and social development, following the prophetic model that shaped the Prophet Muhammad’s companions into world-changing leaders.',
    highlights: [
      'Usrah — weekly small-group circles (3–6 members) with structured curricula',
      'Qiyam Program — monthly all-night gatherings of prayer, Qur’an recitation, and reflection',
      'Also includes scouting trips and camps, workshops and seminars, and conferences',
    ],
  },
];
