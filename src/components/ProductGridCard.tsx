/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaStar } from "react-icons/fa6";
import { Button } from "./Button";
import { HorizontalLine, VerticalLine } from "./Line";
import clsx from "clsx";
import { Scribble } from "./Scribble";

const verticalLineClass =
  "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";
const horizontaLineClass =
  "-mx-10 sroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

const ProductGridCard = ({ board }) => {
  const price = board.price;

  return (
    <div className="max-w-82 relative group mx-auto px-8 py-4">
      <VerticalLine className={clsx(verticalLineClass, "left-4")} />
      <VerticalLine className={clsx(verticalLineClass, "right-4")} />
      <HorizontalLine className={horizontaLineClass} />

      <div className="flex items-center justify-between text-md">
        <span>${price}</span>
        <span className="inline-flex items-center gap-0.5">
          <FaStar className="text-amber-300" />
          {board.star}
        </span>
      </div>
      <div className=" -mb-1 overflow-hidden py-4">
        <Scribble
          className="absolute inset-0 h-full w-full"
          color={board.color}
        />
        <img
          src={board.img}
          alt={board.title}
          width={150}
          className="mx-auto w-[60%] origin-top transform-gpu duration-300 ease-in-out group-hover:scale-150"
        />
      </div>
      <HorizontalLine className={horizontaLineClass} />
      <h3 className="text-center my-1.5 font-semibold leading-tight text-lg">
        {board.title}
      </h3>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <Button>Customize</Button>
      </div>
    </div>
  );
};

export default ProductGridCard;
