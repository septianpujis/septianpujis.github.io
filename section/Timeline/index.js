import Image from "next/image";
import React from "react";

export const Timeline = () => {
  return (
    // overflow hidden
    <section className="overflow-hidden container mx-auto">
      {/* header */}
      <div className="flex flex-row flex-nowrap">
        <h1 className="w-full">TIMELINE</h1>
        <div className="flex w-16 flex-row justify-center">
          <p>{`<`}</p>
          <p>{`>`}</p>
        </div>
      </div>
      {/* horizontal container */}
      <div className="flex flex-row flex-nowrap snap-x snap-mandatory w-auto overflow-scroll relative">
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />

        <TimelineBar />
      </div>
    </section>
  );
};

const TimelineItem = () => {
  return (
    <div className="flex flex-col w-64 h-80 flex-grow-0 flex-shrink-0 border-2 rounded-sm border-primary mx-4 my-6 px-4 py-6 snap-center">
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
