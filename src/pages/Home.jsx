import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { TallLogo } from "@/components/TallLogo";
import { WideLogo } from "@/components/WideLogo";
import React from "react";

const Home = () => {
  return (
    <div className=" bg-brand-pink relative  h-dvh overflow-hidden py-5 text-zinc-800 bg-texture">
      <div className="container max-w-7xl">
        {/* background logo */}
        <div className="absolute inset-0 flex items-center justify-center mt-20 ">
          <TallLogo className=" w-full text-brand-purple mix-blend-multiply opacity-20 lg:hidden   " />
          <WideLogo className=" w-full text-brand-purple mix-blend-multiply opacity-20 hidden lg:block" />
        </div>

        <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end text-start px-6 -py-10/16">
          {/* heading text */}
          <Heading
            size="lg"
            className="relative max-w-2xl text-start place-self-start"
          >
            <span className="font-extrabold font-bowlby">
              Escape the <br />
              Cul-de-sac
            </span>
          </Heading>
          <div className="flex flex-wrap relative w-full  justify-between gap-3 mb-6">
            <p className="max-w-[45ch] font-semibold  ">
              Not just a board, your gateway to the skateboarding universe. Join
              us
            </p>
            <Button
              icon="skateboard"
              color="orange"
              size="md"
              className="mx-5 lg:mx-2"
            >
              Build your board
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
