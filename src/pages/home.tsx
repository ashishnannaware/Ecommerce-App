import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";

const Home = () => {
  const addtoCart = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          {" "}
          More..
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="sss"
          name="macBook"
          price={99999}
          stock={454}
          photo={
            "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70"
          }
          handler={addtoCart}
        />
      </main>
    </div>
  );
};

export default Home;
