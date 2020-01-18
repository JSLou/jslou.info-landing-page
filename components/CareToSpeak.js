import { Divider, Flex, Link, Text } from '@chakra-ui/core';
import React from 'react';

const CareToSpeak = ({ nextMeetup }) => {
  return (
    <Flex
      flexGrow="1"
      flexDirection="column"
      m={{ base: 5 }}
      p={{ base: 4, md: 6 }}
      bg="gray.100"
      borderRadius={{ base: '20px' }}
      color="black">
      <Text fontSize={{ base: '1.2rem' }} fontWeight="bold" color="red.800">
        Sorry!
      </Text>
      <Text>No meetup is currently scheduled.</Text>
      <Divider />
      <Text fontWeight="bold">Help us out!</Text>
      <Text>Care to speak? Want to get a round table going?</Text>
      <Text> Let us know!</Text>

      <Divider />
      <Text>
        You can find us on Twitter{' '}
        <Link href="https://twitter.com/JsLouKy" color="red.600">
          @JsLouKy
        </Link>
      </Text>
      <Text>
        or on Slack via #Javascript #React #Node and more on{' '}
        <Link href="https://louisvilletech.org" color="red.600">
          louisvilletech.org
        </Link>
      </Text>
    </Flex>
  );
};

export { CareToSpeak };
