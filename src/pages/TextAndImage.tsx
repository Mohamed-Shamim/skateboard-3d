"use client";

import React from "react";
import clsx from "clsx";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import ParallaxImage from "@/components/ParallaxImage";

const textAndImageData = [
  {
    id: "1",
    heading: "Crafted for the Kickflip",
    pra: "Built for big tricks and hard landings, our boards are designed to handle every flip, grind, and bail. Perfect balance, every time.",
    image: "/all-board/guy-1.png",
    theme: "Blue",
    background: "/all-board/paint-background.png",
  },
  {
    id: "2",
    heading: "Not Just a Deck, It’s Your Canvas",
    pra: "Each board is a canvas for expression, crafted for those who treat the backstreets as their own art gallery.",
    image: "/all-board/guy-2.png",
    theme: "Orange",
    variation: "imageOnLeft",
    background: "/all-board/paint-background.png",
  },
  {
    id: "3",
    heading: "Built for Hard Landings",
    pra: "Skateboarding isn’t always smooth. Our boards are built tough to survive the scuffs, scratches, and slams that come with real skating.",
    image: "/all-board/guy-3.png",
    theme: "Navy",
    background: "/all-board/paint-background.png",
  },
  {
    id: "4",
    heading: "Fueling the Next Generation",
    pra: "We’re committed to supporting young skaters and DIY projects, giving back to the communities that keep skateboarding alive and evolving.",
    image: "/all-board/guy-4.png",
    theme: "Lime",
    variation: "imageOnLeft",
    background: "/all-board/paint-background.png",
  },
];

const StickyTextAndImage = () => {
  return (
    <div className="relative ">
      {textAndImageData.map((item, index) => (
        <div
          key={item.id}
          className={clsx(
            "sticky top-[calc(var(--index)*2rem)] w-full transition-all duration-700 overflow-hidden",
            `z-[${index}]`,
            item.theme === "Blue" && "bg-texture bg-brand-blue text-white",
            item.theme === "Orange" && "bg-texture bg-brand-orange text-white",
            item.theme === "Navy" && "bg-texture bg-brand-navy text-white",
            item.theme === "Lime" && "bg-texture bg-brand-lime text-black"
          )}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style={{ ["--index" as any]: index } as React.CSSProperties}
        >
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24 max-w-7xl px-4 md:px-8 w-full mx-auto py-16">
            <div
              className={clsx(
                "flex flex-col items-center gap-8 md:items-start md:text-left",
                item.variation === "imageOnLeft" && "md:order-2"
              )}
            >
              <Heading size="lg" as="h2" className="font-extrabold font-bowlby">
                {item.heading}
              </Heading>
              <p className="max-w-md text-lg leading-relaxed">{item.pra}</p>
              <Button className="ml-3">Shop Boards</Button>
            </div>
            <div>
              <ParallaxImage
                forgroundImage={item.image}
                backgroundImage={item.background}
                className=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyTextAndImage;
