import { Flex, Image, Text } from '@chakra-ui/core';
import React from 'react';
import elixirDropWhite from '../public/elixirDropWhite.png';
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

export { Header };
