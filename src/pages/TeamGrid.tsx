import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { SkaterScribble } from "@/components/SkaterScribble";
import clsx from "clsx";
import React from "react";

const TeamGridData = [
  {
    id: "1",
    background: "/all-board/sophie-back.png",
    foreground: "/all-board/sophie-front.png",
    name: "Sophie Castillo",
    color: "text-brand-blue",
  },
  {
    id: "1",
    background: "/all-board/carter-back.png",
    foreground: "/all-board/carter-front.png",
    name: "Sophie Castillo",
    color: "text-brand-lime",
  },
  {
    id: "1",
    background: "/all-board/dylan-back.png",
    foreground: "/all-board/dylan-front.png",
    name: "Sophie Castillo",
    color: "text-brand-orange",
  },
  {
    id: "1",
    background: "/all-board/jordan-back.png",
    foreground: "/all-board/jordan-front.png",
    name: "Sophie Castillo",
    color: "text-brand-pink",
  },
];

const TeamGrid = () => {
  return (
    <div className=" bg-brand-navy bg-texture py-8 overflow-hidden ">
      <div className="w-full max-w-7xl px-8 mx-auto">
        <Heading
          size="lg"
          as="h2"
          className="text-center font-extrabold font-bowlby uppercase text-white"
        >
          THE TEAN
        </Heading>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 pt-4">
          {TeamGridData.map((item) => (
            <div
              key={item.id}
              className=" skater group relative flex flex-col items-center gap-4"
            >
              <div className=" stack-layout overflow-hidden">
                <SkaterScribble className={clsx("relative z-10", item.color)} />
                <img
                  src={item.background}
                  alt=""
                  width={500}
                  className=" scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
                />

                <img
                  src={item.foreground}
                  alt=""
                  width={500}
                  className="transform transition-transform duration-1000 z-10 ease-in-out group-hover:scale-110 "
                />

                <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                <h3 className="relative text-white text-2xl font-bowlby place-self-end justify-self-start px-4 py-2 max-w-20 z-10 leading-7 ">
                  {item.name}
                </h3>
              </div>
              <Button className="text-sm">Build there board</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
