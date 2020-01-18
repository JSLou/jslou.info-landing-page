import { Avatar, Box, Flex, Image, Link, Text } from '@chakra-ui/core';
import moment from 'moment-timezone';
import React from 'react';
import githubIcon from '../public/images/githubIcon.png';
import twitterIcon from '../public/images/twitterIcon.png';

const GuestSpeaker = ({ speaker }) => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderBottomColor="g.700"
      borderBottomWidth="1px"
      mb={4}>
      <Avatar
        w="180px"
        h="180px"
        src={speaker.avatar}
        // Falback to initials if no image found
        name={speaker.fullName}
      />
      <Flex
        mt={{ base: 5 }}
        mb={{ base: 1 }}
        flexDirection={{ base: 'column' }}
        justifyContent={{ base: 'center' }}
        alignItems={{ base: 'center' }}>
        <Text fontWeight="bold" fontSize={{ base: '1.2rem' }}>
          Guest Speaker:
        </Text>
        <Text fontSize={{ base: '1.2rem' }}>{speaker.fullName}</Text>
      </Flex>
    </Flex>
  );
};

const Title = ({ title }) => (
  <Text fontSize={{ base: '1.2rem' }} fontWeight="bold" color="purple.800">
    {title}
  </Text>
);

const DateTime = ({ nextMeetup }) => {
  const { startDateTime, timezone } = nextMeetup;

  const formattedTime = () => {
    try {
      return moment(startDateTime)
        .tz(timezone)
        .format('lll');
    } catch {
      return 'TBD';
    }
  };

  return (
    <Text fontSize={{ base: '1.2rem' }} color="purple.800">
      {formattedTime()}
    </Text>
  );
};

const MeetupLinks = ({ links }) => {
  console.log(links);
  if (!links) return null;

  return (
    <Box>
      <Text fontWeight="bold" my={2}>
        Links:{' '}
      </Text>

      {links.map((link, index) => (
        <Text key={`meetupLink-${index}`}>{link}</Text>
      ))}
    </Box>
  );
};

const MeetupLocation = ({ location }) => {
  const { addressLink, name, fullAddress, extraDetails } = location;

  const hasLocationData = Boolean(addressLink && name && fullAddress);

  return (
    <Box>
      <Text fontWeight="bold" mt={3}>
        Location:{' '}
      </Text>
      {hasLocationData ? (
        <Link href={addressLink} isExternal color="teal.400">
          <Text fontWeight="bold">{name}</Text>
          <Text>{fullAddress}</Text>
        </Link>
      ) : (
        <Text>TBD</Text>
      )}

      {extraDetails ? <Text color="gray.600">{extraDetails}</Text> : null}
    </Box>
  );
};

const SocialIcons = ({ speaker }) => (
  <Flex
    my={2}
    w="100%"
    flexDirection={{ base: 'column', md: 'row' }}
    justifyContent={{ base: 'center', md: 'space-around' }}
    alignItems={{ base: 'center' }}>
    <Link
      display="flex"
      my={{ base: 1, md: 0 }}
      href={`https://twitter.com/${speaker.twitter}`}>
      <Image
        backgroundSize="100%"
        w={{ base: '25px' }}
        h={{ base: '25px' }}
        src={twitterIcon}
        alt="@Twitter"
      />
      <Text color="teal.600" ml={{ base: 2 }}>
        @{speaker.twitter}
      </Text>
    </Link>

    <Link
      display="flex"
      my={{ base: 1, md: 0 }}
      href={`https://github.com/${speaker.github}`}>
      <Image
        backgroundSize="100%"
        w={{ base: '25px' }}
        h={{ base: '25px' }}
        src={githubIcon}
        alt="@GitHub"
      />
      <Text color="teal.600" ml={{ base: 2 }}>
        @{speaker.github}
      </Text>
    </Link>
  </Flex>
);

const MeetupCard = ({ nextMeetup }) => {
  return (
    <Flex
      flexGrow="1"
      flexDirection="column"
      m={{ base: 5 }}
      p={{ base: 4, md: 6 }}
      bg="gray.100"
      borderRadius={{ base: '20px' }}
      color="black">
      <GuestSpeaker speaker={nextMeetup.speaker} />
      <Title title={nextMeetup.title} />
      <DateTime nextMeetup={nextMeetup} />
      <Text>{nextMeetup.description}</Text>
      <MeetupLinks links={nextMeetup.links} />
      <MeetupLocation location={nextMeetup.location} />
      <SocialIcons speaker={nextMeetup.speaker} />
    </Flex>
  );
};

export { MeetupCard };
