import { Box, Flex, Link, Text } from '@chakra-ui/core';
import moment from 'moment-timezone';
import Head from 'next/head';
import React from 'react';
import { CareToSpeak, Footer, Header, MeetupCard } from '../components';
import { nextMeetup } from '../data/meetups';

const socialDrop =
  'https://raw.githubusercontent.com/JSLou/jslou.info-landing-page/master/public/images/socialDrop.JPG';

const meetupScheduled = moment
  .utc(nextMeetup.startDateTime)
  .isAfter(moment.utc());

const MainContent = () => {
  return meetupScheduled ? (
    <Flex maxW="900px" flexDirection="column" w={{ base: '80%', md: '70%' }}>
      <MeetupCard nextMeetup={nextMeetup} />
      <Flex w={{ base: '100%' }} mb={{ base: 3 }} justifyContent="center">
        <Text fontSize={{ base: '1rem', md: '1.25rem' }}>
          Be sure to follow us on twitter{' '}
          <Link href="https://twitter.com/JsLouKy" color="red.300">
            @JsLouKy
          </Link>
        </Text>
      </Flex>
    </Flex>
  ) : (
    <Flex maxW="900px" flexDirection="column" w={{ base: '80%', md: '70%' }}>
      <CareToSpeak />
    </Flex>
  );
};

const Home = () => (
  <Box bg="gray.700" h="inherit">
    <Head>
      <title>JS Lou</title>
      <link rel="icon" href="/favicons/favicon.ico" />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:url" property="og:url" content="https://jslou.info" />
      <meta key="og:image" property="og:image" content={socialDrop} />
      <meta key="og:title" property="og:title" content="JS Lou" />
      <meta
        key="og:description"
        property="og:description"
        content="Louisville Kentucky's meetup for all things Javascript"
      />

      {/* Twitter Meta */}
      <meta key="twitter:card" name="twitter:card" content="summary" />
      <meta key="twitter:domain" name="twitter:domain" value="jslou.info" />
      <meta key="twitter:title" name="twitter:title" value="JS Lou" />
      <meta
        key="twitter:description"
        name="twitter:description"
        value="Louisville Kentucky's meetup for all things JavaScript"
      />
      <meta key="twitter:image" name="twitter:image" content={socialDrop} />
      <meta key="twitter:url" name="twitter:url" value="https://jslou.info" />
      <meta key="twitter:creator" name="twitter:creator" content="@JsLouKy" />
    </Head>

    <Flex minH="100vh" flexDirection="column" alignItems="stretch">
      <Header />
      <Flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <MainContent />
      </Flex>
      <Footer />
    </Flex>
  </Box>
);

export default Home;
