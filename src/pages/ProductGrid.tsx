import { Heading } from "@/components/Heading";
import ProductGridCard from "@/components/ProductGridCard";
import React from "react";

const productsData = [
  {
    id: "1",
    title: "oni mask",
    price: "40.00",
    star: "32",
    color: "#fffb00",
    img: "/all-board/black-yellow-complete.png",
  },
  {
    id: "2",
    title: "oni mask",
    price: "40.00",
    star: "100",
    color: "#030303",
    img: "/all-board/grid-streaks-complete.png",
  },
  {
    id: "3",
    title: "oni mask",
    price: "40.00",
    star: "321",
    color: "#ffdfa7",
    img: "/all-board/onimask-complete.png",
  },
  {
    id: "4",
    title: "oni mask",
    price: "40.00",
    star: "343",
    color: "#f1456a",
    img: "/all-board/pink-drop-complete.png",
  },
];

export const ProductGrid = () => {
  return (
    <div className="bg-texture py-10">
      <div className=" max-w-7xl mx-auto px-8 ">
        <div className="text-center pt-7">
          <Heading size="lg" as="h2">
            <div className="font-extrabold font-bowlby">LATEST DROP</div>
          </Heading>
          <p className="">Grab our freshest designs before they sell out!</p>
        </div>

        <div className="grid w-full grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {productsData.map((board) => (
            <ProductGridCard key={board.id} board={board} />
          ))}
        </div>
      </div>
    </div>
  );
};
