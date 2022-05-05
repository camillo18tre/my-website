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

      <main className="flex items-center flex-1 h-full md:pl-20">
        <div className="text-3xl">
          <p className="mb-2">My name is Camillo Alexandre Bovio.</p>
          <h1 className="mb-10">
            I’m a web designer, UI/UX and frontend developer <br />
            based in Milano (Italia).
          </h1>
          <div className="flex gap-10">
            <Link href="/about">
              <a className="text-base hover:underline">More about me</a>
            </Link>
            <Link href="/skills">
              <a className="text-base hover:underline">Check my skills</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
