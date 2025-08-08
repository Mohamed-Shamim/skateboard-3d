import React from "react";
import Home from "../pages/Home";
import { ProductGrid } from "@/pages/ProductGrid";
import TextAndImage from "@/pages/TextAndImage";

const page = () => {
  return (
    <div>
      <Home />
      <ProductGrid />
      <TextAndImage />
    </div>
  );
};

export default page;
