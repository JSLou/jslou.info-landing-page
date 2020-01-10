// const { defaultProfileMale } from '../avatars';
import markWindholtzAvatar from '../public/images/speakers/markWindholtz.jpeg';

export const meetups = [
  {
    id: 1,
    // 6:30 p.m. ETC in UTC
    startDateTime: '2020-02-20T23:30:00.000Z',
    timezone: 'EST',
    title: 'Tests - Friend or Foe?',
    description:
      'Tests friend or foe? Chain or Cable? Are tests helping or hurting your abliity to code? Why progress slows with complexity and how to improve your Elixir unit testing.',
    // links: ["slides.com"]
    links: null,
    location: {
      addressLink: 'https://goo.gl/maps/1TgWZxt9qCVmYjhg9',
      // extraDetails: 'TODO: Building / Parking info',
      fullAddress: '700 E Market St, Louisville, KY 40202',
      name: 'Garage Bar',
    },
    speaker: {
      firstName: 'Mark',
      lastName: 'Windholtz',
      fullName: 'Mark Windholtz',
      email: 'mark@agiledna.com',
      github: 'mwindholtz',
      twitter: 'windholtz',
      // avatar = imported image component to default to initials from name otherwise.
      avatar: markWindholtzAvatar,
      bio:
        'Mark Windholtz: XP - Extreme Programming early adopter and trainer. Active using in Elixir with Domain Driven Design to higher business value code.',
    },
  },
];

export const nextMeetup = meetups[0];
