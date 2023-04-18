import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si'
import Link from 'next/link'



export default function Name() {

    const LinkArray = [
        { icon: SiGithub, link: 'https://github.com/RikutoOgaki' },
        { icon: SiInstagram, link: 'https://www.instagram.com/rikut0_0531/' },
        { icon: SiTwitter, link: 'https://twitter.com/Rikuto_Ogaki' }
    ]


    return (
        <>
            <Flex
                flexDir={'column'}
                w={'100%'}
                h={'100vh'}
                bg={'#000'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Text
                    bgGradient='linear(to-l, blue.200 , purple.500)'
                    bgClip='text'
                    fontSize={{ base: '5xl', lg: '7xl' }}
                    fontWeight='extrabold'
                >Hello 👋</Text>
                <Text
                    bgGradient='linear(to-l, blue.200 , purple.500)'
                    bgClip='text'
                    fontSize={{ base: '7xl', lg: '9xl' }}
                    fontWeight='extrabold'
                >Rikuto Ogaki</Text>
                <Text
                    bgGradient='linear(to-l, blue.200 , purple.500)'
                    bgClip='text'
                    fontSize={{ base: '5xl', lg: '7xl' }}
                    fontWeight='extrabold'
                >Web Front Enjiner</Text>
                <Text
                    bgGradient='linear(to-l, blue.200 , purple.500)'
                    bgClip='text'
                    fontSize={{ base: '5xl', lg: '7xl' }}
                    fontWeight='bold'
                >|</Text>
                <Flex
                    w={'30%'}
                    justifyContent={'space-around'}
                    marginTop={'3rem'}
                >
                    {LinkArray.map((item, idx) =>
                        <Link key={idx} href={item.link}>
                            <Text
                                color={'blue.200'}
                                fontSize={{ base: '3xl', lg: '6xl' }}
                            >
                                <Icon as={item.icon} />
                            </Text>
                        </Link>
                    )}
                </Flex>
            </Flex>
        </>
    )
}