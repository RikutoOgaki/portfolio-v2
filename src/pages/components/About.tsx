import { Box, Flex, Text } from '@chakra-ui/react'

export default function About() {
    return (
        <>
            <Flex w={'100%'} h={'60rem'} bg={'#fff'}>
                <Flex flexDir={'column'}>
                    <Text>-About Me-</Text>
                    <Text>おおがき りくと</Text>
                    <Text>大垣 陸斗</Text>
                    <Text>2003年5月31日生まれ</Text>
                    <Text>ECCコンピューター専門学校Webデザインコース</Text>
                    <Text></Text>
                </Flex>
            </Flex>
        </>
    )
}