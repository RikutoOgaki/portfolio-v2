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
                        color={'#fff'}
                        position={'absolute'}
                        top={0}
                        fontWeight={'bold'}
                        alignItems={'center'}
                        justifyContent={'space-around'}>
                        <Link href={'/'}>
                            <Text
                                bgGradient='linear(to-l, blue.200 , purple.500)'
                                bgClip='text'
                                fontSize={{ base: '3xl', lg: '4xl' }}>
                                TOP</Text>
                        </Link>
                        <Link href={'/'}>
                            <Text
                                bgGradient='linear(to-l, blue.200 , purple.500)'
                                bgClip='text'
                                fontSize={{ base: '3xl', lg: '4xl' }}
                            >ABOUT</Text>
                        </Link>
                        <Link href={'/'}>
                            <Text
                                bgGradient='linear(to-l, blue.200 , purple.500)'
                                bgClip='text'
                                fontSize={{ base: '3xl', lg: '4xl' }}
                            >MySkill</Text>
                        </Link>
                    </Flex>
                </Box>
            </header>
        </>
    )
}