import { Flex, Image } from '@chakra-ui/core';
import React from 'react';
import JsLouLogo from '../public/images/logo-2015.png';

const Header = () => {
  return (
    <Flex py={{ base: 5 }} justifyContent={{ base: 'center' }} bg="gray.900">
      <Image
        w={{ base: '60%', md: '275px' }}
        h="unset"
        src={JsLouLogo}
        alt="JSLou Logo"
      />
    </Flex>
  );
};

export { Header };
