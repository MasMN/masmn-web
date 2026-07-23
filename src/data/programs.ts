export interface Program {
  slug: string;
  name: string;
  category: 'Religious Life' | 'Youth & Family' | 'Community & Civic';
  summary: string;
  description: string;
}

export const programs: Program[] = [
  {
    slug: 'khateeb-bureau',
    name: 'Khateeb Bureau',
    category: 'Religious Life',
    summary: 'Coordinating qualified khateebs to deliver Friday khutbahs across MAS MN masajid.',
    description:
      'The Khateeb Bureau schedules and supports qualified speakers to deliver the Jumu’ah khutbah at masajid across the network, ensuring consistent, relevant, and inspiring Friday sermons for every community.',
  },
  {
    slug: 'speaker-bureau',
    name: 'Speaker Bureau',
    category: 'Community & Civic',
    summary: 'Connecting knowledgeable speakers with schools, interfaith groups, and institutions.',
    description:
      'The Speaker Bureau arranges Muslim speakers for schools, universities, interfaith gatherings, and civic institutions across Minnesota — building understanding and answering questions about Islam and the Muslim community.',
  },
  {
    slug: 'lectures-public-events',
    name: 'Lectures & Public Events',
    category: 'Religious Life',
    summary: 'Hosting scholars, workshops, and public events throughout the year.',
    description:
      'MAS MN regularly hosts visiting scholars, community lectures, and public events that deepen religious knowledge and bring the community together outside of regular prayer times.',
  },
  {
    slug: 'mas-youth',
    name: 'MAS Youth',
    category: 'Youth & Family',
    summary: 'Mentorship, retreats, and activities that build strong Muslim youth identity.',
    description:
      'MAS Youth builds confident, grounded young Muslims through mentorship, retreats, sports, and social activities — creating a positive peer community rooted in faith and service.',
  },
  {
    slug: 'public-affairs-civic-engagement',
    name: 'Public Affairs & Civic Engagement',
    category: 'Community & Civic',
    summary: 'Voter registration, civic education, and non-partisan advocacy for the Muslim community.',
    description:
      'Home to one of the largest Muslim voter databases in the state, this bureau leads non-partisan voter registration, civic education, and advocacy so Minnesota Muslims are informed and engaged participants in public life.',
  },
  {
    slug: 'religious-programming',
    name: 'Reverts Reconnect',
    category: 'Religious Life',
    summary: 'Support, community, and religious education for new Muslims.',
    description:
      'Reverts Reconnect provides new Muslims with mentorship, foundational religious education, and a welcoming community as they grow in their faith journey.',
  },
  {
    slug: 'social-services',
    name: 'Social Services',
    category: 'Community & Civic',
    summary: 'Direct assistance connecting families with food, housing, and financial resources.',
    description:
      'Our social services team connects individuals and families with food assistance, housing support, financial aid resources, and case management for community members in need.',
  },
  {
    slug: 'food-shelf',
    name: 'Food Shelf',
    category: 'Community & Civic',
    summary: 'A regularly stocked food shelf serving families across the metro.',
    description:
      'The MAS MN food shelf provides groceries and essentials to families facing food insecurity, open to all members of the community regardless of faith or background.',
  },
  {
    slug: 'sunday-school',
    name: 'Sunday School',
    category: 'Youth & Family',
    summary: 'Weekend Islamic studies and Qur’an education for children.',
    description:
      'Our weekend Islamic school offers structured Qur’an, Arabic, and Islamic studies classes for children, taught by dedicated teachers in a nurturing environment.',
  },
  {
    slug: 'tarbiya-personal-development',
    name: 'Tarbiya (Personal Development)',
    category: 'Religious Life',
    summary: 'Structured spiritual and personal development programming for adults.',
    description:
      'Tarbiya offers structured circles and courses focused on spiritual growth, character development, and practical faith — helping adults deepen their connection to their deen.',
  },
];
