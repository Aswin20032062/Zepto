"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SampleJson } from "@/reusableFunctions";

const Banner = () => {
  const banners = SampleJson.filter((item) => item.type === "banner");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="w-full overflow-hidden flex justify-center">
      <div className="w-[85%] flex items-center lg:h-[250px] md:h-[200px] sm:h-[180px] xs:h-[130px] relative">
        {banners.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full lg:h-[250px] md:h-[200px] sm:h-[180px] xs:h-[130px] transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image ?? ""}
              alt={item.title ?? ""}
              className="w-full h-full rounded-2xl"
            />
            <div className="absolute lg:bottom-6 md:bottom-4 md:left-8 sm:bottom-3 sm:left-6 xs:bottom-2 xs:left-4 lg:left-10 text-white lg:w-[40%] md:w-[45%] h-[80%] bg-[#ffffffd4] bg-opacity-50 lg:p-6 md:p-4 sm:p-3 xs:p-2 rounded-lg flex flex-col items-start justify-center">
              <h3 className="lg:text-[24px] md:text-[20px] sm:text-[16px] xs:text-[12px] font-bold text-[#222]">
                {item.title}
              </h3>
              <p className="lg:text-[22px] md:text-[16px] sm:text-[13px] xs:text-[10px] text-[#222]">
                {item.subtitle}
              </p>
              <a
                // href={item.cta_link}
                className="mt-3 inline-block bg-yellow-400 text-black lg:mt-[1.5rem] lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[10px] lg:px-6 md:px-4 sm:px-3 sm:py-2 xs:px-2 xs:py-2 md:py-2 py-3 rounded-lg font-semibold"
              >
                {item.cta_text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
