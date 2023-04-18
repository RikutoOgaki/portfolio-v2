import { Box, Flex, Text } from '@chakra-ui/react'

export default function About() {
    return (
        <>
            <Flex w={'100%'} h={'60rem'} bg={'#000'}>
                <Flex
                    flexDir={'column'}
                    bgGradient='linear(to-l, blue.200 , purple.500)'
                    bgClip='text'
                    fontWeight={'bold'}
                    alignItems={'flex-start'}
                    marginLeft={{ base: '2rem', lg: '15rem' }}
                    marginRight={'2rem'}
                    gap={'1rem'}
                >
                    <Text fontSize={{ base: '2xl', lg: '4xl' }}>-About Me-</Text>
                    <Text fontSize={{ base: '2xl', lg: '4xl' }}>おおがき りくと</Text>
                    <Text fontSize={{ base: '7xl', lg: '9xl' }}>大垣 陸斗</Text>
                    <Text fontSize={{ base: '2xl', lg: '5xl' }}>2003年5月31日生まれ</Text>
                    <Text fontSize={{ base: '2xl', lg: '5xl' }}>ECCコンピューター専門学校Webデザインコース</Text>
                    <Text fontSize={{ base: '1xl', lg: '2xl' }}>
                        ようこそ！私のポートフォリオへ！<br />
                        現在私はECCコンピュータ専門学校WebデザインコースでWebのことについて勉強しています。<br />
                        勉強している中で特にフロントの技術に興味があり、日々勉強しています。<br />
                        実は、バックエンドの技術にも興味があり、半年間行われていたインターンに参加し、<br />
                        PostgreSQLを少し触りました！<br />
                        ゆくゆくデザインの方にも力を入れたいと考えており、将来デザインエンジニアとして活躍していきたいと考えています！
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}