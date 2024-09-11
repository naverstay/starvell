import Head from "next/head";
import Container from "@/components/Container/Container";

interface Props {

}

const Home = ({}: Props) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="content">
        <Container className="overflow-hidden">
          <p>Home</p>
        </Container>
      </div>
    </>
  )
}

export default Home
