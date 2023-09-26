import { SiLinkedin } from 'react-icons/si';
import { Button, Center, Text,Link } from '@chakra-ui/react';

const Linkedin=(props)  => {
  return (
    <Center p={0}>
      <Button
       
        maxW={'md'}
        size="sm"
        colorScheme={'messenger'}
        w={'full'}

        fontSize={{ base: '10px', md: '40px', lg: '18' }}
        leftIcon={<SiLinkedin />}>
        <Center>
        <Link href={props.link}>
    <a className="w-full p-2">
      {props.name}
    </a>
  </Link>
        </Center>
      </Button>
    </Center>
  );

}
export default Linkedin;