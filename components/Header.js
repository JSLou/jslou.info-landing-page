import { Flex, Image } from '@chakra-ui/core';
import React from 'react';
import JsLouLogo from '../public/images/logo-2015.png';

const Header = () => {
  return (
    <Flex py={{ base: 5 }} justifyContent={{ base: 'center' }} bg="gray.900">
      <Flex w="50%" maxH="180px" justifyContent="center">
        <Image h="100%" src={JsLouLogo} alt="JSLou Logo" />
      </Flex>
    </Flex>
  );
};

export { Header };
