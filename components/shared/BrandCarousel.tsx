"use client";
import Image from "next/image";
import Marquee from "../magicui/marquee";
import { BrandLogos } from "@/constants";

export default function BrandCarousel() {
  return (
    <div className="wrapper">
      <div className="mt-20 xl:mt-40 py-4 lg:py-8 rounded-full bg-[#FAFAFA]">
        <Marquee pauseOnHover className="[--duration:20s]">
          {BrandLogos.map((logo) => (
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={200}
              className="mr-6 w-[120px] lg:w-[200px]"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
