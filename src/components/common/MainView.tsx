import { Box, Flex, Text } from '@chakra-ui/react'

export function MainView() {
    return (
        <>
            <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Flex w={{ base: '30rem', lg: '40rem' }} h={{ base: '15rem', lg: '20rem' }} bg={'blackAlpha.400'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} zIndex={999}>
                    <Text
                        color={'#ffffff'}
                        fontSize={{ base: '2xl', lg: '3xl' }}
                    >Hi</Text>
                    <Text
                        color={'#ffffff'}
                        fontSize={{ base: '5xl', lg: '7xl' }}
                    >RikutoOgaki</Text>
                    <Text
                        color={'#ffffff'}
                        fontSize={{ base: '2xl', lg: '3xl' }}
                    >Front End Engineer</Text>
                </Flex>
            </Flex>
        </>
    )
}