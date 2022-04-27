import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  const [first, setFirst] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>
          Camillo Alexandre Bovio - Web designer, UI/UX & Frontend developer,
          javascript, React JS, TypeScript based in Milano
        </title>
        <meta
          name="description"
          content="Camillo Bovio  Web designer, UI/UX & Frontend developer,
          javascript, React JS, TypeScript based in Milano"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center h-full md:pl-20">
        <div className="text-3xl">
          <p className="mb-2">My name is Camillo Alexandre Bovio.</p>
          <h1 className="mb-5">
            I’m a web designer and frontend developer <br />
            based in Milano (Italia).
          </h1>
          <Link href="/About">
            <a className="text-base hover:underline">More about me</a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
