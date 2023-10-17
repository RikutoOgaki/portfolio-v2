import { Box, Flex, Text } from '@chakra-ui/react'

export function MainView() {
    return (
        <>
            <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Flex w={'40rem'} h={'20rem'} bg={'blackAlpha.400'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} zIndex={999}>
                    <Text
                        color={'#ffffff'}
                        fontSize={'3xl'}
                    >Hi</Text>
                    <Text
                        color={'#ffffff'}
                        fontSize={'7xl'}
                    >RikutoOgaki</Text>
                    <Text
                        color={'#ffffff'}
                        fontSize={'3xl'}
                    >Front End Engineer</Text>
                </Flex>
            </Flex>
        </>
    )
}