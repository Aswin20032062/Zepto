import Banner from "../Banner";
import Category from "../Category";
import Footer from "../Footer";
import Header from "../Header";
import NewCategory from "../NewCategory";
import { Products } from "../Product";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <Banner />
      <div className="mt-[3rem]">
        <Category />
      </div>
      <div className="mt-[3rem]">
        <Products />
      </div>
      <div className="mt-[3rem]">
        <NewCategory />
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
