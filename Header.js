
import {  Image, Flex, Button,  HStack , chakra,Text} from '@chakra-ui/react';
import {Link} from 'react-scroll'
import React from "react";

const CTA = "Get Started"


export default function Header() {
  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="5"
        py="5"
        align="center"
        justify="space-between"
        bg="black"
      >

        <HStack as="nav" spacing="5">

            <Link key="1">
            <Text fontSize='4xl' color='white'>KTA In Docker</Text>
            </Link>

        </HStack>

        
      </Flex>
    </chakra.header>
  );
}
