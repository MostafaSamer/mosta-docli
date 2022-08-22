import type { NextPage } from 'next'
import Header from "../shared/components/Header"
import CodeNameBlock from '../shared/components/CodeNameBlock'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CodeNameBlock />
    </>
  )
}

export default Home
