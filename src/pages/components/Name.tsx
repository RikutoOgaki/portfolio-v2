import { Box, Flex, Text } from '@chakra-ui/react'
import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si'


export default function Name() {
    return (
        <>
            <Flex
                w={'100%'}
                h={'100vh'}
                bg={'#000'}
            >
                <Text>Hello 👋</Text>
                <Text>Rikuto Ogaki</Text>
                <Text>Web Front Enjiner</Text>
            </Flex>
        </>
    )
}