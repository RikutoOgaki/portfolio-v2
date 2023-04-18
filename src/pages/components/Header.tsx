import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
    return (
        <>
            <header>
                <Flex
                    width={'100%'}
                    height={'100%'}
                    justifyContent={'space-around'}>
                    <Text>TOP</Text>
                    <Text>ABOUT</Text>
                    <Text>MtSkioo</Text>
                </Flex>
            </header>
        </>
    )
}