import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Name from './components/Name'
import About from './components/About'

export default function Portfolio() {
  return (
    <>
      <Header />
      <Name />
      <About />
    </>
  )
}