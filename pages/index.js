import {
  AspectRatioBox,
  Avatar,
  Box,
  Flex,
  Image,
  Link,
  Text,
} from '@chakra-ui/core';
import moment from 'moment-timezone';
import Head from 'next/head';
import React from 'react';
import { nextMeetup } from '../data/meetups';
import elixirDrop from '../public/elixirDrop.png';
import elixirDropWhite from '../public/elixirDropWhite.png';
import erlangLogo from '../public/erlangLogo.png';
import githubIcon from '../public/githubIcon.png';
import phoenixLogo from '../public/phoenixFrameworkLogo.png';
import twitterIcon from '../public/twitterIcon.png';
import whiteFleurDeLis from '../public/whiteFleurDeLis.png';

const Header = () => {
  return (
    <Flex py={{ base: 5 }} justifyContent={{ base: 'center' }} bg="purple.700">
      <Flex>
        <Image
          w={{ base: '75px', md: '75px' }}
          h={{ base: '75px', md: '75px' }}
          src={elixirDropWhite}
          alt="Elxir Logo"
        />
        <Flex
          ml={{ base: -6, md: -6 }}
          mt={{ base: -12, md: -1 }}
          alignItems={{ base: 'center', md: 'flex-start' }}>
          <Image
            w={{ base: '30px' }}
            h={{ base: '30px' }}
            src={whiteFleurDeLis}
            alt="Fleur De Lei"
          />
        </Flex>
      </Flex>

      <Flex alignItems={{ base: 'center' }} ml={{ base: 2, md: 3 }}>
        <Text
          color="white"
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight="bold">
          Elixir Lou
        </Text>
      </Flex>
    </Flex>
  );
};

// const BoxImageLink = ({ to, src, alt }) => (
//   <Link
//     href={to}
//     isExternal
//     m={{ base: 5 }}
//     w="30%"
//     bg="gray.100"
//     display="flex"
//     alignItems="center"
//     borderRadius="10px"
//     borderColor="gray.400"
//     borderWidth="3px"
//     _hover={{ borderColor: 'purple.400', width: '35%' }}>
//     <Image src={src} alt={alt} />
//   </Link>
// );

const BoxImageLink = ({ to, src, alt }) => (
  <AspectRatioBox
    ratio={1 / 1}
    m={{ base: 5 }}
    p={{ base: 2 }}
    bg="gray.100"
    w="30%"
    maxH="150px"
    borderRadius="10px"
    borderColor="gray.400"
    borderWidth="3px"
    overflow="hidden"
    _hover={{
      borderColor: 'purple.400',
      img: { transform: 'rotate(10deg)', w: '80%' },
    }}>
    <Link href={to} isExternal>
      <Flex alignItems="center" justifyContent="center" h="100%">
        <Image maxH="90%" src={src} alt={alt} />
      </Flex>
    </Link>
  </AspectRatioBox>
);

const LanguageLinks = () => {
  return (
    <Flex w={{ base: '100%' }} justifyContent="center">
      <Flex
        w={{ base: '80%', md: '60%', lg: '50%' }}
        maxW="500px"
        justifyContent="space-around">
        <BoxImageLink
          to="https://elixir-lang.org/"
          src={elixirDrop}
          alt="Elixir Logo"
        />
        <BoxImageLink
          to="https://www.phoenixframework.org/"
          src={phoenixLogo}
          alt="Phoenix Framework Logo"
        />
        <BoxImageLink
          to="https://www.erlang.org/"
          src={erlangLogo}
          alt="Erlang Logo"
        />
      </Flex>
    </Flex>
  );
};

const FollowUs = () => (
  <Flex w={{ base: '100%' }} mb={{ base: 3 }} justifyContent="center">
    <Text fontSize={{ base: '1rem', md: '1.25rem' }}>
      Be sure to follow us on twitter{' '}
      <Link href="https://twitter.com/elixir_lou" color="purple.300">
        @elixir_lou
      </Link>
    </Text>
  </Flex>
);

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return <Text color="gray.400">&copy;{currentYear} Elixir-Lou</Text>;
};

