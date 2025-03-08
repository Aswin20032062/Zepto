import ZeptoImg1 from "../../public/assets/zeptoImg-1.png";
import ZeptoImg2 from "../../public/assets/zepto-banner-2.jpeg";
import ZeptoImg3 from "../../public/assets/zepto-banner-3.jpg";
import CategoryImg1 from "../../public/assets/zeptoCategories/1.png"
import CategoryImg2 from "../../public/assets/zeptoCategories/2.png"
import CategoryImg3 from "../../public/assets/zeptoCategories/3.png"
import CategoryImg4 from "../../public/assets/zeptoCategories/4.png"
import CategoryImg5 from "../../public/assets/zeptoCategories/5.png"
import CategoryImg6 from "../../public/assets/zeptoCategories/6.png"
import CategoryImg7 from "../../public/assets/zeptoCategories/7.png"
import CategoryImg8 from "../../public/assets/zeptoCategories/8.png"
import CategoryImg9 from "../../public/assets/zeptoCategories/9.png"
import CategoryImg10 from "../../public/assets/zeptoCategories/10.png"
import CategoryImg11 from "../../public/assets/zeptoCategories/11.png"
import CategoryImg12 from "../../public/assets/zeptoCategories/12.png"
import CoffeeImg1 from "../../public/assets/Zepto-coffee/coffee-1.webp"
import CoffeeImg2 from "../../public/assets/Zepto-coffee/coffee-2.webp"
import CoffeeImg3 from "../../public/assets/Zepto-coffee/coffee-3.webp"
import CoffeeImg4 from "../../public/assets/Zepto-coffee/coffee-4.webp"
import CoffeeImg5 from "../../public/assets/Zepto-coffee/coffee-5.webp"
import CoffeeImg6 from "../../public/assets/Zepto-coffee/coffee-6.webp"
import CoffeeImg7 from "../../public/assets/Zepto-coffee/coffee-7.webp"
import CoffeeImg8 from "../../public/assets/Zepto-coffee/coffee-8.webp"
import CoffeeImg9 from "../../public/assets/Zepto-coffee/coffee-9.webp"
import CoffeeImg10 from "../../public/assets/Zepto-coffee/coffee-10.webp"
import ElectronicImg1 from "../../public/assets/Electronic/Electronic1.webp"
import ElectronicImg2 from "../../public/assets/Electronic/Electronic2.webp"
import ElectronicImg3 from "../../public/assets/Electronic/Electronic3.webp"
import ElectronicImg4 from "../../public/assets/Electronic/Electroinc4.webp"
import ElectronicImg5 from "../../public/assets/Electronic/Electronic5.webp"
import ElectronicImg6 from "../../public/assets/Electronic/Electronic6.webp"
import ElectronicImg7 from "../../public/assets/Electronic/Electronic7.webp"
import CategoryImage1 from "../../public/assets/category-2/cat-1.png"
import CategoryImage2 from "../../public/assets/category-2/cat-2.png"
import CategoryImage3 from "../../public/assets/category-2/cat-3.png"
import CategoryImage4 from "../../public/assets/category-2/cat-4.png"
import CategoryImage5 from "../../public/assets/category-2/cat-5.png"
import CategoryImage6 from "../../public/assets/category-2/cat-6.png"
import CategoryImage7 from "../../public/assets/category-2/cat-7.png"
import CategoryImage8 from "../../public/assets/category-2/cat-8.png"
import CategoryImage9 from "../../public/assets/category-2/cat-9.png"
import CategoryImage10 from "../../public/assets/category-2/cat-10.png"
import CategoryImage11 from "../../public/assets/category-2/cat-11.png"
import CategoryImage12 from "../../public/assets/category-2/cat-12.png"
import CategoryImage13 from "../../public/assets/category-2/cat-13.png"


