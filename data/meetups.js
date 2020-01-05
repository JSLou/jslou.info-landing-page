// const { defaultProfileMale } from '../avatars';

export const meetups = [
  {
    id: 1,
    // 6 p.m. UTC
    startDateTime: '2020-02-21T23:00:00.000Z',
    timezone: 'EST',
    title: 'Cool Elixir Talk',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda labore expedita dignissimos. Labore aut vel dolorum, fugiat asperiores architecto cum, dignissimos ex totam voluptatibus quos? Possimus similique et accusantium?',
    links: ['slides.com'],
    location: {
      // addressLink: 'https://www.google.com/maps/place/123+W+Main+St,+Louisville,+KY+40202',
      addressLink: '#',
      fullAddress: 'TBD',
      addressLineOne: '',
      addressLineTwo: '',
      city: 'Louisville',
      state: 'KY',
      zip: '40202',
    },
    speaker: {
      firstName: 'Joe',
      lastName: 'Cool',
      fullName: 'Joe Cool',
      email: 'example@test.com',
      github: 'mthomps4',
      twitter: 'mthomps4',
      // avatar = imported image component to default to initials from name otherwise.
      avatar: null,
    },
  },
];

export const nextMeetup = meetups[0];
