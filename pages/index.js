import { Avatar, Box, Flex, Image, Link, Text } from '@chakra-ui/core';
import Head from 'next/head';
import React from 'react';
import { nextMeetup } from '../data/meetups';
import elixirDrop from '../public/elixirDrop.png';
import erlangLogo from '../public/erlangLogo.png';
import goldFleurDeLei from '../public/goldFleurDeLis.png';
import phoenixLogo from '../public/phoenixFrameworkLogo.png';

const Header = () => {
  return (
    <Flex
      py={{ base: 5 }}
      alignItems="center"
      justifyContent="center"
      bg="purple.700">
      <Image
        ml={{ base: -5 }}
        w={{ base: '100px' }}
        h={{ base: '100px' }}
        src={elixirDrop}
        alt="Elxir Logo"
      />
      <Text color="purple.100" fontSize={{ base: '4xl' }} fontWeight="bold">
        Elixir Lou
      </Text>
      <Image
        w={{ base: '50px' }}
        h={{ base: '50px' }}
        ml={{ base: 2 }}
        src={goldFleurDeLei}
        alt="Fleur De Lei"
      />
    </Flex>
  );
};

const BoxImageLink = ({ to, src, alt }) => (
  <Link
    href={to}
    isExternal
    m={{ base: 5 }}
    w="30%"
    bg="gray.100"
    display="flex"
    alignItems="center"
    borderRadius="10px"
    borderColor="gray.400"
    borderWidth="3px"
    _hover={{ borderColor: 'purple.400', width: '35%' }}>
    <Image src={src} alt={alt} />
  </Link>
);

const LanguageLinks = () => {
  return (
    <Flex w={{ base: '100%' }} justifyContent="center">
      <Flex w={{ base: '80%' }} justifyContent="space-around">
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
  <Flex w={{ base: '100%' }} justifyContent="center">
    <Text>
      Be sure to follow us{' '}
      <Link href="https://twitter.com/elixir_lou" color="teal.500">
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

const MainContent = () => {
  return (
    <Flex
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <MeetupCard />
      <FollowUs />
    </Flex>
  );
};

const MeetupTitle = ({ title }) => {
  return (
    <Text color="gray.900" fontWeight="bold">
      {title}
    </Text>
  );
};

const MeetupCard = () => (
  <Flex
    flexGrow="1"
    flexDirection="column"
    m={{ base: 5 }}
    p={{ base: 4 }}
    w={{ base: '80%' }}
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
      <Text>
        <Text fontWeight="bold">Speaker: </Text>
        {nextMeetup.speaker.fullName}
      </Text>
    </Flex>
    <MeetupTitle title={nextMeetup.title} />
    <Text>{nextMeetup.description}</Text>
    <Text fontWeight="bold" my={2}>
      Links:{' '}
    </Text>
    {nextMeetup.links.map(link => (
      <Text>{link}</Text>
    ))}
    <Text fontWeight="bold" mt={3}>
      Location:{' '}
    </Text>
    <Link href={nextMeetup.location.addressLink} isExternal color="teal.400">
      {nextMeetup.location.fullAddress}
    </Link>
    <Flex my={2} justifyContent="space-around">
      <Text>
        <Link href={`https://twitter.com${nextMeetup.speaker.twitter}`}>
          <Image w="25px" h="25px" src={elixirDrop} alt="@Twitter" />
        </Link>
      </Text>
      <Text>
        <Link href={`https://github.com${nextMeetup.speaker.github}`}>
          <Image w="25px" h="25px" src={elixirDrop} alt="@GitHub" />
        </Link>
      </Text>
    </Flex>
  </Flex>
);

const Home = () => (
  <Box bg="gray.900" h="inherit">
    <Head>
      <title>Elixir Lou</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Flex minH="100vh" flexDirection="column" alignItems="stretch">
      <Header />
      <MainContent />
      <Footer />
    </Flex>
  </Box>
);

export default Home;
