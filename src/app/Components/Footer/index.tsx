import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const Footer = () => {
  const commonStyle = "text-[16px] font-semibold text-[#222]";

  return (
    <footer className="bg-white py-8 border-t w-full">
      <div className=" lg:px-[2rem] w-full px-4 md:px-8">
        <div className="md:grid lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-full md:grid-cols-4 sm:grid-cols-3 lg:gap-[4rem]">
          <div className="mb-[3rem]">
            <h2 className={`text-3xl font-bold text-pink-500`}>zepto</h2>
            <div className="flex space-x-4 mt-4 text-gray-500">
              <FaInstagram size={20} />
              <FaTwitter size={20} />
              <FaFacebookF size={20} />
              <FaLinkedinIn size={20} />
            </div>
            <p className={`text-gray-500 text-sm mt-2 ${commonStyle}`}>
              © KiranaKart Technologies Private Limited
            </p>
          </div>

          <div className="">
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>
                <Link href="#" className={commonStyle}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className={commonStyle}>
                  Delivery Areas
                </Link>
              </li>
              <li>
                <Link href="#" className={commonStyle}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className={commonStyle}>
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="#" className={commonStyle}>
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-[2rem]">
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>
                <Link href="#" className={commonStyle}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className={commonStyle}>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className={commonStyle}>
                  Responsible Disclosure Policy
                </Link>
              </li>
              <li>
                <Link href="#" className={commonStyle}>
                  Mojo - a Zepto Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-[3rem]">
            <h3 className={`text-lg font-semibold ${commonStyle}`}>
              Download App
            </h3>
            <div className="mt-3 space-y-3">
              <div className="flex flex-row items-center justify-between gap-2 border rounded-md border-[#d1d5db] px-[2.5rem] py-3">
                <FaGooglePlay className="text-[10px]" />
                <span className="text-[10px] font-semibold text-[#222]">
                  Get it on Play Store
                </span>
              </div>

              <div className="flex flex-row items-center justify-between gap-2 border rounded-md border-[#d1d5db] px-[2.5rem] py-3">
                <FaApple className="text-[10px]" />
                <span className="text-[10px] font-semibold text-[#222]">
                  Get it on app Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
