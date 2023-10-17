import Head from 'next/head'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Particle } from '@/components/template/Particle'
import { MainView } from '@/components/common/MainView'


export default function Portfolio() {
  return (
    <>
      <Head>
        <title>RikutoOgakiPortfolio</title>
      </Head>
      <Box w={'100%'} h={'100%'} position={'relative'}>
        <Particle />
        <MainView />
      </Box>
    </>
  )
}