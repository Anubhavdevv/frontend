import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:100px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.02"
                w="300px" h="300px" mx = "40" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>Anubhav</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>I'm Open Source and Tech Enthusiast.</Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://drive.google.com/drive/my-drive")
                    }>Hire Me</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "13"}
                    mb={isNotSmallerScreen ? "0" : "13"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" mx = "40" src='https://images.unsplash.com/profile-1631295654514-b1604381749fimage?ixlib=imgixjs-3.3.2&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=200&w=200' />
            </Flex>

        </Stack>
    )
}

export default Header