const Footer = () => (
  <Box pb={{ base: 3 }} bg="purple.900">
    <LanguageLinks />
    <Flex mr={{ base: 2 }} justifyContent="flex-end">
      <Copyright />
    </Flex>
  </Box>
);

const MainContentContainer = ({ children }) => (
  <Flex
    flexGrow="1"
    flexDirection="column"
    justifyContent="center"
    alignItems="center">
    {children}
  </Flex>
);

const MainContent = () => {
  return (
    <Flex maxW="900px" flexDirection="column" w={{ base: '80%', md: '70%' }}>
      <MeetupCard />
      <FollowUs />
    </Flex>
  );
};

const MeetupCard = () => {
  const formattedTime = moment(nextMeetup.startDateTime)
    .tz(nextMeetup.timezone)
    .format('lll');

  return (
    <Flex
      flexGrow="1"
      flexDirection="column"
      m={{ base: 5 }}
      p={{ base: 4, md: 6 }}
      bg="gray.100"
      borderRadius={{ base: '20px' }}
      color="black">
      <Flex
        w="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderBottomColor="g.700"
        borderBottomWidth="1px"
        mb={4}>
        <Avatar
          // Name = Falback with Initials
          name={nextMeetup.speaker.fullName}
          //size="2xl"
          w="180px"
          h="180px"
          src="https://i.pravatar.cc/300"
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
          <Text fontSize={{ base: '1.2rem' }}>
            {nextMeetup.speaker.fullName}
          </Text>
        </Flex>
      </Flex>
      <Text fontSize={{ base: '1.2rem' }} fontWeight="bold" color="purple.800">
        {nextMeetup.title}{' '}
      </Text>
      <Text fontSize={{ base: '1.2rem' }} color="purple.800">
        {formattedTime}
      </Text>
      <Text>{nextMeetup.description}</Text>
      {/* TODO: Rip to null check component */}
      <Text fontWeight="bold" my={2}>
        Links:{' '}
      </Text>
      {nextMeetup.links.map(link => (
        <Text>{link}</Text>
      ))}
      <Text fontWeight="bold" mt={3}>
        Location:{' '}
      </Text>
      <Text>{nextMeetup.location.name}</Text>
      <Link href={nextMeetup.location.addressLink} isExternal color="teal.400">
        {nextMeetup.location.fullAddress}
      </Link>
      <Flex
        my={2}
        w="100%"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-around' }}
        alignItems={{ base: 'center' }}>
        <Link
          display="flex"
          my={{ base: 1, md: 0 }}
          href={`https://twitter.com/${nextMeetup.speaker.twitter}`}>
          <Image
            backgroundSize="100%"
            w={{ base: '25px' }}
            h={{ base: '25px' }}
            src={twitterIcon}
            alt="@Twitter"
          />
          <Text color="purple.500" ml={{ base: 2 }}>
            @{nextMeetup.speaker.twitter}
          </Text>
        </Link>

        <Link
          display="flex"
          my={{ base: 1, md: 0 }}
          href={`https://github.com/${nextMeetup.speaker.github}`}>
          <Image
            backgroundSize="100%"
            w={{ base: '25px' }}
            h={{ base: '25px' }}
            src={githubIcon}
            alt="@GitHub"
          />
          <Text color="purple.500" ml={{ base: 2 }}>
            @{nextMeetup.speaker.github}
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

const Home = () => (
  <Box bg="gray.900" h="inherit">
    <Head>
      <title>Elixir Lou</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Flex minH="100vh" flexDirection="column" alignItems="stretch">
      <Header />
      <MainContentContainer>
        <MainContent />
      </MainContentContainer>
      <Footer />
    </Flex>
  </Box>
);

export default Home;
