import React from "react";
import Home from "../pages/Home";
import { ProductGrid } from "@/pages/ProductGrid";
import TextAndImage from "@/pages/TextAndImage";
import VideoBlock from "@/pages/VideoBlock";
import TeamGrid from "@/pages/TeamGrid";

const page = () => {
  return (
    <div>
      <Home />
      <ProductGrid />
      <TextAndImage />
      <VideoBlock />
      <TeamGrid />
    </div>
  );
};

export default page;
