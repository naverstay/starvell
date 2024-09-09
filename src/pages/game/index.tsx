import Container from '@/components/Container/Container'
import Head from 'next/head'

const GamePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex-1 w-full max-w-[1256px] border-1 border-solid border-primary-border bg-white py-[40px] px-16 rounded-2xl">
        <Container className="overflow-hidden">
          <h1 className="text-gray text-6 fw-600">Робуксы Roblox</h1>
        </Container>
      </div>
    </>
  )
}

export default GamePage
