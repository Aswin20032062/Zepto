"use client";
import { useState, useEffect, useRef } from "react";
import { SampleJson } from "@/reusableFunctions";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type ProductItem = {
  name: string;
  image: string;
  special_price: number;
  price: number;
  offer?: string;
  type?: string;
};

const ProductCarousel = ({
  title,
  products,
}: {
  title: string;
  products: ProductItem[];
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(2);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -220, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };

  return (
    <div className="p-6 relative lg:px-16 md:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#222] z-40 rounded-full flex items-center justify-center cursor-pointer p-2"
        >
          <IoIosArrowBack className="text-white text-lg" />
        </button>

        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-scroll scroll-smooth scrollbar-hide w-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {products.map((product, index) => (
            <div
              key={index}
              className="w-[215px] bg-white rounded-lg overflow-hidden relative p-4 flex-shrink-0"
            >
              {product.offer && (
                <div
                  className="absolute top-4 left-4 text-white rounded-tl-lg z-50 text-xs font-bold px-3 py-2 w-[50px] h-[50px] bg-[#5c1e9a] transition-all duration-300 ease-in-out"
                  style={{
                    border: "none",
                    WebkitMask:
                      "conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) 50%/20px 100%",
                    mask: "conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) 50%/20px 100%",
                  }}
                >
                  {product.offer}
                </div>
              )}

              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="rounded-xl transition-transform hover:scale-105"
              />

              <div className="mt-3 text-center">
                <div className="flex flex-col items-start justify-start gap-4">
                  <h3 className="text-lg font-semibold text-gray-700 text-left line-clamp-2 leading-tight">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500">1 piece</p>

                  <div className="mt-2">
                    <span className="text-lg font-bold text-black">
                      ₹{product.special_price}
                    </span>
                    <span className="text-gray-500 line-through ml-2">
                      ₹{product.price}
                    </span>
                  </div>
                </div>

                <button className="mt-3 w-full border border-pink-500 text-pink-500 py-2 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#222] rounded-full flex items-center justify-center cursor-pointer p-2"
        >
          <IoIosArrowForward className="text-white text-lg" />
        </button>
      </div>
    </div>
  );
};

export const Products = () => {
  const filteredProducts1: ProductItem[] = SampleJson.filter(
    (item: any) => item?.type === "product_list1"
  )
    .flatMap((item: any) => item.products || [])
    .map((product) => ({
      ...product,
      offer: product.offer || "Special Offer",
    }));

  const filteredProducts2: ProductItem[] = SampleJson.filter(
    (item: any) => item?.type === "product_list2"
  )
    .flatMap((item: any) => item.products || [])
    .map((product) => ({ ...product, offer: product.offer || "Limited Deal" }));

  return (
    <div>
      <ProductCarousel title="Coffee Lovers" products={filteredProducts1} />
      <ProductCarousel
        title="Electronics & Accessories"
        products={filteredProducts2}
      />
    </div>
  );
};
