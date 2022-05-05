import type { NextPage } from 'next';
import React from 'react';

const Skills: NextPage = () => {
  const listBottomMargin: string = 'mb-3';

  return (
    <>
      <div className="flex flex-col justify-center flex-1">
        <h1 className="text-lg font-semibold">Skills</h1>
      </div>
      <div className="flex flex-initial gap-20 py-5 lg:text-2xl">
        {/* Design col */}
        <div>
          <h2 className="mb-2 font-semibold">Design</h2>
          <ul>
            <li>Graphic</li>
            <li>Logo</li>
            <li>UX & UI</li>
            <li>Prototyping</li>
          </ul>
        </div>
        {/* Development col */}
        <div>
          <h2 className="mb-2 font-semibold">Development</h2>
          <ul>
            <li>HTML, CSS</li>
            <li className={listBottomMargin}>Javascript, TypeScript</li>
            <li>React.js, React Native</li>
            <li>Next.js</li>
            <li className={listBottomMargin}>Tailwind CSS</li>
            <li>PHP, Yii</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
