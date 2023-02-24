import React, { useState } from 'react'
import {
    SimpleGrid, Box, Heading, Textarea, Select, Button, Center, Stack,
    FormControl, FormLabel, Text,Flex
} from '@pankod/refine-chakra-ui'
import CodeTerminal from 'components/terminal/CodeTerminal'
import { languages } from '../languages'
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import './Dashboard.css'
import ColorPicker from 'react-best-gradient-color-picker'
import { IconCodeCircle2 } from '@tabler/icons';
import {useLocation} from '@pankod/refine-react-router-v6'


const Dashboard = () => {

    
    const location = useLocation();
    const { inputCode }: { inputCode: string } = location.state as { inputCode: string };
    const [input, setInput] = useState<string>(inputCode)
    const [language, setLanguage] = useState<string>('')
    const [code, setCode] = useState<string>('')
    const [selectedLanguage, setSelectedLanguage] = useState<string>('')

    const [color, setColor] = useState('rgba(255,255,255,1)');

    const [previewShow, setPreviewShow] = useState<boolean>(false)

    

    


    const onPreviewClick = (): void => {
        setCode(input)
        setSelectedLanguage(language)
        setPreviewShow(true)
    }

    const downloadSnippet = async () => {
        const snippet = document.querySelector<HTMLElement>('.code-snippet');
        if (!snippet) return;
        const canvas = await html2canvas(snippet);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'download.png', 'image/png');
    }


    return (
        <Box className='main-ctn' p={4}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack className='input-grid' rounded={'lg'}
                    bg={'white'}
                    boxShadow={'lg'}
                    p={8}
                    as={Box}
                    spacing={4}
                >
                    <Heading as="h3">Create your custom snippet</Heading>
                    <FormControl id="code">
                        <FormLabel fontSize='lg'>Code</FormLabel>
                        <Textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            size='md'
                        />
                    </FormControl>
                    <FormControl id="language">
                        <FormLabel fontSize='lg'>Programming Language</FormLabel>
                        <Select placeholder='Select programming language' onChange={(e) => setLanguage(e.target.value)} value={language}>
                            {languages.map((item) => (
                                <option value={item}>{item}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl id="bgColor">
                        <FormLabel fontSize='lg'>Background Color</FormLabel>
                        <ColorPicker value={color} onChange={setColor} />
                    </FormControl>
                    <Center>
                        <Button onClick={() => onPreviewClick()}
                            bg={'blackAlpha.800'}
                            color={'white'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: 'white',
                                color: 'black',
                                rounded: 'full',
                                border: '1px',
                                borderColor: 'black',
                            }}
                        >Preview Snippet</Button>
                    </Center>
                </Stack>

                <Stack className='preview-grid' rounded={'lg'}
                    bg={'white'}
                    boxShadow={'lg'}
                    p={8}
                    as={Box}
                    spacing={4}
                >
                    {previewShow ?
                        (<>
                            <Center className='code-snippet' style={{ 'backgroundColor': color }} padding={20}>
                                <CodeTerminal code={code} language={selectedLanguage} />
                            </Center>
                            <Button onClick={() => downloadSnippet()}
                                bg={'blackAlpha.800'}
                                color={'white'}
                                rounded={'full'}
                                px={6}
                                _hover={{
                                    bg: 'white',
                                    color: 'black',
                                    rounded: 'full',
                                    border: '1px',
                                    borderColor: 'black',
                                }}
                            >Download Snippet</Button>
                        </>
                        )
                        : (
                            <Flex flexDirection='column' textAlign={'center'} justifyContent='center' alignItems='center'>
                                <Box>
                                <IconCodeCircle2 size={60}
                                    strokeWidth={2}
                                    color={'black'} />
                                    </Box>
                                <Heading as="h2" size="xl" mt={6} mb={2}>
                                    Code Snippet will appear hear
                                </Heading>
                                <Text color={'gray.500'}>
                                    Add the code snippet , select the programming language, choose background gradient and click Preview Snippet to generate a custom coding snippet
                                </Text>
                            </Flex>
                        )}
                </Stack>
            </SimpleGrid>
        </Box>
    )
}

export default Dashboard