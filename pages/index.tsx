import type { NextPage } from 'next'
import Header from "../shared/components/Header"
import CodeNameBlock from '../shared/components/CodeNameBlock'
import Footer from '../shared/components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CodeNameBlock />
      <Footer />
    </>
  )
}

export default Home
