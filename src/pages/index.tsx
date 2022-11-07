import Head from 'next/head'
import Body from '../components/body'
import Footer from '../components/footer'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { HomeContainer, ContentContainer } from '../styles/page_styles'

export default function Home() {
  return (
    <>
    <Head>
      <title>Jesse van Bree</title>
    </Head>
    <HomeContainer>
      {/* <Sidebar /> */}
      <ContentContainer>
        <Header />
        <Body />
        <Footer />
      </ContentContainer>
    </HomeContainer>
   </>
  )
}
