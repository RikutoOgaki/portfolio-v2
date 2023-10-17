import Head from 'next/head'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Particle } from '@/components/template/Particle'


export default function Portfolio() {
  return (
    <>
      <Head>
        <title>RikutoOgakiPortfolio</title>
      </Head>
      <Box w={'100%'} h={'100%'}>
        <Particle />
      </Box>
    </>
  )
}