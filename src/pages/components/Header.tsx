import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
    return (
        <>
            <header>
                <Box position={'relative'}>
                    <Flex
                        width={'100%'}
                        height={'5vh'}
                        position={'absolute'}
                        alignItems={'center'}
                        justifyContent={'space-around'}>
                        <Text
                            fontSize={{ base: '3x', lg: '6vh' }}>
                            TOP</Text>
                        <Text
                            fontSize={{ base: '3x', lg: '6vh' }}
                        >ABOUT</Text>
                        <Text>MtSkill</Text>
                    </Flex>
                </Box>
            </header>
        </>
    )
}