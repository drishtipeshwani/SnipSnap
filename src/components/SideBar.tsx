import React, { ReactNode,ReactText} from 'react';
import {
  Box,
  Flex,
  Link,
  Text,
  FlexProps,
} from '@chakra-ui/react';
import '../pages/Dashboard.css'

interface LinkItemProps {
  link:string;
  name: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home',link:'/' },
  { name: 'Dashboard',link:'/dashboard'}
];

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <Box minH="100vh" className='main-ctn' >
      <SidebarContent/>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}


const SidebarContent = () => {
  return (
    <Box
      bg={'white'}
      borderRight="1px"
      borderRightColor={'gray.200'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="3xl" fontFamily="monospace" fontWeight="bold">
          Snip-Snap
        </Text>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} nav = {link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  nav:string;
  children: ReactText;
}
const NavItem = ({ nav,children, ...rest }: NavItemProps) => {
  return (
    <Link href={nav} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blackAlpha.800',
          color: 'white',
        }}
        {...rest}>
        {children}
      </Flex>
    </Link>
  );
};
