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
                        top={0}
                        fontWeight={'bold'}
                        alignItems={'center'}
                        justifyContent={'space-around'}>
                        <Link href={'/'}>
                            <Text
                                fontSize={{ base: '3x', lg: '4xl' }}>
                                TOP</Text>
                        </Link>
                        <Text
                            fontSize={{ base: '3xl', lg: '4xl' }}
                        >ABOUT</Text>
                        <Text
                            fontSize={{ base: '3xl', lg: '4xl' }}
                        >MtSkill</Text>
                    </Flex>
                </Box>
            </header>
        </>
    )
}