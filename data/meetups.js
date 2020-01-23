// Example Avatar import
// import shannonBeachAvatar from '../public/images/speakers/Shannon-Beach.jpg';

export const meetups = [
  {
    id: 1,
    // 6:00 p.m. ETC in UTC
    startDateTime: '2020-01-29T23:00:00.000Z',
    timezone: 'EST',
    title: '1 SPA 1 Endpoint 1 Table 1 Serverless App',
    description:
      'A sample build using AWS (VueJs - AppSync - Dynamodb)  to create a complete full-stack server app',
    // links: ['slides.com'],
    links: null,
    location: {
      addressLink: 'https://goo.gl/maps/oTtxTn2aF2ZNU8PX9',
      fullAddress: '700 N Hurstbourne Pkwy #250, Louisville, KY 40222',
      name: 'Tek Systems - 700 Room',
    },
    speaker: {
      firstName: 'Jermaine',
      lastName: 'Watkins',
      fullName: 'Jermaine Watkin',
      email: null,
      github: null,
      twitter: null,
      // avatar = imported image component
      // default to initials from name if set to null.
      avatar: null,
      bio: null,
    },
  },
];

export const nextMeetup = meetups[0];