export const SampleJson = [
  {
    type: "banner",
    image: ZeptoImg1, 
    title: "Super Fast Delivery",
    subtitle: "Get groceries in 10 minutes",
    cta_text: "Shop Now",
    cta_link: "/shop",
  },
  {
    type: "banner",
    image: ZeptoImg3, 
    title: "Fresh Fruits & Vegetables",
    subtitle: "100% farm-fresh organic produce",
    cta_text: "Order Now",
    cta_link: "/fruits-vegetables",
  },
  
  {
    type: "banner",
    image: ZeptoImg2, 
    title: "Personal Care & Hygiene",
    subtitle: "Top brands for skincare & hygiene",
    cta_text: "Buy Now",
    cta_link: "/personal-care",
  },

{
  "type": "category",
  "categories": [
    { name: "Vegetables", image: CategoryImg1, link: "/category/vegetables" },
    { name: "Fruits", image: CategoryImg2, link: "/category/fruits" },
    { name: "Dairy", image: CategoryImg3, link: "/category/dairy" },
    { name: "Bakery", image: CategoryImg4, link: "/category/bakery" },
    { name: "Beverages", image: CategoryImg5, link: "/category/beverages" },
    { name: "Snacks", image: CategoryImg6, link: "/category/snacks" },
    { name: "Frozen Foods", image: CategoryImg7, link: "/category/frozen-foods" },
    { name: "Meat & Seafood", image: CategoryImg8, link: "/category/meat-seafood" },
    { name: "Pantry Staples", image: CategoryImg9, link: "/category/pantry-staples" },
    { name: "Personal Care", image: CategoryImg10, link: "/category/personal-care" },
    { name: "Household Essentials", image:CategoryImg12, link: "/category/household-essentials" },
    { name: "Baby & Kids", image: CategoryImg11, link: "/category/baby-kids" }
  ]
},
 {
  type: "product_list1",
  products: [
    {
      name: "Espresso Roast",
      image:CoffeeImg1,
      price: 250,
      special_price: 200,
      offer: "20% Off",
      badge: "Best Seller",
    },
    {
      name: "Colombian Supremo",
      image: CoffeeImg2,
      price: 300,
      special_price: 270,
      offer: "10% Off",
      badge: "Premium Quality",
    },
    {
      name: "Ethiopian Yirgacheffe",
      image: CoffeeImg3,
      price: 350,
      special_price: 315,
      offer: "10% Off",
      badge: "Organic",
    },
    {
      name: "Sumatra Mandheling",
      image: CoffeeImg4,
      price: 320,
      special_price: 290,
      offer: "9% Off",
      badge: "Rich Aroma",
    },
    {
      name: "Costa Rican Tarrazu",
      image: CoffeeImg5,
      price: 280,
      special_price: 252,
      offer: "10% Off",
      badge: "Smooth & Balanced",
    },
    {
      name: "Guatemalan Antigua",
      image: CoffeeImg6,
      price: 310,
      special_price: 280,
      offer: "10% Off",
      badge: "Flavorful",
    },
    {
      name: "Brazilian Santos",
      image:CoffeeImg7,
      price: 270,
      special_price: 243,
      offer: "10% Off",
      badge: "Mild & Nutty",
    },
    {
      name: "Kenyan AA",
      image: CoffeeImg8,
      price: 330,
      special_price: 297,
      offer: "10% Off",
      badge: "Strong & Bold",
    },
    {
      name: "Hawaiian Kona",
      image: CoffeeImg9,
      price: 500,
      special_price: 450,
      offer: "10% Off",
      badge: "Luxury Coffee",
    },
    {
      name: "Mocha Java Blend",
      image: CoffeeImg10,
      price: 290,
      special_price: 261,
      offer: "10% Off",
      badge: "Classic Blend",
    },
  ],
},
{
  type: "product_list2",
  products: [
    {
      name: "Portronics Toad 101 Wired Optical Mouse",
      image: ElectronicImg1,
      price: 499,
      special_price: 149,
      offer: "70% Off",
      badge: "Best Seller",
    },
    {
      name: "Lifelong Llm270 Head and Body Massager - Full Body Pain Relief | Deep Tissue Massager",
      image: ElectronicImg2,
      price: 2300,
      special_price: 799,
      offer: "65% Off",
      badge: "Top Rated",
    },
    {
      name: "Portronics Konnect B+ POR 1392 8 Pin USB Cable - Black | Nylon Braided",
      image: ElectronicImg3,
      price: 699,
      special_price: 199,
      offer: "71% Off",
      badge: "Trending",
    },
    {
      name: "Portronic Laptop Stand",
      image: ElectronicImg4,
      price: 1999,
      special_price: 549,
      offer: "72% Off",
      badge: "Best Seller",
    },
    {
      name: "Portronics Konnect B Type C Cable - Black | Supports up to 65W Fast Charging | Compatible with USB Type C Devices",
      image: ElectronicImg5,
      price: 599,
      special_price: 139,
      offer: "76% Off",
      badge: "Hot Deal",
    },
    {
      name: "Portronics Konnect A Trio 3-In-1 USB Cable - Black | Braided and High-Speed | Fast Charging",
      image: ElectronicImg6,
      price: 899,
      special_price: 299,
      offer: "66% Off",
      badge: "Must Buy",
    },
    {
      name: "Lifelong Llm09 Mini Head And Body Massager, Beige And Brown",
      image: ElectronicImg7,
      price: 999,
      special_price: 299,
      offer: "70% Off",
      badge: "Customer Favorite",
    },
  ],
},

 {
  "type": "new-in-store",
  "categories": [
    { name: "Mobile Accessories", image: CategoryImage1, link: "/category/mobile-accessories" },
    { name: "Home Appliances", image: CategoryImage2, link: "/category/home-appliances" },
    { name: "Eyewear & More", image: CategoryImage3, link: "/category/eyewear-more" },
    { name: "Blocks & Puzzles", image: CategoryImage4, link: "/category/blocks-puzzles" },
    { name: "Bags & Accessories", image: CategoryImage5, link: "/category/bags-accessories" },
    { name: "Pet Treats & Toys", image: CategoryImage6, link: "/category/pet-treats-toys" },
    { name: "Speakers & More", image: CategoryImage7, link: "/category/speakers-more" },
    { name: "Battery Extensions", image: CategoryImage8, link: "/category/battery-extensions" },
    { name: "Crafts & Hobby", image: CategoryImage9, link: "/category/crafts-hobby" },
    { name: "Kitchen Appliances", image: CategoryImage10, link: "/category/kitchen-appliances" },
    { name: "Cards & Board Games", image: CategoryImage11, link: "/category/cards-board-games" },
    { name: "Earbuds & More", image: CategoryImage12, link: "/category/earbuds-more" },
    { name: "Massagers & More", image: CategoryImage13, link: "/category/massagers-more" }
  ]
}
]



