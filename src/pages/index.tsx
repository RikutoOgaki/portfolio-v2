import Head from 'next/head'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Particle } from '@/components/template/Particle'
import { MainView } from '@/components/common/MainView'
import { AboutMe } from '@/components/common/AboutMe'
import { Myskill } from '@/components/common/Myskill'


export default function Portfolio() {
  return (
    <>
      <Head>
        <title>RikutoOgakiPortfolio</title>
      </Head>
      <Box w={'100%'} h={'100%'} position={'relative'}>
        <Particle />
        <MainView />
        <AboutMe />
        <Myskill />
      </Box>
    </>
  )
}