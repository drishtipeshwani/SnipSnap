import React from 'react'
import {
    Flex,Box
} from "@pankod/refine-chakra-ui";
import { LayoutProps } from '@pankod/refine-core';
import '../components/SideBar'
import Sidebar from '../components/SideBar';

const CustomLayout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
        <Flex
         width = {'100%'}
         height = 'calc(100vh)'
         flexDirection={'column'}
         alignItems = 'center'
        >
            <Box width='100%'>
            <Sidebar children = {children}/>
            </Box>
        
        </Flex>
    </div>
  )
}

export default CustomLayout