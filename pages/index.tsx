import type { NextPage } from 'next';
import Head from 'next/head';
import { Interface } from 'readline';

const firstName: string = 'Camillo';
const lastName = 'Bovio';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Camillo Alexandre Bovio - Web designer, UI/UX & Frontend developer,
          React JS, TypeScript
        </title>
        <meta name="description" content="Camillo Bovio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="ciao"></div>
        <h1>{firstName}</h1>
      </main>
    </>
  );
};

export default Home;
