import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaSass,
    FaFigma,

} from 'react-icons/fa'
import {
    SiJavascript,
    SiTypescript,
    SiPostgresql,
    SiFlutter,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiChakraui,
    SiPhp,
    SiMysql,
    SiVisualstudio
} from 'react-icons/si'

import { Box, Flex, Text, Icon } from '@chakra-ui/react'

const iconArray = {
    useskill: [
        FaReact,
        FaHtml5,
        FaCss3,
        FaSass,
        SiJavascript,
        SiTypescript,
        SiPostgresql,
        SiChakraui,
    ],
    studyskill: [
        SiFlutter,
        SiPhp,
        SiMysql
    ],
    mainskill: [
        SiVisualstudio,
        FaFigma,
        SiAdobeillustrator,
        SiAdobephotoshop,
        SiAdobepremierepro,
    ]
}

export function Myskill() {
    return (
        <>
            <Flex
                w={'100%'}
                h={'100vh'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Flex
                    w={{ base: '30rem', lg: '40rem' }}
                    h={{ base: '20rem', lg: '30rem' }}
                    bg={'blackAlpha.500'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    zIndex={999}
                >
                    <Flex>
                        <Text
                            fontWeight={'extrabold'}
                            fontSize={'4xl'}
                        >My Skill</Text>
                    </Flex>
                    <Flex gap={'.3rem'}>
                        <Box
                            w={'4rem'}
                            height={'5rem'}
                            bg={'#ffffff'}
                        >
                            {iconArray.useskill.map((v, idx) =>
                                <Box>
                                    <Icon as={v} />
                                </Box>
                            )}
                        </Box>
                        <Box
                            w={'2rem'}
                            height={'10rem'}
                            bg={'#ffffff'}
                        >
                            {iconArray.studyskill.map((v, idx) =>
                                <Box>
                                    <Icon as={v} />
                                </Box>
                            )}
                        </Box>
                        <Box
                            w={'2rem'}
                            height={'10rem'}
                            bg={'#ffffff'}
                        >
                            {iconArray.mainskill.map((v, idx) =>
                                <Box>
                                    <Icon as={v} />
                                </Box>
                            )}
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}