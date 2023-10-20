import { Box, Flex, Text, Image, ListItem, UnorderedList, } from '@chakra-ui/react'

export function AboutMe() {
    return (
        <>
            <Flex
                w={'100%'}
                h={'100vh'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
            >
                <Flex
                    w={{ base: '65rem', lg: '70rem' }} h={{ base: '30rem', lg: '35rem' }}
                    bg={'blackAlpha.500'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    zIndex={'999'}
                >
                    <Text
                        w={'100%'}
                        h={'10%'}
                        as={'h2'}
                        textAlign={'center'}
                        color={'#ffffff'}
                        fontWeight={'extrabold'}
                        zIndex={'999'}
                    >About Me</Text>
                    <Flex
                        w={'100%'}
                        h={'90%'}
                        justifyContent={'space-around'}
                        alignItems={'center'}
                    >

                        {/* 自分のイラストか顔写真 */}
                        <Flex
                            w={'50%'}
                            h={'100%'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Image
                                src='/img'
                                alt='自分の顔写真'
                                w={'20rem'}
                                h={'20rem'}
                                bg={'#ffffff'}
                            />
                        </Flex>
                        {/* 
                    自分についての説明 
                    ・これまでの実績
                    ・自分とはどういう人間か
                */}
                        <Flex
                            w={'50%'}
                            h={'100%'}
                            flexDirection={'column'}
                            justifyContent={'center'}
                            alignItems={'flex-start'}
                        >
                            <Text
                                fontSize={{}}
                                color={'#ffffff'}
                            >おおがき りくと</Text>
                            <Text
                                fontSize={{ base: '2xl', lg: '4xl' }}
                                color={'#ffffff'}
                            >大垣 陸斗</Text>
                            <UnorderedList>
                                <ListItem color={'#ffffff'}>
                                    <Text>自分はどういう人間か</Text>
                                    <Text>テストで書いてみている</Text>
                                </ListItem>
                            </UnorderedList>
                            <UnorderedList>
                                <ListItem color={'#ffffff'}>
                                    <Text>これまでの実績</Text>
                                    <Text>テストで書いてみている</Text>
                                </ListItem>
                            </UnorderedList>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}