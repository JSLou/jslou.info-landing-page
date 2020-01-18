import { AspectRatioBox, Box, Flex, Image, Link, Text } from '@chakra-ui/core';
import React from 'react';
import JSLogo from '../public/images/JSLogo.png';
import NodeLogo from '../public/images/nodeLogo.png';
import TSLogo from '../public/images/TSLogo.png';

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
      borderColor: 'red.400',
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
          to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          src={JSLogo}
          alt="JavaScript Logo"
        />
        <BoxImageLink
          to="https://www.typescriptlang.org/docs/home.html"
          src={TSLogo}
          alt="Typescript Logo"
        />
        <BoxImageLink
          to="https://nodejs.org/en/docs/"
          src={NodeLogo}
          alt="Node Logo"
        />
      </Flex>
    </Flex>
  );
};

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Text pr={3} color="gray.400">
      &copy;{currentYear} JS-Lou
    </Text>
  );
};

const Footer = () => (
  <Box pb={{ base: 3 }} bg="gray.900">
    <LanguageLinks />
    <Flex mr={{ base: 2 }} justifyContent="flex-end">
      <Copyright />
    </Flex>
  </Box>
);

export { Footer };
