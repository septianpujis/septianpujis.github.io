"use client";
import Image from "next/image";
import React, { useState } from "react";

export const Timeline = () => {
  const [active, setActive] = useState(0);

  return (
    // overflow hidden
    <section className="overflow-hidden container mx-auto">
      {/* header */}
      <div className="flex flex-row flex-nowrap">
        <h1 className="w-full">TIMELINE {active}</h1>
        <div className="flex w-16 flex-row justify-center">
          <p onClick={() => setActive(active - 1)}>{`<`}</p>
          <p onClick={() => setActive(active + 1)}>{`>`}</p>
        </div>
      </div>
      {/* horizontal container */}
      <div className="relative w-[200vw] h-screen">
        <TimelineItem index={1} isActive={active >= 1} />
        <TimelineItem index={2} isActive={active >= 2} />
        <TimelineItem index={3} isActive={active >= 3} />
        <TimelineItem index={4} isActive={active >= 4} />
      </div>
    </section>
  );
};

const TimelineItem = ({ index, isActive }) => {
  return (
    <div
      style={{ left: isActive ? `${index * 30}px` : `100%` }}
      className="transition-all absolute flex flex-col w-64 h-80 flex-grow-0 flex-shrink-0 border-2 rounded-sm border-primary mx-4 my-6 px-4 py-6 snap-center"
    >
      <div className="relative top-0 h-24 w-24 mx-auto">
        <Image src={`/images/p1.webp`} fill alt="timeline image" unoptimized />
      </div>
      <div className="mt-auto">
        <h2>Lorem Ipsum</h2>
        <p>
          Est deserunt deserunt proident laborum dolor esse ex eu ea
          consectetur.
        </p>
      </div>
    </div>
  );
};

const TimelineBar = () => {
  return (
    // bikin garis panjangnya container * banyaknya
    // kasih spasi setengah dari panjang container kiri kanan
    // kasih bullet tiap panjang container
    <div className="w-full absolute bottom-0 border-2 border-secondary mx-32"></div>
  );
};
