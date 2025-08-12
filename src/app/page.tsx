import React from "react";
import Home from "../pages/Home";
import { ProductGrid } from "@/pages/ProductGrid";
import TextAndImage from "@/pages/TextAndImage";
import VideoBlock from "@/pages/VideoBlock";
import TeamGrid from "@/pages/TeamGrid";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <Home />
      <ProductGrid />
      <TextAndImage />
      <VideoBlock />
      <TeamGrid />
      <Footer />
    </main>
  );
};

export default page;
