"use client";
import { SampleJson } from "@/reusableFunctions";
import Image, { StaticImageData } from "next/image";

type CategoryItem = {
  name: string;
  image: { src: string } | StaticImageData;
  link: string;
};

const categoryData = SampleJson.find((item) => item.type === "category");
const categoryItems: CategoryItem[] = categoryData?.categories || [];

const CategoryComponent = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h2 className="text-xl font-bold mb-4">Grocery & Kitchen</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categoryItems.length > 0 ? (
          categoryItems.map((item, index) => (
            <a
              key={index}
              // href={item.link || "#"}
              className="flex flex-col items-center bg-white transition-transform hover:scale-105"
            >
              <div className="w-[160px] h-[160px] relative">
                <Image
                  src={
                    typeof item.image === "string" ? item.image : item.image.src
                  }
                  alt={item.name || "Category"}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 text-center lg:text-[20px] font-bold">
                {item.name || "Unknown Category"}
              </p>
            </a>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default CategoryComponent;
