"use client";
import Image, { StaticImageData } from "next/image";
import { SampleJson } from "@/reusableFunctions";

type CategoryItem = {
  name: string;
  image: { src: string } | StaticImageData;
};

const newInStoreData = SampleJson.find((item) => item.type === "new-in-store");
const newInStoreCategories: CategoryItem[] = newInStoreData?.categories || [];

const NewCategory = () => {
  return (
    <div className="p-6 lg:px-16 md:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">New In Store</h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {newInStoreCategories.length > 0 ? (
          newInStoreCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[90px] h-[90px] bg-green-100 rounded-full flex items-center justify-center">
                <Image
                  src={
                    typeof category.image === "string"
                      ? category.image
                      : category.image.src
                  }
                  alt={category.name || "Category"}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              <p className="text-center text-sm font-medium text-gray-700 mt-2 w-[80px] leading-tight break-words">
                {category.name || "Unknown"}
              </p>
            </div>
          ))
        ) : (
          <p>No new categories available</p>
        )}
      </div>
    </div>
  );
};

export default NewCategory;
