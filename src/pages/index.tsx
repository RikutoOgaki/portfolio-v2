import Head from 'next/head'
import Header from '@/components/Header'
import Name from '@/components/Name'
import About from '@/components/About'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>RikutoOgakiPortfolio</title>
      </Head>

      <Header />
      <Name />
      <About />
    </>
  )
}