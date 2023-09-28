import Head from 'next/head'
import Header from '@/components/Header'
import Name from '@/components/Name'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>RikutoOgakiPortfolio</title>
      </Head>

      <Header />
      <Name />
    </>
  )
}