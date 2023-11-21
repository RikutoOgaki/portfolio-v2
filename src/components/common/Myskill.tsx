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
                    w={{ base: '30rem', lg: '50rem' }}
                    h={{ base: '20rem', lg: '30rem' }}
                    bg={'blackAlpha.500'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    zIndex={999}
                >
                    <Flex>
                        <Text
                            w={'100%'}
                            h={'10%'}
                            as={'h2'}
                            textAlign={'center'}
                            color={'#ffffff'}
                            fontWeight={'extrabold'}
                            zIndex={'999'}
                            fontSize={'3rem'}
                            marginTop={'1rem'}
                        >My Skill</Text>
                    </Flex>
                    <Flex
                        w={'100%'}
                        h={'90%'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'.5rem'}
                    >
                        <Flex
                            flexDirection={'column'}
                        >
                            <Text
                                color={'#ffffff'}
                            >UseSkill</Text>
                            <Box
                                w={'10rem'}
                                height={'10rem'}
                                bg={'#ffffff'}
                                display={'flex'}
                                flexWrap={'wrap'}
                            >
                                {iconArray.useskill.map((v, idx) =>
                                    <Box key={idx}>
                                        <Icon as={v} fontSize={'2rem'} />
                                    </Box>
                                )}
                            </Box>
                        </Flex>
                        <Flex
                            flexDirection={'column'}

                        >
                            <Text
                                color={'#ffffff'}

                            >StudySkill</Text>
                            <Box
                                w={'4rem'}
                                height={'5rem'}
                                bg={'#ffffff'}
                                display={'flex'}
                                flexWrap={'wrap'}
                            >
                                {iconArray.studyskill.map((v, idx) =>
                                    <Box key={idx}>
                                        <Icon as={v} fontSize={'2rem'} />

                                    </Box>
                                )}
                            </Box>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                        >
                            <Text
                                color={'#ffffff'}
                            >MainSkill</Text>
                            <Box
                                w={'4rem'}
                                height={'5rem'}
                                bg={'#ffffff'}
                                display={'flex'}
                                flexWrap={'wrap'}
                            >
                                {iconArray.mainskill.map((v, idx) =>
                                    <Box key={idx} padding={'1rem'}>
                                        <Icon as={v} fontSize={'2rem'} />
                                    </Box>
                                )}
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}